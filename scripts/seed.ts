import "dotenv/config";
import * as schema from "../database/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database...");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Hindi",
        imageSrc: "IN-India.svg",
      },
      {
        id: 2,
        title: "Bengali",
        imageSrc: "BD-Bangladesh.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "FR-France.svg",
      },
      {
        id: 4,
        title: "English",
        imageSrc: "GB-England.svg",
      },
      {
        id: 5,
        title: "Russian",
        imageSrc: "RU-Russia.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Hindi",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Lesson 1",
        order: 1,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        question: "What is the Hindi word for 'hello'?",
        order: 1,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "next.svg",
        text: "नमस्ते",
        correct: true,
        audioSrc: "namaste.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "next.svg",
        text: "हाय",
        correct: false,
        audioSrc: "hi.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "next.svg",
        text: "अलविदा",
        correct: false,
        audioSrc: "goodbye.mp3",
      },
    ]);

    console.log("Seed complete!");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};
main();
