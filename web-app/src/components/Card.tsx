import { Box, Flex, Heading, Text } from "@chakra-ui/react";

type CardInfo = {
    title: string;
    text: string;
    backgroundColor: string;
}

const Card = (props: CardInfo) => {
    return (
            <Flex m={6} p={8} minW={150} minH={250}
                shadow="md" 
                borderWidth="1px" 
                borderRadius="20px" 
                bgGradient={props.backgroundColor}
                backgroundColor={props.backgroundColor}>
                <Heading fontSize="xl">{props.title}</Heading>
                <Text mt={4}>{props.text}</Text>
            </Flex>
    )
};

export default Card;