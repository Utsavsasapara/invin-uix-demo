import { useState } from 'react';
import App from './App.jsx';
import DemoLayout from './pages/DemoLayout.jsx';

export default function Root() {
  const [page, setPage] = useState('dashboard');

  window.__setPage = setPage;
  window.__currentPage = page;

  if (page === 'demo') return <DemoLayout />;
  return <App />;
}
