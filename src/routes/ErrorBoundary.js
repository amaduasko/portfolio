import React from "react";
import styled from "styled-components";
import gifImg from "../images/net-error.gif";

const ErrorContainer = styled.div`
  width: fit-content;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const ErrorGif = styled.img`
  width: 100%;
`;
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // render any custom fallback UI
      return (
        <ErrorContainer>
          <ErrorGif src={gifImg} alt="no internet connection" />
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
