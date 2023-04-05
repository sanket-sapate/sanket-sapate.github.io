import { IconButton, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./floating.css";

const FloatingBubbles = () => {
	return (
		<div id='background-wrap'>
			<a
				className='bubble x1'
				href='https://github.com/sanket-sapate'
				target={"_blank"}>
				<IconButton
					aria-label='github'
					variant='ghost'
					size='lg'
					fontSize='9xl'
					icon={<BsGithub />}
					_hover={{
						bg: "blue.500",
						color: useColorModeValue("white", "gray.700"),
					}}
					isRound
				/>
			</a>
			{/* <div className='bubble x2'></div> */}
			<a
				className='bubble x5'
				href='#'>
				<IconButton
					aria-label='twitter'
					variant='ghost'
					size='lg'
					fontSize='9xl'
					icon={<BsTwitter size='92px' />}
					_hover={{
						bg: "blue.500",
						color: useColorModeValue("white", "gray.700"),
					}}
					isRound
				/>
			</a>
			{/* <div className='bubble x4'></div> */}
			<a
				className='bubble x3'
				href='https://www.linkedin.com/in/sanket-sapate-205a22183/'>
				<IconButton
					aria-label='linkedin'
					variant='ghost'
					size='lg'
					fontSize='9xl'
					icon={<BsLinkedin size='96px' />}
					_hover={{
						bg: "blue.500",
						color: useColorModeValue("white", "gray.700"),
					}}
					isRound
				/>
			</a>
			{/* <div className='bubble x6'></div> */}
			{/* <div className='bubble x7'></div> */}
			{/* <div className='bubble x8'></div> */}
			{/* <div className='bubble x9'></div> */}
			{/* <div className='bubble x10'></div> */}
		</div>
	);
};

export default FloatingBubbles;
