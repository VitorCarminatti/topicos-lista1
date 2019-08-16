import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const StyledNormalButton = styled(Button)`
  width: 100px;
  height: 100px !important;
  margin-left: 15px;
`;

export const StyledWinnerButton = styled(Button)`
  width: 100px;
  height: 100px !important;
  margin-left: 15px;
  background: #aef2a2 !important;
`;
