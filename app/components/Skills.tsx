import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section  id="skills" className="min-h-screen py-16 px-4  ">
        
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      
      
      {/* デスクトップサイズ用のスキル表示 */}
      <div className=" hidden md:grid grid-cols-3 gap-10 place-items-center mt-10">
        {skills.map((skill, index) => (
          <div key={index} className="w-[60%] h-auto rounded-lg mb-10">
            <p className="text-center text-lg font-bold mb-3">{skill.name}</p>
            <img
              src={skill.src}
              alt={skill.name}
              className="w-full h-32 object-contain mx-auto"
            />
          </div>
        ))}
      </div>

      {/* モバイル表示用のカルーセル */}
      <div className="flex justify-center items-center mt-10 md:hidden">
        <Carousel className="w-full max-w-lg">
          <CarouselContent className="flex space-x-4">
            {/* スキルの画像を3つずつ並べる */}
            {skills.map((skill, index) => {
              // 3つごとに1グループとして表示
              if (index % 3 === 0) {
                return (
                  <CarouselItem key={index} className="flex-shrink-0  flex justify-center space-x-4">
                    {/* 3つの画像を並べる */}
                    {skills.slice(index, index + 3).map((item, idx) => (
                      <Card key={idx} className="flex flex-col items-center w-full">
                        <CardContent className="p-6">
                          <img
                            src={item.src}
                            alt={item.name}
                            className="w-full h-32 object-contain mx-auto"
                          />
                          <p className="text-center mt-3 font-bold">{item.name}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </CarouselItem>
                );
              }
              return null;
            })}
          </CarouselContent>

          {/* ナビゲーションボタン */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
