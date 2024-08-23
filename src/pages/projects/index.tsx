import React, { useState, useEffect } from "react";
import CardComponent from "../../components/cards";
import styled from "styled-components";

export const Content = styled.div`
  padding: 0px 150px 100px 150px;
`;

export const My = styled.h4`
  font-family: TTSupermolot-Bold;
  font-size: 36px;
  font-weight: 400;
  line-height: 44.46px;
  text-align: left;
  margin: 0;
  color: #292929;
`;

export const Project = styled.h1`
  font-family: "Roboto Flex", sans-serif;
  font-size: 80px;
  font-weight: 700;
  line-height: 93.75px;
  text-align: left;
  margin: 0;
  padding-bottom: 40px;
  color: #292929;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`;

interface ProjectsProps {
  img: string;
  titulo: string;
  categoria: string;
  resumo: string;
  href: string;
}

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => new Error("error ao carregar dados", err));
  }, []);

  return (
    <Content>
      <My>Meus</My>
      <Project className="project-title">Projetos</Project>
      <CardContainer>
        {projects.map((projects, index) => (
          <CardComponent
            key={index}
            img={projects.img}
            titulo={projects.titulo}
            categoria={projects.categoria}
            resumo={projects.resumo}
            href={projects.href}
          />
        ))}
      </CardContainer>
    </Content>
  );
};
