import React from "react";
import styled from "styled-components";

interface StyledDivProps {
  filled?: boolean;
}

const Container = styled.div`
  padding: 0 100px;
  width: 300px;
  margin-right: 116px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: "TTSupermolot-Bold";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #292929;
  text-align: center;
  margin: 0;
`;

const SkillList = styled.ul`
  list-style: circle;
  padding: 20px 0 0 0;
  margin: 0;
  width: 100%;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
`;

const SkillName = styled.span`
  width: 100px;
  font-family: "Roboto Flex", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  text-align: left;
`;

const CirclesContainer = styled.div`
  display: flex;
`;

const Circle = styled.div<StyledDivProps>`
  width: 12px;
  height: 12px;
  margin-left: 5px;
  border-radius: 50%;
  background: ${({ filled }) => (filled ? "#EAB53D" : "transparent")};
  border: 2px solid #eab53d;
`;

const skills = [
  { name: "JAVA", level: 5 },
  { name: "CI/CD", level: 3 },
  { name: "TESTS", level: 4 },
  { name: "REACT", level: 4 },
  { name: "FLUTTER", level: 2 },
  { name: "SPRING", level: 5 },
  { name: "SQL", level: 4 },
];

export const Skills = () => {
  return (
    <Container>
      <Title>Habilidades</Title>
      <SkillList>
        {skills.map((skill) => (
          <SkillItem key={skill.name}>
            <SkillName>{skill.name}</SkillName>
            <CirclesContainer>
              {[...Array(5)].map((_, i) => (
                <Circle key={i} filled={i < skill.level} />
              ))}
            </CirclesContainer>
          </SkillItem>
        ))}
      </SkillList>
    </Container>
  );
};
