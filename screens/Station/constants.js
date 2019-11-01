import PropTypes from 'prop-types';

export default {
  NORTHBOUND: 'Northbound',
  SOUTHBOUND: 'Southbound',
};

export const TrainPropType = PropTypes.shape({
  Destination: PropTypes.string.isRequired,
  Destinationtime: PropTypes.string.isRequired,
  Direction: PropTypes.string.isRequired,
  Duein: PropTypes.string.isRequired,
  Exparrival: PropTypes.string.isRequired,
  Expdepart: PropTypes.string.isRequired,
  Lastlocation: PropTypes.oneOfType([PropTypes.string, PropTypes.null]),
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
