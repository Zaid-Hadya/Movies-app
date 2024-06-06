import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ff1100",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  redText: {
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 20,
  },
  logoText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  outerMovieTitle: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  outerMovieDate: {
    textAlign: "center",
    color: "black",
    paddingBottom: 10,
  },
  movieItem: {
    backgroundColor: "#ffffff",
    marginVertical: 20,
    marginHorizontal: 29,

    paddingBottom: 16,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
