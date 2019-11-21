import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3 from 'd3';
import { Dimensions } from 'react-native';

/*
const d3 = { scale, shape };
*/

const createScaleX = (start, end, width) => d3.scale.scaleTime()
  .domain([new Date(start * 1000), new Date(start * 1000)])
  .range([0, width]);

const createScaleY = (minY, maxY, height) => d3.scale.scaleLinear()
  .domain([minY, maxY]).nice()
  .range([height, 0]);

const createLineGraph = ({
  data, xAccessor, yAccessor, width, height,
}) => {
  const lastDatum = data[data.length - 1];
  const scaleX = createScaleX(data[0].time, lastDatum.time, width);
  const allYValues = data.reduce((all, datum) => {
    all.push(yAccessor(datum));
    return all;
  }, []);

  const extentY = d3Array.extent(allYValues);
  const scaleY = createScaleY(extentY[0], extentY[1], height);

  const lineShape = d3.shape.line()
    .x((d) => scaleX(xAccessor(d)))
    .y((d) => scaleY(yAccessor(d)));

  return {
    data,
    scale: {
      x: scaleX,
      y: scaleY,
    },
    path: lineShape(data),
    ticks: data.map((datum) => ({ x: scaleX(xAccessor(datum)), y: scaleY(yAccessor(datum)) })),

  };
};

const dimensionWindow = Dimensions.get('window');

const forecastData = {};
forecastData.xAccessor = (d) => new Date(d.time * 1000);
forecastData.yAccessor = (d) => d.temperatureMin;
forecastData.width = Math.round(dimensionWindow.width * 0.9);
forecastData.height = Math.round(dimensionWindow.height * 0.5);

const totalAverageDelay = { Northbound: 12, Southbound: 4 };
const yourAverageDelay = { Northbound: 10, Southbound: 11 };

const domain = ['Northbound', 'Southbound'];
const maxNorth = Math.max(totalAverageDelay.Northbound, yourAverageDelay.Northbound);
const maxSouth = Math.max(totalAverageDelay.Southbound, yourAverageDelay.Southbound);
const totalMax = Math.max(maxNorth, maxSouth);

const x = d3.scaleOrdinal().domain(domain).range(['black']);
const y = d3.scaleLinear().domain([0, totalMax]).range([0, 200]);

const barChart = shape.stack()
export const lineGraph = createLineGraph(forecastData);

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

/*
const y = d3
  .scaleLinear()
  .domain([0, 100])
  .range([0, 640]);

const x = d3
  .scaleTime()
  .domain([new Date(2000, 0, 1), new Date(2000, 0, 8)])
  .range([0, 640]);


const data = [
  { date: new Date(2000, 1, 1), value: 83.24 },
  { date: new Date(2000, 1, 2), value: 65 },
  { date: new Date(2000, 1, 3), value: 20 },
  { date: new Date(2000, 1, 4), value: 50 },
  { date: new Date(2000, 1, 5), value: 10 },
  { date: new Date(2000, 1, 6), value: 46 },
  { date: new Date(2000, 1, 7), value: 19 },
];

const line = d3.line()
  .x((d) => x(d.value))
  .y((d) => y(d.value));

const dPath = line(data);
*/
