export default ({ long, lat, nearbyStations }) => nearbyStations.sort((station1, station2) =>
  Math.sqrt(((long - station1.StationLongitude) ** 2) + ((lat - station1.StationLatitude) ** 2))
  - Math.sqrt(((long - station2.StationLongitude) ** 2) + ((lat - station2.StationLatitude) ** 2)));
