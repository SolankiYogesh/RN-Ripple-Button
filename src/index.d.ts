import { PressableProps } from 'react-native';

interface RippleButtonProps extends PressableProps {
  color?: string;
  duration?: number;
}

declare const RippleButton: React.FC<RippleButtonProps>;

export default RippleButton;
export type { RippleButtonProps };
