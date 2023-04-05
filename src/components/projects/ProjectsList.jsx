import projectsData from "../../assets/data/projects.json";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
	const projectCards = projectsData.projects.map((e, i) => (
		<ProjectCard
			key={e.projectName}
			projectName={e.projectName}
			images={e.images}
			description={e.description}
			subheading={e.subheading}
			features={e.features}
			techStack={e.techStack}
			liveLink={e.liveLink}
			githubLink={e.githubLink}
		/>
	));

	return (
		<ul style={{ transform: "preserve3d", perspective: 1500, width: "100%" }}>
			{projectCards}
		</ul>
	);
}

export default ProjectsList;
