import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a
  .schema({
    User: a
      .model({
        id: a.id(),
        workouts: a.hasMany("Workout", "userId"),
        logs: a.hasMany("Log", "userId"),
        firstName: a.string(),
        lastName: a.string(),
        username: a.string(),
        email: a
          .email()
          .required()
          .authorization((allow) => [allow.owner()]),
        onboarding: a.boolean(),
        phone: a.phone(),
        bio: a.string(),
        createdAt: a.timestamp(),
        updatedAt: a.timestamp(),
      })
      .authorization((allow) => [allow.owner()]),
    Set: a.customType({
      set: a.integer(),
      name: a.string(),
      reps: a.integer(),
      weight: a.integer(),
      rest: a.integer(),
      duration: a.integer(),
    }),
    Workout: a
      .model({
        id: a.id(),
        userId: a.id(),
        user: a.belongsTo("User", "userId"),
        name: a.string().required(),
        description: a.string(),
        exercises: a.hasMany("Plan", "workoutId"),
        createdAt: a
          .timestamp()
          .default(Math.round(new Date().getTime() / 1000)),
        updatedAt: a
          .timestamp()
          .default(Math.round(new Date().getTime() / 1000)),
      })
      .authorization((allow) => [allow.owner()]),
    Exercise: a
      .model({
        id: a.id(),
        workouts: a.hasMany("Plan", "exerciseId"),
        name: a.string(),
        force: a.enum(["pull", "push", "static"]),
        level: a.enum(["beginner", "intermediate", "expert"]),
        mechanic: a.enum(["compound", "isolation"]),
        equipment: a.enum([
          "body_only",
          "machine",
          "other",
          "foam_roll",
          "kettlebells",
          "dumbbell",
          "cable",
          "barbell",
          "bands",
          "medicine_ball",
          "exercise_ball",
          "ez_curl_bar",
        ]),
        primaryMuscles: a.string().array(),
        secondaryMuscles: a.string().array(),
        instructions: a.string().array(),
        images: a.url().array(),
        videos: a.url().array(),
        category: a.enum([
          "strength",
          "stretching",
          "plyometrics",
          "strongman",
          "powerlifting",
          "cardio",
          "olympic_weightlifting",
        ]),
        createdAt: a
          .timestamp()
          .default(Math.round(new Date().getTime() / 1000)),
        updatedAt: a
          .timestamp()
          .default(Math.round(new Date().getTime() / 1000)),
      })
      .authorization((allow) => [
        allow.guest().to(["read"]),
        allow.publicApiKey(),
      ]),
    Plan: a
      .model({
        id: a.id(),
        workoutId: a.id().required(),
        exerciseId: a.id().required(),
        workout: a.belongsTo("Workout", "workoutId"),
        exercise: a.belongsTo("Exercise", "exerciseId"),
        logs: a.hasMany("Log", "planId"),
        regime: a.ref("Set").array().required(),
        createdAt: a
          .timestamp()
          .default(Math.round(new Date().getTime() / 1000)),
        updatedAt: a
          .timestamp()
          .default(Math.round(new Date().getTime() / 1000)),
      })
      .authorization((allow) => [allow.owner()]),
    Log: a.model({
      id: a.id(),
      userId: a.id().required(),
      user: a.belongsTo("User", "userId"),
      planId: a.id().required(),
      plan: a.belongsTo("Plan", "planId"),
      progress: a.ref("Set").array(),
      done: a.boolean(),
      start: a.timestamp(),
      end: a.timestamp(),
      duration: a.integer(),
      createdAt: a.timestamp().default(Math.round(new Date().getTime() / 1000)),
      updatedAt: a.timestamp().default(Math.round(new Date().getTime() / 1000)),
    }),
  })
  .authorization((allow) => [allow.owner()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    apiKeyAuthorizationMode: {
      expiresInDays: 10,
    },
    defaultAuthorizationMode: "userPool",
  },
});
