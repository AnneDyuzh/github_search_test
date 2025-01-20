import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = { hasError: false, error: null, errorInfo: null };

    public static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Caught an error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2>Что-то пошло не так.</h2>
                    <p>Пожалуйста, попробуйте позже.</p>
                    {this.state.errorInfo && (
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </details>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}
