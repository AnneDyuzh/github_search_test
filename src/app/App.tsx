import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/Home';
import { Favorites } from '@pages/Favorites/Favorites';
import { RepositoryDetails } from '@pages/RepositoryDetails/RepositoryDetails';
import { RepoProvider } from '@app/providers/RepoProvider';
import { ROUTES } from '@shared/config/routes';
import './main.css';

export const App = () => {
    return (
        <RepoProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.home} element={<Home />} />
                    <Route path={ROUTES.favourites} element={<Favorites />} />
                    <Route path={ROUTES.repository_details} element={<RepositoryDetails />} />
                </Routes>
            </BrowserRouter>
        </RepoProvider>
    );
};
