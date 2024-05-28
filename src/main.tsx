import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Overview from './pages/Overview.tsx';
import Schedule from './pages/Schedule.tsx';
import News from './pages/News.tsx';
import Standings from './pages/Standings.tsx';
import Squad from './pages/Squad.tsx';
import Shop from './pages/Shop.tsx';
import Content from './components/Content/Content.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/standings",
        element: <Standings />,
      },
      {
        path: "/squad",
        element: <Squad />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/real-madrid",
        element: <Content />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
