export type Muscle =
  | "abdominals"
  | "hamstrings"
  | "calves"
  | "shoulders"
  | "adductors"
  | "glutes"
  | "quadriceps"
  | "biceps"
  | "forearms"
  | "abductors"
  | "triceps"
  | "chest"
  | "lower back"
  | "traps"
  | "middle back"
  | "lats"
  | "neck"
  | null
  | undefined;

export type Force = "pull" | "push" | "static" | null | undefined;

export type Level = "beginner" | "intermediate" | "expert" | null | undefined;

export type Mechanic = "compound" | "isolation" | null | undefined;

export type Equipment =
  | "body_only"
  | "machine"
  | "other"
  | "foam_roll"
  | "kettlebells"
  | "dumbbell"
  | "cable"
  | "barbell"
  | "bands"
  | "medicine_ball"
  | "exercise_ball"
  | "ez_curl_bar"
  | null
  | undefined;

export type Category =
  | "strength"
  | "stretching"
  | "plyometrics"
  | "strongman"
  | "powerlifting"
  | "cardio"
  | "olympic_weightlifting"
  | null
  | undefined;

export interface Exercise {
  name: string;
  aliases?: string[];
  primaryMuscles: Muscle[];
  secondaryMuscles: Muscle[];
  force?: Force;
  level: Level;
  mechanic?: Mechanic;
  equipment?: Equipment;
  category: Category;
  instructions: string[];
  description?: string;
  tips?: string[];
}
