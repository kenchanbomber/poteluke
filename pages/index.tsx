import {
    Container,
    Heading,
    Flex,
    Box,
    Text,
    Image,
    Card,
    useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";
import Earth from "../components/Earth";

export default function Home() {
    return (
        <Layout>
            <Earth />
            <Container pt="50vh">
                <Box as="section" mb={{ base: 4, md: 8 }}>
                    <Heading as="h3" variant="section-title">
                        Me
                    </Heading>
                    <Flex p={2} align="center">
                        <Box mr={{ base: 8, md: 12 }}>
                            <Image
                                borderRadius="full"
                                boxSize="150px"
                                src="/me.png"
                                alt="Kengo Hirata"
                                border="1px"
                                borderColor="gray.200"
                            />
                        </Box>
                        <Box>
                            <Text fontSize="lg" fontWeight="bold" mb={1}>
                                Kengo Hirata
                            </Text>
                            <Text fontSize="sm">AWS</Text>
                            <Text fontSize="sm">UI / UX Design</Text>
                            <Text fontSize="sm">
                                Frontend (JS, React, Next)
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                <Box as="section" mb={{ base: 4, md: 8 }}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <Flex mb={1}>
                        <Box mr={3}>
                            <Text as="b">2001</Text>
                        </Box>
                        <Box>兵庫県生まれ (Born in Hyogo, Japan.)</Box>
                    </Flex>
                    <Flex mb={1}>
                        <Box mr={3}>
                            <Text as="b">2019</Text>
                        </Box>
                        <Box>神戸大学 経済学部 (Entered Kobe University)</Box>
                    </Flex>
                    <Flex mb={1}>
                        <Box mr={3}>
                            <Text as="b">2020</Text>
                        </Box>
                        <Box>
                            株式会社 だんきち (Worked at Dank1 as a intern)
                        </Box>
                    </Flex>
                    <Flex>
                        <Box mr={3}>
                            <Text as="b">2021</Text>
                        </Box>
                        <Box>株式会社 アバウトゼロ (Worked at About0)</Box>
                    </Flex>
                </Box>
                <Box as="section" mb={{ base: 4, md: 8 }}>
                    <Heading variant="section-title">Service</Heading>
                    <Box p={3}>
                        <Card p={2} mb={4}>
                            <Image
                                boxSize="full"
                                objectFit="cover"
                                src="/cord-project.png"
                                alt="Cord Projectのスクリーンショット"
                                mb={1}
                                borderRadius={5}
                            />
                            <Heading
                                as="h3"
                                fontSize="lg"
                                textAlign="center"
                                mb={1}
                            >
                                Web制作
                            </Heading>
                            <Text fontSize="sm">
                                LP,
                                WordPressサイトの開発。頻繁にコミュニケーションを取り、さまざまな機能にも対応できます。
                            </Text>
                        </Card>
                        <Card p={2}>
                            <Image
                                boxSize="full"
                                objectFit="cover"
                                src="/joresan.png"
                                alt="条例算のスクリーンショット"
                                mb={1}
                                borderRadius={5}
                            />
                            <Heading
                                as="h3"
                                fontSize="lg"
                                textAlign="center"
                                mb={1}
                            >
                                サービス開発
                            </Heading>
                            <Text fontSize="sm">
                                アイデアがあるのなら、それを形にするお手伝いをします。情報共有を頻繁に行い、アイデア以上のサービスを作り上げましょう。
                            </Text>
                        </Card>
                    </Box>
                    <Box
                        as="footer"
                        w="100%"
                        bg={useColorModeValue("#ffffff40", "#20202380")}
                        css={{ backdropFilter: "blur(10px)" }}
                        zIndex={2}
                        textAlign="center"
                    >
                        &copy; 2023 Kengo Hirata. All Rights Reserved.
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
}
