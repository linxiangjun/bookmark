import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

// define css
const container = css`
  position: relative;
  width: 320px;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
`;

const PanelSider: React.FC = () => <div css={container}></div>;

export default PanelSider;
