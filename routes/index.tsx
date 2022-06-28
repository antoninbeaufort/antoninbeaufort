/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";

import { ProfilePicture } from "../components/ProfilePicture.tsx";
import { SocialLinks } from "../components/SocialLinks.tsx";

export default function Home() {
  const linkClass = tw`text-blue(600 hover:500) hover:underline transition duration-75 ease-in-out`;

  return (
    <div class={tw`mx-auto max-w-screen-md px(4 sm:6 md:8) my(12 sm:20 md:32)`}>
      <Head>
        <title>Home - Antonin Beaufort</title>
        <meta name="description" content="Software engineer. 🌍" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div class={tw`flex flex(col sm:row) gap-8`}>
        <ProfilePicture />
        <div class={tw`flex flex-col justify-center`}>
          <p class={tw`leading-tight text(gray-900 2xl md:3xl)`}>Hello, I'm</p>
          <h1 class={tw`leading-tight text(gray-900 4xl md:5xl) font-semibold`}>
            Antonin Beaufort
          </h1>
        </div>
      </div>
      <div class={tw`mt-10 leading-7 text(gray-900 lg)`}>
        I'm a developer and{" "}
        <a href="https://github.com/antoninbeaufort" class={linkClass}>
          open source enthusiast
        </a>
        . I like TypeScript, Vue (Nuxt), React (Remix) and fast websites. I work
        at the{" "}
        <a href="https://www.infinesolution.fr" class={linkClass}>
          Infine
        </a>{" "}
        company, building{" "}
        <a href="https://financement.infinesolution.fr" class={linkClass}>
          an application to estimate the feasibility of a funding request
        </a>
        . I built{" "}
        <a href="https://thegreenalternative.fr" class={linkClass}>
          The Green Alternative website
        </a>
        , and a few other web projects. Probably discovering some new
        technologies right now.
      </div>
      <div class={tw`mt-10 leading-7 text(lg gray-900)`}>
        Wanna talk about something? DM me on{" "}
        <a href="https://www.linkedin.com/in/antoninbeaufort" class={linkClass}>
          LinkedIn
        </a>{" "}
        or email me at{" "}
        <a href="mailto:contact@antoninbeaufort.fr" class={linkClass}>
          contact@antoninbeaufort.fr
        </a>
        .
      </div>
      <SocialLinks class="mt-10" />
    </div>
  );
}
