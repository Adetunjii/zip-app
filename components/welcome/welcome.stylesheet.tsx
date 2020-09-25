import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Row } from "native-base";

export default StyleSheet.create({
  header: {
    fontSize: 50,
    fontWeight: "700",
    color: "#000237",
  },

  subHeader: {
    fontSize: 25,
    fontWeight: "700",
    color: "#000237",
    marginTop: 5,
    marginBottom: 5,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    margin: 20,
    backgroundColor: "#267CE1",
  },

  btnBordered: {
    margin: 20,
    color: "#000237",
  },
});
