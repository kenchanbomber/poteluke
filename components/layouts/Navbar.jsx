import {
    Box,
    useColorModeValue,
    Container,
    Heading,
    Flex,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";

import PadIcon from "../icons/PadIcon";
import { logo } from "./Navbar.module.css";
import ThemeToggleButton from "../ThemeToggleButton";

export default function Navbar(props) {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    <Link href="/" scroll={false}>
                        <span className={logo}>
                            <Flex align="center" mr={5}>
                                <PadIcon />
                                <Text
                                    color={useColorModeValue(
                                        "gray.800",
                                        "whiteAlpha.900"
                                    )}
                                    fontFamily='M PLUS Rounded 1c", sans-serif'
                                    fontWeight="bold"
                                    ml={3}
                                >
                                    Kengo Hirata
                                </Text>
                            </Flex>
                        </span>
                    </Link>
                </Heading>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                </Box>
            </Container>
        </Box>
    );
}
