import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StringsApp } from "../../assets/strings/stringsApp";
import { Content } from "antd/es/layout/layout";

const imgStyle: React.CSSProperties = {
  display: "block",
  width: 273,
  paddingLeft: 100,
};

export const Name = styled.h1`
  line-height: 93.75px !important;
  font-family: "Roboto Flex", sans-serif;
  font-size: 80px !important;
  font-weight: 700 !important;
  color: #292929 !important;
  margin: 0;
  padding-top: 15px;
`;

export const Wellcome = styled.h3`
  font-family: TTSupermolot-Bold;
  font-size: 36px;
  font-weight: 400;
  line-height: 44.46px;
  text-align: left;
  color: #292929;
  margin: 0;
`;

export const Job = styled.h4`
  font-family: "TTSupermolot-Regular";
  display: flex;
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin: 0;
  padding-top: 15px;
`;

export const AboutMe = styled.p`
  font-family: "Roboto Flex";
  display: flex;
  font-size: 36px;
  font-weight: 300;
  font-size: 20px;
  color: #292929;
  line-height: 22.75px;
`;

export const AboutMeTitle = styled.h1`
  font-family: "TTSupermolot-bold";
  display: block;
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin: 0;
`;

export const ContentStyled = styled.div`
  width: "50%";
  display: inline-block;
`;

export const ContentSkills = styled.div`
  width: 50%;
`;

export const ContentAbout = styled.div`
  width: 50%;
`;

export const AboutPage: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: 0,
      }}
    >
      <div style={{ padding: "30px 300px" }}>
        <div
          style={{
            float: "left",
            width: "50%",
          }}
        >
          <Wellcome>{StringsApp.wellcome}</Wellcome>
          <Name>{StringsApp.name}</Name>
          <Job>{StringsApp.job}</Job>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
          }}
        >
          <img
            alt="avatar"
            src="https://avatars.githubusercontent.com/u/7151251?v=4"
            style={imgStyle}
          />
        </div>
      </div>
      <ContentStyled style={{ padding: "30px 300px", display: "inline-flex" }}>
        <ContentAbout>
          <AboutMeTitle>{StringsApp.aboutMeTitle}</AboutMeTitle>
          <AboutMe>{StringsApp.aboutMe}</AboutMe>
        </ContentAbout>
        <ContentSkills>
          <img
            alt="avatar"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            style={imgStyle}
          />
        </ContentSkills>
      </ContentStyled>
    </div>
  );
};
