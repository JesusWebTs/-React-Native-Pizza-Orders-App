import { StyleSheet } from "react-native";

export default StyleSheet.create({
  textContent: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  tittleStyle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  paragraphStyle: {
    fontSize: 18,
    textAlign: "center",
    overflow: "scroll",
    height: 130,
  },
  addSectionStyle: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sizeSectionStyle: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    width: 70,
    height: 40,
    borderRadius: 10,
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyleLarge: {
    width: 300,
    height: 40,
  },
  buttonStyleSmall: {
    width: 40,
    backgroundColor: "transparent",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
  textButtonBig: {
    lineHeight: 28,
    fontSize: 24,
    color: "black",
  },
  addStyle: {
    width: 120,
    height: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
