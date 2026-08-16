export type Stack = "React" | "Angular" | "Flutter" | "Full-stack" | "Web"

export interface Project {
  id: number
  title: string
  stack: Stack
  role: string
  features: string[]
  github: string
  demo?: string
  img: string
  year: string
  highlight: boolean
  tags: string[]
}

export interface NavLink {
  label: string
  href: string
}
