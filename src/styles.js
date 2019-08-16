import styled from "styled-components";
import { Table, InputNumber, Button } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableCalculos = styled(Table)`
  margin-top: 20px;
  width: 20%;
`;

export const StyledInputNumber = styled(InputNumber)`
  width: 20% !important;
`;

export const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 15px;
`;

export const StyledButton = styled(Button).attrs({
  type: "primary"
})`
  width: 10% !important;
  margin-top: 10px;
`;

export const StyledSpan = styled.span`
  margin-top: 15px;
  font-size: 24px;
`;
