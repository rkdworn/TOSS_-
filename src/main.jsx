

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@toss/tds-mobile';
import { TDSMobileAITProvider } from '@toss/tds-mobile-ait';
import App from './App.jsx';
import './index.css';

const isTossWebView = typeof window !== 'undefined' && window.AppsInToss !== undefined;

createRoot(document.getElementById('root')).render(
  isTossWebView ? (
    <ThemeProvider>
      <TDSMobileAITProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </TDSMobileAITProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  )
);
