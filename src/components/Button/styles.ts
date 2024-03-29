import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { ifStyle } from '@platformbuilders/helpers';

type Props = {
  height?: string;
  activeOpacity?: number;
  radius?: string;
  background?: string;
};

const isSmall = ifStyle('small');
const isMedium = ifStyle('medium');

export const Btn = styled.TouchableOpacity.attrs((props: Props) => ({
  activeOpacity: props.activeOpacity ? props.activeOpacity : 0.7,
}))`
  width: ${isSmall('64px', isMedium('98px', '182px'))};
  height: ${(props: Props) => (props.height ? props.height : '56px')};
  background: ${(props: Props) => (props.background ? props.background : colors.green)};
  justify-content: center;
  align-items: center;
  border-radius: ${(props: Props) => (props.radius ? props.radius : '16px')};
`;
