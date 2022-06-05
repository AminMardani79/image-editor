import styled from "styled-components";

// iconst
import { MdTune, MdSettingsSuggest, MdOutlineFlip } from "react-icons/md";

export const SettingContainer = styled.div`
  height: 100%;
  border-radius: 7px;
  background: ${(props) =>
    props.lightmode ? "var(--main-bg)" : `rgba(0,0,0,0.8)`};
  padding: 20px 20px;
  span:first-child {
    font-size: 15px;
    font-weight: bold;
    color: ${(props) =>
      props.lightmode ? "var(--main-black)" : "var(--main-white)"};
    font-style: italic;
  }
  span:last-child {
    font-size: 13px;
    color: ${(props) => (props.lightmode ? "#383838" : "var(--main-white)")};
    font-style: italic;
  }
  input[type="range"] {
    height: 34px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    background: transparent;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 2px #0c1b29;
    background: #3071a9;
    border-radius: 5px;
    border: 1px solid #3071a9;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 2px #025953;
    border: 1px solid #05ffee;
    height: 26px;
    width: 6px;
    border-radius: 8px;
    background: #05ffee;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -13px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #3071a9;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 2px #0c1b29;
    background: #3071a9;
    border-radius: 5px;
    border: 1px solid #3071a9;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 2px #025953;
    border: 1px solid #05ffee;
    height: 26px;
    width: 6px;
    border-radius: 8px;
    background: #05ffee;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #3071a9;
    border: 1px solid #3071a9;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #0c1b29;
  }
  input[type="range"]::-ms-fill-upper {
    background: #3071a9;
    border: 1px solid #3071a9;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #0c1b29;
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 2px #025953;
    border: 1px solid #05ffee;
    height: 26px;
    width: 6px;
    border-radius: 8px;
    background: #05ffee;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #3071a9;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #3071a9;
  }
`;

export const AdjusmentIcon = styled(MdTune)`
  font-size: 30px;
  position: absolute;
  top: -15px;
  left: -17px;
  background-color: ${(props) =>
    props.lightmode === "true" ? "var(--main-bg)" : "transparent"};
  color: ${(props) =>
    props.lightmode === "true" ? "var(--main-black)" : "#ffffff"};
  padding: 0 5px;
`;
export const SettingsIcon = styled(MdSettingsSuggest)`
  font-size: 30px;
  position: absolute;
  top: -15px;
  left: -17px;
  background-color: ${(props) =>
    props.lightmode === "true" ? "var(--main-bg)" : "transparent"};
  color: ${(props) =>
    props.lightmode === "true" ? "var(--main-black)" : "#ffffff"};
  padding: 0 5px;
`;

export const MirrorIcon = styled(MdOutlineFlip)`
  font-size: 20px;
  color: var(--main-black);
  margin-top: 10px;
  cursor: pointer;
`;
