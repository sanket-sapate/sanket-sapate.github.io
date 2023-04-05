import React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

function Home() {
	const el = useRef("span");

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

	useEffect(() => {
		const typed1 = new Typed(
			el.current,
			{
				strings: [
					"नमस्ते",
					"Hello",
					"ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
					"Bonjour",
					"आदाब",
					"Hola",
					"Ciao",
					"Olá ",
				],
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
			className='md:absolute right-0 md:w-[60%] h-screen  w-full z-[49]'>
			<div className='grid place-items-center min-h-screen overflow-y-scroll h-full w-full  bg-[#fab327] p-10 pt-28 z-[49]'>
				<div className='justify-center flex flex-col gap-8 h-fit'>
					<h1
						className='
						text-lg
						md:text-xl
						tracking-wider
						font-bold 
						text-[#1A1914]
						'>
						Introduction
					</h1>

					<div className='flex justify-start gap-6 items-start w-full'>
						<span
							ref={el}
							id='salutation'
							className='text
						text-4xl 
						ease-out
						md:text-6xl 
						min-h-[65px]
						md:min-h-[90px]
						'></span>

						<motion.img
							className='h-16 w-16 md:h-20 md:w-20 bg-white p-2 -m-2 rounded-full'
							src='/wave.png'
						/>
					</div>

					<h1
						className={`
						text-lg
						font-normal font-sans md:min-h-[150px]`}>
						I am an aspiring web/app developer with a vast array of knowledge in
						many different front end and back end languages, responsive
						frameworks, databases, and best code practices.
						<br />
						My objective is simply to be the best web/app developer that I can be
						and to contribute to the technology industry all that I know and can
						do. <br />I am dedicated to perfecting my craft by learning from
						more seasoned developers, remaining humble, and continuously making
						strides to learn all that I can about development. <br />I believe
						that my understanding of problem solving and algorithms are also
						skills that have and will continue to contribute to my overall
						success as a developer.
						<br />
						<br />
						<br />
					</h1>

					<span
						style={{ fontFamily: "Montez, cursive" }}
						className='font text-4xl md:text-6xl underline underline-offset-8 text-black text-right -rotate-12 origin-center mt-8'>
						Sanket Sapate
					</span>
				</div>
			</div>
		</motion.div>
	);
}

export default Home;
