import { createInertiaApp } from '@inertiajs/react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import React from 'react'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./views/**/*.jsx', { eager: true })
    return pages[`./views/${name}.jsx`]
  },
  setup({ el, App, props }) {
    /* hydrateRoot(el,<App {...props} />); */
    createRoot(el).render(<App {...props} />)
  },
})