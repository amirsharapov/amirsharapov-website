import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MarkdownPage } from './components/markdown-page/MarkdownPage';
import HOME from 'src/content/home.js';
import ABOUT from 'src/content/about.js';
import PROJECTS from 'src/content/projects.js';
import RESOURCES_FOR_ML_ENGINEERS from 'src/content/ml-resources.js';


const NOT_FOUND = `\
# Not Found

The page you're looking for doesn't exist. 😢
`

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <MarkdownPage markdown={HOME} />
  },
  {
    path: '/about',
    element: (
      <MarkdownPage
        markdown={ABOUT}
        breadcrumbs={[
          { title: 'Home', path: '/' },
          { title: 'About' }
        ]}
      />
    )
  },
  {
    path: '/projects',
    element: (
      <MarkdownPage
        markdown={PROJECTS}
        breadcrumbs={[
          { title: 'Home', path: '/' },
          { title: 'Projects' }
        ]}
      />
    )
  },
  {
    path: '/ml-resources',
    element: (
      <MarkdownPage
        markdown={RESOURCES_FOR_ML_ENGINEERS}
        breadcrumbs={[
          { title: 'Home', path: '/' },
          { title: 'ML Resources' }
        ]}
      />
    )
  },
  {
    path: '/:path*',
    element: (
      <MarkdownPage
        markdown={NOT_FOUND}
        breadcrumbs={[
          { title: 'Home', path: '/' },
          { title: '404' }
        ]}
      />
    )
  },
]);

root.render(
  <RouterProvider router={router} />
);
