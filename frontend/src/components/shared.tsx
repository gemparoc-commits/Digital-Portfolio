import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile, ToolkitItem } from '../data/portfolio'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [open, setOpen] = useState(false)
  const nav = [['Work', '/work'], ['About Me', '/about'], ['Skills', '/about#skills']]

  return <header className="site-header">
    <div className="container header-inner">
      <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label={profile.name + ' home'}>
        <span className="brand-mark">CG</span>
        <span>{profile.name}</span>
      </Link>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-nav">{open ? 'Close' : 'Menu'}</button>
      <nav id="primary-nav" className={'primary-nav ' + (open ? 'is-open' : '')} aria-label="Primary navigation">
        {nav.map(([label, href]) => href.includes('#') ? <Link key={href} to={href} onClick={() => setOpen(false)}>{label}</Link> : <NavLink key={href} to={href} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
      </nav>
      <div className="header-actions"><ThemeToggle /><Link className="header-contact" to="/contact" onClick={() => setOpen(false)}>Contact</Link></div>
    </div>
  </header>
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} {profile.name}. Built for useful work.</p><div className="footer-links"><Link to="/work">Work</Link><Link to="/about">About Me</Link><Link to="/contact">Contact</Link></div></div></footer>
}

export function ButtonLink({ to, children, secondary = false }: { to: string; children: React.ReactNode; secondary?: boolean }) {
  return <Link className={'button ' + (secondary ? 'button-secondary' : '')} to={to}>{children}</Link>
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p className="lead muted">{intro}</p>}</div>
}

export function ProjectCard({ project }: { project: import('../data/portfolio').Project }) {
  return <article className="project-card reveal">
    <Link to={'/work/' + project.slug} className="project-image-wrap">
      <img src={project.image} alt={project.imageAlt} loading="lazy" />
      <span className="image-arrow" aria-hidden="true">↗</span>
    </Link>
    <div className="project-card-body">
      <div className="meta-row"><span>{project.category}</span><span>{project.role}</span></div>
      <h3><Link to={'/work/' + project.slug}>{project.title}</Link></h3>
      <p>{project.summary}</p>
      <div className="tag-list">{project.tags.slice(0, 3).map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
    </div>
  </article>
}

export function ToolkitCard({ item }: { item: ToolkitItem }) {
  return <article className="tool-card reveal">
    <div className="tool-icon" aria-hidden="true">
      {!item.icon && <span>{item.mark}</span>}
      {item.icon && <img src={item.icon} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none' }} />}
    </div>
    <strong>{item.name}</strong>
  </article>
}
