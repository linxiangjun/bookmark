import React from "react";
import { List, Avatar } from "antd";

import PanelSider from "../../components/PanelSider";
import PocketList from "../../components/PocketList";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "antd/dist/antd.css";

// define css
const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-right: 16px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Pocket: React.FC = () => {
  const data = [
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 4"
    },
    {
      title: "Ant Design Title 5"
    },
    {
      title: "Ant Design Title 6"
    }
  ];

  return (
    <div css={containerStyle}>
      <div css={wrapperStyle}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
      <PanelSider></PanelSider>
    </div>
  );
};

export default Pocket;
