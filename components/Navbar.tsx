/** @jsx h */
import { h } from "preact";
import { asset } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Navbar() {
  return (
    <header
      class={tw`fixed z-50 top-0 left-0 right-0 dark:backdrop-blur-sm dark:backdrop-filter dark:bg-gray-900 dark:bg-opacity-75 backdrop-blur-sm backdrop-filter bg-white bg-opacity-75`}
    >
      <nav class={tw`md:py-4 md:px-12 flex flex-col font-mono`}>
        <div
          class={tw`flex flex-row items-center justify-between pt-2 md:pt-0 px-4 md:px-0`}
        >
          <a href="/">
            <picture>
              <source
                type="image/avif"
                srcset="/me96.avif 1x, /me192.avif 2x"
              />
              <source
                type="image/webp"
                srcset="/me96.webp 1x, /me192.webp 2x"
              />
              <img
                src="/favicon.png"
                alt="Antonin Beaufort"
                width="48"
                height="48"
                class={tw`w-12 h-12 rounded-full`}
              />
            </picture>
          </a>
          <div class={tw`hidden md:block`}>
            <a
              href="#about"
              class={tw`text-gray(900 dark:300 dark:hover:200 hover:800) mx-4`}
            >
              About
            </a>
            <a
              href="#experience"
              class={tw`text-gray(900 dark:300 dark:hover:200 hover:800) mx-4`}
            >
              Experience
            </a>
            <a
              href="#projects"
              class={tw`text-gray(900 dark:300 dark:hover:200 hover:800) mx-4`}
            >
              Projects
            </a>
            <a
              href="#contact"
              class={tw`text-gray(900 dark:300 dark:hover:200 hover:800) mx-4`}
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href={asset("/cv.pdf")}
              class={tw`text-blue(600 dark:400 dark:hover:300 hover:500) border border-blue(600 dark:400 dark:hover:300 hover:500) rounded-lg px-4 py-2 mx-4`}
            >
              CV
            </a>
          </div>
        </div>
        <div class={tw`md:hidden border-t border-gray-400 mt-2 pt-2`}>
          <a
            href="#about"
            class={tw`text-gray(900 dark:300 dark:hover:200 hover:800) mx-4`}
          >
            About
          </a>
          <a
            href="#experience"
            class={tw`text-gray(900 dark:300 dark:hover:200 hover:800) mx-4`}
          >
            Experience
          </a>
          <a
            href="#projects"
            class={tw`text-gray(900 dark:300 dark:hover:200 hover:800) mx-4`}
          >
            Projects
          </a>
          <a
            href="#contact"
            class={tw`text-gray(900 dark:300 dark:hover:200 hover:800) mx-4`}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
