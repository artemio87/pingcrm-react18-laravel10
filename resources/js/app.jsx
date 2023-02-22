import React from 'react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/browser';
import '../css/app.css';

createInertiaApp({
  id: 'app',
  progress: {
    color: '#ED8936',
  },
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})

Sentry.init({
  dsn: process.env.MIX_SENTRY_LARAVEL_DSN
});

