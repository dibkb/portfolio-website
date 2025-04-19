type Project = {
  name: string
  description: string
  link: string
  video: string
  blog: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  details: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Tesseract AI Code Editor',
    blog: 'blog/tesseract-editor-working',
    description:
      'Turn screenshots into editable html/css/js with powerful AI code editor',
    link: 'https://app.tesseract.borborah.xyz/',
    video:
      'https://dibkb-tesseract-images.s3.ap-south-1.amazonaws.com/website/demo-videos/Tesss+Web+Video.mp4',
    id: 'project21',
  },
  {
    name: 'Amazon SWOT AI Optimizer',
    blog: 'blog/excel-ai',
    description:
      'Analyze reviews, run A/B tests, and improve Amazon listings with AI-powered insights',
    link: 'https://excel.borborah.xyz/',
    video:
      'https://dibkb-tesseract-images.s3.ap-south-1.amazonaws.com/website/demo-videos/Amazon+Excel+Demo.mp4',
    id: 'project2',
  },
  {
    name: 'Cinema Lens',
    blog: 'blog/cinema-lens-working',
    description:
      'Agentic AI movie recommender chatbot using graphs, semantics, web.',
    link: 'https://cinema.borborah.xyz/',
    video:
      'https://dibkb-tesseract-images.s3.ap-south-1.amazonaws.com/website/demo-videos/cinema-lens.mp4',
    id: 'project1',
  },
  {
    name: 'LLM Browser Automation',
    blog: 'blog/browser-automation',
    description:
      'Automate simple tasks with a browser automation chatbot agent',
    link: 'https://github.com/dibkb/moonshot',
    video:
      'https://dibkb-tesseract-images.s3.ap-south-1.amazonaws.com/website/demo-videos/Automation+Video.mp4',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
    details: [
      'Led product development and strategy',
      'Managed client relationships and project scopes',
      'Developed custom solutions for enterprise clients',
      'Built and managed a team of developers and designers',
    ],
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
    details: [
      'Created responsive web applications with React and Next.js',
      'Designed and implemented UI/UX for various clients',
      'Integrated third-party APIs and services',
      'Optimized performance for production applications',
    ],
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
    details: [
      'Built custom websites and web applications',
      'Implemented responsive design principles',
      'Worked with various JavaScript frameworks',
      'Created and maintained component libraries',
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/dibkb',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/dkborborah',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dibkb',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/dib.kb',
  },
  {
    label: 'Resume pdf',
    link: 'https://dibas.borborah.xyz/resume.pdf',
  },
]

export const EMAIL = 'dibas9110@gmail.com'
