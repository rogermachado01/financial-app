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
  } from "@chakra-ui/react"


function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const sidebarLinks = [{
        path: "./market",
        icon: "icon",
        label: "Market"
    },
    {
        path: "./wallet",
        icon: "icon",
        label: "Wallet"
    },
    {
        path: "./profits",
        icon: "icon",
        label: "Profis"
    },
    {
        path: "./profile",
        icon: "icon",
        label: "Profile"
    }]
    return (
      <>
        <Button colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>SideBar</DrawerHeader>
  
            <DrawerBody>
                <List spacing={3}>
                    {sidebarLinks.map(link => {
                        return (
                            <ListItem>
                                <ListIcon as={undefined} color="green.500" onclick={() => console.log(link.path)}/>
                                {link.label}
                            </ListItem>
                        )
                    })}
                </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  
export default SideBar