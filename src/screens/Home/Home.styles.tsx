import { StyleSheet } from "react-native";
import customTheme from "../../components/customTheme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: customTheme.COLORS.WHITE,
  },
  padded: {
    paddingTop: customTheme.SIZES.BASE * 2,
  },
  title: {
    marginTop: "0%",
    alignItems: "center",
  },
});
