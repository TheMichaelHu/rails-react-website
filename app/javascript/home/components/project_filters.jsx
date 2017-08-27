import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import '../styles/project_filters';

export class ProjectFilters extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type:     0,
      language: 0,
      order:    0,
    };
    this.changeType = this.changeType.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
  }

  changeType(event, index, value) {
    this.setState({ value });
  }

  changeLanguage(event, index, value) {
    this.setState({ value });
  }

  changeOrder(event, index, value) {
    this.setState({ value });
  }

  renderFilters() {
    return (
      <span className="filters">
        <DropDownMenu value={this.state.type} onChange={this.changeType}>
          <MenuItem value={0} primaryText="All" label="Type" />
          <MenuItem value={1} primaryText="Hackathon" />
          <MenuItem value={2} primaryText="Research/Club" />
          <MenuItem value={3} primaryText="Class" />
          <MenuItem value={4} primaryText="Personal" />
        </DropDownMenu>
        <DropDownMenu value={this.state.language} onChange={this.changeLanguage}>
          <MenuItem value={0} primaryText="All" label="Language" />
          <MenuItem value={1} primaryText="Ruby" />
          <MenuItem value={2} primaryText="JavaScript" />
          <MenuItem value={3} primaryText="Python" />
          <MenuItem value={4} primaryText="Java" />
        </DropDownMenu>
        <DropDownMenu value={this.state.order} onChange={this.changeOrder}>
          <MenuItem value={0} primaryText="Date Desc" label="Order by" />
          <MenuItem value={1} primaryText="Date Asc" />
          <MenuItem value={2} primaryText="Awesomeness" />
          <MenuItem value={3} primaryText="Random" />
        </DropDownMenu>
      </span>
    );
  }

  render() {
    return (
      <div className="project-filters">
        <span className="text">Filters:</span>
        {this.renderFilters()}
      </div>
    );
  }
}
