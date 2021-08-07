import { ContainerProps } from "@material-ui/core";
import Head from "next/head";
import { Header } from "./";
import { CustomContainer, Footer } from "./";

type Props = {
    children: ContainerProps["children"];
    containerMaxWidth?: ContainerProps["maxWidth"];
    footerRequired?: boolean;
    headerRequired?: boolean;
    subTitle?: string;
};

const Layout: React.FC<Props> = ({ children, containerMaxWidth, footerRequired=true, headerRequired = true, subTitle }) => {
    return (
        <>
            <Head>
                <title>ナリテ. - {subTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {headerRequired && <Header />}
            <main className="bg-background">
                <CustomContainer maxWidth={containerMaxWidth}>{children}</CustomContainer>
            </main>
            {footerRequired && <Footer />}
        </>
    );
};

export default Layout;
