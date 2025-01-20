import { ReactNode } from 'react';
import { Header } from '@widgets/Header/Header';
import { ErrorBoundary } from '@shared/ui/ErrorBoundary/ErrorBoundary';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout">
            <Header />
            <main className="main">
                <div className='main_content'>
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                </div>
            </main>
        </div>
    );
};
