/** @jsx h */
import { h, Head } from "$fresh/runtime.ts";
import { tw } from "../utils/twind.ts";

import { Footer } from "../components/Footer.tsx";

interface CVItem {
  start: Date;
  end: Date | null;
  title: string;
  company: string;
  description: string;
}

const CV: CVItem[] = [
  {
    start: new Date(2022, 0),
    end: null,
    title: "Project Manager & Software Engineering Intern",
    company: "Infine",
    description:
      "Managing the core project of the company, choosing technologies solutions and implementing them in the company's application.",
  },
  {
    start: new Date(2020, 8),
    end: new Date(2021, 1),
    title: "Software Engineering Intern",
    company: "Infine",
    description:
      "Introduced new frontend of a fintech app using Nuxt instead of Symfony/Twig to improve UX and performance.",
  },
  {
    start: new Date(2020, 0),
    end: new Date(2020, 3),
    title: "Full-Stack Developer Intern",
    company: "Enedis",
    description:
      "Developed a web application with Ionic that allows people to report event about the environment.",
  },
  {
    start: new Date(2019, 6),
    end: new Date(2019, 8),
    title: "Frontend Developer",
    company: "Vitibot",
    description:
      "Worked on a 3D vineyard plot editor using React, Electron and ThreeJS.",
  },
  {
    start: new Date(2019, 3),
    end: new Date(2019, 6),
    title: "Full-Stack Developer Intern",
    company: "Vitibot",
    description:
      "Introduced new version version of the Vitibot showcase website using Svelte, Strapi, Docker, Kubernetes with a CI workflow.",
  },
  {
    start: new Date(2018, 8),
    end: new Date(2018, 9),
    title: "Web Developer Intern",
    company: "Vitibot",
    description:
      "Developed the showcase website of Vitibot using PHP, MySQL, Javascript, HTML and CSS.",
  },
];

export default function CVPage() {
  return (
    <div class={tw`mx-auto max-w-screen-md px(4 sm:6 md:8) my(12 sm:20 md:32)`}>
      <Head>
        <title>CV - Antonin Beaufort</title>
        <meta name="description" content="Software engineer. 🌍" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div class={tw`mb-24 space-y(8 md:12)`}>
        <h1 class={tw`leading-tight text(gray-900 4xl md:5xl) font-bold`}>
          Curriculum vitae
        </h1>
        <div>
          <h2 class={tw`leading-tight text(gray-900 3xl) font-semibold`}>
            Jobs
          </h2>
          <ul class={tw`mt-6 text-lg space-y-4`}>
            {CV.map((item) => (
              <Item item={item} />
            ))}
          </ul>
        </div>
        <div>
          <h2 class={tw`leading-tight text(gray-900 3xl) font-semibold`}>
            Skills
          </h2>
          <ul class={tw`mt-6 text-lg space-y-4`}>
            <li>
              Highly provicient in <b>JavaScript</b>, <b>TypeScript</b>,{" "}
              <b>HTML</b>, and <b>CSS</b>. Experience with <b>Deno</b>,{" "}
              <b>Node</b>, <b>React (Remix)</b>, <b>Vue (Nuxt)</b> and{" "}
              <b>Svelte</b>.
            </li>
            <li>
              In-depth knowledge of the <b>web platform</b> and{" "}
              <b>JavaScript runtimes</b>. I have completed numerous projects
              with these technologies.
            </li>
            <li>
              Capable of architechting and implementing <b>scalable</b> and{" "}
              <b>performant</b> web applications.
            </li>
            <li>
              Signficant experience in project management. I am currently{" "}
              project manager at <b>Infine</b>.
            </li>
          </ul>
        </div>
        <div>
          <h2 class={tw`leading-tight text(gray-900 3xl) font-semibold`}>
            Projects
          </h2>
          <ul class={tw`mt-6 text-lg space-y-2`}>
            <li>
              <a
                href="https://github.com/antoninbeaufort/thegreenalternative"
                class={tw`font-semibold hover:underline`}
              >
                The Green Alternative
              </a>{" "}
              - zero waste alternatives site
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Item(props: { item: CVItem }) {
  const now = new Date();
  const start = props.item.start;
  const end = props.item.end ?? now;

  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  const timeframe =
    end === now
      ? `${startYear} - present`
      : startYear === endYear
      ? startYear
      : `${startYear} - ${endYear}`;

  const startMonths = start.getFullYear() * 12 + start.getMonth();
  const endMonths = end.getFullYear() * 12 + end.getMonth();

  const monthDuration = endMonths - startMonths;

  const years = Math.floor(monthDuration / 12);
  const months = monthDuration % 12;

  let duration = "";
  if (years > 0) {
    duration += `${years} year${years > 1 ? "s" : ""} `;
  }
  if (months > 0 && years < 2) {
    duration += `${months} month${months > 1 ? "s" : ""} `;
  }

  return (
    <li class={tw`grid grid-cols-7 gap-x-2 gap-y-1`}>
      <span class={tw`col-span-2 font-semibold`}>{timeframe}</span>
      <span class={tw`col-span-3 font-bold`}>{props.item.title}</span>
      <span class={tw`col-span-2`}>
        {props.item.company === "freelance" ? (
          <i>{props.item.company}</i>
        ) : (
          props.item.company
        )}
      </span>
      <span class={tw`col-span-2 italic text-base`}>{duration}</span>
      <span class={tw`col-span-5 text-base`}>{props.item.description}</span>
    </li>
  );
}
