import {ModelOfTheme} from '@poc/theme';
import {StyleSheet} from 'react-native';

export const styles = (theme: ModelOfTheme) => {
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
