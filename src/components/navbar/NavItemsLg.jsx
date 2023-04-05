import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaHeart, FaCode, FaAt } from "react-icons/fa";

function NavItemsLg({ activeLink, setActiveLink }) {
	const moveActiveLink = (key) => {
		if (key == 1) return "0";
		if (key == 2) return "100%";
		if (key == 3) return "200%";
		if (key == 4) return "300%";
		if (key == 5) return "400%";
	};

	const movement = {
		x: moveActiveLink(activeLink),
		transition: {
			type: "spring",
			damping: 30,
			stiffness: 700,
		},
	};

	const handleLinkClick = (e) => {
		const pathNo = e.target.value;
		setActiveLink(pathNo);
		// navigation(pathNo);
	};

	return (
		<ul className='hidden md:flex  items-center h-full p-1 rounded-lg bg-[var(--white-color-alt)]'>
			<li className='cursor-pointer w-28 relative px-4 text-sm text-center grid place-items-center h-full'>
				<motion.div
					animate={movement}
					className={`absolute h-full w-full bg-[var(--primary-color-alt)] 
					top-0 left-0 rounded-lg z-0`}></motion.div>
				<input
					style={{ display: "none" }}
					type='radio'
					name='navLinks'
					onChange={handleLinkClick}
					value='1'
					id='home'
				/>{" "}
				<motion.label
					htmlFor='home'
					whileHover={{ scale: 1.1 }}
					className={`cursor-pointer font-bold h-full w-full grid place-items-center ${
						activeLink == 1 ? "text-green-500" : "text-[var(--nav-text)]"
					} relative z-10`}>
					<div className='flex gap-2 items-center'>
						<FaHome className='h-5 w-5' /> {activeLink == 1 && "Home"}
					</div>
				</motion.label>
			</li>
			<li className='cursor-pointer relative h-full grid place-items-center w-28 px-4 text-sm text-center'>
				<input
					style={{ display: "none" }}
					type='radio'
					name='navLinks'
					value='2'
					onChange={handleLinkClick}
					id='about'
				/>{" "}
				<motion.label
					htmlFor='about'
					whileHover={{ scale: 1.1 }}
					className={`cursor-pointer font-bold h-full w-full grid place-items-center  ${
						activeLink == 2 ? "text-green-500" : "text-[var(--nav-text)]"
					} relative z-10`}>
					<div className='flex gap-2 items-center'>
						<FaUser className='h-5 w-5' /> {activeLink == 2 && "It's Me"}
					</div>
				</motion.label>
			</li>
			<li className='cursor-pointer relative h-full grid place-items-center w-28 px-4 text-sm text-center'>
				<input
					style={{ display: "none" }}
					type='radio'
					name='navLinks'
					onChange={handleLinkClick}
					value='3'
					id='work'
				/>{" "}
				<motion.label
					htmlFor='work'
					whileHover={{ scale: 1.1 }}
					className={`cursor-pointer font-bold h-full w-full grid place-items-center  ${
						activeLink == 3 ? "text-green-500" : "text-[var(--nav-text)]"
					} relative z-10`}>
					<div className='flex gap-2 items-center'>
						<FaHeart className='h-5 w-5' /> {activeLink == 3 && "My Love"}
					</div>
				</motion.label>
			</li>
			<li className='cursor-pointer relative h-full grid place-items-center w-28 px-4 text-sm text-center'>
				<input
					style={{ display: "none" }}
					type='radio'
					name='navLinks'
					value='4'
					onChange={handleLinkClick}
					id='projects'
				/>{" "}
				<motion.label
					htmlFor='projects'
					whileHover={{ scale: 1.1 }}
					className={`cursor-pointer font-bold h-full w-full grid place-items-center  ${
						activeLink == 4 ? "text-green-500" : "text-[var(--nav-text)]"
					} relative z-10`}>
					<div className='flex gap-2 items-center'>
						<FaCode className='h-6 w-6' /> {activeLink == 4 && "My Projects"}
					</div>
				</motion.label>
			</li>
			<li className='cursor-pointer relative h-full grid place-items-center w-28 px-4 text-sm text-center'>
				<input
					style={{ display: "none" }}
					type='radio'
					name='navLinks'
					value='5'
					id='contact'
					onChange={handleLinkClick}
				/>{" "}
				<motion.label
					htmlFor='contact'
					whileHover={{ scale: 1.1 }}
					className={`cursor-pointer font-bold h-full w-full grid place-items-center ${
						activeLink == 5 ? "text-green-500" : "text-[var(--nav-text)]"
					} relative z-10`}>
					<div className='flex gap-2 items-center'>
						<FaAt className='h-6 w-6' /> {activeLink == 5 && "Contact Me"}
					</div>
				</motion.label>
			</li>
		</ul>
	);
}

export default NavItemsLg;
