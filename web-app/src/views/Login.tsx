import { Button, Flex, Heading, Input, useColorModeValue } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createUser } from "../modules/user/services"
import { useState } from "react";

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
    const backgroundColor = useColorModeValue('gray.100', 'gray.800');

    function handleClick(action: string) {
        switch (action) {
            case 'SIGNUP': userDispatcher(createUser(login))
        }
    }

    return (
        <Flex height="100Vh" alignItems="center" justifyContent="center">
            <Flex direction="column" backgroundColor={backgroundColor} p={12}>
                <Heading>{user.email}</Heading>
                <Input
                    placeholder="roger@portfolio.com"
                    variant="filled"
                    mb={3}
                    type="email"
                    onChange={(input) => setLogin({ ...login, email: input.target.value })}
                />
                <Input placeholder="********" variant="filled" mb={6} type="passowrd" onChange={(input) => setLogin({ ...login, password: input.target.value })} ></Input>
                <Button mb={6} backgroundColor="aquamarine" onClick={() => handleClick('LOGIN')}>LogIn</Button>
                <Button mb={6} backgroundColor="aquamarine" onClick={() => handleClick('SIGNUP')}>Sign Up</Button>
            </Flex>
        </Flex>
    )
}

export default LoginPage;