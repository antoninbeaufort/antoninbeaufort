/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

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
      "Put in production a loan eligibility scoring platform by migrating the backend from Symfony to Firebase, stabilizing the platform with Sentry.",
  },
  {
    start: new Date(2020, 9),
    end: new Date(2021, 2),
    title: "Full-Stack Developer Intern",
    company: "Infine",
    description:
      "Updated a loan eligibility scoring platform in Nuxt, with Symfony, Docker, Kubernetes, AWS DynamoDB/Lambda and MySQL.",
  },
  {
    start: new Date(2020, 0),
    end: new Date(2020, 4),
    title: "Full-Stack Developer Intern",
    company: "Enedis",
    description:
      "During this internship I realized a web and mobile application allowing to report environmental events with React, Typescript and Ionic. ",
  },
  {
    start: new Date(2019, 6),
    end: new Date(2019, 9),
    title: "React / Three.JS Developer",
    company: "Vitibot",
    description:
      "After my second internship, I was hired at VitiBot in a fixed-term contract to create a 3D plot editor with ThreeJS. It’s a software made with Electron and React.",
  },
  {
    start: new Date(2019, 3),
    end: new Date(2019, 7),
    title: "Full-Stack Developer Intern",
    company: "Vitibot",
    description:
      "During a second internship at VitiBot, I redesigned the company’s website to meet new needs with modern technologies such as Docker, kubernetes and continuous integration.",
  },
  {
    start: new Date(2018, 8),
    end: new Date(2018, 10),
    title: "Web Developer Intern",
    company: "Vitibot",
    description:
      "During my second year internship, I created the showcase site for VitiBot, a startup in wine robotics, using HTML, CSS, JS, PHP and MySQL.",
  },
];

export function Experience() {
  return (
    <ul class={tw`mt-6 text-lg space-y-4`}>
      {CV.map((item) => (
        <Item item={item} />
      ))}
    </ul>
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
      <span class={tw`col-span-2 font-semibold dark:text-white`}>
        {timeframe}
      </span>
      <span class={tw`col-span-3 font-bold dark:text-white`}>
        {props.item.title}
      </span>
      <span class={tw`col-span-2 dark:text-white`}>
        {props.item.company === "freelance" ? (
          <i>{props.item.company}</i>
        ) : (
          props.item.company
        )}
      </span>
      <span class={tw`col-span-2 italic text-base dark:text-gray-300`}>
        {duration}
      </span>
      <span class={tw`col-span-5 text-base dark:text-gray-300`}>
        {props.item.description}
      </span>
    </li>
  );
}
