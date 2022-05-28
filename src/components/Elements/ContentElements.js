import styled from "styled-components";
// images
import lightModeBg from "../../assets/images/colorBg.jpg";
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  align-items: center;
  height: calc(100vh - 60px);
  gap: 10px;
  position: relative;
  padding: 10px;
  background: ${(props) => !props.lightMode && "rgb(69,0,28)"};
  background: ${(props) =>
    props.lightMode
      ? `url(${lightModeBg})`
      : `linear-gradient(31deg, rgba(69,0,28,1) 14%, rgba(9,6,56,1) 90%)`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
