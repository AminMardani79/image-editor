import styled from "styled-components";

// iconst
import { MdTune, MdSettingsSuggest, MdOutlineFlip } from "react-icons/md";

export const SettingContainer = styled.div`
  height: 100%;
  border-radius: 7px;
  background: ${(props) =>
    props.lightMode ? "var(--main-bg)" : `rgba(0,0,0,0.8)`};
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

export const MirrorIcon = styled(MdOutlineFlip)`
  font-size: 20px;
  color: var(--main-black);
  margin-top: 10px;
  cursor: pointer;
`;
