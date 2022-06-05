import styled from "styled-components";

import { MdDownload, MdOutlineDelete, MdInsertPhoto } from "react-icons/md";

export const PictureContainer = styled.div`
  background: ${(props) =>
    props.lightmode ? "var(--main-bg)" : `rgba(0,0,0,0.8)`};
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
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PictureLoader = styled.canvas``;
export const DownLoad = styled(MdDownload)`
  font-size: 2rem;
  margin-bottom: 7px;
  cursor: pointer;
  color: ${(props) => (props.lightmode === "true" ? "#2f2f2f" : "#c0c0c0")};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${(props) =>
      props.lightmode === "true" ? "var(--main-black)" : "var(--main-white)"};
  }
`;
export const Delete = styled(MdOutlineDelete)`
  font-size: 2rem;
  margin-bottom: 7px;
  cursor: pointer;
  color: ${(props) => (props.lightmode === "true" ? "#2f2f2f" : "#c0c0c0")};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${(props) =>
      props.lightmode === "true" ? "var(--main-black)" : "var(--main-white)"};
  }
`;
export const Insert = styled(MdInsertPhoto)`
  font-size: 2rem;
  margin-bottom: 7px;
  cursor: pointer;
  color: ${(props) => (props.lightmode === "true" ? "#2f2f2f" : "#c0c0c0")};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${(props) =>
      props.lightmode === "true" ? "var(--main-black)" : "var(--main-white)"};
  }
`;
