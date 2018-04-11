import { connect } from 'react-redux'
import Link from './link';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;

/*
class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(
      () => this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  clickHandler = () => {
    const { filter } = this.props;
    const { store } = this.context;

    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: filter,
    });
  }

  render() {
    const { filter, children } = this.props;
    const { store } = this.context;

    const state = store.getState();

    return(
      <Link
        active={filter === state.visibilityFilter}
        onClick={this.clickHandler}
      >
        {children}
      </Link>
    );
  }
}

FilterLink.contextTypes = {
  store: PropTypes.object,
};
*/
