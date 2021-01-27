import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Alura Quiz | Star Wars by Darth </title>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link rel='shortcut icon' href='/favicon.png' />
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&amp;display=swap'
        rel='stylesheet'
      />
    </Head>
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        url: db.url,
        site_name: db.title,
        images: [
          {
            url: db.bg,
            width: 800,
            heigth: 600,
            alt: db.title
          }
        ]
      }}
    />
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
