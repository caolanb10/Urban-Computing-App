import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ART } from 'react-native';
import styles from './VisualisationStyles';

const {
  Surface,
  Group,
  Shape,
} = ART;

const Visualisation = ({
  lateMetrics,
  nearStation,
}) => console.log(nearStation, lateMetrics) || (
  <View>
    <Surface width={500} height={500}>
      <Group x={100} y={0}>
        <Shape
          d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
          stroke="#000"
          strokeWidth={1}
        />
      </Group>
    </Surface>
  </View>
);

Visualisation.propTypes = {};

export default Visualisation;
