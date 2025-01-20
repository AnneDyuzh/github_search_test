import React from 'react';
import { RepoContext } from '@entities/repository/ui/RepoContext';
import repoStore from '@entities/repository/model/repoStore';

interface RepoProviderProps {
    children: React.ReactNode;
}

export const RepoProvider = ({ children }: RepoProviderProps) => {
    return (
        <RepoContext.Provider value={repoStore}>
            {children}
        </RepoContext.Provider>
    );
};

