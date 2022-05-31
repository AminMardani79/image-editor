import styled from "styled-components";

// images
import darkModeBg from "../../assets/images/darkSmoke.jpg";
// iconst
import { MdTune, MdSettingsSuggest } from "react-icons/md";

export const SettingContainer = styled.div`
  height: 100%;
  border-radius: 7px;
  background: ${(props) =>
    props.lightMode ? "var(--main-bg)" : `url(${darkModeBg})`};
  padding: 20px 0;
`;

export const AdjusmentIcon = styled(MdTune)`
  font-size: 30px;
  position: absolute;
  top: -15px;
  left: 0;
  background-color: var(--main-bg);
  color: var(--main-black);
  padding: 0 5px;
`;
export const SettingsIcon = styled(MdSettingsSuggest)`
  font-size: 30px;
  position: absolute;
  top: -15px;
  left: 0;
  background-color: var(--main-bg);
  color: var(--main-black);
  padding: 0 5px;
`;
