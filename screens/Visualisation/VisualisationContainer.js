import { compose } from 'recompose';
import { connect } from 'react-redux';
import React from 'react';
import { View, Text } from 'react-native';
import Visualisation from './Visualisation';

const mapStateToProps = ({
  app: {
    nearStation,
    lateMetrics,
    metrics,
  },
}) => {
  console.log('-----------', lateMetrics, metrics);
  const directionOneAverageLateness = lateMetrics[0].averageLateness;
  const directionTwoAverageLateness = lateMetrics[1].averageLateness;
  const directionOne = lateMetrics[0].direction;
  const directionTwo = lateMetrics[1].direction;
  const directionOneAverageLatenessHistorical = metrics ? metrics.averageDirectionOne : 0;
  const directionTwoAverageLatenessHistorical = metrics ? metrics.averageDirectionTwo : 0;
  const maxDelay = Math.max(
    directionOneAverageLatenessHistorical,
    directionTwoAverageLatenessHistorical,
    directionOneAverageLateness,
    directionTwoAverageLateness,
  );
  return ({
    stationName: nearStation.StationDesc,
    directionOneAverageLateness,
    directionTwoAverageLateness,
    directionOneAverageLatenessHistorical,
    directionTwoAverageLatenessHistorical,
    directionOne,
    directionTwo,
    maxDelay,
  });
};

const sample = ({
  stationName,
  directionOneAverageLateness,
  directionTwoAverageLateness,
  directionOneAverageLatenessHistorical,
  directionTwoAverageLatenessHistorical,
  directionOne,
  directionTwo,
  maxDelay,
}) => console.log('00000000000000000', stationName,
  directionOneAverageLateness,
  directionTwoAverageLateness,
  directionOneAverageLatenessHistorical,
  directionTwoAverageLatenessHistorical,
  directionOne,
  directionTwo,
  maxDelay) || (
  <View />
);

export default compose(
  connect(mapStateToProps),
)(Visualisation);
