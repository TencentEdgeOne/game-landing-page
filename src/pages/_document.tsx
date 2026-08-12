import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>EdgeOne Makers Template</title>
        <meta name="description" content="Demo only · EdgeOne Makers" />
        <meta name="keywords" content="EdgeOne Makers, Demo only" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
