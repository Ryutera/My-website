// Skills.tsx
import React from 'react';

import SkillsDesignPC from './SkillsDesignPC';
import SkillsDesignMobile from './SkillsDesignMobile';

const skills = [
  { name: 'HTML', src: '/images/html.png' },
  { name: 'CSS', src: '/images/css.png' },
  { name: 'JavaScript', src: '/images/js.png' },
  { name: 'TypeScript', src: '/images/ts.png' },
  { name: 'React', src: '/images/react.png' },
  { name: 'Next.js', src: '/images/next-js.svg' },
  { name: 'Tailwind CSS', src: '/images/tailwind.png' },
  { name: 'Supabase', src: '/images/supabase.jpeg' },
  { name: 'Prisma', src: '/images/prisma.svg' },
];



const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-16 px-4">
      <h2 className="text-3xl font-bold text-center">Skills</h2>

      {/* デスクトップサイズ用のスキル表示 */}
      <SkillsDesignPC skills={skills} />

      {/* モバイル表示用のカルーセル */}
      <SkillsDesignMobile  skills={skills} />
    </section>
  );
};

export default Skills;
