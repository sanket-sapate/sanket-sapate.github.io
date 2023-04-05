import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/ProfileContainer";
import PageContainer from "./components/PageContainer";
import FloatingBubbles from "./components/floatingBubbles/FloatingBubbles";

function App() {
	const [activeLink, setActiveLink] = useState(1);

	return (
		<div className='App '>
			<Navbar
				activeLink={activeLink}
				setActiveLink={setActiveLink}
			/>
			<div className='flex flex-col md:flex-row'>
				<motion.div className='sticky w-full mb-40 md:mb-0 md:w-[40%] h-fit md:fixed top-28 z-10'>
					<Router>
						<ProfileContainer activeLink={activeLink} />
					</Router>
				</motion.div>
				<AnimatePresence initial={false}>
					<Router
						location={location}
						key={location.pathname}>
						<PageContainer
							key={window.location.pathname}
							activeLink={activeLink}
						/>
					</Router>
				</AnimatePresence>
			</div>
		</div>
	);
}

export default App;
