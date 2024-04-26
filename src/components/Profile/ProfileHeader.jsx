import { AvatarGroup, Flex, Avatar, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:"row"}}>
    <AvatarGroup 
    size={{base:"x1",md:"2x1"}}
    justifySelf={"center"}
    alignSelf={"flex-start"}
    mx={"auto"}>
      <Avatar name="Logo" src="/logo.png" alt="logo"/>
    </AvatarGroup>
    <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
      <Flex gap={4} direction={{base:"row",sm:"flex-start"}} alignItems={"center"} w={"full"}>
        <Text fontSize={{base:"sm",md:"lg"}}>
          Alexis Isla
        </Text>
        <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
          <Button bg={"white"} color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:"xs",md:"sm"}}>Editar Perfil</Button>
        </Flex>
      </Flex>
      <Flex alignItems={"center"} gap={{base:2,sm:4}}>
        <Text fontSize={{base:"xs",md:"sm"}}>
          <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
          Posts
          </Text>

          <Text fontSize={{base:"xs",md:"sm"}}>
          <Text as="span" fontWeight={"bold"} mr={1}>422</Text>
          Seguidos
          </Text>

          <Text fontSize={{base:"xs",md:"sm"}}>
          <Text as="span" fontWeight={"bold"} mr={1}>131</Text>
          Seguidores
          </Text>

      </Flex>
      <Flex alignItems={"center"} gap={4}>
        <Text fontSize={"sm"} fontWeight={"bold"}>Alexis Isla</Text>
      </Flex>
      <Text fontSize={"sm"}>Creando la red social para un mejor mañana</Text>
    </VStack>
    </Flex>
  )
}

export default ProfileHeader