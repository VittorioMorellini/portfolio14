import React from "react";
import { ProjectList } from "../../../public/data/projects";
import Image from 'next/image';
import Link from "next/link";
import PageTransition from "@/components/pageTransition";

function Personal() {
  return (
    <PageTransition allowScroll={false}>
    <div>
      <h1 className="text-3xl text-center font-bold">My Personal Projects</h1>
      <div className="grid md:grid-cols-2 place-items-center">
        {ProjectList.map((project, idx) => {
          return (
            <div key={idx}
              className="text-center shadow-lg m-10 h-60 w-60 rounded-2xl"
            >
              <div className="w-full h-52 bg-center bg-no-repeat bg-cover rounded-t-2xl">
                <Image
                  //loader={ImageLoader}
                  unoptimized
                  src={project.image}
                  alt={project.name}
                  width={300}
                  height={200}
                />
              </div>  
              <div> 
                <Link href={`/features/personal/${project.id}`} className="hover:text-blue-400 block">
                    <h2 className="text-2xl">{project.name}</h2>
                </Link>                
              </div>
              <h1>{project.skills}</h1>
            </div>
          );
        })}
      </div>
    </div>
    </PageTransition>  
  );
}

export default Personal;