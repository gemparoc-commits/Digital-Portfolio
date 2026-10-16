import { ScrollRestoration, useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'
import { PageTransition } from '../components/PageTransition'
import { Footer, Header } from '../components/shared'
import { MotionObserver } from '../components/MotionObserver'

export function RootLayout() {
  return <><MotionObserver /><Header /><main><PageTransition /></main><Footer /><ScrollRestoration /></>
}

export function RouteError() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error) ? error.status + ': ' + error.statusText : 'This page could not be loaded.'
  return <div className="container empty-state"><p className="eyebrow">Something went wrong</p><h1>{message}</h1><p className="lead muted">Try going back home or checking the URL.</p><Link className="button" to="/">Back home</Link></div>
}
