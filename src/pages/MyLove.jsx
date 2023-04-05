import html from "../assets/images/skills/htmlLogo.webp";
import css from "../assets/images/skills/cssLogo.webp";
import js from "../assets/images/skills/jsLogo.webp";
import nodeJS from "../assets/images/skills/nodeJSLogo.png";
import react from "../assets/images/skills/reactLogo.png";
import java from "../assets/images/skills/javaLogo.webp";
import "../styles/myLove.css";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

function MyLove() {
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
				strings: ["KMS (Know My Skills)"],
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
			className='md:absolute right-0 md:w-[60%]  bg-black h-screen overflow-y-scroll w-full z-[49]'>
			<div className='grid place-items-center min-h-screen w-full  bg-[#00C9FF] p-10 pt-28 z-[49]'>
				<div className='justify-center flex flex-col gap-8 h-fit w-full'>
					<h1
						className='
						text-lg
						md:text-xl
						tracking-wider
						font-bold 
						text-[#1A1914]
						'>
						Skills
					</h1>

					<div className='flex justify-start gap-6 items-start w-full'>
						<span
							ref={el}
							className='text
						text-4xl 
						ease-out
						md:text-6xl 
						min-h-[65px]
						md:min-h-[90px]
						'></span>

						<motion.img
							className='h-16 w-16 md:h-24 md:w-24 bg-white p-2 -my-4 rounded-full'
							src='https://emojipedia-us.s3.amazonaws.com/source/skype/289/man-technologist_1f468-200d-1f4bb.png'
						/>
					</div>

					<div className='cardsContainer  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-12 '>
						<div className='relative rounded-2xl p-1 md:p-8 bg-[rgba(255,255,255,0.25)]'>
							<div className='cardOverlay'>
								<p>
									HTML is the Basic Structure of a website.
									<br />
									HTML tags to a website are just like the bricks of a house.
								</p>
							</div>
							<img
								src={html}
								alt=''
								className='w-full '
							/>
						</div>
						<div className='relative rounded-2xl p-1 md:p-8 bg-[rgba(255,255,255,0.25)]'>
							<div className='cardOverlay'>
								<p>
									CSS is like the beatification of the HTML
									<br />
									It acts just like the OPPO, VIVO camera but for websites.
								</p>
							</div>
							<img
								src={css}
								alt=''
								className='w-full '
							/>
						</div>
						<div className='relative rounded-2xl p-1 md:p-8 bg-[rgba(255,255,255,0.25)]'>
							<div className='cardOverlay'>
								<p>
									We can add Logic, just like we decide in our house what button
									will turn on which fan the same can be achieved in website
									using JS.
								</p>
							</div>
							<img
								src={js}
								alt=''
								className='w-full '
							/>
						</div>
						<div className='relative grid place-items-center rounded-2xl p-1 md:p-8 bg-[rgba(255,255,255,0.25)]'>
							<div className='cardOverlay'><p>React is a popular JavaScript library for building user interfaces that allows developers to create reusable UI components and efficiently manage application state.</p></div>
							<img
								src={react}
								alt=''
								className='w-full bg-white'
							/>
						</div>
						<div className='relative rounded-2xl p-1 md:p-8 bg-[rgba(255,255,255,0.25)]'>
							<div className='cardOverlay'></div>
							<img
								src={nodeJS}
								alt=''
								className='w-full '
							/>
						</div>
						<div className='relative grid place-items-center rounded-2xl p-1 md:p-8 bg-[rgba(255,255,255,0.25)]'>
							<div className='cardOverlay'><p>React Native is an open-source framework for building mobile applications using JavaScript and React.</p></div>
							<img
								src={react}
								alt='react-native'
								className='w-full bg-white'
							/>
						</div>
						<div className='relative rounded-2xl p-1 md:p-8 bg-[rgba(255,255,255,0.25)]'>
							<div className='cardOverlay'></div>
							<img
								src={java}
								alt=''
								className='w-full '
							/>
						</div>
						
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default MyLove;
