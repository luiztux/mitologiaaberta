import React from 'react';
import { Home } from './Pages';

interface PagesRouter {
    path: string;
    element: React.ReactElement;
    title: string;
}

export const pagesRouter: PagesRouter[] = [
    {
        path: '/',
        element: <Home />,
        title: 'Home'
    }
]