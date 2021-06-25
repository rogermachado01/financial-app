import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import Card from "../components/Card";

const Wallet = () => {
    const dash = [{
        title: "Account",
        description: "",
        backgroundColor: useColorModeValue('teal.50', 'green.200'),
        data: {}
    },
    {
        title: "Digital Card",
        description: "",
        backgroundColor: useColorModeValue('linear(to-r, teal.50, blue.100)', 'green.200'),
        data: {}
    },
    {
        title: "Digital Card",
        description: "",
        backgroundColor: useColorModeValue('linear(to-r, teal.50, blue.100)', 'green.200'),
        data: {}
    },
    {
        title: "Digital Card",
        description: "",
        backgroundColor: useColorModeValue('linear(to-r, teal.50, blue.100)', 'green.200'),
        data: {}
    }]
    const backgroundColor = useColorModeValue('white.100', 'white.800');
    return (
        <Flex height="100Vh" alignItems="center" backgroundColor={backgroundColor} p={12} justifyContent="center">
            <Container>
                <Flex alignItems="top" wrapContent>
                    { dash.map(card => <Card title={card.title} text={card.description} backgroundColor={card.backgroundColor} />) }
                </Flex>
            </Container>
        </Flex>
    )
}

export default Wallet;