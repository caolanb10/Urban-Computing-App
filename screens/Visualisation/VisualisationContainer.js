import { compose } from 'recompose';
import { connect } from 'react-redux';
import React from 'react';
import { View, Text } from 'react-native';
import Visualisation from './Visualisation';


const formatLateMetrics = ({ lateMetrics, averageLateMetrics }) => {
  const directionOneMetrics = lateMetrics[0];
  const directionTwoMetrics = lateMetrics[1];
  const averageDelayDirectionOne = averageLateMetrics[directionOneMetrics.direction];
  const averageDelayDirectionTwo = averageLateMetrics[directionTwoMetrics.direction];
};

const mapStateToProps = ({
  app: {
    nearStation,
    lateMetrics,
    metrics,
  },
}) => console.log(lateMetrics, metrics) || ({
  averageDelayDirectionOne: metrics ? metrics.first.totalLateness / metrics.first.number : 0,
  averageDelayDirectionTwo: metrics ? metrics.second.totalLateness / metrics.second.number : 0,
  yourDelayDirectionOne: lateMetrics ? lateMetrics[0].averageLateness : 0,
  yourDelayDirectionTwo: lateMetrics ? lateMetrics[1].averageLateness : 0,
  nearStation,
});

const sample = ({
  averageDelayDirectionOne, averageDelayDirectionTwo, yourDelayDirectionOne, yourDelayDirectionTwo,
}) => (
  <View />
);

export default compose(
  connect(mapStateToProps),
)(Visualisation);
