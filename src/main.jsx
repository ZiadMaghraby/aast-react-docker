import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main>
      <p>AAST · Docker Lab</p>
      <h1>Hello World!!!</h1>
      <p>A React application running inside a Docker container.</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
