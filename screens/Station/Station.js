import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { TrainPropType } from '../../constants';
import { TrainItem } from '../../components';
import styles from './StationStyles';


const Station = ({
  station,
  directions,
  stationDataByDirection,
}) => (
  <ScrollView>
    {directions.length > 0 ? directions.map((direction, index) => (
      <Card title={direction} key={direction}>
        {stationDataByDirection[index].map((train) => (
          <TrainItem train={train} key={train.Traincode} />
        ))}
      </Card>
    )) : null}
  </ScrollView>
);

Station.propTypes = {
  station: PropTypes.string,
  directions: PropTypes.arrayOf(PropTypes.string),
  stationDataByDirection: PropTypes.arrayOf(PropTypes.arrayOf(TrainPropType)),
};

Station.defaultProps = {
  stationDataByDirection: [[]],
  station: '',
  directions: [''],
};

export default Station;
