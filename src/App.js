import React, { useState } from "react";
import { Container } from "react-bootstrap"; // حرف C في Container يجب أن يكون كبيرًا
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Category from "./component/Category";
import ItemsList from "./component/ItemsList";
import { items } from "./component/data";

const App = () => {
  const [itemsData, setItemsData] = useState(items);

  // للحصول على كل الفئات الفريدة
  const allCategory = ["الكل", ...new Set(itemsData.map((i) => i.Category))];

  // فلترة العناصر حسب الفئة
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.Category === cat);
      setItemsData(newArr);
    }
  };

  // فلترة العناصر حسب البحث
  const filterbySearch = (word) => {
    if (word) {
      // إذا كانت الكلمة غير فارغة
      const newArr = items.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      );
      setItemsData(newArr);
    } else {
      setItemsData(items); // إذا كانت الكلمة فارغة، عرض كل العناصر
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Header />
        <Category
          filterbyCategory={filterbyCategory}
          allCategory={allCategory}
        />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
};

export default App;
