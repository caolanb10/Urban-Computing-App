import React from 'react';
import {
  View, StyleSheet, Dimensions, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Svg, { Rect } from 'react-native-svg';
import styles from './VisualisationStyles';

const { height, width } = Dimensions.get('window');
const svgHeight = height - 220;

const barWidth = 50;

const halfWidth = width / 2;
const quarterWidth = halfWidth / 2;

// eslint-disable-next-line react/prop-types
const Bar = ({
  x, y, colour, heightProportionality,
}) => (
  <Rect
    width={barWidth}
    height={-(svgHeight * heightProportionality)}
    strokeWidth={2}
    fill={colour}
    x={x}
    y={y}
  />
);

const Visualisation = ({
  stationName,
  directionOneAverageLatenessHistorical: averageDelayDirectionOne,
  directionTwoAverageLatenessHistorical: averageDelayDirectionTwo,
  directionOneAverageLateness: yourDelayDirectionOne,
  directionTwoAverageLateness: yourDelayDirectionTwo,
  maxDelay,
  directionOne,
  directionTwo,
}) => (
  <View style={styles.container}>
    <Text>
      {`Viewing Late Metrics for ${stationName} Station`}
    </Text>
    <Text>
      Red is current average lateness, Blue is historical Average lateness
    </Text>
    <Text style={styles.textStyle}>
      {`${directionOne}                           ${directionTwo}`}
    </Text>
    <Svg width="100%" height={svgHeight} style={styles.svgContainer}>
      {/* Average delay for Direction 1 */}
      <Bar
        x={quarterWidth - barWidth}
        y={svgHeight}
        colour="blue"
        heightProportionality={(averageDelayDirectionOne / maxDelay)}
      />
      {/* Your delay for Direction 1 */}
      <Bar
        x={quarterWidth}
        y={svgHeight}
        colour="red"
        heightProportionality={yourDelayDirectionOne / maxDelay}
      />
      {/* Average delay for Direction 2 */}
      <Bar
        x={quarterWidth + halfWidth}
        y={svgHeight}
        colour="blue"
        heightProportionality={averageDelayDirectionTwo / maxDelay}
      />
      {/* Your delay for Direction 2 */}
      <Bar
        x={(quarterWidth - barWidth) + (width / 2)}
        y={svgHeight}
        colour="red"
        heightProportionality={yourDelayDirectionTwo / maxDelay}
      />
    </Svg>
    <Text>
      {`Current average train lateness for ${directionOne}: ${Math.round(yourDelayDirectionOne * 100) / 100}`}
    </Text>
    <Text>
      {`Current average train lateness for ${directionTwo}: ${Math.round(yourDelayDirectionTwo * 100) / 100}`}
    </Text>
    <Text>
      {`Historical average train lateness for ${directionOne}: ${Math.round(averageDelayDirectionOne * 100) / 100}`}
    </Text>
    <Text>
      {`Historical average train lateness for ${directionTwo}: ${Math.round(averageDelayDirectionTwo * 100) / 100}`}
    </Text>
  </View>
);

Visualisation.propTypes = {};

export default Visualisation;
