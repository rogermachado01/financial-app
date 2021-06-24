import React from "react"
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    ListIcon,
    ListItem,
    List,
    Flex,
    Wrap,
    WrapItem,
    Avatar,
  } from "@chakra-ui/react"


function TopMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const user = {
        name: "Roger Machado"
    }
    return (
      <>
      <Flex direction="row" alignItems={'center'} justifyItems={'flex-end'} sx={{ position: 'absolute' }}>
        <Wrap justify={'flex-end'}>
            <WrapItem>
                <Button colorScheme="teal" onClick={onOpen}>
                    Open
                </Button>
            </WrapItem>
            <WrapItem>
                <Avatar name={user.name} bg="red.500" />
            </WrapItem>
        </Wrap>
      </Flex>
      </>
    )
  }
  
export default TopMenu