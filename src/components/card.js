import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
const cardLayout = (item, i) => (
  <div className="box-name">
    <Card inverse>
      <CardImg
        src={item.volumeInfo.imageLinks.thumbnail}
        width="100%"
        height="200vw"
        alt="Card image cap"
      />
      <CardImgOverlay>
        <CardTitle>element</CardTitle>
        <CardText>element</CardText>
        <CardText>
          <small className="text-muted">item</small>
        </CardText>
      </CardImgOverlay>
    </Card>
  </div>
);
export default cardLayout;
