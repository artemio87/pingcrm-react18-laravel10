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
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob("./Pages/**/*.tsx")
    ),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
})

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_LARAVEL_DSN
});
