import Head from "next/head";
export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>Rahul syaa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" h-screen flex flex-col justify-center items-center content-center">
        <p className="text-5xl">Rahulsya. Is Work In Progress</p>
        {/* <button className="px-3 py-2 mt-5">Dark</button> */}
      </div>
    </div>
  );
}
