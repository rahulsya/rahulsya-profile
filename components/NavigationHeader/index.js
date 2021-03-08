import { useTheme } from "next-themes";
import Image from "next/image";

export const NavigationHeader = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="dark:bg-gray-900 bg-white py-4 shadow-md">
      <div className="container mx-auto px-32 flex justify-between items-center">
        <div className="h-10 w-10 flex items-center justify-center bg-gray-500 text-white rounded-full">
          RA
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" && (
            <Image src="/icons/cloud-moon-fill.svg" width={35} height={35} />
          )}
          {theme === "dark" && (
            <Image src="/icons/cloud-moon.svg" width={35} height={35} />
          )}
        </div>
      </div>
    </div>
  );
};
