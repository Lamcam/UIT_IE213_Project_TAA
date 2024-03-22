import RootLayout from "./routes/RootLayout";
import Home from "./pages/Home";
import News from "./pages/News";
import Policy from "./pages/Policy";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import { BrowserRouter,
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>} >
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="news" element={<News />} />
        <Route path="about_us" element={<AboutUs />} />
    </Route>
  )
)


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
