import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import { dataLoader } from './api/Api';
import { StoreProvider } from './context/StoreContext';
import Login from './pages/Login';
import { UserContextProvider } from './context/UserContext';

// layout the router structure. This App only return RouterProvider with the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: dataLoader,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/category/:id',
        element: <Category />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return (
    <UserContextProvider>
      <StoreProvider>
        <RouterProvider router={router} />;
      </StoreProvider>
    </UserContextProvider>
  );
}

export default App;
