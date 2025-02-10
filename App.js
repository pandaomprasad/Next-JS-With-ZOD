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
import { BlurView } from "expo-blur";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;


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
        <BlurView intensity={50} tint="dark" style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View>
              <Text style={styles.modalTitle}>FILM</Text>
              <Animated.View
                style={[
                  styles.inputContainer,
                  {
                    borderColor:
                      focusedInput === "subField-film"
                        ? "#3356ec"
                        : "#D3D3D3",
                    borderWidth: animatedBorder,
                  },
                ]}
              >
                <TextInput
                  inputMode="numeric"
                  style={styles.input}
                  onFocus={() => handleFocus("subField-film")}
                  onBlur={handleBlur}
                />
              </Animated.View>
            </View>
            <View>
              <Text style={styles.modalTitle}>All Expense</Text>
              <Animated.View
                style={[
                  styles.inputContainer,
                  {
                    borderColor:
                      focusedInput === "subField-expense"
                        ? "#3356ec"
                        : "#D3D3D3",
                    borderWidth: animatedBorder,
                  },
                ]}
              >
                <TextInput
                  inputMode="numeric"
                  style={styles.input}
                  onFocus={() => handleFocus("subField-expense")}
                  onBlur={handleBlur}
                />
              </Animated.View>
            </View>
            <View>
              <Text style={styles.modalTitle}>Profit</Text>
              <Animated.View
                style={[
                  styles.inputContainer,
                  {
                    borderColor:
                      focusedInput === "subField-profit"
                        ? "#3356ec"
                        : "#D3D3D3",
                    borderWidth: animatedBorder,
                  },
                ]}
              >
                <TextInput
                  inputMode="numeric"
                  style={styles.input}
                  onFocus={() => handleFocus("subField-profit")}
                  onBlur={handleBlur}
                />
              </Animated.View>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setLoading(true);
                setTimeout(() => {
                  setLoading(false); // Hide loading after a short delay
                }, 3000);
              }}
              style={{
                marginTop: 5,
                backgroundColor: "#3356ec",
                borderRadius: 8,
              }}
            >
              <Text style={styles.closeButton}>Submit</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
      <SafeAreaView style={styles.safeArea}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.inner}>
              <View style={styles.container}>
                <Text style={[styles.title,{fontSize:28,fontWeight:'900',marginVertical:SCREEN_HEIGHT*0.0125}]}>CALCULATOR</Text>

                <View style={{ flexDirection: "row", width: "100%" }}>
                  <View style={{ width: "50%", flexDirection: "column" }}>
                    <Text
                      style={{
                        flex: 1,
                        alignSelf: "flex-start",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      Total Weight
                    </Text>
                    <Text
                      style={{
                        flex: 1,
                        alignSelf: "flex-start",
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#3356ec",
                      }}
                    >
                      62
                    </Text>
                  </View>
                  <View style={{ width: "50%", flexDirection: "column" }}>
                    <Text
                      style={{
                        flex: 1,
                        alignSelf: "flex-end",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      Toatl Rate{" "}
                    </Text>
                    <Text
                      style={{
                        flex: 1,
                        alignSelf: "flex-end",
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#3356ec",
                      }}
                    >
                      6556156.1544
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.container}>
                <Text style={styles.title}>Top Paper</Text>
                <View style={{ flexDirection: "row", width: "100%", gap: 5 }}>
                  <View style={{ flexDirection: "column", width: "50%" }}>
                    <Text style={styles.subTab}>GSM</Text>
                    <Animated.View
                      style={[
                        styles.inputContainer,
                        {
                          borderColor:
                            focusedInput === "topPaper-gsm"
                              ? "#3356ec"
                              : "#D3D3D3",
                          borderWidth: animatedBorder,
                        },
                      ]}
                    >
                      <TextInput
                        inputMode="numeric"
                        style={styles.input}
                        onFocus={() => handleFocus("topPaper-gsm")}
                        onBlur={handleBlur}
                      />
                    </Animated.View>
                  </View>

                  <View style={{ flexDirection: "column", width: "50%" }}>
                    <Text style={styles.subTab}>Rate</Text>
                    <Animated.View
                      style={[
                        styles.inputContainer,
                        {
                          borderColor:
                            focusedInput === "topPaper-rate"
                              ? "#3356ec"
                              : "#D3D3D3",
                          borderWidth: animatedBorder,
                        },
                      ]}
                    >
                      <TextInput
                        inputMode="numeric"
                        style={styles.input}
                        onFocus={() => handleFocus("topPaper-rate")}
                        onBlur={handleBlur}
                      />
                    </Animated.View>
                  </View>
                </View>
              </View>
              <View style={styles.container}>
                <Text style={styles.title}>Fluit</Text>
                <View style={{ flexDirection: "row", width: "100%", gap: 5 }}>
                  <View style={{ flexDirection: "column", width: "33%" }}>
                    <Text style={styles.subTab}>GSM</Text>
                    <Animated.View
                      style={[
                        styles.inputContainer,
                        {
                          borderColor:
                            focusedInput === "fliut-gsm"
                              ? "#3356ec"
                              : "#D3D3D3",
                          borderWidth: animatedBorder,
                        },
                      ]}
                    >
                      <TextInput
                        inputMode="numeric"
                        style={styles.input}
                        onFocus={() => handleFocus("fliut-gsm")}
                        onBlur={handleBlur}
                      />
                    </Animated.View>
                  </View>
                  <View style={{ flexDirection: "column", width: "33%" }}>
                    <Text style={styles.subTab}>Rate</Text>
                    <Animated.View
                      style={[
                        styles.inputContainer,
                        {
                          borderColor:
                            focusedInput === "fliut-rate"
                              ? "#3356ec"
                              : "#D3D3D3",
                          borderWidth: animatedBorder,
                        },
                      ]}
                    >
                      <TextInput
                        inputMode="numeric"
                        style={styles.input}
                        onFocus={() => handleFocus("fliut-rate")}
                        onBlur={handleBlur}
                      />
                    </Animated.View>
                  </View>
                  <View style={{ flexDirection: "column", width: "33%" }}>
                    <Text style={styles.subTab}>Fluit %</Text>
                    <Animated.View
                      style={[
                        styles.inputContainer,
                        {
                          borderColor:
                            focusedInput === "fliut-percenteage"
                              ? "#3356ec"
                              : "#D3D3D3",
                          borderWidth: animatedBorder,
                        },
                      ]}
                    >
                      <TextInput
                        inputMode="numeric"
                        style={styles.input}
                        onFocus={() => handleFocus("fliut-percenteage")}
                        onBlur={handleBlur}
                      />
                    </Animated.View>
                  </View>
                </View>
              </View>
              <View style={styles.container}>
                <Text style={styles.title}>Lower Paper</Text>
                <View style={{ flexDirection: "row", width: "100%", gap: 5 }}>
                  <View style={{ flexDirection: "column", width: "50%" }}>
                    <Text style={styles.subTab}>GSM</Text>
                    <Animated.View
                      style={[
                        styles.inputContainer,
                        {
                          borderColor:
                            focusedInput === "lowerPaper-gsm"
                              ? "#3356ec"
                              : "#D3D3D3",
                          borderWidth: animatedBorder,
                        },
                      ]}
                    >
                      <TextInput
                        inputMode="numeric"
                        style={styles.input}
                        onFocus={() => handleFocus("lowerPaper-gsm")}
                        onBlur={handleBlur}
                      />
                    </Animated.View>
                  </View>
                  <View style={{ flexDirection: "column", width: "50%" }}>
                    <Text style={styles.subTab}>Rate</Text>
                    <Animated.View
                      style={[
                        styles.inputContainer,
                        {
                          borderColor:
                            focusedInput === "lowerPaper-rate"
                              ? "#3356ec"
                              : "#D3D3D3",
                          borderWidth: animatedBorder,
                        },
                      ]}
                    >
                      <TextInput
                        inputMode="numeric"
                        style={styles.input}
                        onFocus={() => handleFocus("lowerPaper-rate")}
                        onBlur={handleBlur}
                      />
                    </Animated.View>
                  </View>
                </View>
              </View>

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
    fontSize: 18,
    fontWeight: "bold",
    color: "#3356ec",
  },
  subTab: {
    fontSize: 10,
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
