import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
const cardLayout = (item, i) => (
  <div className="box-name" key={i}>
    <a href={item.volumeInfo.canonicalVolumeLink} target="_blank">
      <Card inverse className="zoom">
        <CardImg
          src={item.volumeInfo.imageLinks.thumbnail}
          width="100%"
          height="200vw"
          alt="Card image cap"
        />
        <CardImgOverlay>
          <CardTitle />
        </CardImgOverlay>
      </Card>
    </a>
  </div>
);
export default cardLayout;
