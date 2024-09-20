import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.jsx';
import { Home } from './Components/Home.jsx';
import { About } from './Components/About.jsx';
import { Services } from './Components/Services.jsx';
import { Portfolio } from './Components/Portfolio.jsx';
import { Blog} from './Components/Blog.jsx';
import { Contact } from './Components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap pages with App component for common Header/Footer
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // Add other child routes here if needed
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
