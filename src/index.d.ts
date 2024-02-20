import { PressableProps } from 'react-native';

export interface RippleButtonProps extends PressableProps {
  color?: string;
  duration?: number;
}

declare const RippleButton: React.FC<RippleButtonProps>;

// Add this if you want to export the RippleButtonProps type
export default RippleButton;
