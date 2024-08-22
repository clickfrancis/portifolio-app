import React from "react";
import { Layout, Menu as AntMenu, theme } from "antd";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/img/logodbdarkblue.png";
import styled from "styled-components";

export const { Header, Content } = Layout;

export const HeaderStyled = styled(Header)`
  background: #bee7f9;
`;

export const StyledMenu = styled(AntMenu)`
  position: sticky;
  top: 0;
  zindex: 1;
  width: 100%;
  display: flex;
  alignitems: center;
  background: #bee7f9;

  .ant-menu-item {
    font-size: 16px;
    margin: 0 0px;
    font-family: TTSupermolot-Bold;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.02em;
    text-align: left;
    color: #201f53;
    padding-left: 50px;
  }

  .ant-menu-item-selected {
    background-color: #001529;
    color: white;
    border-bottom-color: transparent !important;
  }

  .ant-menu-item-selected::after {
    border-bottom-color: transparent !important;
  }

  .ant-menu-item-selected::hover {
    border-bottom-color: transparent !important;
  }
`;

export const { Item } = StyledMenu;

const HeaderComponent: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <HeaderStyled style={{ display: "flex", alignItems: "center" }}>
        <div className="logo">
          <img src={logo} alt="Logo" style={{ padding: "25px 0 0 0" }} />
        </div>
        <StyledMenu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ flex: 1, minWidth: 0 }}
        >
          <Item key="1">Sobre</Item>
          <Item key="2">Currículo</Item>
          <Item key="3">Projeto</Item>
        </StyledMenu>
      </HeaderStyled>
      <Layout>
        <Content
          style={{
            background: theme.useToken().token.colorBgContainer,
            padding: "40px 10%",
          }}
        ></Content>
      </Layout>
    </Layout>
  );
};

export default HeaderComponent;
