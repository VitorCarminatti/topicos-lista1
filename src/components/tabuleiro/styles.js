import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
  margin-bottom: 20px;
`;

export const ResetButton = styled(Button).attrs({
  type: "primary"
})`
  width: 10% !important;
`;
