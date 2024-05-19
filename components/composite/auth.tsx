"use client";

import { useEffect } from "react";
import { useTheme, View, withAuthenticator, Text } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";

const components = {
  Header() {
    return (
      <View textAlign="center">
        <Text
          variation="primary"
          as="h1"
          isTruncated={true}
          fontSize={40}
          fontWeight={700}
        >
          djourney
        </Text>
      </View>
    );
  },
  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },
};

export const AmplifyAuth = withAuthenticator(
  ({ user }: { user?: AuthUser }) => {
    useEffect(() => {
      if (user) {
        redirect("/");
      }
    }, [user]);
    return null;
  },
  {
    components,
    // className: "!bg-slate-700",
  }
);
