export default ({ long, lat, nearbyStations }) => nearbyStations.sort((station1, station2) => {
  const station1Coords = {
    long: station1.StationLongitude,
    lat: station1.StationLatitude,
  };
  const station2Coords = {
    long: station2.StationLongitude,
    lat: station2.StationLatitude,
  };
  const distanceBetweenUserAndStation1 = Math.sqrt(((long - station1Coords.long) ** 2) + ((lat - station1Coords.lat) ** 2));
  const distanceBetweenUserAndStation2 = Math.sqrt(((long - station2Coords.long) ** 2) + ((lat - station2Coords.lat) ** 2));
  return distanceBetweenUserAndStation1 - distanceBetweenUserAndStation2;
});
