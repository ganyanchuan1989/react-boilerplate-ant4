import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log('error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log('componentDidCatch:', error, info);
  }

  render() {
    const { hasError, error } = this.state;
    console.log('>>>>', error);
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{`ErrorMsg: ${error}`}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
