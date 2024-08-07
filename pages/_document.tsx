import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16624953200"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                window.dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'AW-16624953200');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16624953200"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                window.dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'AW-16624953200');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
