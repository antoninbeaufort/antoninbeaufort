/** @jsx h */
import { h } from "preact";
import { tw, css } from "@twind";
import { GitHubIcon, LinkedInIcon, IconLink } from "./Icons.tsx";

export function SocialLinks(props: { class?: string; tight?: boolean }) {
  return (
    <div
      class={tw`lg:fixed my-2 lg:mb-0 lg:flex-col items-center bottom-0 left-16 z-50 lg:w-12 w-full justify-center lg:justify-end text-white flex gap-4`}
    >
      <IconLink
        href="https://github.com/antoninbeaufort"
        title="GitHub"
        icon={GitHubIcon}
      />
      <IconLink
        href="https://www.linkedin.com/in/antoninbeaufort"
        title="LinkedIn"
        icon={LinkedInIcon}
      />
      <div class={tw`hidden lg:block h-12 w-px mx-auto bg-gray-500`}></div>
    </div>
  );
}
