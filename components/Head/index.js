import Head from "next/head";

export default function Header({ title, contentTitle }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={contentTitle} key="title" />
    </Head>
  );
}
