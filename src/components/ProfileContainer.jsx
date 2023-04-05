import React from "react";
import dp from "../assets/images/dp/dp.jpg";
import dp2 from "../assets/images/dp/dp2.jpg";
import dp3 from "../assets/images/dp/dp3.jpg";
import dp4 from "../assets/images/dp/dp4.jpg";
import dp5 from "../assets/images/dp/dp5.jpg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import FloatingBubbles from "./floatingBubbles/FloatingBubbles";

export default function ProfileContainer({ activeLink }) {
	const el = useRef(null);

	const dps = {
		dp1: dp,
		dp2: dp2,
		dp3: dp3,
		dp4: dp4,
		dp5: dp5,
	};

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Sanket Sapate", "App Developer", "Web Developer"], // Strings to display
			// Speed settings, try diffrent values untill you get good results
			startDelay: 200,
			typeSpeed: 150,
			backSpeed: 50,
			backDelay: 3000,
			smartBackspace: true,
			loop: true,
			showCursor: false,
		});

		// Destropying
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<>
			<FloatingBubbles />
			<div
				className={`relative left-[50%] mt-8 md:mt-12 -translate-x-1/2 max-h-[35rem] md:max-h-[42rem] h-[calc(50vh+10vw)] md:max-w-[25rem] max-w-[20rem] w-[80%] -z-10 bg-[#edf2f7]`}>
				<div
					className={`
        before:content-['']
        before:absolute
        before:block
        before:h-[110%]
        before:w-[85%]
        before:left-[50%]
        before:translate-x-[-50%]
        before:border-2
        before:border-[#1A1914]/50
        before:scale-y-[1.02] 
        before:rounded-lg 
        
        absolute flex items-center   justify-center   h-full  w-full  border-2  border-[#1A1914]/50 rounded-lg 
        left-[50%] -translate-x-1/2 
        
        after:content-['']
        after:absolute
        after:block
        after:w-[110%]
        after:h-[85%]
        after:top-[50%]
        after:translate-y-[-50%]
        after:border-2
        after:border-[#1a1914]/50
        after:scale-x-[1.02] 
        after:rounded-lg
        `}>
					<div className='relative flex flex-col items-center justify-between py-14 pb-10 h-full'>
						<img
							className='w-[65%] sm:w-[80%] aspect-square'
							src={dps[`dp${activeLink}`]}
							alt='/'
						/>

						<div className='w-[80%] h-[20%]  flex flex-col justify-around '>
							<p className=' text-[#82796C] tracking-wider text-center text-sm'>
								Hey there, This is me!!
							</p>
							<h1
								ref={el}
								className="
                    relative 
                    py-1
                    text-lg
                    text-[#1A1914]
                   w-100%
                    md:min-h-[44px]
                    min-h-[40px]
                    lg:text-xl 
                    text-[zinc-900]
                    font-normal
                    px-6
                    lg:px-[10%]
                    text-center
                    
                    before:content-['<']
                    before:absolute
                    before:left-0
                    before:top-1/2
                    before:-translate-y-1/2
                    before:text-4xl
                    before:font-mono
                    before:text-green-500
                    before:animate-pulse

                    after:content-['/>']
                    after:absolute
                    after:right-0
                    after:top-1/2
                    after:-translate-y-1/2
                    after:text-4xl
                    after:font-mono
                    after:text-green-500
                    after:animate-pulse
                    "></h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
