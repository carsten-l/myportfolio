import astro_logo_light from "../assets/astro-logo-light.svg";
import astro_logo_dark from "../assets/astro-logo-dark.svg";
import tanstack_logo_light from "../assets/tanstack-logo-black.svg";
import tanstack_logo_dark from "../assets/tanstack-logo-white.svg";
import react_logo_light from "../assets/react_wordmark_light.svg";
import react_logo_dark from "../assets/react_wordmark_dark.svg";
import vue_logo_light from "../assets/vuejs_logo_light.svg";
import vue_logo_dark from "../assets/vuejs_logo_dark.svg";
import next_logo_light from "../assets/nextjs-logo-light.svg";
import next_logo_dark from "../assets/nextjs-logo-dark.svg";
import typescript_logo from "../assets/ts-lettermark-blue.svg";
import react_router_logo_light from "../assets/rr_lockup_light.svg";
import react_router_logo_dark from "../assets/rr_lockup_dark.svg";
import git_logo_light from "../assets/Git-logo-light.svg";
import git_logo_dark from "../assets/Git-logo-dark.svg";
import github_logo_light from "../assets/GitHub_Lockup_Black.svg";
import github_logo_dark from "../assets/GitHub_Lockup_White.svg";
import tailwind_logo_light from "../assets/tailwindcss-logotype.svg";
import tailwind_logo_dark from "../assets/tailwindcss-logotype-white.svg";
import zod_logo from "../assets/zod-logo-glow.webp";
import copilot_logo_light from "../assets/GitHub_Copilot_Lockup_Black.svg";
import copilot_logo_dark from "../assets/GitHub_Copilot_Lockup_White.svg";
import vitest_logo_light from "../assets/vitest-light.svg";
import vitest_logo_dark from "../assets/vitest-dark.svg";
import Image from "next/image";

export default function Page() {
  return (
    <main className="my-12 mx-auto">
      <section className="mt-12">
        <h1 className="font-extrabold text-4xl mb-3 text-accent">Frameworks</h1>
        <p className="text-xl leading-relaxed">
          I have experience with different frontend frameworks and libraries in
          the JavaScript ecosystem. <br /> Below are some of those I have worked
          with.
        </p>
        <div className="flex flex-wrap gap-8 justify-center my-8">
          <Image
            src={astro_logo_dark}
            alt="Astro logo light mode"
            className="inline dark:hidden w-48"
          />
          <Image
            src={astro_logo_light}
            alt="Astro logo dark mode"
            className="hidden dark:inline w-48"
          />
          <Image
            src={vue_logo_dark}
            alt="Vue logo light mode"
            className="hidden dark:inline w-40"
          />
          <Image
            src={vue_logo_light}
            alt="Vue logo dark mode"
            className="inline dark:hidden w-40"
          />

          <Image
            src={react_logo_dark}
            alt="React logo light mode"
            className="hidden dark:inline w-40"
          />
          <Image
            src={react_logo_light}
            alt="React logo dark mode"
            className="inline dark:hidden w-40"
          />
          <Image
            src={next_logo_dark}
            alt="Next.js logo light mode"
            className="hidden dark:inline w-40"
          />
          <Image
            src={next_logo_light}
            alt="Next.js logo dark mode"
            className="inline dark:hidden w-40"
          />
        </div>
      </section>
      <section className="mt-12">
        <h1 className="font-extrabold text-4xl mb-3 text-accent">
          Other tools
        </h1>
        <p className="text-xl leading-relaxed w-4/5">
          The above list rarely do the job alone. Below are some of the other
          tools I have used in my workflow in different combinations.
        </p>
        <div className="flex flex-wrap gap-8 justify-center my-8">
          <Image src={typescript_logo} alt="TypeScript logo" className="w-48" />
          <span className="flex gap-2 items-center">
            <Image src={zod_logo} alt="Zod logo" className="w-16" />
            <p className="text-3xl font-bold">Zod</p>
          </span>
          <Image
            src={tailwind_logo_dark}
            alt="Tailwind CSS logo light mode"
            className="hidden dark:inline w-64"
          />
          <Image
            src={tailwind_logo_light}
            alt="Tailwind CSS logo dark mode"
            className="inline dark:hidden w-64"
          />
        </div>
        <div className="flex flex-wrap gap-8 justify-center my-8">
          <Image
            src={vitest_logo_dark}
            alt="Vitest logo light mode"
            className="hidden dark:inline w-48"
          />
          <Image
            src={vitest_logo_light}
            alt="Vitest logo dark mode"
            className="inline dark:hidden w-48"
          />
          <span>
            <Image
              src={tanstack_logo_dark}
              alt="TanStack logo light mode"
              className="hidden dark:inline w-48"
            />
            <Image
              src={tanstack_logo_light}
              alt="TanStack logo dark mode"
              className="inline dark:hidden w-48"
            />
            <p className="text-xs pl-13 font-bold uppercase">Router / Query</p>
          </span>
          <Image
            src={react_router_logo_dark}
            alt="React Router logo light mode"
            className="hidden dark:inline w-48"
          />
          <Image
            src={react_router_logo_light}
            alt="React Router logo dark mode"
            className="inline dark:hidden w-48"
          />
        </div>
        <div className="flex flex-wrap gap-8 justify-center my-8">
          <Image
            src={git_logo_dark}
            alt="Git logo light mode"
            className="hidden dark:inline w-24"
          />
          <Image
            src={git_logo_light}
            alt="Git logo dark mode"
            className="inline dark:hidden w-24"
          />
          <Image
            src={github_logo_dark}
            alt="GitHub logo light mode"
            className="hidden dark:inline w-36"
          />
          <Image
            src={github_logo_light}
            alt="GitHub logo dark mode"
            className="inline dark:hidden w-36"
          />
          <Image
            src={copilot_logo_dark}
            alt="GitHub Copilot logo light mode"
            className="hidden dark:inline w-64"
          />
          <Image
            src={copilot_logo_light}
            alt="GitHub Copilot logo dark mode"
            className="inline dark:hidden w-64"
          />
        </div>
      </section>
    </main>
  );
}
