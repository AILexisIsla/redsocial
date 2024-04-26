import { Box, Text, Flex, Avatar} from "@chakra-ui/react";

const PostHeader = () => {
	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} mb={4} mt={6}>
			{/* lado isquierdo */}
			<Flex alignItems={"center"} gap={2}>
				<Avatar src="/img2.png" alt="user profile pic" size={"sm"}></Avatar>
				<Flex fontSize={12} fontWeight={"bold"} gap={2}>
					Alexis Isla 
					<Box color={"gray.500"}>
						. 1W
					</Box>
				</Flex>
			</Flex>
			{/* Lado derecho */}
			<Box cursor={"pointer"}> 
				<Text fontSize={18}
				color={"blue.500"}
				fontWeight={"bold"}
				_hover={{color:"white",}}
				transition={"0.2s ease-in-out"}>
					::
				</Text>
			</Box>
		</Flex>
	);
}

export default PostHeader;
