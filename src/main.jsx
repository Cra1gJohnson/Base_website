import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// variable root that is used to render the single page that all jsx components will be rendered in
// client vs 
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ResumeRender from './pages/ResumeRender.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/resume', element: <ResumeRender />},
  {path: '*', element: <NotFoundPage />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
