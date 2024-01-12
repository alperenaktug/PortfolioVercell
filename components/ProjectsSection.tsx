import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub } from "react-icons/bs"

const projects = [
  {
    name: "BurgerProject",
    description:
      "In this project, I designed a burger service page using React js.",
    image: "/BurgerProject.png",
    github: "https://github.com/alperenaktug/ReactBurgerProject",
    
  },
  {
    name: "GamingProject",
    description: "In this project, I designed a page where games can be searched as options using React js..",
    image: "/GamingProject.jpg",
    github: "https://github.com/alperenaktug/ReactGamingProject",
   
  },
  {
    name: "MovieApp",
    description:
      "In this project, I designed a React js project where films can be found by searching",
    image: "/MovieApp.webp",
    github: "https://github.com/alperenaktug/Movie-app",
   
  },

  {
    name: "YoutubeBasicClone",
    description:"In this project I designed youtube Clone page using html and css.",
    image: "/YoutubeBasicClone.jpg",
    github: "https://github.com/alperenaktug/youtube-clone-",
   
  }
  
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    
                      <Image
                        src={project.image}
                        alt=""
                        width={300}
                        height={300}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                   
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                     <Link href={project.github} target="blank">
                     <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />  
                     </Link>
                            
                       
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection