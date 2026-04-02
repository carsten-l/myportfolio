import Image from "next/image";
import profileimg from "./assets/profile-img.png";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 my-12 relative pb-10 mx-auto">
      <div>
        <h1 className="font-extrabold text-4xl mb-3 text-accent">
          Hello, and welcome...
        </h1>
      </div>

      <div className="rounded-full overflow-hidden w-64 ml-[10%] sm:ml-[25%] xl:absolute xl:top-1/5 xl:right-0">
        <Image src={profileimg} alt="Carsten Lund" />
      </div>

      <p className="text-xl leading-relaxed md:w-4/5 xl:w-3/5">
        I&apos;m Carsten, a frontend developer who currently has the amazing
        privilege of inspiring future Danish frontend developers. I enjoy
        creating visually appealing user experiences with the modern JavaScript
        tech stack.
      </p>
      <p className="text-xl leading-relaxed md:w-4/5 xl:w-3/5">
        But don&apos;t tell it &ndash; show it, right?
      </p>

      <p className="text-xl leading-relaxed md:w-4/5 xl:w-3/5">
        On this site, I tell you about the frameworks and tools I enjoy using,
        and I showcase some of my projects.
      </p>

      <p className="text-xl leading-relaxed md:w-4/5 xl:w-3/5">
        Have a look around...
      </p>
    </main>
  );
}
