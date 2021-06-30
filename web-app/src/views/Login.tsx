import { Button, Flex, Heading, Input, useColorModeValue, Image, Box, Text, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createUser } from "../modules/user/services"
import { useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";

type Login = {
    email: string;
    password: string;
}

const initialState = {
    password: '',
    email: ''
}

const LoginPage = () => {
    const userDispatcher = useAppDispatch()
    const [login, setLogin] = useState<Login>(initialState)
    const user = useAppSelector(state => state.userState.user)

    const backgroundColor = useColorModeValue('whiteAlpha.600', '#1A202CAA');

    function handleClick(action: string) {
        switch (action) {
            case 'SIGNUP': userDispatcher(createUser(login))
        }
    }

    return (
        <>
            <Flex height="100Vh" alignItems="center" justifyContent="center">
                <Flex direction="column" alignItems="flex-start" justifyContent="center" height="100Vh" mr={12} >
                    <Heading>
                        Your money is yours...
                    </Heading>
                    <Text fontSize="3xl">
                        Pay for it, now!
                    </Text>
                </Flex>
                <Flex height="100Vh" justifyContent="center" direction="column" minWidth={450} backgroundColor={backgroundColor} p={12} mr={24} boxShadow="lg">
                    <Heading>{user.email}</Heading>
                    <label>Email</label>
                    <Input
                        mt={2}
                        placeholder="roger@portfolio.com"
                        variant="filled"
                        mb={3}
                        type="email"
                        onChange={(input) => setLogin({ ...login, email: input.target.value })}
                    />
                    <label>Password</label>
                    <InputGroup mt={2}>
                        <Input placeholder="********" variant="filled" mb={6} type="password" onChange={(input) => setLogin({ ...login, password: input.target.value })} ></Input>
                        <InputRightAddon children={<ViewIcon color="gray.500" />} />
                    </InputGroup>
                    <Button mb={6} color="whiteAlpha.900" backgroundColor="purple.700" onClick={() => handleClick('LOGIN')}>Login</Button>
                    {/*                 <Button mb={6} backgroundColor="aquamarine" onClick={() => handleClick('SIGNUP')}>Sign Up</Button>
 */}            </Flex>
            </Flex>
        </>
    )
}

export default LoginPage;