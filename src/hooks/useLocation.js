import { useState, useEffect } from 'react';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

// shouldTrack is from isFocused
export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  // Moved to useEffect as local variable
  //const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();
        // subscriber
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
        // add subscriber to state
        if (!granted) {
          throw new Error('Location services not granted');
        }
      } catch (err) {
        setErr(err);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      // stop watching
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    // Cleanup function
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
    // Need to use useCallback hook in TrackCreate otherwise we get memory crasch
  }, [shouldTrack, callback]);

  return [err];
};
