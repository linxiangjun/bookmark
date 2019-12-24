import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import PanelSider from "../../components/PanelSider";

// define css
const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: no-wrap;
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 24px;
  margin: auto;
`;
const wrapperStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const View: React.FC = () => (
  <div css={containerStyle}>
    <div css={wrapperStyle}></div>
    <PanelSider></PanelSider>
  </div>
);

export default View;
