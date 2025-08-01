import { Routes, Route } from 'react-router-dom';
import { pagesRouter } from '../pages/pagesRouter';

export const Router = () => {
    const pages = pagesRouter.map(({element, path, title}) => (
        <Route key={title} path={path} element={element} />
    ))

    return <Routes>{pages}</Routes>
}