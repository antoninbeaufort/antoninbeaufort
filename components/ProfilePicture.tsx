/** @jsx h */
import { h } from "$fresh/runtime.ts";
import { tw } from "../utils/twind.ts";

export function ProfilePicture() {
  return (
    <picture>
      <source type="image/avif" media="(min-width: 768px)" srcset="/me.avif" />
      <source
        type="image/avif"
        media="(max-width: 767px)"
        srcset="/me96.avif 1x, /me192.avif 2x"
      />
      <source type="image/webp" media="(min-width: 768px)" srcset="/me.webp" />
      <source
        type="image/webp"
        media="(max-width: 767px)"
        srcset="/me96.webp 1x, /me192.webp 2x"
      />
      <source
        type="image/png"
        media="(max-width: 767px)"
        srcset="/me96.png 1x, /me192.png 2x"
      />
      <img
        src="/favicon.png"
        alt="Antonin Beaufort"
        width="128"
        height="128"
        class={tw`w(24 md:32) h(24 md:32) rounded-full`}
      />
    </picture>
  );
}
