import { StyleSheet } from "react-native";
import { ScreenWidth } from "../../components/common";
import customTheme from "../../components/customTheme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: customTheme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: customTheme.SIZES.BASE * 2,
    position: "relative",
    bottom: customTheme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: ScreenWidth - customTheme.SIZES.BASE * 4,
    height: customTheme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: "relative",
    marginTop: "-50%",
  },
  title: {
    marginTop: "0%",
  },
  subTitle: {
    marginTop: 20,
  },
});
