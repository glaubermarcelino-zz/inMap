import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#255980' , '#0D703A', '#0D703A'],
  start: { x: 1.0, y: -0.1 },
  end: { x: -0.1, y: 0.65 }
})`
  flex: 1;
`;
