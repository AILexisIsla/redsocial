import { Box, Image, Input, Button, Flex, Text, Link, Tooltip, InputRightElement, InputGroup } from '@chakra-ui/react';
import { useState } from 'react';
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constant';

const PostFooter = () => {
	const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(1000);

	const handleLike = () => {
		if (liked) {
			setLiked(false);
			setLikes(likes - 1);
		} else {
			setLiked(true);
			setLikes(likes + 1);
		}
	}

	return (
		<>
		<Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={4} mt={4}>
			<Box onClick={handleLike}>
				{!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
			</Box>

			<Box cursor={"pointer"} fontSize={18}>
				<CommentLogo/>
			</Box>
		</Flex>
		<Text fontWeight={600} fontSize={"sm"}>
			{likes} likes
		</Text>
		<Text fontWeight={700} fontSize={"sm"}>
			Alexis Isla {""}
		
		<Text as='span' fontWeight={400}>
			Mi primera chamba
		</Text>
		</Text>
		<Text color={"gray"} fontSize={"sm"}>
			Mira los comentarios 233 comentarios
		</Text>

		<Flex 
		alignItems={"center"}
		gap={2}
		justifyContent={"space-between"}
		w={"full"}
		>
			<InputGroup>
			<Input variant={"flushed"} placeholder={"comentar..."} fontSize={14}/>
			<InputRightElement>
			<Button fontSize={14}
			color={"blue.300"}
			fontWeight={600}
			cursor={"pointer"}
			_hover={{color:"white"}}
			bg={"transparent"}>post</Button>
			</InputRightElement>
			</InputGroup>
		</Flex>
		</>
	);
};

export default PostFooter
