import ProjectDetails from "./ProjectDetails";
import "../../styles/projects.css";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";

function ProjectCard({
	projectName,
	images,
	description,
	features,
	subheading,
	techStack,
	githubLink,
	liveLink,
}) {
	return (
		<motion.li
			id='projectCard'
			style={{
				transform: "rotateX(30deg)",
				boxShadow: "0px 40px 10px rgba(0,0,0,0.5)",
			}}
			className='group p-4 my-2 cursor-pointer bg-[rgba(255,255,255,0.25)] transition-all duration-500 w-full linear rounded-lg'>
			<div className='flex justify-between items-center'>
				<h2 className='my-4 text-xl font-semibold'>{projectName}</h2>
				<a
					href={liveLink}
					target='_blank'>
					<Button>Go Live</Button>
				</a>
			</div>
			<div className='md:h-0 shadow-lg mb-4 p-8 h-full md:group-hover:border-8 md:p-0 md:group-hover:p-8  md:group-hover:h-[90vh] bg-white transition-all duration-500 linear'>
				<ProjectDetails
					images={images}
					subheading={subheading}
					description={description}
					features={features}
					techStack={techStack}
					githubLink={githubLink}
				/>
			</div>
		</motion.li>
	);
}

export default ProjectCard;
