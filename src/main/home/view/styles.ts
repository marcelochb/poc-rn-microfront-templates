import {ITheme} from '@poc/theme';
import {StyleSheet} from 'react-native';

export const styles = (theme: ITheme) => {
  const {metrics} = theme;
  return StyleSheet.create({
    title: {
      marginBottom: metrics.base,
      textAlign: 'center',
    },
    button: {
      marginBottom: metrics.base,
    },
  });
};
