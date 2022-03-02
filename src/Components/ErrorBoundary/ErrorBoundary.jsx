import React from "react";
import propTypes from "prop-types";

const RefreshButton = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <button
      className="btn btn-info"
      style={{ margin: "auto", width: "120px" }}
      onClick={handleClick}
    >
      Recargar
    </button>
  );
};

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="container mt-3">
          <div className="d-flex flex-column justify-content-center">
            <div className="alert alert-danger">
              <h1 className="text-center">Ups! Ha ocurrido un error inesperado</h1>
            </div>
            <RefreshButton />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: propTypes.node.isRequired,
};
