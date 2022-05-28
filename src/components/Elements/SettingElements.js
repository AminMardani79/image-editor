import styled from "styled-components";

// images
import darkModeBg from "../../assets/images/darkSmoke.jpg";

export const SettingContainer = styled.div`
  height: 100%;
  border-radius: 7px;
  background: ${(props) =>
    props.lightMode ? "var(--main-bg)" : `url(${darkModeBg})`};
`;
