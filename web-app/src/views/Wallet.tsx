import { Box, Container, Flex, useColorModeValue, Text, Input, Button } from "@chakra-ui/react";

/* 

.color-primary-0 { color: #222328 }
.color-primary-1 { color: #575967 }
.color-primary-2 { color: #40414B }
.color-primary-3 { color: #131319 }
.color-primary-4 { color: #0E0F17 }

*/
const WidgetBalance = () => {
    return (
        <Box shadow="xl" borderRadius={60} p={30} m={15}>
            <Flex alignItems="center" justifyContent="space-between" direction="row">
                <Text color={"#40414B"} transform={"rotate(270deg)"} mr={5}>balance</Text>
                <Flex width="150px" alignItems="flex-start" justifyContent="space-between" direction="column">
                    <Text fontSize="sm" >USD</Text>
                    <Text fontSize="4xl" mt={2} mb={2}>8 850</Text>
                    <Text fontSize="sm" color="#575967">4444 ELA</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

const WidgetNews = () => {
    return (
        <Box shadow="xl" borderRadius={60} p={30} m={15}>
            <Flex alignItems="center" justifyContent="space-between" direction="row">
                <Text color={"#40414B"} transform={"rotate(270deg)"} mr={5}>. . . .</Text>
                <Flex width="150px" alignItems="flex-start" justifyContent="space-between" direction="column">
                    <Text fontSize="sm">3 days ago</Text>
                    <Text fontSize="xl" mt={2} mb={2} noOfLines={2}>YourMoney Bank report</Text>
                    <Text fontSize="sm" color="#575967">sept -  oct 2020</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

const WidgetIndicator = () => {
    return (
        <Box shadow="xl" borderRadius={60} p={30} m={15}>
            <Flex alignItems="center" justifyContent="space-between" direction="row">
                <Text color={"#40414B"} transform={"rotate(270deg)"} mr={5}>Indicator</Text>
                <Flex width="150px" alignItems="flex-start" justifyContent="space-between" direction="column">
                    <Text fontSize="sm" >Profit</Text>
                    <Text fontSize="2xl" mt={2} mb={2}>+ 15%</Text>
                    <Text fontSize="sm" color="#575967">last year</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

const WidgetSendTo = () => {
    return (
        <Box width="450px" shadow="xl" backgroundColor={"#131319"} borderRadius={20} p={30} m={15}>
            <Text fontSize="2xl" m={10}>Send</Text>
            <Flex alignItems="center" justifyContent="space-between" direction="column">
                <Input type="text" placeholder="PIX identifier" p={15}></Input>
                <Flex alignItems="flex-start" justifyContent="space-between" direction="row">
                    <Input type="number" placeholder="0.000" p={15}></Input>
                    <Button fontSize="sm" >1/4</Button>
                    <Button fontSize="sm" >1/2</Button>
                    <Button fontSize="sm" >2x</Button>
                </Flex>
                <Flex alignItems="space-between" justifyContent="space-between" direction="row">
                    <Text fontSize="sm" >8.909</Text>
                    <Text fontSize="sm" >USD</Text>
                </Flex>
                <Flex alignItems="space-between" justifyContent="space-between" direction="row">
                    <Button >SEND</Button>
                    <Flex alignItems="space-between" justifyContent="space-between" direction="column">
                        <Text fontSize="sm" >Transaction fee (.1%)</Text>
                        <Text fontSize="sm" >USD 9.00</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

const WidgetReceive = () => {
    return (
        <Box width="450px" shadow="xl" borderRadius={20} p={30} m={15}>
            <Text fontSize="2xl" m={10}>Receive</Text>
            <Flex alignItems="flex-start" justifyContent="space-between" direction="column">
                <Text fontSize="xl" >PIX identifier</Text>
                <Flex alignItems="flex-start" justifyContent="space-between" direction="row">
                    <Button fontSize="sm" >QR here</Button>
                    <Text fontSize="xl" >Scan to send money</Text>
                </Flex>
                <Flex alignItems="space-between" justifyContent="space-between" direction="row">
                    <Text fontSize="sm" >Verify your keys</Text>
                </Flex>
            </Flex>
        </Box>
    )
}
const Transactions = () => {
    const data = [{
        value: 8999,
        date: "2020.03.02",
        type: "was received",
        hash: "bes56sacasd323400cvasd123as"
    }, {
        value: 1999,
        date: "2020.03.02",
        type: "was sent",
        hash: "bes56sacasd323400cvasd123as"
    }]
    return (
        <Flex direction="column">
            <Text fontSize="md" mb={3}>Transactions</Text>
            <Flex direction="column">
                {data.map(transaction => {
                    return (
                        <Flex
                            backgroundColor={"#131319"}
                            borderRadius={20}
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="space-between"
                            p={15}
                            mt={2}
                            shadow={"xl"}>
                            <Flex direction="column" mr={15} ml={5}>
                                <Text>{transaction.value}</Text>
                                <Text as="em" fontSize="sm" color="#575967">value</Text>
                            </Flex>
                            <Flex direction="column" mr={15}>
                                <Text>{transaction.date}</Text>
                                <Text as="em" fontSize="sm" color="#575967">date</Text>
                            </Flex>
                            <Flex direction="column" mr={15}>
                                <Text>{transaction.type}</Text>
                                <Text as="em" fontSize="sm" color="#575967">type</Text>
                            </Flex>
                            <Flex direction="column">
                                <Text>{transaction.hash}</Text>
                                <Text as="em" fontSize="sm" color="#575967">hash</Text>
                            </Flex>
                        </Flex>
                    )
                })}
            </Flex>
        </Flex>
    )
}


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
        <Container maxW="container.xl" height="100Vh" backgroundColor={backgroundColor}>
            <Flex direction="row">
                <Flex alignItems="center" justifyContent="space-between" direction="column">
                    <WidgetBalance />
                    <WidgetIndicator />
                    <WidgetNews />
                </Flex>
                <Flex alignItems="flex-start" justifyContent="space-between" direction="column">
                    <Flex direction="row">
                        <WidgetSendTo/>
                        <WidgetReceive/>
                    </Flex>
                    <Transactions />
                </Flex>
            </Flex>
        </Container>
    )
}

export default Wallet;