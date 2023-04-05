import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const AnimatedIcon = ({ sidebar, setSidebar }) => {
	return (
		<button
			onClick={() => setSidebar((sidebar) => !sidebar)}
			className='md:hidden h-10 mr-1 w-10 grid place-items-center p-0 animatedIcon rounded-md '>
			{/* //TODO add icon */}
			{!sidebar ? <HamburgerIcon boxSize={6} /> : <CloseIcon />}
		</button>
	);
};

export default AnimatedIcon;
