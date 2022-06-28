/** @jsx h */
import { h } from "$fresh/runtime.ts";
import { tw } from "@twind";

import { ProfilePicture } from "./ProfilePicture.tsx";
import { SocialLinks } from "./SocialLinks.tsx";

export function Footer() {
  return (
    <div class={tw`flex gap(4 md:8)`}>
      <ProfilePicture />
      <div class={tw`flex flex-col justify-center gap-2`}>
        <p class={tw`leading-tight text(gray-900 2xl md:4xl) font-bold`}>
          <a href="/" class={tw`hover:underline focus:underline`}>
            Antonin Beaufort
          </a>
        </p>
        <p class={tw`leading-tight text(gray-900 base md:xl)`}>
          Software engineer. 🌍&nbsp;
        </p>
        <SocialLinks class="mt-1" tight />
      </div>
    </div>
  );
}
