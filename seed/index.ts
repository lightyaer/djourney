// import { cookiesClient, reqResClient } from "@/utils/amplify";
// import json from "./exercises_demo.json" assert { type: "json" };
import path from "path";
import fs from "fs/promises";
import { uploadData } from "aws-amplify/storage";
// import { Category, Equipment, Force, Level, Mechanic } from "./types";

export const seedData = async () => {
  try {
    const image = "./exercises/Ab_Roller/images/0.jpg";

    const res = {
      data: {
        id: "TEST",
      },
    };
    const file = await fs.readFile(
      path.join(__dirname, "../../../../../seed", image)
    );
    const storagePath = image.split("/").at(-1);

    const s3Path = `exercises/${res.data?.id}/${storagePath}`;
    console.log(`uploading image ${image}`);
    console.log(`s3Path: ${s3Path}`);
    const result = await uploadData({
      data: file,
      path: s3Path,
      options: {
        contentType: "image/jpeg",
      },
    }).result;
    console.log("Path from Response: ", result.path);
  } catch (err) {
    console.error(err);
  }

  // await Promise.all(
  // json.exercises.map(async ({ exercise, images }) => {
  // const res = await cookiesClient.models.Exercise.create(
  //   {
  //     name: exercise.name,
  //     category: exercise.category?.split(" ").join("_") as Category,
  //     force: exercise.force as Force,
  //     level: exercise.level as Level,
  //     mechanic: exercise.mechanic as Mechanic,
  //     equipment: exercise.equipment?.split(" ").join("_") as Equipment,
  //     primaryMuscles: exercise.primaryMuscles,
  //     secondaryMuscles: exercise.secondaryMuscles,
  //     instructions: exercise.instructions,
  //   },
  //   {
  //     authMode: "apiKey",
  //   }
  // );

  // console.log("seeded exercise id", res.data?.id, images);

  // for (const image of images) {

  // }

  // })
  // );
};
