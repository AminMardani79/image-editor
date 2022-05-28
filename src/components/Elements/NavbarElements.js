import styled from "styled-components";

// icons
import { MdOutlineToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";

export const NavbarContainer = styled.div`
  background: ${(props) => !props.lightMode && "rgb(69,0,28)"};
  background: ${(props) =>
    props.lightMode
      ? "var(--main-bg)"
      : `linear-gradient(31deg, rgba(69,0,28,1) 14%, rgba(9,6,56,1) 90%)`};
  color: ${(props) => (props.lightMode ? "#2d2d2d" : "#ffffff")};
`;

export const ToggleOn = styled(MdOutlineToggleOn)`
  color: #2d2d2d;
  font-size: 30px;
`;
export const ToggleOff = styled(MdToggleOff)`
  color: ${(props) => (props.lightMode ? "#2d2d2d" : "#ffffff")};
  font-size: 30px;
`;
