export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  category: string
  role: string
  tags: string[]
  image: string
  imageAlt: string
  liveUrl?: string
  sourceUrl?: string
  featured?: boolean
  problem: string
  solution: string
  results: string[]
}

export const profile = {
  name: 'Chris Gemps',
  fullName: 'Chrisalin Gemparo',
  role: 'Full-stack software developer',
  degree: 'BSIT graduate from Cebu Institute of Technology - University.',
  bio: 'I build dependable full-stack software for the workflows that keep a business moving.',
  availability: 'Software developer for business-critical workflows',
  email: 'gemparoc@gmail.com',
  phone: '09912299662',
  hometown: 'Bogo City, Cebu',
  location: 'Katipunan Street, Cebu City, Cebu',
  github: '',
  linkedin: '',
  contactIntro: 'Share the workflow, the bottleneck, or the product idea. We can shape the right next step from there.',
}

export const projects: Project[] = [
  {
    slug: 'enterprise-operations-suite',
    title: 'Enterprise Operations Suite',
    summary: 'One connected system for inventory, orders, finance, clients, and employees.',
    description: 'An operational backbone that helps teams see the business clearly, reduce duplicate work, and make better decisions from one place.',
    category: 'Enterprise systems',
    role: 'Software developer',
    tags: ['Inventory', 'Orders', 'Finance', 'Client management', 'Employee management'],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'A team collaborating around a table in a bright office',
    featured: true,
    problem: 'Operational information often lives across spreadsheets, inboxes, and disconnected tools. Teams lose time checking what is current before they can act.',
    solution: 'I bring core workflows into one clear system: stock and orders, financial reporting, client records, and employee operations work together instead of competing for attention.',
    results: ['One operational view for the team', 'Clearer handoffs between departments', 'A foundation that can grow with the business'],
  },
  {
    slug: 'booking-platforms',
    title: 'Booking Platforms',
    summary: 'Flexible scheduling experiences for clinics, hotels, and service businesses.',
    description: 'Booking software that keeps availability, customer details, and staff workflows aligned from the first search to the final confirmation.',
    category: 'Booking systems',
    role: 'Software developer',
    tags: ['Availability', 'Scheduling', 'Customer flows', 'Operations'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'A laptop and notebook on a desk in a focused workspace',
    featured: true,
    problem: 'A booking flow has to work for two audiences at once: customers who want a quick answer and staff who need dependable control over the schedule.',
    solution: 'I design the experience around clear availability, useful confirmations, and operational tools that help teams handle changes without losing context.',
    results: ['Less friction from search to confirmation', 'Better visibility across the schedule', 'Room for different business rules and services'],
  },
  {
    slug: 'desktop-and-mobile-apps',
    title: 'Desktop and Mobile Apps',
    summary: 'Cross-platform tools that help people do the work wherever it happens.',
    description: 'Practical applications for teams that move between desks, counters, sites, and customer-facing work throughout the day.',
    category: 'Desktop + mobile',
    role: 'Software developer',
    tags: ['Cross-platform', 'Responsive UI', 'Offline-aware flows', 'Team tools'],
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'A developer working at a laptop with code on screen',
    featured: true,
    problem: 'Teams lose momentum when the software only works in one place or asks people to repeat the same information across devices.',
    solution: 'I create focused experiences for the environments where work actually happens, keeping the interface consistent while respecting the needs of each device.',
    results: ['Consistent workflows across devices', 'Interfaces made for real working conditions', 'Maintainable foundations for future features'],
  },
  {
    slug: 'customer-service-portal',
    title: 'Customer Service Portal',
    summary: 'A clear customer-facing space for requests, updates, and shared context.',
    description: 'A portal that gives customers a useful view of what is happening while giving internal teams the context to respond well.',
    category: 'Customer software',
    role: 'Software developer',
    tags: ['Portals', 'Workflow design', 'Responsive UI'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'A small team reviewing work together on a laptop',
    problem: 'Customers should not need to chase updates or translate internal processes just to understand what happens next.',
    solution: 'I turn the important parts of a service workflow into a calm, accessible customer experience that supports both self-service and human help.',
    results: ['More useful customer communication', 'Less avoidable back-and-forth', 'A clearer bridge between service and software'],
  },
]

export const skills = {
  'Systems I build': ['Enterprise operations', 'Inventory and order workflows', 'Booking and scheduling', 'Client and employee management'],
  'Product delivery': ['Web applications', 'Desktop applications', 'Mobile applications', 'Responsive interfaces'],
  'Ways of working': ['Clear requirements', 'Maintainable architecture', 'Accessible UI', 'Thoughtful iteration'],
}

export type ToolkitItem = {
  name: string
  mark: string
  icon?: string
}

export const toolkitGroups = [
  {
    title: 'Interfaces and languages',
    items: [
      { name: 'React', mark: 'R', icon: 'https://cdn.simpleicons.org/react/1f5577' },
      { name: 'TypeScript', mark: 'TS', icon: 'https://cdn.simpleicons.org/typescript/1f5577' },
      { name: 'JavaScript', mark: 'JS', icon: 'https://cdn.simpleicons.org/javascript/1f5577' },
      { name: 'HTML', mark: '5', icon: 'https://cdn.simpleicons.org/html5/1f5577' },
      { name: 'CSS', mark: '3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg' },
      { name: 'Java', mark: 'J', icon: 'https://cdn.simpleicons.org/openjdk/1f5577' },
      { name: 'Python', mark: 'Py', icon: 'https://cdn.simpleicons.org/python/1f5577' },
      { name: 'Kotlin', mark: 'K', icon: 'https://cdn.simpleicons.org/kotlin/1f5577' },
      { name: 'C', mark: 'C', icon: 'https://cdn.simpleicons.org/c/1f5577' },
      { name: 'Responsive UI', mark: 'UI', icon: 'https://api.iconify.design/mdi:responsive.svg?color=%231f5577' },
    ],
  },
  {
    title: 'Frameworks and platforms',
    items: [
      { name: 'Vite', mark: 'V', icon: 'https://cdn.simpleicons.org/vite/1f5577' },
      { name: 'Android Project', mark: 'A', icon: 'https://cdn.simpleicons.org/android/1f5577' },
      { name: 'Electron Builder', mark: 'E', icon: 'https://cdn.simpleicons.org/electron/1f5577' },
      { name: 'Supabase', mark: 'S', icon: 'https://cdn.simpleicons.org/supabase/1f5577' },
      { name: 'Firebase', mark: 'F', icon: 'https://cdn.simpleicons.org/firebase/1f5577' },
      { name: 'Docker', mark: 'D', icon: 'https://cdn.simpleicons.org/docker/1f5577' },
      { name: 'Tailwind CSS', mark: 'TW', icon: 'https://cdn.simpleicons.org/tailwindcss/1f5577' },
      { name: 'Django', mark: 'Dj', icon: 'https://cdn.simpleicons.org/django/1f5577' },
      { name: 'Node.js', mark: 'N', icon: 'https://cdn.simpleicons.org/nodedotjs/1f5577' },
    ],
  },
  {
    title: 'Tools and delivery',
    items: [
      { name: 'Git', mark: 'G', icon: 'https://cdn.simpleicons.org/git/1f5577' },
      { name: 'VS Code', mark: 'VS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-plain.svg' },
      { name: 'GitHub', mark: 'GH', icon: 'https://cdn.simpleicons.org/github/1f5577' },
      { name: 'Render', mark: 'R', icon: 'https://cdn.simpleicons.org/render/1f5577' },
      { name: 'Vercel', mark: 'V', icon: 'https://cdn.simpleicons.org/vercel/1f5577' },
      { name: 'PowerShell', mark: 'PS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-plain.svg' },
      { name: 'PostgreSQL', mark: 'PG', icon: 'https://cdn.simpleicons.org/postgresql/1f5577' },
      { name: 'Storybook', mark: 'S', icon: 'https://cdn.simpleicons.org/storybook/1f5577' },
      { name: 'Testing Library', mark: 'TL', icon: 'https://cdn.simpleicons.org/testinglibrary/1f5577' },
      { name: 'Playwright', mark: 'P', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg' },
      { name: 'Design systems', mark: 'DS', icon: 'https://api.iconify.design/mdi:view-grid-outline.svg?color=%231f5577' },
    ],
  },
]

export const experience = [
  {
    period: 'Enterprise systems',
    title: 'Make the operational core visible',
    company: 'Inventory, orders, finance, clients, and employees',
    description: 'Connected systems that give teams a clearer view of the work behind the business and the information needed to move it forward.',
  },
  {
    period: 'Booking platforms',
    title: 'Make availability easier to trust',
    company: 'Clinics, hotels, and service businesses',
    description: 'Scheduling experiences that balance a fast customer journey with the control staff need to manage real-world changes.',
  },
  {
    period: 'Desktop + mobile',
    title: 'Meet people where the work happens',
    company: 'Cross-platform applications',
    description: 'Focused tools for teams moving between desks, devices, locations, and customer-facing work.',
  },
]
