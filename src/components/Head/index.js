import Head from "next/head";

export const Header=({ title, contentTitle }) =>{
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"/>
      <meta property="og:title" content={contentTitle} key="title" />
    </Head>
  );
}
