import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

// import assets
import styles from './Styles/GetCredentials.styles';

// import components
import HeaderTextAuthScreens from '../../Molecules/HeaderTextAuthScreens';
import STDInput from '../../Atoms/STDInput';
import OTPScreen from '../../Compounds/OTPScreen';
import HeaderNav from '../../Molecules/HeaderNav';

/**
 * @param {Object} route
 * @param {Object} navigation
 * @return {JSX.Element} GetCredentials, a component that renders the get credentials screen
 */
const GetCredentials = ({route, navigation}) => {
  const [stepNo, setStepNo] = useState(route.params.step);

  // for step 1
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  // for step 2
  const [number, setNumber] = useState('');

  // for step 3
  const [otp, setOtp] = useState('');

  // if both first and last name are valid, enable the next button, using useEffect
  useEffect(() => {
    if (stepNo === 1) {
      if (fName.length >= 3 && lName.length >= 3) {
        setProceedBtnEnabled(true);
      } else setProceedBtnEnabled(false);
    } else if (stepNo === 2) {
      if (number.length === 11 && /^03[0-4][0-9]{8}$/.test(number)) {
        setProceedBtnEnabled(true);
      } else setProceedBtnEnabled(false);
    } else if (stepNo === 3) {
      if (otp.length === 4) {
        setProceedBtnEnabled(true);
      } else setProceedBtnEnabled(false);
    }
  }, [stepNo, fName, lName, number, otp]);

  // when to enable the next button
  const [proceedBtnEnabled, setProceedBtnEnabled] = useState(false);

  const submitHandler = () => {
    if (stepNo === 1) {
      setStepNo(2);
    } else if (stepNo === 2) {
      setStepNo(3);
    } else if (stepNo === 3) {
      // send otp to server
      axios
          .post('http://localhost:3000/api/v1/auth/verify', {
            phone: number,
            otp,
          })
          .then((res) => {
            console.log(res.data);
            navigation.navigate('Register', {
              step: 4,
              phone: number,
              otp,
            });
          })
          .catch((err) => {
            console.log(err);
          });
    }
  };

  return (
    <View style={[styles.container]}>
      <HeaderNav navigation={navigation} />
      <View style={styles.bottomContent}>
        <HeaderTextAuthScreens stepNo={stepNo} />
        <View style={styles.credContainer}>
          {
            // for register NAME -> PHONE -> OTP
            stepNo === 1 ? (
              <>
                <STDInput placeholder="John" type="text" cb={setFName} />
                <STDInput placeholder="Doe" type="text" cb={setLName} />
              </>
            ) : // for login PHONE -> OTP
            stepNo === 2 ? (
              <View style={styles.inputContainer}>
                <STDInput placeholder="Phone Number" type="number" cb={setNumber} />
              </View>
            ) : (
              <>
                <View style={styles.OTPScreenTextContainer}>
                  <Text style={styles.OTPScreenText1}>Get Verified</Text>
                  <Text style={styles.OTPScreenText2}>
                    A verification code has been sent via SMS to {'\n'} +92 {number.slice(1)}
                  </Text>
                </View>
                <OTPScreen cb={setOtp} navigation={navigation} />
              </>
            )
          }

          <View style={styles.textContainer}>
            <Text style={[styles.text]}>
              {stepNo === 1 ?
                'Proceed to enter your number' :
                stepNo === 2 ?
                'Click proceed to get OTP' :
                'Enter your OTP to continue'}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Auth navigation={navigation} step={stepNo} isEnabled={proceedBtnEnabled} callback={submitHandler} />
          </View>
        </View>
      </View>
    </View>
  );
};

GetCredentials.propTypes = {
  route: PropTypes.instanceOf(Object),
  navigation: PropTypes.object || PropTypes.func || PropTypes.any,
};

const requestOTP = () => {
  axios
      .post('http://localhost:3000/api/v1/auth/requestOTP', {
        number: number,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
};

const Auth = ({navigation, step, isEnabled, callback}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, styles.btnAuth, !isEnabled ? styles.btnAuthDisabled : null]}
      onPress={() => {
        if (step === 1) {
          callback(2);
        } else if (step === 2) {
          // requestOTP();
          callback(3);
        } else {
          callback(4);
        }
      }}
      disabled={!isEnabled}>
      <Text style={(styles.btnAuthText, styles.textBold)}>Proceed</Text>
    </TouchableOpacity>
  );
};

Auth.propTypes = {
  navigation: PropTypes.object || PropTypes.func || PropTypes.any,
  step: PropTypes.number,
  isEnabled: PropTypes.bool,
  callback: PropTypes.func,
};

export default GetCredentials;
