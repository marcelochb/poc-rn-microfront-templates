import { ITheme } from "@poc/interfaces";
import { StyleSheet } from "react-native";

export const styles = (theme:ITheme) => {
  const {metrics, colors, fontFamily,fontSize} = theme;
 return StyleSheet.create({
  container: {
    padding: metrics.base,
    margin: metrics.base,
    borderColor: colors.elements,
    borderWidth: 0.2,
    borderRadius: metrics.radiusBase
  },
  label: {
    color: colors.elements,
    fontFamily: fontFamily.italic
  },
  value: {
    fontSize: fontSize.large,
  },
  marginBottom: {
    marginBottom: metrics.large,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
}
