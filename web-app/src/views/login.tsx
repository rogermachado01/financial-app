import { Button, Flex, Input, useColorModeValue } from "@chakra-ui/react";

const LoginPage = () => {
    const backgroundColor = useColorModeValue('gray.100', 'gray.800');
    return (
        <Flex height="100Vh" alignItems="center" justifyContent="center">
            <Flex direction="column" backgroundColor={backgroundColor} p={12}>
                <Input placeholder="roger@portfolio.com" variant="filled" mb={3} type="email" ></Input>
                <Input placeholder="********" variant="filled" mb={6} type="passowrd" ></Input>
                <Button mb={6} backgroundColor="aquamarine">LogIn</Button>
            </Flex>
        </Flex>
    )
}

export default LoginPage;