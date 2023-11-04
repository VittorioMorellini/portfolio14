import { useRouter } from "next/router";
import React from "react";
import { Project } from "../../../types/project";
import { ProjectList } from "../../../public/data/projects";
import Image from 'next/image';
import PageTransition from "@/components/pageTransition";
//import { IndexPageRef } from "types/types";
//import PageTransition from "@/components/pageTransition";

interface ProjectItemProps {
    //item: Project,
    //ref: IndexPageRef
}

function ProjectItem({ params }: { params: { id: string } }) {
  // const router = useRouter();
  const id = params.id;
  let item: Project | undefined = ProjectList.find(x => x.id.toString() === id)

  return (
    <PageTransition> 
    <div className="text-center h-full w-full">
      <h1>Personal project #{id} - <b>{item?.name}</b></h1>
      {item && 
      <div className="bg-transparent w-full h-96 pt-4 mx-auto md:flex md:justify-center">
        <Image
          unoptimized
          src={item.image}
          alt={item.name}          
          width={550}
          //height=""
        />
      </div>
      }
      <div className="pt-4">
        <h1 className="text-2xl"> {item?.name} </h1>
      </div>
      <div>
        {item?.skills}
      </div>
      <div className="pt-4">
        {item?.description}
      </div>
    </div>
    </PageTransition>  
  );
}
export default ProjectItem;
