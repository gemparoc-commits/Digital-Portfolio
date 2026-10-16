import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function MotionObserver() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    root.classList.add('motion-ready')
    let hashFrame = 0
    const hashTimer = window.setTimeout(() => {
      hashFrame = window.requestAnimationFrame(() => {
        if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      })
    }, hash ? 220 : 0)

    if (reduce) {
      return () => {
        window.clearTimeout(hashTimer)
        window.cancelAnimationFrame(hashFrame)
        root.classList.remove('motion-ready')
      }
    }

    let observer: IntersectionObserver | null = null
    const observerTimer = window.setTimeout(() => {
      const revealNodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

      revealNodes.forEach(node => observer?.observe(node))
    }, 220)

    return () => {
      observer?.disconnect()
      window.clearTimeout(observerTimer)
      window.clearTimeout(hashTimer)
      window.cancelAnimationFrame(hashFrame)
      root.classList.remove('motion-ready')
    }
  }, [pathname, hash])

  return null
}
