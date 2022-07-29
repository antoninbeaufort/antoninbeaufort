import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import { css, apply } from 'twind/css#css_directive'

export * from "twind";
export { css };
export const config: Configuration = {
  darkMode: "class",
  mode: "warn",
  plugins: {
    'snap-y': { 'scroll-snap-type': 'y var(--tw-scroll-snap-strictness)' },
    'snap-mandatory': { '--tw-scroll-snap-strictness': 'mandatory' },
    'snap-start': { 'scroll-snap-align': 'start' },
  },
  preflight: (preflight) =>
    css(
      preflight,
      {
        'body.dark': apply`bg-gray-900`,
        b: apply`dark:text-white`,
      },
    ),
};
if (IS_BROWSER) setup(config);
