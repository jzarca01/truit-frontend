import { connect } from 'react-redux';
import { searchPlaces, clearPlaces } from '../../actions';
import { push } from 'connected-react-router';
import SearchFullScreen from './search.component';

const mapStateToProps = state => ({
  searchResults: state.rootReducer.searchResults,
  isLoading: state.rootReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  searchPlaces: keyword => dispatch(searchPlaces(keyword)),
  clearPlaces: () => dispatch(clearPlaces()),
  gotoPlace: (city, country) => dispatch(push(`/places/${city}-${country}`))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFullScreen);
