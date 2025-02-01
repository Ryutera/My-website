import React from 'react'
interface skillProps{
    name: string, src: string 
}

const SkillsDesignPC = ({skills}:{skills:skillProps[]}) => {
  return (
   
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
   
  )
}

export default SkillsDesignPC