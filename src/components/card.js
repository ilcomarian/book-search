import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
const cardLayout = (item, i) => (
  <div>
    <Card inverse>
      <CardImg
        width="100%"
        // src={item.volumeInfo.imageLinks.smallThumbnail}
        alt="Card image cap"
      />
      <CardImgOverlay>
        <CardTitle>element</CardTitle>
        <CardText>element</CardText>
        <CardText>
          <small className="text-muted">{item}</small>
        </CardText>
      </CardImgOverlay>
    </Card>
  </div>
);
export default cardLayout;
