import styled from "styled-components";

import darkModeBg from "../../assets/images/darkSmoke.jpg";

export const PictureContainer = styled.div`
  background: ${(props) =>
    props.lightMode ? "var(--main-bg)" : `url(${darkModeBg})`};
  background-position: center;
  background-size: cover;
  filter: ${(props) => !props.lightMode && "blur(4px)"};
  height: 100%;
  border-radius: 7px;
`;
