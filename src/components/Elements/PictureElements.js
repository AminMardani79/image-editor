import styled from "styled-components";

export const PictureContainer = styled.div`
  background: ${(props) =>
    props.lightMode ? "var(--main-bg)" : `rgba(0,0,0,0.8)`};
  background-position: center;
  background-size: cover;
  height: 100%;
  border-radius: 7px;
`;
