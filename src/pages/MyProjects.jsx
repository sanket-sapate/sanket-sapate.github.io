import { motion } from "framer-motion";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import ProjectsList from "../components/projects/ProjectsList";

function MyProjects() {
	const slideUp = {
		hidden: {
			right: "-100vw",
		},
		visible: {
			right: 0,
		},
		exit: {
			right: 0,
		},
	};

	const el = useRef("span");

	useEffect(() => {
		const typed1 = new Typed(
			el.current,
			{
				strings: ["KMW (Know My Work)"],
				startDelay: 200,
				typeSpeed: 120,
				backSpeed: 50,
				backDelay: 1500,
				smartBackspace: true,
				loop: true,
				showCursor: false,
			},
			"salutation"
		);

		// Destropying
		return () => {
			typed1.destroy();
		};
	}, []);

	return (
		<motion.div
			variants={slideUp}
			initial='hidden'
			animate='visible'
			exit='exit'
			transition={{ duration: 1.25, type: "spring", ease: "easeInOut" }}
			className='md:absolute right-0 md:w-[60%] h-screen w-full z-[49]'>
			<div className='h-screen w-full overflow-y-scroll bg-[#fe614e] p-10 pt-28 z-[49]'>
				<div className='flex flex-col gap-8 h-fit'>
					<h1
						className='
						text-lg
						md:text-xl
						tracking-wider
						font-bold 
						text-[#1A1914]
						'>
						Projects
					</h1>

					<div className='flex  gap-6 items-start w-full'>
						<h1
							ref={el}
							className='text
						text-4xl 
						ease-out
						md:text-6xl 
						min-h-[65px]
						md:min-h-[90px]
						'></h1>

						<motion.img
							className='h-16 w-16 md:h-24 md:w-24 bg-white p-2 -my-4 rounded-full'
							src='https://emojipedia-us.s3.amazonaws.com/source/skype/289/man-technologist_1f468-200d-1f4bb.png'
						/>
					</div>

					<div className='projectsContainer w-full'>
						<ProjectsList />
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default MyProjects;
