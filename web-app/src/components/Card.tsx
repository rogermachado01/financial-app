import { Box, Heading, Text } from "@chakra-ui/react";

type CardInfo = {
    title: string;
    text: string;
    backgroundColor: string;
}

const Card = (props: CardInfo) => {
    console.log(props.backgroundColor)
    return (
        <Box m={6} p={8} minW={'sm'} minH={250} flex={1} 
            shadow="md" 
            borderWidth="1px" 
            borderRadius="20px" 
            bgGradient={props.backgroundColor}
            backgroundColor={props.backgroundColor}>
            <Heading fontSize="xl">{props.title}</Heading>
            <Text mt={4}>{props.text}</Text>
        </Box>
    )
};

export default Card;