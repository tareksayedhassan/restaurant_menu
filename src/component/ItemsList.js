import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Zoom } from "react-reveal";

const cardStyle = {
  border: "2px solid #ff5733",
  borderRadius: "10px",
  overflow: "hidden",
};

const imgStyle = {
  height: "200px",
  width: "200px",
  objectFit: "cover",
};

const ItemsList = ({ itemsData }) => {
  return (
    <Row>
      <Zoom>
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <Col sm="12" className="mb-3" key={item.id}>
                <Card
                  style={{ backgroundColor: "#f8f8f8" }}
                  className="d-flex flex-row"
                  style={cardStyle}
                >
                  <Card.Img style={imgStyle} variant="top" src={item.imgurl} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price">{item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">{item.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center"> لا يوجد اصناف</h3>
        )}
      </Zoom>
    </Row>
  );
};

export default ItemsList;
