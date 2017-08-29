import { grey700 } from 'material-ui/styles/colors';

import { Hero } from 'shared/components/hero';
import { Section } from 'shared/components/section';
import { IconGroup } from 'shared/components/icon_group';
import Scroll from 'react-scroll';
import { ExperienceVc } from './experience_view_controller';
import { ProjectsVc } from './projects_view_controller';
import '../styles/portfolio_view_controller';

const Element = Scroll.Element;

export class PortfolioVc extends React.PureComponent {
  render() {
    return (
      <div className="portfolio-vc">
        <Element name="hero" className="hero-wrapper">
          <Hero
            title="Michael Hu"
            text="software engineer"
          />
        </Element>
        <Element name="about">
          <Section title="About">
            <p>I&apos;m a grad student at Cornell University grabbing an MEng in computer science. My background is that of a web developer with some machine learning here or there, but I&apos;m really hoping to flex my machine learning and distributed computing skills during my time in grad school.</p>
            <p>This site hosts something that might resemble a resume, but its true purpose is to organize my software projects over the years. I&apos;m also planning to grow a blog off it at some later point.</p>
            <div className="icon-group-wrapper">
              <IconGroup
                icons={[
                  { name: "github", url: "https://github.com/TheMichaelHu" },
                  { name: "linkedin", url: "https://www.linkedin.com/in/michaelanhu/" },
                  { name: "twitter", url: "https://twitter.com/TheMichaelHu" },
                  { name: "envelope", url: "mailto:michael.an.hu@gmail.com" },
                ]}
                size="large"
              />
            </div>
          </Section>
        </Element>
        <Element name="experience">
          <ExperienceVc />
        </Element>
        <Element name="projects">
          <Section title="Projects" color={grey700}>
            <div className="projects-vc-wrapper">
              <ProjectsVc />
            </div>
          </Section>
        </Element>
      </div>
    );
  }
}
