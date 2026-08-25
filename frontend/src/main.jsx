import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DEMO } from './lib/demo.js'
import { MOBILE } from './lib/mobile.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>
)

// Not in the mobile or Pages demo build: native shell serves from disk; the demo has no API
// and a SW would keep caching the old Jekyll README after the real app is published.
if (!MOBILE && !DEMO && 'serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {})
}
