import {ITheme} from '@poc/interfaces';
import {StyleSheet} from 'react-native';

export const styles = (theme: ITheme) => {
  const {metrics,colors} = theme;
  return StyleSheet.create({
    title: {
      marginBottom: metrics.base,
      textAlign: 'center',
    },
    button: {
      marginBottom: metrics.base,
    },
    viewTheme: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: metrics.base,
      marginBottom: metrics.large
    },
    titleTheme: {
      color: colors.elements,
      textAlign: 'center',
      marginTop: metrics.base
    }
  });
};
