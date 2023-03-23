import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Styles/Atoms.styles';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import PropTypes from 'prop-types';

/**
 * @param {String} placeholder : placeholder text
 * @param {String} type : type of input
 * @param {Function} cb : callback function
 * @return {JSX.Element} STDInput, a component that renders the standard input for the auth screens
 */
const STDInput = ({placeholder, type, cb}) => {
  const handleName = (text) => {
    if (text.length >= 3) {
      cb(text);
      return true;
    }
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Name too short',
      text2: 'Name should be atleast 3 characters long',
      visibilityTime: 1000,
    });
    cb(text);
    return false;
  };

  /**
   * @param {String} number : phone number
   * @return {Boolean} true if number is valid, false otherwise
   * @description this function validates the phone number
   */
  const handlePhoneNumberInput = (number) => {
    const regex = /^03[0-4][0-9]{8}$/;
    if (number.length === 11) {
      if (regex.test(number)) {
        cb(number);
        return true;
      }
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Invalid number',
        text2: 'Please enter a valid number 03xx xxxxxxx',
        visibilityTime: 1000,
      });
      cb(number);
      return false;
    }
    cb(number);
    return false;
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#454545"
        keyboardType={type === 'number' ? 'numeric' : 'default'}
        maxLength={type === 'number' ? 11 : 20}
        onChangeText={type === 'number' ? handlePhoneNumberInput : handleName}
      />
    </View>
  );
};

STDInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  cb: PropTypes.func,
};

export default STDInput;
