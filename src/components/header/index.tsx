import React from "react";
import { Layout, Menu as AntMenu, theme } from "antd";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/img/logodbdarkblue.png";
import styled from "styled-components";
import GithubIcon from "/src/assets/img/github.png";
import LinkedinIcon from "/src/assets/img/linkedin.png";

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

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 200px 0 0;
`;

const IconButton = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 20px;
`;

const HeaderComponent: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <HeaderStyled style={{ display: "flex", alignItems: "center" }}>
        <div className="logo">
          <a href="https://db.tec.br/" target="_blank">
            <img src={logo} alt="Logo" style={{ padding: "25px 0 0 0" }} />{" "}
          </a>
        </div>
        <StyledMenu
          theme="light"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          style={{ flex: 1, minWidth: 0 }}
        >
          <Item key="/">
            <Link to="/">Sobre</Link>
          </Item>
          <Item key="/curriculo">
            <Link to="https://drive.google.com/file/d/1CVucbR6zGSpCTT5EVSHB2fSq_iAtOAtA/view?usp=sharing">
              Currículo
            </Link>
          </Item>
          <Item key="/projetos">
            <Link to="/projetos">Projetos</Link>
          </Item>
        </StyledMenu>
        <IconGroup>
          <IconButton
            href="https://github.com/clickfrancis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="Github" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/franciscruzs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="Linkedin" />
          </IconButton>
        </IconGroup>
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
