import styled from "styled-components";

// images
import redSmoke from "../../assets/images/redSmoke.jpg";

export const AppContainer = styled.div`
  background: ${(props) => !props.lightMode && `url(${redSmoke})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
