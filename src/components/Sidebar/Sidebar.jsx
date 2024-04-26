import { Box, VStack, Image, Input, Button, Flex, Text, Link, Tooltip, Avatar} from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constant';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';



const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />,
      text: "Profile",
      link: "/",
    },
  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.400"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}>

      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link as={RouterLink} to={"/"} pl={2} display={{ base: "none", md: "block" }} cursor={"pointer"}>
          <Image src='/logo2.png' /></Link>
        <Link as={RouterLink} to={"/"} p={2} display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.400" }}
          w={{ base: 10 }}
          cursor={"pointer"}>
          <InstagramMobileLogo /></Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement="right"
            ml={1}
            openDelay={500}
            display={{base:"block", md:"none"}}>
            <Link display={"flex"}
            to={item.link || null}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{bg:"whiteAlpha.400"}}
            borderRadius={6}
            p={2}
            w={{base:10, md:"full"}}
            justifyContent={{base:'center', md:'flex-start'}}
            >
            {item.icon}
            <Box display={{base:"none",md:"block"}}>
              {item.text}
            </Box>
            </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
            hasArrow
            label={"logout"}
            placement="right"
            ml={1}
            openDelay={500}
            display={{base:"block", md:"none"}}>
            <Link display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{bg:"whiteAlpha.400"}}
            borderRadius={6}
            p={2}
            w={{base:10, md:"full"}}
            marginTop={"auto"}
            justifyContent={{base:'center', md:'flex-start'}}
            >
            <BiLogOut size={25}/>
            <Box display={{base:"none",md:"block"}}>
              Logout
            </Box>
            </Link>
            </Tooltip>
      </Flex>
    </Box>
  );
}

export default Sidebar;
