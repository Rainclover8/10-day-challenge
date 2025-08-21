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
        <div className='border rounded-lg p-4 shadow-sm flex flex-col md:flex-row justify-between gap-4 md:gap-0 shadow-gray-50'>
            {/* Sol taraf */}
            <div className="flex flex-col md:flex-1">
                <span className='bg-blue-600 py-1 px-4 rounded-full w-fit text-white text-sm'>{projectDay}</span>
                <h1 className='text-xl md:text-2xl mt-4'>{projectName}</h1>
                <small className='text-sm mt-2 text-gray-600'>{projectDetail}</small>
                <Tags techStack={tags}  />
            </div>

            {/* Sağ taraf - butonlar */}
            <div className="flex flex-col sm:flex-row gap-2 md:items-start md:justify-end">
                <a 
                    href="/" 
                    className='border bg-white border-gray-600 text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-400 hover:text-white duration-200'
                > 
                    <PiGithubLogo size={20} /> Github
                </a>
                <a 
                    href="/" 
                    className='flex justify-center items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 duration-200'
                >
                    <RiExternalLinkFill size={20} /> Demo
                </a>
            </div>
        </div>
    )
}

export default ProjectsCard
