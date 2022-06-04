import styled from "styled-components";
// images
import lightModeBg from "../../assets/images/colorBg.jpg";
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  align-items: flex-start;
  height: calc(100vh - 60px);
  gap: 10px;
  position: relative;
  padding: 10px;
  background: ${(props) => props.lightMode && `url(${lightModeBg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
