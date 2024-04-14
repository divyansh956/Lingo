import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import Header from "./Header";
import UserProgress from "@/components/UserProgress";
import { getUnits, getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";
import Unit from "./Unit";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const unitData = getUnits();

  const [userProgress, units] = await Promise.all([userProgressData, unitData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => {
          return (
            <div key={unit.id} className="mb-10">
              <Unit
                id={unit.id}
                title={unit.title}
                lessons={unit.lessons}
                order={unit.order}
                description={unit.description}
                activeLesson={undefined}
                activeLessonPercentage={0}
              />
            </div>
          );
        })}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
