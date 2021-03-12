import { NavigationHeader, Header, Hero, Projects } from "../components";
export default function Home() {
  return (
    <>
      <Header title="rahulsyaa" contentTitle="profile site" />
      <div className="font-poppins dark:bg-gelap-secondary bg-terang-secondary text-gray-800 dark:text-white h-screen">
        <NavigationHeader />
        <Hero />
        <Projects />
      </div>
    </>
  );
}
