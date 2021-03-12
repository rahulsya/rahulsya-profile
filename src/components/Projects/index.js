import Image from "next/image";
export const Projects = () => {
  return (
    <div className="container mx-auto px-32 mt-12 flex flex-col jusitfy-start dark:text-white text-gray-900">
      <div className="text-xl">Projects</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 px-2 py-2 h-auto rounded-lg">
          <div>Dashboard chatt</div>
          <Image
            className="object-contain"
            src="/images/dummy.png"
            layout="responsive"
            width={845}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};
