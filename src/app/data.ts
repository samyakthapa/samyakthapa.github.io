type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Project: NoHands',
    description:
      'Controlling your music without any hands. Part of a final project for "Engineering Interactive Technologies"',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/dj79mjphr/video/upload/v1748570191/ooiy0wa5v86fl5n5u57x.mov',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freddie Mac',
    title: 'Software Engineer',
    start: '2024',
    end: 'Present',
    link: 'https://www.freddiemac.com',
    id: 'work1',
  },
  {
    company: 'Freddie Mac',
    title: 'Software Engineering Intern',
    start: 'May 2023',
    end: 'Aug 2023',
    link: 'https://www.freddiemac.com',
    id: 'work2',
  },
  {
    company: 'Naval Surface Warfare Center',
    title: 'Computer Science Research Intern',
    start: 'Jun 2022',
    end: 'Aug 2023',
    link: '',
    id: 'work3',
  },
  {
    company: 'Naval Research Laboratory',
    title: 'Computer Science Research Intern',
    start: 'Jun 2021',
    end: 'Aug 2021',
    link: '',
    id: 'work4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
