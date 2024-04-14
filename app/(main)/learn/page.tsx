import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import Header from "./Header";
import UserProgress from "@/components/UserProgress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
} from "@/database/queries";
import { redirect } from "next/navigation";
import Unit from "./Unit";
import { lessons, units as unitsSchema } from "@/database/schema";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitData = getUnits();

  const [userProgress, units, courseProgress, lessonPercentage] =
    await Promise.all([
      userProgressData,
      unitData,
      courseProgressData,
      lessonPercentageData,
    ]);

  if (!userProgress || !userProgress.activeCourse || !courseProgress) {
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
                activeLesson={
                  courseProgress.activeLesson as
                    | (typeof lessons.$inferSelect & {
                        unit: typeof unitsSchema.$inferSelect;
                      })
                    | undefined
                }
                activeLessonPercentage={lessonPercentage}
              />
            </div>
          );
        })}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
