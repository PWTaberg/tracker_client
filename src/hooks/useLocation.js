import { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

// shouldTrack is from isFocused
export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      // subscriber
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      // add subscriber to state 
      setSubscriber(sub);
      if (!granted) {
        throw new Error('Location services not granted');
      }
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      // stop watching
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [err];
};
