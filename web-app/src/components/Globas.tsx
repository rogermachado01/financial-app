import { Button, Flex, useColorMode } from "@chakra-ui/react"

const ThemeComponentConfigs = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Flex sx={{ position: 'absolute', top: 0, right: 0 }}>
            <Button onClick={toggleColorMode}>Toggle Color</Button>
        </Flex>
    )
}

export { ThemeComponentConfigs }