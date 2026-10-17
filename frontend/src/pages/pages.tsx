import { FormEvent, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ButtonLink, ProjectCard, SectionHeading, ToolkitCard } from '../components/shared'
import { experience, profile, projects, skills, toolkitGroups } from '../data/portfolio'

export function HomePage() {
  return <>
    <section className="hero container">
      <div className="hero-copy reveal">
        <p className="eyebrow">{profile.role}</p>
        <h1>Software that makes <span>complex work</span> feel simple.</h1>
        <p className="lead">I build dependable web, desktop, and mobile products for teams that need their day-to-day operations to run better.</p>
        <div className="button-row"><ButtonLink to="/work">Explore what I build <span aria-hidden="true">↗</span></ButtonLink><ButtonLink to="/contact" secondary>Start a project</ButtonLink></div>
      </div>
      <div className="hero-visual reveal reveal-delay">
        <div className="hero-photo-frame"><img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85" alt="Code on a monitor in a developer workspace" /></div>
        <div className="hero-visual-footer"><div><span className="visual-label">Focus</span><strong>Business software</strong></div><div><span className="visual-label">Built across</span><strong>Web / desktop / mobile</strong></div></div>
      </div>
    </section>

    <section className="proof-strip container reveal" aria-label="What Chris builds">
      <p className="proof-label">Software for the work behind the screen</p>
      <div className="proof-items"><span>Operational systems</span><span>Booking platforms</span><span>Cross-platform apps</span><span>Customer workflows</span></div>
    </section>

    <section className="section container" id="capabilities">
      <SectionHeading eyebrow="Capabilities" title="From operational systems to customer-facing apps." intro="I turn complicated workflows into software that people can understand, use, and trust." />
      <div className="capability-grid">
        <article className="capability capability-feature reveal"><p className="capability-kicker">Enterprise systems</p><h3>Give the business one clear view.</h3><p>Inventory, orders, financial reports, client management, and employee management in one connected operational system.</p><div className="capability-list"><span>Inventory and orders</span><span>Financial reporting</span><span>Clients and employees</span></div></article>
        <article className="capability reveal reveal-delay"><p className="capability-kicker">Booking systems</p><h3>Make availability easier to trust.</h3><p>Scheduling experiences for clinics, hotels, and service teams that work for both customers and staff.</p></article>
        <article className="capability capability-dark reveal reveal-delay-two"><p className="capability-kicker">Desktop + mobile</p><h3>Meet people where the work happens.</h3><p>Focused applications for teams moving between desks, devices, locations, and customer-facing work.</p></article>
      </div>
    </section>

    <section className="section section-surface">
      <div className="container"><SectionHeading eyebrow="Selected work" title="A few problems worth solving." intro="Representative software work across operations, scheduling, and the devices teams rely on every day." /><div className="project-grid">{projects.filter(p => p.featured).map(project => <ProjectCard key={project.slug} project={project} />)}</div><div className="section-action"><ButtonLink to="/work" secondary>See all work <span aria-hidden="true">↗</span></ButtonLink></div></div>
    </section>

    <section className="section container approach-section">
      <div className="approach-copy reveal"><p className="eyebrow">How I work</p><h2>Clear thinking is part of the deliverable.</h2><p className="lead muted">Good software starts with understanding the real workflow. I keep the path from idea to usable product direct, practical, and easy to follow.</p></div>
      <div className="approach-grid reveal reveal-delay"><div><strong>Understand</strong><p>Clarify users, constraints, and the decisions the product needs to support.</p></div><div><strong>Build</strong><p>Create a reliable foundation with an interface that feels natural from the first use.</p></div><div><strong>Refine</strong><p>Test the important paths, improve the rough edges, and leave the system ready to grow.</p></div></div>
    </section>

    <section className="section cta-section"><div className="container"><p className="eyebrow">Have a workflow to improve?</p><h2>Bring me the <span>messy part.</span></h2><p className="lead muted">Let us turn the moving pieces into software your team can rely on.</p><ButtonLink to="/contact">Share your project <span aria-hidden="true">↗</span></ButtonLink></div></section>
  </>
}

export function WorkPage() {
  return <section className="section container" id="projects"><SectionHeading eyebrow="Work" title="Software built around real workflows." intro="A closer look at the systems, booking experiences, and cross-platform tools I build for teams and their customers." /><div className="work-intro-band"><strong>Special mention</strong><span>Enterprise systems that bring inventory, orders, reports, clients, and employees into one operational view.</span></div><div className="project-grid project-grid-wide">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></section>
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <div className="container empty-state"><h1>Project not found</h1><Link className="button" to="/work">Back to work</Link></div>

  return <article className="project-detail"><div className="container"><Link className="back-link" to="/work">← Back to work</Link><div className="detail-header reveal"><p className="eyebrow">{project.category} / {project.role}</p><h1>{project.title}</h1><p className="lead">{project.description}</p><div className="tag-list detail-tags">{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div></div><img className="detail-image reveal reveal-delay" src={project.image} alt={project.imageAlt} /><div className="detail-grid reveal"><div><p className="eyebrow">The challenge</p><p className="body-copy">{project.problem}</p></div><div><p className="eyebrow">The approach</p><p className="body-copy">{project.solution}</p></div></div><div className="results-block reveal"><p className="eyebrow">What this makes possible</p><div className="results-grid">{project.results.map(result => <div className="result" key={result}><strong>+</strong><span>{result}</span></div>)}</div></div><div className="detail-cta reveal"><p className="lead">Working on something with a similar shape?</p><ButtonLink to="/contact">Start a conversation <span aria-hidden="true">↗</span></ButtonLink></div></div></article>
}

export function AboutPage() {
  return <section className="section container about-page"><div className="about-profile"><div className="about-profile-visual reveal"><div className="about-photo-frame"><img src="/profile.png" alt="Chrisalin Gemparo, full-stack software developer" /></div><div className="about-photo-caption"><span>Chris Gemps</span><span>Full-stack developer</span></div></div><div className="about-profile-copy reveal reveal-delay"><p className="eyebrow">About Me</p><h1>{profile.fullName}. <span>{profile.role}.</span></h1><p className="lead">{profile.degree} I build full-stack applications with React, Next.js, Spring Boot, Docker, and more. I care about clean architecture, thoughtful interfaces, and shipping products that solve real problems.</p><div className="about-facts"><div><strong>Enterprise</strong><span>Operational systems</span></div><div><strong>Booking</strong><span>Scheduling platforms</span></div><div><strong>Apps</strong><span>Web, desktop, mobile</span></div></div><div className="about-contact"><a href={'mailto:' + profile.email}>{profile.email}</a><a href={'tel:' + profile.phone}>{profile.phone}</a><div><span>Hometown</span><strong>{profile.hometown}</strong></div><div><span>Currently in</span><strong>{profile.location}</strong></div></div><div className="about-education"><p className="eyebrow">Education</p><strong>BSIT Graduate</strong><span>Cebu Institute of Technology - University</span></div></div></div><div className="section-divider" /><div className="about-grid supporting-about"><div className="reveal"><p className="body-copy">I work where business needs meet product decisions: understanding how a team operates, then building software that makes the important work easier to see and easier to do.</p><p className="body-copy">The goal is not to add more software. It is to make the right work feel more manageable.</p></div><aside className="info-card reveal reveal-delay"><p className="eyebrow">The short version</p><dl><div><dt>Role</dt><dd>{profile.role}</dd></div><div><dt>Best at</dt><dd>Turning workflows into products</dd></div><div><dt>Delivery</dt><dd>Web, desktop, mobile</dd></div><div><dt>Working style</dt><dd>Clear, practical, collaborative</dd></div></dl></aside></div><div className="section-divider" /><div id="experience"><SectionHeading eyebrow="Experience" title="The kinds of systems I know how to move forward." /><div className="timeline">{experience.map(item => <div className="timeline-item reveal" key={item.period}><div className="timeline-period">{item.period}</div><div><h3>{item.title}</h3><p className="muted">{item.company}</p><p>{item.description}</p></div></div>)}</div></div><div className="section-divider" /><SectionHeading eyebrow="Capabilities" title="Useful at every layer of the work." /><div className="skills-grid">{Object.entries(skills).map(([group, list]) => <div className="reveal" key={group}><h3>{group}</h3><ul>{list.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div><section id="skills" className="toolkit-section"><SectionHeading eyebrow="Skills" title="The tools behind the work." intro="A practical toolkit for shaping, building, and supporting software people rely on." />{toolkitGroups.map(group => <div className="toolkit-group" key={group.title}><div className="toolkit-heading"><h3>{group.title}</h3><span>{String(group.items.length).padStart(2, '0')}</span></div><div className="tool-grid">{group.items.map(item => <ToolkitCard key={item.name} item={item} />)}</div></div>)}</section></section>
}

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setError('Form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.')
      return
    }

    setSubmitting(true)
    setError('')

    const data = new FormData(form)
    data.append('access_key', accessKey)
    data.append('subject', 'New project inquiry from your portfolio')
    data.append('from_name', 'Digital Portfolio')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const result = await response.json()

      if (result.success) {
        form.reset()
        setSent(true)
      } else {
        setError(result.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Could not reach the server. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return <section className="section container contact-page"><div className="contact-intro reveal"><p className="eyebrow">Start a project</p><h1>Bring me the <span>messy part.</span></h1><p className="lead muted">{profile.contactIntro}</p><div className="contact-brief"><p className="eyebrow">Helpful context</p><ul><li>What are you trying to improve?</li><li>Who will use the software?</li><li>What would a good outcome look like?</li></ul></div></div><div className="contact-form-wrap reveal reveal-delay">{sent ? <div className="success-state" aria-live="polite"><span className="success-icon">✓</span><h2>Thanks for sharing the brief.</h2><p className="muted">Your message is on its way — I will get back to you soon.</p><button className="button button-secondary" onClick={() => setSent(false)}>Send another</button></div> : <form className="contact-form" onSubmit={onSubmit}><label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Email<input required name="email" type="email" autoComplete="email" placeholder="you@company.com" /></label><label>Project details<textarea required name="message" rows={7} placeholder="Tell me what you are building, improving, or untangling." /></label><input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />{error && <p className="form-error" role="alert">{error}</p>}<button className="button" type="submit" disabled={submitting}>{submitting ? 'Sending…' : <>Send project details <span aria-hidden="true">↗</span></>}</button></form>}</div></section>
}
