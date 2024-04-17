import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MarkdownPage } from './components/markdown-page/MarkdownPage';
import { HOME_PAGE_CONTENT } from 'src/content/home.js';
import { ABOUT_PAGE_CONTENT } from 'src/content/about.js';
import { PROJECTS_PAGE_CONTENT } from 'src/content/projects.js';
import { ML_RESOURCES_PAGE_CONTENT } from 'src/content/ml-resources.js';


const NOT_FOUND = `\
# Not Found

The page you're looking for doesn't exist. 😢
`

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <MarkdownPage markdown={HOME_PAGE_CONTENT} />
  },
  {
    path: '/about',
    element: (
      <MarkdownPage
        markdown={ABOUT_PAGE_CONTENT}
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
        markdown={PROJECTS_PAGE_CONTENT}
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
        markdown={ML_RESOURCES_PAGE_CONTENT}
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
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
