import {
    GridItem,
    Flex,
    Text,
    Image,
    Box,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Avatar,
    Divider,
    VStack,
  } from "@chakra-ui/react";

const Comments = ({createdAt, username,profilePic,text}) => {
  return (
    
    <Flex gap={4}>
          <Avatar
                      src={profilePic}
                      size={"sm"}
                      name={username}
                    />
        <Flex direction={"column"} >
            <Flex gap={2}>
                <Text fontWeight={"bold"} fontSize={12}>{username}</Text>
                <Text fontSize={14}>{text}</Text>
                
            </Flex>
            <Text fontSize={12} color={"gray"}>{createdAt}</Text>
        </Flex>
    </Flex>
    
  )
};

export default Comments;