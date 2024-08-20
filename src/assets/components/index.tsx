import React from "react";
import { Card, Typography, Button } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const StyledCard = styled(Card)`
  width: 306px;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 20px 0px #00000040;
  }
`;
const Titulo = styled.h4`
  color: #292929;
  font-family: "TTSupermolot-Bold", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 29.64px;
  text-align: left;
  margin: 0;
`;

const CategoryText = styled(Text)`
  font-weight: bold;
  color: #ed177d;
`;

const Resumo = styled(Text)`
  font-family: "TTSupermolot-Regular", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22.14px;
  text-align: left;
  color: #292929;
`;
const Botao = styled(Button)`
  width: 274px;
  height: 44px;
  padding: 8px 16px;
  border-radius: 6px;
  opacity: 1;
  background: transparent;
  box-shadow: none !important;
`;

const ButtonText = styled(Text)`
  color: #414aba;
  font-family: TTSupermolot-Bold;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: center;
`;

interface CardProps {
  img?: string;
  titulo?: string;
  categoria?: string;
  resumo?: string;
  saibaMais?: string;
  href?: string;
}

const CardComponent: React.FC<CardProps> = ({
  img,
  titulo,
  categoria,
  resumo,
  saibaMais,
  href,
}) => (
  <StyledCard hoverable cover={<img alt="example" src={img} />}>
    <div>
      <Titulo>{titulo}</Titulo>
    </div>
    <div style={{ marginTop: 16 }}>
      <CategoryText>
        <span>{categoria}</span>
      </CategoryText>
    </div>
    <div style={{ marginTop: 8 }}>
      <Resumo>{resumo}</Resumo>
    </div>
    <div style={{ marginTop: 8 }}>
      <Botao type="primary" onClick={() => window.open(href, "_blank")}>
        <ButtonText>{saibaMais}</ButtonText>
      </Botao>
    </div>
  </StyledCard>
);

export default CardComponent;
