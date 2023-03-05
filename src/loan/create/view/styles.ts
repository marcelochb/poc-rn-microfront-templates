import { ITheme } from "@poc/interfaces";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) => {
  const {metrics} = theme;
  return StyleSheet.create({
    button: {
      marginTop: metrics.base
    }
  })
}
