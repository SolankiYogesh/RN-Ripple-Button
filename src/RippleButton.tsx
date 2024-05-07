/* eslint-disable react/react-in-jsx-scope */
import Animated from 'react-native-reanimated';
import useRipple from './useRipple';
import {
  type StyleProp,
  type ViewStyle,
  Pressable,
  StyleSheet,
} from 'react-native';
import type { PressableProps } from 'react-native';

interface RippleButtonProps extends PressableProps {
  color?: string;
  duration?: number;
}

const RippleButton = (props: RippleButtonProps) => {
  const { color = '#5f5a5a29', duration, ...rest } = props;
  const { animatedStyle, onLayout, onPressIn, onPressOut } =
    useRipple(duration);
  return (
    <Pressable
      onPressIn={(event) => {
        onPressIn(event);
        if (props.onPressIn) {
          props.onPressIn(event);
        }
      }}
      onPressOut={(event) => {
        onPressOut();
        if (props.onPressOut) {
          props.onPressOut(event);
        }
      }}
      onLayout={(event) => {
        onLayout(event);
        if (props.onLayout) {
          props.onLayout(event);
        }
      }}
      {...rest}
      style={[styles.hidden, props.style as StyleProp<ViewStyle>]}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            backgroundColor: color,
          },
        ]}
      />
      {props.children}
    </Pressable>
  );
};

export default RippleButton;

const styles = StyleSheet.create({
  hidden: {
    overflow: 'hidden',
  },
});
