import { motion } from "framer-motion";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

function ItsMe() {
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
				strings: ["KYC (Know Your Coder)"],
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
			<div className='grid place-items-center min-h-screen w-full  bg-[#FFA19F] p-10 pt-28 z-[49]'>
				<div className='justify-center flex flex-col gap-8 h-fit'>
					<h1
						className='
						text-lg
						md:text-xl
						tracking-wider
						font-bold 
						text-[#1A1914]
						'>
						Biography
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

					<h1
						className={`
						text-lg
						text-justify
						font-normal font-sans md:min-h-[150px]`}>
						Computers have fascinated me since childhood. I have a sound
						understanding about Web Development both Front-End and Back-End,
						Computer Fundamentals, Data Structures & Algorithms and programming
						languages like JavaScript , Java and Python
						<br />
						<br /> Building projects has got me hands-on experience with MERN
						(MongoDB, ExpressJS, ReactJS, NodeJS) tech stack trained me to
						become a more adaptive and collaborative professional.
						<br />
						<br />I also have been a Teacher for enough time now. Making things
						Simpler to understand has always been my thing. I am passionate
						about building challenging projects and excelling in their
						development, and looking forward to creating a mark for myself as a
						Full Stack Developer.
					</h1>

					<p className='flex gap-4'>
						<img
							className='w-1/2'
							src='https://github-readme-stats.vercel.app/api/top-langs?username=sanket-sapate&show_icons=true&locale=en&layout=compact'
							alt='sanket-sapate'
						/>
						<img
							className='w-1/2'
							src='https://github-readme-streak-stats.herokuapp.com/?user=sanket-sapate&'
							alt='sanket-sapate'
						/>
					</p>

					<p>
						&nbsp;
						<img
							align='center'
							className='w-full'
							src='https://github-readme-stats.vercel.app/api?username=sanket-sapate&show_icons=true&locale=en'
							alt='sanket-sapate'
						/>
					</p>

					<div className='flex flex-col md:flex-row gap-4'>
						<table className='table-fixed h-60 w-full'>
							<thead></thead>
							<tbody className=''>
								<tr className=''>
									<th className='text-left  pr-3 text-zinc-600'>NAME</th>
									<td className='text-lg font-mono text-black align-middle'>
										Sanket Sapate
									</td>
								</tr>
								<tr className=''>
									<th className='text-left  pr-3 text-zinc-600'>AGE</th>
									<td className='text-lg font-mono text-black align-middle'>
										22
									</td>
								</tr>
								<tr className=''>
									<th className='text-left  pr-3 text-zinc-600'>FROM</th>
									<td className='text-lg font-mono text-black align-middle'>
										Nagpur, Maharashtra
									</td>
								</tr>
								<tr className=''>
									<th className='text-left  pr-3 text-zinc-600'>PHONE</th>
									<td className='text-lg font-mono text-black align-middle'>
									<a href="tel:+919673343022">+91 9673343022</a>	
									</td>
								</tr>
								<tr className=''>
									<th className='text-left  pr-3 text-zinc-600'>EMAIL</th>
									<td className='text-lg font-mono text-black align-middle break-words'>
										<a href="mailto:sanketsapatevnit@gmail.com">sanketsapatevnit@gmail.com</a>	
									</td>
								</tr>
							</tbody>
						</table>
						<div className='1/2'></div>
						<div className='grid place-items-center text-center border border-black rounded-lg w-full md:max-w-[20rem] group'>
							<svg
								className='w-14  group-hover:animate-bounce  '
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 576 512'>
								<path d='M368 344h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 344 368 344zM208 320c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 291.3 172.7 320 208 320zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16h-192c0-44.18-35.82-80-80-80h-64C131.8 352 96 387.8 96 432H64c-8.822 0-16-7.178-16-16V160h480V416zM368 264h96c13.25 0 24-10.75 24-24s-10.75-24-24-24h-96c-13.25 0-24 10.75-24 24S354.8 264 368 264z' />
							</svg>
							<h1 className='text-black'>Download Resume</h1>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default ItsMe;
