import { ITheme } from "@poc/interfaces";
import { StyleSheet } from "react-native";

export const styles = (theme:ITheme) => {
  const {metrics, colors, fontFamily,fontSize} = theme;
 return StyleSheet.create({
  container: {
    padding: metrics.base,
    margin: metrics.base,
    borderColor: colors.elementsSecundary,
    borderWidth: 0.2,
    borderRadius: metrics.radiusBase
  },
  label: {
    color: colors.elementsSecundary,
    fontFamily: fontFamily.italic
  },
  value: {
    fontSize: fontSize.large,
    marginBottom: metrics.large
  }
})
}
