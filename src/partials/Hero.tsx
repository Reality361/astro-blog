import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Reality361</GradientText> 👋
        </>
      }
      description={
        <>
          We are building a website using{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://astro.build/"
          >
            Astro
          </a>{' '}
          , which is very simple.
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/prog-man.gif"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://x.com/reality36101/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61552388341057/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCLnUpGjyYvo7T-Xwa8PCkpA/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
