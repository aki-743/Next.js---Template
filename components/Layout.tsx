import Head from 'next/head'

type Props = {
  subTitle?: string
}

const Layout: React.FC<Props> = ({ children, subTitle }) => (
  <div>
    <Head>
      <title>ナリテ - {subTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)

export default Layout
