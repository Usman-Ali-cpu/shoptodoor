import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// importing the svg logo (which is create as react component)
import Logo from '../../Static/Logo/LogoWhite';

// welcome - default RC.
const GetCredentials = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.eclipseContainer}>
        <View style={styles.eclipse} />
        <View style={styles.stdTextContainer}>
          <Text style={styles.stdWhiteB}>
            <Logo />
          </Text>
        </View>
      </View>
      <View style={styles.bottomContent}>
        {/* a view to hold step-1 as header and 3 horizontal lines */}
        <View style={styles.stepContainer}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepHeaderText}>OTP Authentication</Text>
          </View>
          <View style={styles.stepLineContainer}>
            <View style={[styles.stepLine]} />
            <View style={[styles.stepLine, styles.dim]} />
            <View style={[styles.stepLine, styles.dim]} />
          </View>
        </View>
        <View style={styles.credContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#fff"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#fff"
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={[styles.text]}>
              Click the button below to get proceed.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Auth navigation={navigation} />
          </View>
        </View>
      </View>
    </View>
  );
};

const Auth = ({navigation}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.btnAuth]}
      onPress={() => navigation.navigate('GetCredentials')}>
      <Text style={[styles.btnText, styles.btnAuthText]}>Continue</Text>
    </TouchableOpacity>
  );
};

// styling...
const styles = StyleSheet.create({
  bottomContent: {
    alignItems: 'center',
    height: '65%',
    width: '90%',
  },
  btn: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50,
    height: 48,
    justifyContent: 'center',
    width: '100%',
  },
  btnAuth: {
    backgroundColor: '#A21D21',
    borderColor: '#181722',
  },
  btnRegister: {
    backgroundColor: '#181722',
    borderColor: '#f6f6f6',
    marginTop: 12,
  },
  btnText: {
    color: 'f6f6f6',
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnAuthText: {
    color: '#f6f6f6',
  },
  btnRegisterText: {
    color: '#f6f6f6',
  },
  buttonContainer: {
    alignItems: 'center',
    borderColor: 'blue',
    justifyContent: 'flex-end',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#181722',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  credContainer: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '65%',
    paddingBottom: 24,
  },
  dim: {
    opacity: 0.3,
  },
  eclipseContainer: {
    alignItems: 'center',
    width: '100%',
    height: '35%',
  },
  eclipse: {
    backgroundColor: '#A21D21',
    borderBottomLeftRadius: 200,
    height: '100%',
    left: '60%',
    position: 'absolute',
    transform: [{scaleX: 2}],
    width: '150%',
  },
  input: {
    color: '#f6f6f6',
    fontSize: 18,
    fontWeight: '400',
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputContainer: {
    alignItems: 'center',
    borderColor: '#f6f6f6',
    borderWidth: 2,
    borderRadius: 4,
    height: 56,
    justifyContent: 'center',
    marginBottom: 12,
    width: '100%',
  },
  stdTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  stdWhiteB: {
    color: '#f6f6f6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stdWhiteN: {
    color: '#f6f6f6',
    fontSize: 18,
    fontWeight: 'normal',
  },
  stepContainer: {
    alignItems: 'flex-start',
    borderColor: 'red',
    height: '30%',
    justifyContent: 'center',
    width: '100%',
  },
  stepHeader: {
    borderColor: 'red',
    flexDirection: 'row',
    width: '100%',
  },
  stepHeaderText: {
    color: '#f6f6f6',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  stepLine: {
    backgroundColor: '#f6f6f6',
    height: 3,
    width: '32%',
  },
  stepLineContainer: {
    borderColor: 'red',
    flexDirection: 'row',
    height: '50%',
    justifyContent: 'space-between',
    width: '100%',
  },

  text: {
    color: '#f6f6f6',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify',
    width: '100%',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textBoldItalic: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    width: '100%',
  },
});

export default GetCredentials;
