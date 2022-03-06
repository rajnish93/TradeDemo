import { StyleSheet } from "react-native";
import customTheme from "../../components/customTheme";

const styles = StyleSheet.create({
  title: {
    color: customTheme.COLORS.BLACK,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    color: customTheme.COLORS.BLACK,
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },
  rank: {
    fontWeight: "bold",
    color: customTheme.COLORS.BLACK,
  },
  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
});

export default styles;
