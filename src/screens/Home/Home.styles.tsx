import { StyleSheet } from "react-native";
import { ScreenWidth } from "../../components/common";
import customTheme from "../../components/customTheme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: customTheme.COLORS.THEME,
  },
  padded: {
    paddingHorizontal: customTheme.SIZES.BASE * 2,
    position: "relative",
    bottom: customTheme.SIZES.BASE,
    zIndex: 2,
  },
  title: {
    marginTop: "0%",
    alignItems: "center",
  },
});
