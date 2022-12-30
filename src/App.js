
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './components/Inventory/Inventory';
import Main from './components/Layout/Main';
import Orders from './components/Orders/Orders';
import { productAndCartLoader } from './components/ProductsAndCartLoader/ProductsAndCartLoader';
import Shop from './components/Shop/Shop';

function App() {



  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
          loader: productAndCartLoader,
        },

        {
          path: '/orders',
          element: <Orders></Orders>,
          loader: productAndCartLoader,
        },
        { path: '/inventory', element: <Inventory></Inventory> }
      ]
    },
    { path: '*', element: <div> not found</div> }
  ])

  return (
    <div>


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
