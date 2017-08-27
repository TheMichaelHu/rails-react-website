import { grey700 } from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import { Section } from 'shared/components/section';
import { ExperienceCollection } from './experience_collection';

import '../styles/experience_view_controller';

export class ExperienceVc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAll: false };
    this.toggleShowAll = this.toggleShowAll.bind(this);

    this.education = [
      {
        company:  "Cornell University",
        location: "Ithaca, NY",
        tenure:   "Aug 2017 - Present",
        title:    "Candidate for MEng in Computer Science",
      },
      {
        company:  "Northeastern University",
        location: "Boston, MA",
        tenure:   "Aug 2013 - May 2017",
        title:    "BS in Computer Science, Minor in Mathematics",
      },
    ];

    this.workExperiences = [
      {
        company:  "BookBub (Pubmark Inc)",
        location: "Cambridge, MA",
        tenure:   "Jan 2016 - Aug 2017",
        title:    "Software Engineer",
        bullets:  [
          "Designed and developed flagship features for new social network for book-lovers using Ruby on Rails, React JS, and ES6 and saw it released to millions of users",
          "Collected, visualized, and analyzed user data to inform product decisions",
        ],
      },
      {
        company:  "ScholarJet PBC",
        location: "Boston, MA",
        tenure:   "Mar 2016 - Aug 2017",
        title:    "Software Engineer, Founding Team Member",
        bullets:  [
          "Built web platform for creating and crowdfunding scholarships from the ground up using Java EE, Angular 2, and AWS",
          "Heavily participated in designing company’s core product, discussing the business model, and hiring",
        ],
      },
      {
        company:  "mHealth Research Group",
        location: "Boston, MA",
        tenure:   "Aug 2015 - Jan 2017",
        title:    "Research Assistant",
        bullets:  [
          "Researched viability of using neural nets over engineered features for classifying everyday activities using phones and smart watches",
          "Created java visualization tool for processing and plotting several million accelerometer datapoints from multiple sensors captured over several months",
        ],
      },
      {
        company:  "PowerAdvocate Inc",
        location: "Boston, MA",
        tenure:   "Jan 2015 - Jun 2015",
        title:    "Sofware Developer Co-op",
        bullets:  [
          "Developed distributed automated classification program in scala using Spark’s scalable machine learning library",
          "Set up and maintained linux cluster running Apache Spark, Hadoop, and Hbase",
          "Developed data analytics web application written with Spring Framework and Express JS",
        ],
      },
      {
        company:  "Northeastern University",
        location: "Boston, MA",
        tenure:   "Jul 2013 - Jan 2016",
        title:    "ResNet Technician",
        bullets:  [
          "Developed and deployed in-house inventory management web application using django frame-work",
          "Resolved issues related to Northeastern’s residential network and debugged student IT troubles",
        ],
      },
      {
        company:  "Northwoods Software Corp",
        location: "Nashua, NH",
        tenure:   "Jun 2013 - Aug 2013",
        title:    "Computer Science Intern",
        bullets:  [
          "Ported company’s JavaScript library to java for use on Android",
          "Researched viability of converting company’s GoJS tool into an Android diagramming library",
        ],
      },
    ];

    this.volunteerExperiences = [
      {
        company:  "SASE 2016 Northeast Regional Conference",
        location: "Boston, MA",
        tenure:   "Jun 2015 - Feb 2015",
        title:    "Webmaster and Advertising Chair",
        bullets:  [
          "Lead a small team to handle the graphic design, social media, and technology of a 400+ person conference at Northeastern University",
        ],
      },
      {
        company:  "East Coast Asian American Student Union (ECASSU)",
        location: "Cambridge, MA",
        tenure:   "Jul 2014 - Feb 2015",
        title:    "Technology Committee Member",
        bullets:  [
          "Helped develop the website for the 2015 ECAASU Conference using php and codeigniter framework",
        ],
      },
    ];
  }

  toggleShowAll() {
    this.setState({ showAll: !this.state.showAll });
  }

  renderShowMore() {
    const actionStyle = {
      display:        "flex",
      justifyContent: "center",
      boxShadow:      "none",
      marginTop:      -10,
      paddingBottom:  30,
    };

    return (
      <FloatingActionButton
        onClick={this.toggleShowAll}
        style={actionStyle}
      >
        <FontIcon className={`fa fa-chevron-${this.state.showAll ? "up" : "down"}`} />
      </FloatingActionButton>
    );
  }

  renderPreview() {
    return (
      <div className="experience-vc">
        <Section title="Education" color={grey700}>
          <ExperienceCollection experiences={this.education} />
        </Section>
        <Section title="Work Experience" color={grey700}>
          <ExperienceCollection experiences={this.workExperiences.slice(0, 1)} />
        </Section>
        {this.renderShowMore()}
      </div>
    );
  }

  render() {
    if (!this.state.showAll) {
      return this.renderPreview();
    }

    return (
      <div className="experience-vc">
        <Section title="Education" color={grey700}>
          <ExperienceCollection experiences={this.education} />
        </Section>
        <Section title="Work Experience" color={grey700}>
          <ExperienceCollection experiences={this.workExperiences} />
        </Section>
        <Section title="Volunteer Experience" color={grey700}>
          <ExperienceCollection experiences={this.volunteerExperiences} />
        </Section>
        {this.renderShowMore()}
      </div>
    );
  }
}
