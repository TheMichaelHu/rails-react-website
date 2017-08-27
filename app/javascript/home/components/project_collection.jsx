import FlipMove from 'react-flip-move';
import FloatingActionButton from 'material-ui/FloatingActionButton';

export class ProjectCollection extends React.PureComponent {
  constructor(props) {
    super(props);

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
      {
        company:  "Cornell University 2",
        location: "Ithaca, NY",
        tenure:   "Aug 2017 - Present",
        title:    "Candidate for MEng in Computer Science",
      },
      {
        company:  "Northeastern University 2",
        location: "Boston, MA",
        tenure:   "Aug 2013 - May 2017",
        title:    "BS in Computer Science, Minor in Mathematics",
      },
    ];

    this.state = {
      images: [
        "http://www.michaelhu.net/img/thumbnails/vsaBingo.jpg",
        "http://www.michaelhu.net/img/thumbnails/playlstr.jpg",
        "http://www.michaelhu.net/img/thumbnails/rooster.jpg",
        "http://www.michaelhu.net/img/thumbnails/pickyPusheen.jpg",
        "http://www.michaelhu.net/img/thumbnails/redditRecommender.jpg",
        "http://www.michaelhu.net/img/thumbnails/pickyHusky.jpg",
      ],
    };

    this.shuffleImages = this.shuffleImages.bind(this);
  }

  shuffleImages() {
    this.setState({ images: _.shuffle(this.state.images) });
  }

  render() {
    return (
      <div className="experience-collection">
        <FlipMove duration={400} easing="ease-in-out">
          {this.state.images.map(image => (
            <img src={image} key={image} alt="your mom" />
          ))}
        </FlipMove>

        <FloatingActionButton onClick={this.shuffleImages} secondary>
          Shuffle!
        </FloatingActionButton>
      </div>
    );
  }
}
