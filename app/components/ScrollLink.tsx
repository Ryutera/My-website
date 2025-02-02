"use client"


import type React from "react" // Import React

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
}

export default function ScrollLink({ href, children }: ScrollLinkProps) {


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <a  href={href} onClick={handleClick} className="text-gray-600 hover:text-gray-900">
      {children}
    </a>
  )
}

