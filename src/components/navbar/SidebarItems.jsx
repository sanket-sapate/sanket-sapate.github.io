import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaHeart, FaCode, FaAt } from "react-icons/fa";

function SidebarItems({ activeLink, setActiveLink, setSidebar }) {
	const moveActiveLink = (key) => {
		if (key == 1) return "0";
		if (key == 2) return "100%";
		if (key == 3) return "200%";
		if (key == 4) return "300%";
		if (key == 5) return "400%";
	};

	console.log(activeLink);

	const movement = {
		y: moveActiveLink(activeLink),
	};

	const handleLinkClick = (e) => {
		// console.log(e);
		// const pathNo = e.target.value;
		// setActiveLink(pathNo);
		// setLink(pathNo);
	};

	return (
		<ul className='flex flex-col items-center h-full p-1 pt-4 rounded-lg bg-[var(--white-color-alt)]'>
			<li className='cursor-pointer w-[90%] relative px-4 text-sm text-center grid place-items-center h-[18%]'>
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
					onClick={() => {
						setActiveLink(1);
						setTimeout(() => {
							setSidebar(false);
						}, 500);
					}}
					whileHover={{ scale: 1.1 }}
					className={`cursor-pointer font-bold h-full w-full grid place-items-center ${
						activeLink == 1 ? "text-green-500" : "text-[var(--nav-text)]"
					} relative z-10`}>
					<div className='flex gap-2 items-center'>
						<FaHome className='h-5 w-5' /> {activeLink == 1 && "Home"}
					</div>
				</motion.label>
			</li>
			<li className='cursor-pointer relative h-[18%] grid place-items-center w-[90%] px-4 text-sm text-center'>
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
					onClick={() => {
						setActiveLink(2);
						setTimeout(() => {
							setSidebar(false);
						}, 500);
					}}
					whileHover={{ scale: 1.1 }}
					className={`cursor-pointer font-bold h-full w-full grid place-items-center  ${
						activeLink == 2 ? "text-green-500" : "text-[var(--nav-text)]"
					} relative z-10`}>
					<div className='flex gap-2 items-center'>
						<FaUser className='h-5 w-5' /> {activeLink == 2 && "It's Me"}
					</div>
				</motion.label>
			</li>
			<li className='cursor-pointer relative h-[18%] grid place-items-center w-[90%] px-4 text-sm text-center'>
				<input
					style={{ display: "none" }}
					type='radio'
					name='navLinks'
					onChange={handleLinkClick}
					value='3'
					id='work'
				/>{" "}
				<motion.label
					onClick={() => {
						setActiveLink(3);
						setTimeout(() => {
							setSidebar(false);
						}, 500);
					}}
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
			<li className='cursor-pointer relative h-[18%] grid place-items-center w-[90%] px-4 text-sm text-center'>
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
					onClick={() => {
						setActiveLink(4);
						setTimeout(() => {
							setSidebar(false);
						}, 500);
					}}
					whileHover={{ scale: 1.1 }}
					className={`cursor-pointer font-bold h-full w-full grid place-items-center  ${
						activeLink == 4 ? "text-green-500" : "text-[var(--nav-text)]"
					} relative z-10`}>
					<div className='flex gap-2 items-center'>
						<FaCode className='h-6 w-6' /> {activeLink == 4 && "My Projects"}
					</div>
				</motion.label>
			</li>
			<li className='cursor-pointer relative h-[18%] grid place-items-center w-[90%] px-4 text-sm text-center'>
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
					onClick={() => {
						setActiveLink(5);
						setTimeout(() => {
							setSidebar(false);
						}, 500);
					}}
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

export default SidebarItems;
