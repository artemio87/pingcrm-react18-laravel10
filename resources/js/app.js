import React from 'react';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/browser';

createInertiaApp({
  id: 'app',
  progress: {
    color: '#ED8936',
  },
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})

Sentry.init({
  dsn: process.env.MIX_SENTRY_LARAVEL_DSN
});

