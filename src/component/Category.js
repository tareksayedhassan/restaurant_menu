import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Roll } from "react-reveal";
const Category = ({ filterbyCategory, allCategory }) => {
  // to filter by category
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col className="d-flex justify-content-center">
        <Roll>
          {allCategory.length >= 1 ? (
            allCategory.map((cat) => {
              return (
                <Button
                  key={cat} // يجب إضافة مفتاح فريد لكل زر
                  onClick={() => onFilter(cat)} // استخدام cat هنا
                  style={{ border: "1px solid #b45b35" }}
                  className="btn mx-2"
                >
                  {cat}
                </Button>
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Category;
