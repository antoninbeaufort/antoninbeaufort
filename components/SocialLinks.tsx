/** @jsx h */
import { h } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { GitHubIcon, LinkedInIcon, IconLink } from "./Icons.tsx";

export function SocialLinks(props: { class?: string; tight?: boolean }) {
  return (
    <div class={tw`${props.class} flex ${props.tight ? "gap-2" : "gap-4"}`}>
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
    </div>
  );
}
