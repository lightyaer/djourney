import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "djourney-storage",
  access: (allow) => ({
    "profile_pictures/{entity_id}/*": [
      allow.guest.to(["read"]),
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
    "exercises/*": [allow.guest.to(["read", "write"])],
  }),
});
