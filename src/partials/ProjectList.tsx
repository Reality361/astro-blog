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
        link="https://github.com/Reality361/Simple-Clipboard-Translator"
        img={{
          src: '/assets/images/icon.ico',
          alt: 'Project Web Design',
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
    </div>
  </Section>
);

export { ProjectList };
