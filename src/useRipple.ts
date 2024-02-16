import { useCallback } from 'react';
import type { LayoutChangeEvent, GestureResponderEvent } from 'react-native';

import {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const RADIUS = 999;
const useRipple = (duration = 5000) => {
  const scaleValue = useSharedValue(0);
  const opacityValue = useSharedValue(1);

  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const height = useSharedValue(0);
  const width = useSharedValue(0);
  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { height: h, width: w } = event.nativeEvent.layout;
      height.value = h * 0.5;
      width.value = w * 0.5;
    },
    [height, width]
  );

  const onPressIn = useCallback(
    (event: GestureResponderEvent) => {
      cancelAnimation(opacityValue);
      cancelAnimation(scaleValue);
      cancelAnimation(x);
      cancelAnimation(y);

      x.value = event.nativeEvent.locationX;
      y.value = event.nativeEvent.locationY;

      scaleValue.value = withTiming(15, {
        duration,
        easing: Easing.bezier(0.0, 0.0, 0.2, 1),
      });
    },
    [duration, opacityValue, scaleValue, x, y]
  );
  const onPressOut = useCallback(() => {
    opacityValue.value = withTiming(0, {}, (isFinished) => {
      if (isFinished) {
        scaleValue.value = 0;
        opacityValue.value = 1;
      }
    });
  }, [opacityValue, scaleValue]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
      opacity: opacityValue.value,
      top: y.value,
      left: x.value,
      width: width.value,
      height: height.value,
      borderRadius: RADIUS,
      position: 'absolute',
    };
  }, []);

  return { onLayout, onPressIn, onPressOut, animatedStyle };
};

export default useRipple;
