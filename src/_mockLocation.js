import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 11.99295202 + increment * tenMetersWithDegrees,
      latitude: 57.655711118 + increment * tenMetersWithDegrees,
    },
  };
};

//logitude: 11.9908518 + increment * tenMetersWithDegrees,
//latitude: 57.6557986 * increment * tenMetersWithDegrees,
//logitude: -122.0312186 + increment * tenMetersWithDegrees,
//latitude: 37.3323141 * increment * tenMetersWithDegrees,
let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
