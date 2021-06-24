import { Button, Flex, Heading, Input, useColorModeValue } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { create as createUser } from '../modules/user/reducer'

const LoginPage = () => {
    const userCreated = useAppSelector(state => state.user.value)
    const userDispatcher = useAppDispatch()
    const backgroundColor = useColorModeValue('gray.100', 'gray.800');
    
    function handleClick() {
        userDispatcher(createUser())
    }
    return (
        <Flex height="100Vh" alignItems="center" justifyContent="center">
            <Flex direction="column" backgroundColor={backgroundColor} p={12}>
                <Heading>{ userCreated }</Heading>
                <Input placeholder="roger@portfolio.com" variant="filled" mb={3} type="email" ></Input>
                <Input placeholder="********" variant="filled" mb={6} type="passowrd" ></Input>
                <Button mb={6} backgroundColor="aquamarine" onClick={handleClick}>LogIn</Button>
            </Flex>
        </Flex>
    )
}

export default LoginPage;