import React from "react";
import Head from "next/head";
import Image from "next/image";
import { AppHeader, ProjectCard, Preloader, SocialLinks } from "../components";
import Projects from "../public/projects.json";

export default function Home() {
  const ref = React.useRef(null);
  let lscroll;
  React.useEffect(() => {

    const locomotiveScroll =
      typeof window !== `undefined`
        ? require("locomotive-scroll").default
        : null;

    if (!ref.current) return;

    lscroll = new locomotiveScroll({
      el: ref.current,
      smooth: true,
      reloadOnContextChange: true,
      inertia: 0.2,
      multiplier: 3,
      lerp: 0.1,
      touchMultiplier: 3,
      reloadOnContextChange: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });
  });

  return (
    <div
      className="font-primary bg-blue text-coolGray"
      id="menu-target"
      ref={ref}
    >
      <Head>
        <link rel="icon" href="svg/me.svg" />
        <meta name="theme-color" content="#10101A" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#10101A" />
        <title>Temi.</title>
        <meta
          name="description"
          content=" I am Oladetoun Temitayo, an engineer with a keen eye for
            user-friendly and quality web platforms, My strength lies within Frontend Engineering and I craft high-performance web products using my stack
            and I am dedicated to learning, evaluating, and applying new
            technologies to enhance content and functionality."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Temi." />

        <meta
          property="og:description"
          content=" I am Oladetoun Temitayo, an engineer with a keen eye for
            user-friendly and quality web platforms, My strength lies within Frontend Engineering and I craft high-performance web products using my stack
            and I am dedicated to learning, evaluating, and applying new
            technologies to enhance content and functionality."
        />
        <meta name="twitter:title" content="Temi." />
        <meta
          name="twitter:description"
          content=" I am Oladetoun Temitayo, an engineer with a keen eye for
            user-friendly and quality web platforms, My strength lies within Frontend Engineering and I craft high-performance web products using my stack
            and I am dedicated to learning, evaluating, and applying new
            technologies to enhance content and functionality."
        />
      </Head>
      <Preloader />
      <AppHeader />
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <div className="flex justify-center items-center">
          <Image
            src="/svg/me.svg"
            alt="Oladtoun Temi. Memoji"
            width={250}
            height={250}
          />
        </div>

        <div className="pt-6">
          <h1 className="font-black text-6xl text-white leading-snug text-center md:text-9xl lg:leading-snug">
            I'm Temi.
          </h1>
          <p className="text-center font-thin text-lg">
            I build beautiful stuffs.
          </p>
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="pt-16 px-4 md:px-8 lg:px-16">
        <h1 className="font-black text-lg underline mb-4 md:text-4xl">
          Quick Intro🤞🏽?
        </h1>
        <p className="font-thin text-sm leading-6 lg:text-lg lg:leading-10">
          I am Oladetoun Temitayo, an engineer with a keen eye for user-friendly
          and quality web platforms, My strength lies within Frontend
          Engineering and I craft high-performance web products using my stack
          and I am dedicated to learning, evaluating, and applying new
          technologies to enhance content and functionality.
        </p>
      </div>
      <div className="pt-24 px-4 md:px-8 lg:px-16">
        <h1 className="font-black text-lg underline mb-4 md:text-4xl">
          What have I cooked so far🤙🏽
        </h1>
        <p className="font-thin text-sm leading-6 lg:text-lg lg:leading-10">
          I try my best to make the best “meals” and here are some amazing ones
        </p>
        <div className="pt-32 flex items-center justify-center flex-col">
          {Projects.map((project) => (
            <ProjectCard key={project.id.toString()} project={project} />
          ))}
        </div>
      </div>
      <div className="pt-8 px-4 md:px-8 lg:px-16">
        <h1 className="font-black text-lg underline mb-4 md:text-4xl">
          Friends now👋🏽?
        </h1>
        <p className="font-thin text-sm leading-6">
          Got a question, proposal or project or want to work together on
          something? Feel free to reach out. I’m currently looking fresh
          opportunities to do what I love and also build amazing stuffs.
        </p>
        <p className="font-bold text-sm leading-10">
          {" "}
          Mafo, give me a call <a href="tel:+2349138661732">🇳🇬</a> or send me an email <a href = "mailto:oladetountemitayo@gmail.com">📧</a>.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}
