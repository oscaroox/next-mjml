import type { NextConfig } from "next";
import { MJMLOptions } from "./mjml-types";
export type * from "./mjml-types";

export const withMJML =
  (mjmlOptions: MJMLOptions = {}) =>
  (nextConfig: NextConfig): NextConfig => {
    return {
      ...nextConfig,
      webpack(config, options) {
        config.module.rules.push({
          test: /\.mjml$/,
          use: [
            options.defaultLoaders.babel,
            {
              loader: require.resolve("./loader"),
              options: mjmlOptions,
            },
          ],
        });

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        }

        return config;
      },
    };
  };
