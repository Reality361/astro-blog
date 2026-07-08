import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Building tools, mods, and notes as{" "}
          <GradientText>Reality361</GradientText>
        </>
      }
      description={
        <span className="block max-w-2xl text-lg leading-8 text-slate-300">
          A personal space for practical programming experiments, Minecraft
          modding, Linux setup notes, and the projects that make everyday
          development smoother.
        </span>
      }
      avatar={
        <img
          className="h-64 w-64 rounded-full border border-cyan-300/30 bg-slate-800 object-cover shadow-2xl shadow-cyan-950/40 sm:h-80 sm:w-80"
          src="/assets/images/prog-man.gif"
          alt="Reality361 programming avatar"
          loading="eager"
          decoding="async"
        />
      }
      socialButtons={
        <>
          <a
            href="https://github.com/Reality361/"
            aria-label="Reality361 on GitHub"
          >
            <HeroSocial src="/favicon.ico" alt="GitHub profile" />
          </a>
          <a href="https://x.com/reality36101/" aria-label="Reality361 on X">
            <HeroSocial src="/assets/images/twitter-icon.png" alt="X profile" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552388341057/"
            aria-label="Reality361 on Facebook"
          >
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook profile"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCLnUpGjyYvo7T-Xwa8PCkpA/"
            aria-label="Reality361 on YouTube"
          >
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="YouTube channel"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
