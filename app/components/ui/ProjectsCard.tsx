import React from 'react'
import { PiGithubLogo } from "react-icons/pi";
import { RiExternalLinkFill } from "react-icons/ri";
import Tags from '../Tags';


interface projectType {
    projectDay: string;
    projectName: string;
    projectDetail: string;
    tags: string[];
}

function ProjectsCard({ projectDay, projectName, projectDetail, tags }: projectType) {
    return (
        <div className='border rounded-lg p-4 shadow-sm flex justify-between shadow-gray-50 '>
            <div className="flex flex-col">
                <span className='bg-blue-600 py-0.5 px-4 rounded-full w-fit'>{projectDay}</span>
                <h1 className='text-2xl mt-4'>{projectName}</h1>
                <small className='text-sm mt-2'>{projectDetail}</small>
                <Tags techStack={tags} />
            </div>
            <div className="flex gap-2">
                <a href="/" className='border bg-white border-gray-600 h-fit text-black px-4 py-1 rounded-lg flex items-center gap-2 hover:bg-purple-400 duration-200'> <PiGithubLogo /></a>
                <a href="/" className=' flex justify-center items-center bg-blue-700 text-white h-fit px-4 py-1 rounded-lg'>
                    <RiExternalLinkFill size={12} />
                </a>
            </div>
        </div>
    )
}

export default ProjectsCard
