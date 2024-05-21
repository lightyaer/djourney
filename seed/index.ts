import { cookiesClient } from "@/utils/amplify";
import json from "./exercises.json" assert { type: "json" };
import path from "path";
import fs from "fs/promises";
import { Category, Equipment, Force, Level, Mechanic } from "./types";

export const seedData = async () => {
  await Promise.all(
    json.exercises.map(async ({ exercise, images }) => {
      const res = await cookiesClient.models.Exercise.create(
        {
          name: exercise.name,
          category: exercise.category?.split(" ").join("_") as Category,
          force: exercise.force as Force,
          level: exercise.level as Level,
          mechanic: exercise.mechanic as Mechanic,
          equipment: exercise.equipment?.split(" ").join("_") as Equipment,
          primaryMuscles: exercise.primaryMuscles,
          secondaryMuscles: exercise.secondaryMuscles,
          instructions: exercise.instructions,
        },
        {
          authMode: "apiKey",
        }
      );

      for (const image of images) {
        const originalPath = path.join(__dirname, "../../../../../seed", image);
        console.log("originalPath", originalPath);

        const exerciseDirName = originalPath.split("/").at(-3);

        console.log("Exercise Dir Name", exerciseDirName);

        let newPath = originalPath.replace("/images", "");
        newPath = newPath.replace("/exercises", "/images");

        newPath = newPath.replace(exerciseDirName!, res.data?.id!);

        console.log("newPath", newPath);

        const s3Path = newPath
          .replace("/images", "/exercises")
          .split("/")
          .slice(6)
          .join("/");

        console.log("S3Path", s3Path);

        await fs.mkdir(newPath.split("/").slice(0, -1).join("/"), {
          recursive: true,
        });

        const resx = await fs.copyFile(originalPath, newPath);

        // const file = await fs.readFile(path.join(imagePath));
        // const storagePath = image.split("/").at(-1);

        // const s3Path = `exercises/${res.data?.id}/${storagePath}`;
        // console.log(`uploading image ${image}`);
        // console.log(`s3Path: ${s3Path}`);
        // const result = await uploadData({
        //   data: file,
        //   path: s3Path,
        //   options: {
        //     contentType: "image/jpeg",
        //   },
        // }).result;
        // console.log("Path from Response: ", result.path);
      }
    })
  );
};
