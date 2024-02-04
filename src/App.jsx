import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import PrivateRoutes from "./utils/PrivateRoutes";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Discover from "./pages/Discover/Discover";
import BlogDetails from "./pages/Blog/BlogDetails";
import BlogList from "./pages/BlogList/BlogList";
import Credits from "./pages/Credits/credits";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/**Public Routes */}
        <Route index element={<HomePage/>} />
        <Route path="/news" element={<Blog/>} />
        <Route path="/news/:slug" element={<BlogDetails/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/discover" element={<Discover/>} />
        <Route path="/news-list" element={<BlogList/>} />
        <Route path="/credits" element={<Credits/>} />
        

        {/*Protected Routes */}

        <Route element={<PrivateRoutes />}>
         
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
