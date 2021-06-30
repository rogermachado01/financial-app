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
        <Container height="100Vh" backgroundColor={backgroundColor}>
            <Flex alignItems="center" justifyContent="space-between">
                { dash.map(card => <Card title={card.title} text={card.description} backgroundColor={card.backgroundColor} />) }
            </Flex>
        </Container>
    )
}

export default Wallet;