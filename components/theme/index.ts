import {
  defaultDarkModeOverride,
  Theme,
  useTheme,
} from "@aws-amplify/ui-react";

export const theme = (theme: ReturnType<typeof useTheme>): Theme => {
  const { tokens } = theme;
  return {
    name: "djourney-theme",
    overrides: [defaultDarkModeOverride],
    tokens: {
      components: {
        authenticator: {
          //   container: {
          //     backgroundColor: tokens.colors.neutral["400"],
          //   },
          modal: {
            backgroundColor: tokens.colors.background.tertiary,
          },

          router: {
            boxShadow: `0 0 16px ${tokens.colors.overlay["10"]}`,
            borderWidth: "0",
          },
          form: {
            padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
          },
        },
        button: {
          primary: {
            backgroundColor: tokens.colors.neutral["100"],
          },
        },
      },
    },
  };
};

export const COLOR_MODE = "dark";
