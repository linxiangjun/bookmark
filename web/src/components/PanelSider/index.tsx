import React from "react";
import { Select } from "antd";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const { Option } = Select;

// define css
const container = css`
  position: relative;
  min-width: 240px;
  height: 100%;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
`;
const categoryContainer = css`
  width: 100%;
  padding: 16px;
`;

const CATEGORY = [
  {
    name: "Front-end",
    value: "front-end"
  }
];

const PanelSider: React.FC = () => (
  <div css={container}>
    <div css={categoryContainer}>
      <h3>Discover packages</h3>
      <Select defaultValue="front-end">
        {CATEGORY.map(({ name, value }) => (
          <Option key={value}>{name}</Option>
        ))}
      </Select>
    </div>
  </div>
);

export default PanelSider;
