import { AnimatePresence, delay, motion } from "framer-motion";
import SidebarItems from "./SidebarItems";

function Sidebar({ activeLink, setActiveLink, setSidebar }) {
	const slideRight = {
		hidden: { y: "100%" },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 500,
				delayChildren: 0.5,
				staggerChildren: 0.2,
			},
		},
		exit: { y: "100%" },
	};
	return (
		<motion.div
			variants={slideRight}
			transition={{ delay: 0.1 }}
			initial='hidden'
			animate='visible'
			exit='exit'
			id='sidebar'
			className='w-[90%] bg-black h-full text-white md:hidden fixed top-28 mx-[5%] rounded-lg p-8 z-[100]'>
			<AnimatePresence mode='wait'>
				<SidebarItems
					activeLink={activeLink}
					setActiveLink={setActiveLink}
					setSidebar={setSidebar}
				/>
			</AnimatePresence>
		</motion.div>
	);
}

export default Sidebar;
