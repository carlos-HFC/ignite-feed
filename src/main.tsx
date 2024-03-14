import { setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.tsx';

setDefaultOptions({
  locale: ptBR
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
