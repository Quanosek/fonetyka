import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Zamiana podanych wyrazów na poprawny polski zapis fonetyczny w standardach AS i IPA."
        />

        {/* apple */}
        <meta name="mobile-wep-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Fonetyka" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />

        {/* favicon */}
        <link rel="icon" href="/logo/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo/apple-180x180.png" />

        {/* working PWA */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
