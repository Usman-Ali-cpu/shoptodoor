import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Styles/Atoms.styles';

/**
 *
 * @param {Object} navigation : navigation object
 * @param {Number} step : step number
 * @param {Function} callback : callback function
 * @return {JSX.Element} STDButton, a component that renders the standard button for the auth screens
 */
const STDButton = ({navigation, step, callback}) => {
  return (
    <TouchableOpacity style={[styles.btn, step === 2 ? styles.btnLogin : styles.btnRegister]} onPress={callback}>
      <Text style={styles.btnText}>{step === 2 ? 'Login' : 'Register'}</Text>
    </TouchableOpacity>
  );
};

STDButton.propTypes = {
  navigation: PropTypes.object || PropTypes.func || PropTypes.any,
  step: PropTypes.number,
  callback: PropTypes.func,
};

export default STDButton;
