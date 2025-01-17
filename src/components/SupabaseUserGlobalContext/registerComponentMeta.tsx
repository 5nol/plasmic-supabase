import { GlobalContextMeta } from "@plasmicapp/host";
import type { SupabaseUserGlobalContextProps } from ".";

export const SupabaseUserGlobalContextMeta : GlobalContextMeta<SupabaseUserGlobalContextProps> = {
  name: "SupabaseUserGlobalContext",
  props: {
      defaultRedirectOnLoginSuccess: "string",
  },
  importPath: "./index",
  providesData: true,
  globalActions: {
    login: {
      parameters: [
        {
          name: "email",
          type: "string",
        },
        {
          name: "password",
          type: "string",
        },
        {
          name:"successRedirect",
          type: "string"
        }
      ],
    },
    signup: {
      parameters: [
        {
          name: "email",
          type: "string",
        },
        {
          name: "password",
          type: "string",
        },
        {
          name:"successRedirect",
          type: "string"
        }
      ],
    },
    logout: {
      parameters: [
        {
          name:"successRedirect",
          type: "string"
        }
      ]
    },
    resetPasswordForEmail: {
      parameters: [
        {
        name: "email",
        type: "string",
        },
      ],
    },
    updateUserPassword: {
      parameters: [
        {
        name: "password",
        type: "string",
        },
      ],
    },
  },
};