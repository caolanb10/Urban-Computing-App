import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Svg, { Rect, Circle } from 'react-native-svg';
import styles from './VisualisationStyles';

const { height, width } = Dimensions.get('window');
const svgHeight = height - 170;

const barWidth = 50;

const halfWidth = width / 2;
const quarterWidth = halfWidth / 2;

// eslint-disable-next-line react/prop-types
const Bar = ({ x, y, colour, heightProportionality }) => (
  <Rect
    width={barWidth}
    height={svgHeight * heightProportionality}
    strokeWidth={2}
    fill={colour}
    x={x}
    y={y}
  />
);

const Visualisation = ({
  nearStation,
  averageDelayDirectionOne,
  averageDelayDirectionTwo,
  yourDelayDirectionOne,
  yourDelayDirectionTwo,
  maxDelay,
}) => console.log(averageDelayDirectionTwo, averageDelayDirectionOne, yourDelayDirectionTwo, yourDelayDirectionOne)
  || (
  <View style={styles.container}>
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
        colour="yellow"
        heightProportionality={averageDelayDirectionTwo / maxDelay}
      />
      {/* Your delay for Direction 2 */}
      <Bar
        x={(quarterWidth - barWidth) + (width / 2)}
        y={svgHeight}
        colour="green"
        heightProportionality={yourDelayDirectionTwo / maxDelay}
      />
    </Svg>
  </View>
);

Visualisation.propTypes = {};

export default Visualisation;
