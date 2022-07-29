/** @jsx h */
import { h } from "preact";
import { asset, Head } from "$fresh/runtime.ts";
import { tw } from "@twind";

import { Experience } from "../components/Experience.tsx";
import { Navbar } from "../components/Navbar.tsx";
import { ProfilePicture } from "../components/ProfilePicture.tsx";
import { SocialLinks } from "../components/SocialLinks.tsx";

export default function Home() {
  const linkClass = tw`text-blue(600 dark:400 dark:hover:300 hover:500) hover:underline transition duration-75 ease-in-out`;

  return (
    <div class={tw`relative`}>
      <Head>
        <title>Antonin Beaufort - Software engineer</title>
        <meta name="description" content="Software engineer. 🌍" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href={asset("/style.css")} rel="stylesheet" />
      </Head>
      <Navbar />
      <main class={tw`h-screen overflow-auto snap-y snap-mandatory`}>
        <div class={tw`mx-auto max-w-screen-md px(4 sm:6 md:8)`}>
          <section
            class={tw`min-h-screen flex flex-col items-start justify-center snap-start`}
          >
            <div class={tw`flex flex(col sm:row) gap-8`}>
              <div class={tw`flex flex-col justify-center`}>
                <p
                  class={tw`leading-tight font-mono text(blue-600 dark:blue-400 xl md:2xl)`}
                >
                  Hi, my name is
                </p>
                <h1
                  class={tw`leading-tight my-2 text(gray-900 dark:white 4xl md:5xl) font-semibold`}
                >
                  Antonin Beaufort.
                </h1>
                <h2
                  class={tw`leading-tight my-2 text(gray-900 dark:gray-300 4xl md:5xl) font-semibold`}
                >
                  I build things for the web.
                </h2>
              </div>
            </div>
            <div
              class={tw`mt-10 leading-7 text(gray-900 dark:gray-300) max-w-md`}
            >
              I'm a software engineer passionate about the web and new
              technologies around Javascript such as React, Vue, Deno and Rust.
              I am currently looking for a job, contact me if my profile matches
              the one you are looking for!
            </div>
          </section>
          <section
            id="about"
            class={tw`min-h-screen flex flex-col items-center justify-center snap-start`}
          >
            <h3
              class={tw`leading-tight my-2 text(gray-900 dark:white 4xl md:5xl) font-semibold`}
            >
              About
            </h3>
            <div class={tw`flex flex-col md:flex-row`}>
              <div
                class={tw`mt-10 leading-7 text(gray-900 dark:gray-300) max-w-md mr-6`}
              >
                Hello, my name is Antonin and I love build things for the web
                using modern technologies. I work at the{" "}
                <a href="https://www.infinesolution.fr" class={linkClass}>
                  Infine
                </a>{" "}
                company, building{" "}
                <a
                  href="https://financement.infinesolution.fr"
                  class={linkClass}
                >
                  an application to estimate the feasibility of a funding
                  request
                </a>
                .<br />
                <br />I built{" "}
                <a href="https://thegreenalternative.fr" class={linkClass}>
                  The Green Alternative website
                </a>
                , and a few other web projects that I will soon publish. I am
                certainly discovering some new technologies right now.
              </div>
              <div class={tw`flex items-center justify-center mt-4 md:mt-0`}>
                <ProfilePicture />
              </div>
            </div>
          </section>
          <section
            id="experience"
            class={tw`min-h-screen flex flex-col items-start justify-center snap-start`}
          >
            <h3
              class={tw`leading-tight mb-7 text(gray-900 dark:white 4xl md:5xl) w-full text-center font-semibold`}
            >
              Experience
            </h3>
            <Experience />
          </section>
          <section
            id="projects"
            class={tw`min-h-screen flex flex-col items-start justify-center snap-start`}
          >
            <h3
              class={tw`leading-tight mb-7 w-full text(gray-900 dark:white 4xl md:5xl) text-center font-semibold`}
            >
              Projects
            </h3>
            <ul class={tw`list-disc dark:text-white text-lg mt-4`}>
              <li>
                <a
                  href="https://thegreenalternative.fr"
                  class={tw`font-semibold`}
                >
                  The Green Alternative
                </a>{" "}
                - zero waste alternatives site
              </li>
              <li>
                <span class={tw`font-semibold`}>Sequence Reproduction</span> -
                reproduction of the Sequence board game
              </li>
              <li>
                <span class={tw`font-semibold`}>
                  Champagne Arnaud Beaufort et Fils
                </span>{" "}
                - Champagne house e-commerce website
              </li>
            </ul>
          </section>
          <section
            id="contact"
            class={tw`min-h-screen flex flex-col items-start justify-center text-center snap-start`}
          >
            <div class={tw`leading-7 text(lg gray-900 dark:gray-300)`}>
              <h3
                class={tw`leading-tight mb-7 text(gray-900 dark:white 4xl md:5xl) font-semibold`}
              >
                Contact
              </h3>
              Do you have a question for me ? Contact me on{" "}
              <a
                href="https://www.linkedin.com/in/antoninbeaufort"
                class={linkClass}
              >
                LinkedIn
              </a>{" "}
              or send me an email at{" "}
              <a href="mailto:contact@antoninbeaufort.fr" class={linkClass}>
                contact@antoninbeaufort.fr
              </a>
              .
            </div>
          </section>
        </div>
      </main>
      <SocialLinks />
    </div>
  );
}
