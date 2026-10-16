import { ReactNode, useEffect, useRef, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

type TransitionPhase = 'leaving' | 'entering' | 'entered'

type RenderedRoute = {
  key: string
  element: ReactNode
}

export function PageTransition() {
  const location = useLocation()
  const outlet = useOutlet()
  const outletRef = useRef(outlet)
  const previousKey = useRef(location.key)
  const [renderedRoute, setRenderedRoute] = useState<RenderedRoute>(() => ({ key: location.key, element: outlet }))
  const [phase, setPhase] = useState<TransitionPhase>('entered')

  outletRef.current = outlet

  useEffect(() => {
    if (location.key === previousKey.current) return

    previousKey.current = location.key
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setRenderedRoute({ key: location.key, element: outletRef.current })
      setPhase('entered')
      return
    }

    setPhase('leaving')
    const enterTimer = window.setTimeout(() => {
      setRenderedRoute({ key: location.key, element: outletRef.current })
      setPhase('entering')
    }, 180)
    const settleTimer = window.setTimeout(() => setPhase('entered'), 860)

    return () => {
      window.clearTimeout(enterTimer)
      window.clearTimeout(settleTimer)
    }
  }, [location.key])

  return <div className={'route-transition route-transition-' + phase}><div key={renderedRoute.key} className="route-transition-page">{renderedRoute.element}</div></div>
}
