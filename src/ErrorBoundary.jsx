import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
   
    console.log("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error"><h2>🤖Something went wrong.🤖</h2>
      <p className="p-3 m-5 text-red-600 text-3xl"><h2>There is an error with this card</h2></p>                                              </div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
