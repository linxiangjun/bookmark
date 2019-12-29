import React from "react";
import { Layout, Icon } from "antd";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "antd/dist/antd.css";

const { Header, Content } = Layout;

const HEADER_HEIGHT = 64;

// define css
const headerStyle = css`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
`;
const headerTitleStyle = css`
  display: inline-block;
  height: ${HEADER_HEIGHT}px;
  line-height: ${HEADER_HEIGHT}px;
  padding: 0 18px;
`;
const contentStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  background: #fff;
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
        <Icon type="book" />
        <h3 css={headerTitleStyle}>NPM Bookmark</h3>
      </Header>
      <Content css={contentStyle}>{props.children}</Content>
    </Layout>
  );
};

export default BasicLayout;
