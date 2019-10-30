import { compose } from 'recompose';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = ({
  stations, longitude, latitude, time,
}) => ({
  allStations: stations,
  longitude,
  latitude,
  time,
});

const mapDispatchToProps = {

};

const handlers = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
