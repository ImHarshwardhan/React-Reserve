import { Container } from "semantic-ui-react";
import Header from "./Header"
import HeadContent from "./HeaderContent"
import Head from "react"
function Layout({children}){
        return(
            <>
                <Head>
                    <HeadContent/>
                        <link rel="stylesheet" href="//cdnjs.flare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"/>
                        <title>ReactReserve</title>
                </Head>
                <Header>
                    <Container text style={{ paddingTop: "1em" }}>
                        {children}
                    </Container>
                </Header>
            </>
        )
}
export default Layout