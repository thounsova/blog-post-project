import React, { ErrorInfo, ReactNode, Component } from "react";

// Define prop types with better documentation
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetOnPropsChange?: boolean;
  resetKey?: string | number;
}

// Define state types
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static defaultProps = {
    fallback: null,
    onError: undefined,
    resetOnPropsChange: false,
    resetKey: undefined,
  };

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  // Check if props changed and reset error state if needed
  componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    if (
      this.state.hasError &&
      this.props.resetOnPropsChange &&
      this.props.children !== prevProps.children
    ) {
      this.reset();
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console with structured information
    console.error("[ErrorBoundary]", {
      error,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      try {
        this.props.onError(error, errorInfo);
      } catch (callbackError) {
        console.error("Error in onError callback:", callbackError);
      }
    }
  }

  reset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback, resetKey } = this.props;

    if (hasError) {
      // Handle function fallback
      if (typeof fallback === "function" && error) {
        return fallback(error, this.reset);
      }

      // Use custom element fallback if provided
      if (fallback && React.isValidElement(fallback)) {
        return fallback;
      }

      // Default fallback UI with reset option
      return (
        <div className="min-h-screen flex flex-col items-center   border border-gray-200  justify-center text-center bg-gray-50 rounded-lg shadow-md">
          <div className="text-red-600 mb-4">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Something went wrong
          </h2>

          {error && (
            <div className="mb-4 w-full max-w-lg">
              <p className="text-red-700 bg-red-50 p-4 rounded-md text-sm font-mono overflow-auto max-h-32 border border-red-100">
                {error.message}
              </p>
            </div>
          )}

          <button
            onClick={this.reset}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            aria-label="Try again"
          >
            Try Again
          </button>
        </div>
      );
    }

    // When no error, render children with optional key for forced remounting
    return resetKey ? (
      <React.Fragment key={resetKey}>{children}</React.Fragment>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
