import RootLayout from "./routes/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter,
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={RootLayout} >
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
    </Route>
  )
)


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
