import { connect } from 'react-redux';
import { setPlace, getVenues, clearVenues } from '../../actions';
import Place from './place.component';

const mapStateToProps = state => ({
  items: state.rootReducer.placeItems,
  isLoading: state.rootReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  setPlace: (placeId, city, country) =>
    dispatch(setPlace(placeId, city, country)),
  getVenues: () => dispatch(getVenues()),
  clearVenues: () => dispatch(clearVenues())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
