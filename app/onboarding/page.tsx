"use client";

import { StorageManager } from "@aws-amplify/ui-react-storage";

export default function Onboarding() {
  return (
    <div>
      Onboarding
      <StorageManager
        acceptedFileTypes={["image/jpeg"]}
        path="exercises/"
        maxFileCount={1}
        isResumable
      />
    </div>
  );
}
