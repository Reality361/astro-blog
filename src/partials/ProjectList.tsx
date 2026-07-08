import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from "astro-boilerplate-components";

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Simple Clipboard Translator"
        description="A desktop translator that watches copied text and turns clipboard snippets into quick translations without interrupting your workflow."
        link="https://github.com/Reality361/Simple-Clipboard-Translator/"
        img={{
          src: "/assets/images/sct.ico",
          alt: "Simple Clipboard Translator app icon",
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>Electron.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.FUCHSIA}>mdui</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Edible Heart"
        description="A Minecraft mod that turns heart items into playable survival mechanics with extra consumables and progression hooks."
        link="https://github.com/Reality361/EdibleHeart/"
        img={{
          src: "/assets/images/absorption-edible-heart-432.png",
          alt: "Edible Heart Minecraft item artwork",
        }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Java</Tags>
          </>
        }
      />
      <Project
        name="Soul Knife"
        description="A Minecraft mod centered on a weapon that grows stronger through combat, giving mob fights a persistent reward loop."
        link="https://github.com/Reality361/SoulKnife/"
        img={{
          src: "/assets/images/infinity-soul-knife-400.png",
          alt: "Soul Knife Minecraft item artwork",
        }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Java</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
