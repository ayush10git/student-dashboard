import Image from "next/image";
import Todo from "./Todo";

const StudentInfoCard = () => {
  return (
    <div className="flex shadow-lg 2xl:min-w-[1126px] lg:w-[900px] rounded-lg">
      <div className="relative h-[550px] flex flex-col">
        <div className="container xl:w-[1125px] h-[250px] lg:w-[900px] rounded-lg"></div>
        <Image
          src="/person.jpeg"
          width={50}
          height={50}
          className="absolute bottom-[230px] left-[40px] w-[150px] h-[150px] ring-4 ring-white rounded-full object-cover"
        />
        <div className="p-6 ml-5 mt-[5rem]">
          <h2 className="text-[2rem] font-bold">Julia McArthy</h2>
          <span className="text-gray-500 text-lg font-light">
            juliamca12@gmail.com
          </span>
          <div className="mt-5 text-xl flex flex-row gap-10 tracking-wider">
            <div className="flex flex-col">
              <span className="text-gray-400">
                Registeration Number:{" "}
                <span className="text-black">MIT21CS077</span>
              </span>
              <span className="text-gray-400">
                College:{" "}
                <span className="text-black">
                  Michigan Intstitute of Technology
                </span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">
                Degree: <span className="text-black">B.E./B.Tech</span>
              </span>
              <span className="text-gray-400">
                Batch: <span className="text-black">2025</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;