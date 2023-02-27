import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Kengo Hirata's HomePage</title>
                <meta name="description" content="平田 健悟のホームページ" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="author" content="Kengo Hirata" />
                {/* <link rel="apple-touch-icon" href="" /> */}
                {/* <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                /> */}
                {/* <meta name="twitter:title" content="Kengo Hirata" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@poteluke" />
                <meta name="twitter:creator" content="@poteluke" />
                <meta
                    name="twitter:image"
                    content="https://www.craftz.dog/card.png"
                /> */}
                {/* <meta property="og:site_name" content="Kengo Hirata" />
                <meta name="og:title" content="Kengo Hirata" />
                <meta property="og:type" content="website" /> */}
                {/* <meta
                    property="og:image"
                    content="https://www.poteluke.com/card.png"
                /> */}
            </Head>
            <Navbar />
            <Box as="main" pt={14}>
                {children}
            </Box>
        </>
    );
}
