import { Button, Flex, useColorMode } from "@chakra-ui/react"

const ThemeComponentConfigs = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Flex>
            <Button onClick={toggleColorMode}>Toggle Color</Button>
        </Flex>
    )
}

export { ThemeComponentConfigs }