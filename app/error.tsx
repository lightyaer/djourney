"use client"; // Error components must be Client Components

import { Text } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import Link from "next/link";
import { ROUTES } from "./_routes";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Text variation="error" as="p" isTruncated={true} fontWeight={550}>
        something went wrong
      </Text>
      <Link className="hover:underline" href={ROUTES.HOME}>
        return home
      </Link>
    </div>
  );
}
