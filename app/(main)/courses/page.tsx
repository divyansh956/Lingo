import { getCourses } from "@/database/queries";
import { List } from "./List";

const Courses = async () => {
  const courses = await getCourses();
  return (
    <div className="h-full max-w-[912px] px-3 m-auto">
      <h1 className="text-2xl font-bold to-neutral-700">Language Courses</h1>
      <List courses={courses} activeCourseId={1} />
    </div>
  );
};

export default Courses;
