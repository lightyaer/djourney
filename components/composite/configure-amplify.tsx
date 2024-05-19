// components/ConfigureAmplify.tsx
"use client";

import React from "react";
import { Amplify } from "aws-amplify";
import { ThemeProvider, useTheme } from "@aws-amplify/ui-react";
import { COLOR_MODE, theme } from "@/components/theme";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

export const ConfigureAmplifyClientSide = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const t = useTheme();

  return (
    <ThemeProvider theme={theme(t)} colorMode={COLOR_MODE}>
      {children}
    </ThemeProvider>
  );
};
