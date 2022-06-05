import styled from "styled-components";

// icons
import { MdOutlineToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";

export const NavbarContainer = styled.div`
  background: ${(props) =>
    props.lightmode ? "var(--main-bg)" : `rgba(0,0,0,.8)`};
  color: ${(props) => (props.lightmode ? "#2d2d2d" : "#ffffff")};
`;

export const ToggleOn = styled(MdOutlineToggleOn)`
  color: #2d2d2d;
  font-size: 30px;
`;
export const ToggleOff = styled(MdToggleOff)`
  color: ${(props) => (props.lightmode ? "#2d2d2d" : "#ffffff")};
  font-size: 30px;
`;
