import xmlParser from 'xml-parser';
import axios from 'axios';
import EndPoints from './constants';

const makeRequest = async (endPoint) => {
  const req = await axios(endPoint);
  const reqData = req.data;
  const jsonData = xmlParser(reqData);
  return jsonData;
};

const jsonParser = (data) => (
  data.root.children.map((station) => station.children.reduce((acc, element) => ({ ...acc, [element.name]: element.content }), {})));


const requests = {
  getAllStations: async () => jsonParser(await makeRequest(EndPoints.getAllStations)),
  getAllStationsByType: async ({ type }) => jsonParser(await makeRequest(EndPoints.getAllStationsByType)({ type })),
  getCurrentTrains: async () => jsonParser(await makeRequest(EndPoints.getCurrentTrains)),
  getCurrentTrainsByType: async ({ type }) => jsonParser(await makeRequest(EndPoints.getCurrentTrainsByType({ type }))),
  getStationDataByName: async ({ name }) => jsonParser(await makeRequest(EndPoints.getStationDataByName({ name }))),
  getStationDataByNameWithMinutes: async ({ name, minutes }) => jsonParser(await makeRequest(EndPoints.getStationDataByNameWithMinutes({ name, minutes }))),
  getStationDataByCode: async ({ code }) => jsonParser(await makeRequest(EndPoints.getStationDataByCode({ code }))),
  getStationDataByCodeWithMinutes: async ({ code, minutes }) => jsonParser(await makeRequest(EndPoints.getStationDataByCodeWithMinutes({ code, minutes }))),
  getStationsWithFilter: async ({ filter }) => jsonParser(await makeRequest(EndPoints.getStationsWithFilter({ filter }))),
  getTrainMovements: async ({ id, dateString }) => jsonParser(await makeRequest(EndPoints.getTrainMovements({ id, dateString }))),
};

export { requests };
