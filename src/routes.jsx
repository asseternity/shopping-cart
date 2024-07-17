import { createBrowserRouter } from 'react-router-dom';
import Home from './[page] - Home/Home';
import Shop from './[page] - Shop/Shop';

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/shop', element: <Shop /> },
]);

export default routes;
