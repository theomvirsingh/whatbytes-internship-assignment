import ComparisonGraph from "@/components/ComparisonGraph";
import HTMLTest from "@/components/HTMLTest";
import QuestionsAnalysis from "@/components/QuestionsAnalysis";
import Statistics from "@/components/Statistics";
import SyllabusWise from "@/components/SyllabusWise";

export default function SkillTestPage() {
  return (
    <div className="w-4/5">
      <h1 className="text-lg text-gray-600">Skill Test</h1>
      <div className="flex flex-row gap-4 mt-3">
        <div className="">
          <HTMLTest />
          <Statistics />
          <ComparisonGraph />
        </div>
        <div>
            <SyllabusWise />
            <QuestionsAnalysis />
        </div>
      </div>
    </div>
  );
}
