import React from "react";
import { Card } from "antd";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "antd/dist/antd.css";

const cardContainerStyle = css`
  display: inline-block;
  width: 100%;
`;

const PocketList: React.FC = () => (
  <div css={cardContainerStyle}>
    <Card
      size="small"
      bordered={false}
      hoverable
      title="Small size card"
      extra={<a href="#">More</a>}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
);

export default PocketList;
