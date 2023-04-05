import {
	Box,
	Button,
	Card,
	CardBody,
	Heading,
	Stack,
	StackDivider,
	Tag,
	Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function ProjectDetails({
	images,
	subheading,
	features,
	techStack,
	githubLink,
}) {
	function getImageUrl(url) {
		return new URL(url, import.meta.url).href;
	}

	const imageElements = images.map((e, id) => (
		<img
			key={id}
			src={getImageUrl(e)}
			alt='hero'
			className='border border-black block mx-auto'
		/>
	));

	return (
		<motion.div className='md:h-0  flex flex-col overflow-hidden md:group-hover:h-full w-full transition-all duration-500 linear'>
			<motion.div className='h-72 flex gap-4 overflow-x-auto'>
				{imageElements}
			</motion.div>
			<Card>
				<CardBody>
					<Stack
						divider={<StackDivider />}
						spacing='4'>
						<Box>
							<Heading
								size='xs'
								textTransform='uppercase'>
								insights
							</Heading>
							<Text
								pt='2'
								fontSize='sm'>
								{subheading}
							</Text>
						</Box>
						<Box>
							<Heading
								size='xs'
								mb={2}
								textTransform='uppercase'>
								Features
							</Heading>
							{features.map((el) => (
								<Text
									fontSize='xs'
									margin={1}>
									{el}
								</Text>
							))}
						</Box>
						<Box>
							<Heading
								size='xs'
								textTransform='uppercase'>
								Tech Stack
							</Heading>
							{techStack.map((el) => (
								<Tag
									variant='solid'
									colorScheme='teal'
									size='sm'
									margin={1}>
									{el}
								</Tag>
							))}
						</Box>
					</Stack>
				</CardBody>
				<a
					href={githubLink}
					target='_blank'>
					<Button>Github</Button>
				</a>
			</Card>
		</motion.div>
	);
}

export default ProjectDetails;
