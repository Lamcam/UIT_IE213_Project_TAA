import RootLayout from './routes/RootLayout';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Policy from './pages/Policy/Policy';
import AboutUs from './pages/AboutUs/AboutUs';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Account from "./pages/Account/index"
import Error404 from './pages/Error404';
import {
  BrowserRouter,
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>} errorElement={<Error404 />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="productdetail" element={<ProductDetail/>} />
      <Route path="news" element={<News />} />
      <Route path="about_us" element={<AboutUs />} />
      <Route path="guideline" element={<></>}>
        {' '}
      </Route>
      <Route path="policy" element={<Policy />}>
        {' '}
      </Route>
      <Route path="/account/:id" element={<Account />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
