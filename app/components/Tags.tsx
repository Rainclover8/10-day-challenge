
interface TagsProps {
    techStack: string[];
}

function Tags({ techStack }: TagsProps) {
    return (
        <div className="flex gap-3">
            {techStack.map((tech, index) => (
                <span key={index} className='mt-4 border w-fit px-2 rounded-full'>{tech}</span>
            ))}
            </div>
    )
}

export default Tags
