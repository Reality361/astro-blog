import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

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
        description="A simple translator that can monitor your clipboard and translate its content."
        link="https://github.com/Reality361/Simple-Clipboard-Translator/"
        img={{
          src: '/assets/images/sct.ico',
          alt: 'Simple Clipboard Translator',
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
        description="A Minecraft mod that adds edible hearts and a few more."
        link="https://github.com/Reality361/EdibleHeart/"
        img={{
          src: '/assets/images/absorption-edible-heart-432.png',
          alt: 'Edible Heart',
        }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Java</Tags>
          </>
        }
      />
      <Project
        name="Soul Knife"
        description="A Minecraft mod that adds a soul knife whose damage increases as you kill mobs with it!"
        link="https://github.com/Reality361/SoulKnife/"
        img={{
          src: '/assets/images/infinity-soul-knife-400.png',
          alt: 'Soul Knife',
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
