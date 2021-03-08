// import { useTheme } from "next-themes";
import { NavigationHeader } from "../components";
import Header from "../components/Head";
export default function Home() {
  // const { theme, setTheme } = useTheme();
  return (
    <div className="dark:bg-gray-800 bg:gray-200 text-gray-800 dark:text-white">
      <Header title="rahulsyaa" contentTitle="profile site" />
      <NavigationHeader />
      <div className=" h-screen flex flex-col justify-center items-center content-center">
        <p className=" text-5xl">Rahulsya. under construction .</p>
        {/* <button
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md mt-5"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme}
        </button> */}
        {/* <button className="px-3 py-2 mt-5">Dark</button> */}
      </div>
    </div>
  );
}
