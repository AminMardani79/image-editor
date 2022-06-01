import styled from "styled-components";

// images
import darkSmoke from "../../assets/images/darkSmoke.jpg";

export const AppContainer = styled.div`
  background: ${(props) => !props.lightMode && `url(${darkSmoke})`};
`;
