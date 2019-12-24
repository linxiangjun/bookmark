import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

// define css
const containerStyle = css`
  position: relative;
  width: 100%;
  max-width: 1200px;
  min-height: 800px;
  padding: 64px 24px 0;
  margin: auto;
`;

const View: React.FC = () => <div css={containerStyle}></div>;

export default View;
