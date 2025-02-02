import React from 'react'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";
import ScrollLink from './ScrollLink';

const HumbergerMenu = () => {
  return (
    <div className="md:hidden">

    <Drawer>
<DrawerTrigger>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    
</DrawerTrigger>
<DrawerContent>
<DrawerHeader>
<DrawerTitle></DrawerTitle> {/* 追加 */}
<ScrollLink href="#about-me">About me</ScrollLink>
    <ScrollLink href="#projects">Projects</ScrollLink>
    <ScrollLink href="#skills">Skills</ScrollLink>
</DrawerHeader>
<DrawerFooter>

<DrawerClose>
  <Button variant="outline">Close</Button>
</DrawerClose>
</DrawerFooter>
</DrawerContent>
</Drawer>

  </div>
  )
}

export default HumbergerMenu