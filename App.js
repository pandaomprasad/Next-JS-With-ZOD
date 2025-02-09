import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const fields = [
  { key: "1", label: "Top Paper", subTab1: "GSM", subTab2: "PRICE" },
  { key: "2", label: "Fluit", subTab1: "GSM", subTab2: "PRICE" },
  { key: "3", label: "Lower Paper", subTab1: "GSM", subTab2: "PRICE" },
];

export default function App() {
  const [focusedInput, setFocusedInput] = useState(null);
  const animatedBorder = new Animated.Value(1);

  const handleFocus = (inputKey) => {
    setFocusedInput(inputKey);
    Animated.timing(animatedBorder, {
      toValue: 2,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setFocusedInput(null);
    Animated.timing(animatedBorder, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollView} enableOnAndroid extraScrollHeight={20}>
        <View style={styles.inner}>
          <View style={styles.container}>
            <Text style={styles.title}>Hello, World!</Text>
            <Text style={{ alignSelf: "flex-end", fontSize: 24, fontWeight: "bold" }}>Result</Text>
            <Text style={{ alignSelf: "flex-end", fontSize: 32, fontWeight: "bold", color: "#3356ec" }}>6556156.1544</Text>
          </View>

          {fields.map((item) => (
            <View style={styles.container} key={item.key}>
              <Text style={styles.title}>{item.label}</Text>
              <Text style={styles.subTab}>{item.subTab1}</Text>
              <Animated.View
                style={[
                  styles.inputContainer,
                  {
                    borderColor: focusedInput === `${item.key}-subTab1` ? "#3356ec" : "#D3D3D3",
                    borderWidth: animatedBorder,
                  },
                ]}
              >
                <TextInput
                  inputMode="numeric"
                  style={styles.input}
                  onFocus={() => handleFocus(`${item.key}-subTab1`)}
                  onBlur={handleBlur}
                />
              </Animated.View>

              <Text style={styles.subTab}>{item.subTab2}</Text>
              <Animated.View
                style={[
                  styles.inputContainer,
                  {
                    borderColor: focusedInput === `${item.key}-subTab2` ? "#3356ec" : "#D3D3D3",
                    borderWidth: animatedBorder,
                  },
                ]}
              >
                <TextInput
                  inputMode="numeric"
                  style={styles.input}
                  onFocus={() => handleFocus(`${item.key}-subTab2`)}
                  onBlur={handleBlur}
                />
              </Animated.View>
            </View>
          ))}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
  inputContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  input: {
    height: 40,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
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
