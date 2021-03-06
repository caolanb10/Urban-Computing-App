import PropTypes from 'prop-types';

const TrainPropType = PropTypes.shape({
  Destination: PropTypes.string.isRequired,
  Destinationtime: PropTypes.string.isRequired,
  Direction: PropTypes.string.isRequired,
  Duein: PropTypes.string.isRequired,
  Exparrival: PropTypes.string.isRequired,
  Expdepart: PropTypes.string.isRequired,
  Lastlocation: PropTypes.string,
  Late: PropTypes.string.isRequired,
  Locationtype: PropTypes.string.isRequired,
  Origin: PropTypes.string.isRequired,
  Origintime: PropTypes.string.isRequired,
  Querytime: PropTypes.string.isRequired,
  Scharrival: PropTypes.string.isRequired,
  Schdepart: PropTypes.string.isRequired,
  Servertime: PropTypes.string.isRequired,
  Stationcode: PropTypes.string.isRequired,
  Stationfullname: PropTypes.string.isRequired,
  Status: PropTypes.string.isRequired,
  Traincode: PropTypes.string.isRequired,
  Traindate: PropTypes.string.isRequired,
  Traintype: PropTypes.string.isRequired,
});

const StationPropTypes = PropTypes.shape({
  StationAlias: PropTypes.string,
  StationCode: PropTypes.string.isRequired,
  StationDesc: PropTypes.string.isRequired,
  StationId: PropTypes.string.isRequired,
  StationLatitude: PropTypes.string.isRequired,
  StationLongitude: PropTypes.string.isRequired,
});

const StationsPropTypes = PropTypes.arrayOf(
  StationPropTypes,
);

export { TrainPropType, StationsPropTypes };
