import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import '../styles/project_filters';

export class ProjectFilters extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeType = this.changeType.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
  }

  changeType(event, index, value) {
    this.setState({ type: value });
    this.props.onFilter({ type: value });
  }

  changeLanguage(event, index, value) {
    this.setState({ tool: value });
    this.props.onFilter({ tool: value });
  }

  changeOrder(event, index, value) {
    this.setState({ order: value });
    this.props.onFilter({ order: value });
  }

  renderFilters() {
    return (
      <span className="filters">
        <DropDownMenu
          value={this.state.type}
          onChange={this.changeType}
          style={{ width: 170 }}
        >
          <MenuItem value={undefined} primaryText="All" label="Type" />
          <MenuItem value={"hackathon"} primaryText="Hackathon" />
          <MenuItem value={"research"} primaryText="Research" />
          <MenuItem value={"organization"} primaryText="Organization" />
          <MenuItem value={"class"} primaryText="Class" />
          <MenuItem value={"personal"} primaryText="Personal" />
        </DropDownMenu>
        <DropDownMenu
          value={this.state.tool}
          onChange={this.changeLanguage}
          style={{ width: 170 }}
        >
          <MenuItem value={undefined} primaryText="All" label="Language" />
          <MenuItem value={"Ruby"} primaryText="Ruby" />
          <MenuItem value={"JavaScript"} primaryText="JavaScript" />
          <MenuItem value={"Python"} primaryText="Python" />
          <MenuItem value={"Java"} primaryText="Java" />
        </DropDownMenu>
        <DropDownMenu
          value={this.state.order}
          onChange={this.changeOrder}
          style={{ width: 190 }}
        >
          <MenuItem value={undefined} primaryText="Date Desc" label="Order by" />
          <MenuItem value={"asc"} primaryText="Date Asc" />
          <MenuItem value={"awesomeness"} primaryText="Awesomeness" />
          <MenuItem value={"random"} primaryText="Random" />
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

ProjectFilters.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
