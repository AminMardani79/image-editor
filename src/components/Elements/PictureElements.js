import styled from "styled-components";

export const PictureContainer = styled.div`
  background: ${(props) =>
    props.lightMode ? "var(--main-bg)" : `rgba(0,0,0,0.8)`};
  background-position: center;
  background-size: cover;
  height: 100%;
  border-radius: 7px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Options = styled.div`
  background-color: blue;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PictureLoader = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
