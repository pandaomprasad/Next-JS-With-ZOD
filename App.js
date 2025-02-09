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
  Animated,
  ActivityIndicator,
  Modal,
} from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

const fields = [
  { key: "1", label: "Top Paper", subTab1: "GSM", subTab2: "PRICE" },
  { key: "2", label: "Fluit", subTab1: "GSM", subTab2: "PRICE" },
  { key: "3", label: "Lower Paper", subTab1: "GSM", subTab2: "PRICE" },
];
const subFields = [
  { key: "1", label: "FILM" },
  { key: "2", label: "All Expense" },
  { key: "3", label: "Profit" },
];

export default function App() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(true);
    }, 200);
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar hidden={true} />
      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {subFields.map((item) => (
              <View key={item.key}>
                <Text style={styles.modalTitle}>{item.label}</Text>
                <Animated.View
                  style={[
                    styles.inputContainer,
                    {
                      borderColor:
                        focusedInput === `${item.key}-label`
                          ? "#3356ec"
                          : "#D3D3D3",
                      borderWidth: animatedBorder,
                    },
                  ]}
                >
                  <TextInput
                    inputMode="numeric"
                    style={styles.input}
                    onFocus={() => handleFocus(`${item.key}-label`)}
                    onBlur={handleBlur}
                  />
                </Animated.View>
              </View>
            ))}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                marginTop: 5,
                backgroundColor: "#3356ec",
                borderRadius: 8,
              }}
            >
              <Text style={styles.closeButton}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={styles.safeArea}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.inner}>
              <View style={styles.container}>
                <Text style={styles.title}>Hello, World!</Text>
                <Text
                  style={{
                    flex: 1,
                    alignSelf: "flex-end",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  Result
                </Text>
                <Text
                  style={{
                    flex: 1,
                    alignSelf: "flex-end",
                    fontSize: 32,
                    fontWeight: "bold",
                    color: "#3356ec",
                  }}
                >
                  6556156.1544
                </Text>
              </View>

              {fields.map((item) => (
                <View style={styles.container} key={item.key}>
                  <Text style={styles.title}>{item.label}</Text>
                  <Text style={styles.subTab}>{item.subTab1}</Text>
                  <Animated.View
                    style={[
                      styles.inputContainer,
                      {
                        borderColor:
                          focusedInput === `${item.key}-subTab1`
                            ? "#3356ec"
                            : "#D3D3D3",
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
                        borderColor:
                          focusedInput === `${item.key}-subTab2`
                            ? "#3356ec"
                            : "#D3D3D3",
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
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleCalculate}
                >
                  <Text style={styles.buttonText}>Calculate</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    width: "100%",
    height: "100%",
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
    borderRadius: 10,
    width: SCREEN_WIDTH * 0.8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});
