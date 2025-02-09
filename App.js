import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useState } from "react";

const fields = [
  { key: "1", label: "Top Paper", subTab1: "GSM", subTab2: "PRICE" },
  { key: "2", label: "Fluit", subTab1: "GSM", subTab2: "PRICE" },
  { key: "3", label: "Lower Paper", subTab1: "GSM", subTab2: "PRICE" },
];

export default function App() {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.inner}>
            <View style={styles.container}>
              <Text style={styles.title}>Hello, World!</Text>
              <Text>Result</Text>
            </View>

            {fields.map((item) => (
              <View style={styles.container} key={item.key}>
                <Text style={styles.title}>{item.label}</Text>
                <Text style={styles.subTab}>{item.subTab1}</Text>
                <TextInput
                  inputMode="numeric"
                  style={[
                    styles.input,
                    focusedInput === `${item.key}-subTab1` && styles.inputFocused,
                  ]}
                  onFocus={() => setFocusedInput(`${item.key}-subTab1`)}
                  onBlur={() => setFocusedInput(null)}
                />
                <Text style={styles.subTab}>{item.subTab2}</Text>
                <TextInput
                  inputMode="numeric"
                  style={[
                    styles.input,
                    focusedInput === `${item.key}-subTab2` && styles.inputFocused,
                  ]}
                  onFocus={() => setFocusedInput(`${item.key}-subTab2`)}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>
            ))}

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Calculate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3356ec",
  },
  subTab: {
    fontSize: 14,
    color: "#98999e",
    fontWeight: "700",
    marginTop: 5,
    marginBottom: 3,
  },
  input: {
    height: 40,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  inputFocused: {
    borderColor: "#3356ec", // Change to blue when focused
    borderWidth: 2,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3356ec",
    padding: 20,
    borderRadius: 8,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

