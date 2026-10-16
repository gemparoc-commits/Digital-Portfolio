import { useEffect, useState } from 'react'

type Theme = 'day' | 'night'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'day'
    return window.localStorage.getItem('chris-theme') === 'night' ? 'night' : 'day'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('chris-theme', theme)
  }, [theme])

  const nextTheme = theme === 'day' ? 'night' : 'day'

  return <button className="theme-toggle" type="button" onClick={() => setTheme(nextTheme)} aria-label={'Switch to ' + nextTheme + ' theme'} title={'Switch to ' + nextTheme + ' theme'}>
    <span aria-hidden="true" />
  </button>
}
