import PerforemanceCard from "@/components/PerforemanceCard";
import SolvedQuestions from "@/components/SolvedQuestions";
import StudentInfoCard from "@/components/StudentInfoCard";
import Todo from "@/components/Todo";

export default function Home() {
  const easySolved = 341;
  const easyTotal = 423;
  const mediumSolved = 200;
  const mediumTotal = 300;
  const hardSolved = 50;
  const hardTotal = 150;
  return (
    <div className="p-9 flex flex-col gap-4 relative top-[100px] left-[320px] w-[calc(100vw-320px)]">
      <div className="flex gap-8">
        <div className="">
          <h1 className="text-[2rem] mb-5">Dashboard</h1>
          <StudentInfoCard />
        </div>
        <div className="">
          <Todo heading={true} text={Todo}/>
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        <PerforemanceCard value={341} total={1231} />
        <SolvedQuestions
          easySolved={easySolved}
          easyTotal={easyTotal}
          mediumSolved={mediumSolved}
          mediumTotal={mediumTotal}
          hardSolved={hardSolved}
          hardTotal={hardTotal}
        />
      </div>
    </div>
  );
}
