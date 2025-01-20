import React from 'react';
import { RepoContext } from '@entities/repository/ui/RepoContext';

export const useRepoStore = () => {
    const store = React.useContext(RepoContext);
    if (!store) {
        throw new Error('useRepoStore must be used within a RepoProvider');
    }
    return store;
};
