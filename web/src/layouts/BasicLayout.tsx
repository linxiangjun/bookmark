import React from "react";
import { Layout } from "antd";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const { Header, Content } = Layout;

const HEADER_HEIGHT = 64;

// define css
const headerStyle = css`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  box-shadow: 0 2px 8px #f0f1f2;
`;
const headerTitleStyle = css`
  display: inline-block;
  height: ${HEADER_HEIGHT}px;
  line-height: ${HEADER_HEIGHT}px;
  padding: 0 18px;
`;
const contentStyle = css`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  overflow-x: hidden;
  overflow-y: auto;
`;

interface BasicLayoutProps {
  children: React.ReactElement;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  return (
    <Layout>
      <Header css={headerStyle}>
        <div css={headerTitleStyle}>NPM Bookmark</div>
      </Header>
      <Content css={contentStyle}>{props.children}</Content>
    </Layout>
  );
};

export default BasicLayout;
