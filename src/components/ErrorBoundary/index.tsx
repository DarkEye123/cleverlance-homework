import React from 'react';
import { TrackerContext } from '../../ctx';

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<{}, State> {
  static contextType = TrackerContext;
  context: React.ContextType<typeof TrackerContext>;

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    const tracker = this.context!;
    if (error.graphQLErrors?.length) {
      tracker.info(error.graphQLErrors);
    } else {
      tracker.error(error.message);
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
