import styled from "styled-components";
import colorBg from "../../assets/images/colorBg.jpg";

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  align-items: center;
  height: calc(100vh - 60px);
  gap: 10px;
  position: relative;
  padding: 10px;
  background-image: url(${colorBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
