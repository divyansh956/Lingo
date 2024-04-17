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
      {
        id: 2,
        unitId: 1,
        title: "Lesson 2",
        order: 2,
      },
      {
        id: 3,
        unitId: 1,
        title: "Lesson 3",
        order: 3,
      },
      {
        id: 4,
        unitId: 1,
        title: "Lesson 4",
        order: 4,
      },
      {
        id: 5,
        unitId: 1,
        title: "Lesson 5",
        order: 5,
      },
      {
        id: 6,
        unitId: 1,
        title: "Lesson 6",
        order: 6,
      },
      {
        id: 7,
        unitId: 1,
        title: "Lesson 7",
        order: 7,
      },
      {
        id: 8,
        unitId: 1,
        title: "Lesson 8",
        order: 8,
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
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        question: "What is the Hindi word for 'goodbye'?",
        order: 2,
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        question: "What is the Hindi word for 'good morning'?",
        order: 3,
      },
    ]);

    // NO need of IDs for challengeOptions
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
        audioSrc: "namaste.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "next.svg",
        text: "अलविदा",
        correct: false,
        audioSrc: "namaste.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 4,
        challengeId: 2,
        text: "नमस्ते",
        correct: false,
        audioSrc: "namaste.mp3",
      },
      {
        id: 5,
        challengeId: 2,
        text: "हाय",
        correct: false,
        audioSrc: "namaste.mp3",
      },
      {
        id: 6,
        challengeId: 2,
        text: "अलविदा",
        correct: true,
        audioSrc: "namaste.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 7,
        challengeId: 3,
        imageSrc: "next.svg",
        text: "नमस्ते",
        correct: false,
        audioSrc: "namaste.mp3",
      },
      {
        id: 8,
        challengeId: 3,
        imageSrc: "next.svg",
        text: "सुप्रभात",
        correct: true,
        audioSrc: "namaste.mp3",
      },
      {
        id: 9,
        challengeId: 3,
        imageSrc: "next.svg",
        text: "अलविदा",
        correct: false,
        audioSrc: "namaste.mp3",
      },
    ]);

    console.log("Seed complete!");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};
main();
