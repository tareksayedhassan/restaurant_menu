import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample({ filterbySearch }) {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    filterbySearch(searchValue.trim()); // أضف trim لتجنب الفراغات
    // لا تعيد تعيين searchValue هنا حتى يعرف المستخدم ما أدخله
  };

  // تفعيل البحث عند الضغط على مفتاح Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <div className="brand-color">مطعم ابو الخير</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث..."
              className="me-2"
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={handleKeyPress} // إضافة الحدث هنا
              value={searchValue}
            />
            <Button onClick={onSearch} className="btn-search">
              بحث
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
