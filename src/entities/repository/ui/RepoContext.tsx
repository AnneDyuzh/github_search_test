import React from 'react';
import RepoStore from '@entities/repository/model/repoStore';

export const RepoContext = React.createContext<typeof RepoStore | null>(null);


