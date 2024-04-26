import { Box, VStack, Image, Input, Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true);
    const navigate =useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleAuth = () => {
      if(!inputs.email || !inputs.password) {
        alert("por favor llene todo los campos");
        return;
      }
      
      navigate("/");
    };


    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src="/logo.png" h={24} cursor={"pointer"} alt='Red Social' />
                    <Input
                        placeholder='Email'
                        fontSize={14}
                        type='email'

                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />

                    <Input
                        placeholder='Password'
                        fontSize={14}
                        type="password"

                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />

                    {!isLogin ? (
                        <Input
                            placeholder='Confirmar Password'
                            fontSize={14}
                            type="password"

                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    ) : null}

                    <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} onClick={handleAuth}>
                        {isLogin ? "Log In" : "Sing Up"}
                    </Button>

                    <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                        <Box flex={2} h={1} bg={"gray.500"} />
                        <Text mx={1} color={"white"}>O</Text>
                        <Box flex={2} h={1} bg={"gray.500"} />
                    </Flex>

                    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                        <Image src='/google.png' w={5} alt='google logo' />
                        <Text mx={2} color={"blue.500"}>
                            log In con Google
                        </Text>
                    </Flex>

                </VStack>

            </Box>

            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "No tienes cuenta?" : "Ya tengo cuenta"}
                    </Box>

                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                        {isLogin ? "Sing Up" : "Log In"}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm
