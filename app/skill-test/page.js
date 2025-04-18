import ComparisonGraph from "@/components/ComparisonGraph";
import HTMLTest from "@/components/HTMLTest";
import QuestionsAnalysis from "@/components/QuestionsAnalysis";
import Statistics from "@/components/Statistics";
import SyllabusWise from "@/components/SyllabusWise";

export default function SkillTestPage() {
  return (
    <div className="w-full -mx-2">
      <h1 className="text-lg text-gray-600 px-2">Skill Test</h1>
      <div className="flex flex-col lg:flex-row gap-4 mt-3">
        <div className="w-full lg:w-[58%] px-2">
          <HTMLTest />
          <Statistics />
          <ComparisonGraph />
        </div>
        <div className="w-full lg:w-[42%] px-2">
          <SyllabusWise />
          <QuestionsAnalysis />
        </div>
      </div>
    </div>
  );
}
