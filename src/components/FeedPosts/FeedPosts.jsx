import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack, Image } from "@chakra-ui/react";
import FeedPost from "../../components/FeedPosts/FeedPost";
const FeedPosts = () => {
	return (
		<Container maxW={"container.sm"} py={10} px={2}>
		<FeedPost/>
		<FeedPost/>
		<FeedPost/>
		<FeedPost/>
		</Container>
	);
}

export default FeedPosts;
