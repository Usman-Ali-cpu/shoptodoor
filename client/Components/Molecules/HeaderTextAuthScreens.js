import React from 'react';
import styles from './Styles/Molecules.styles';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import AuthScreenLines from '../Atoms/AuthScreenLines';

/**
 * @param {Number} stepNo
 * @return {JSX.Element} HeaderTextAuthScreens, a component that renders the header text for the auth screens
 */
const HeaderTextAuthScreens = ({stepNo}) => {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.stepHeader}>
        <Text style={styles.stepHeaderText}>
          {stepNo === 1 ? 'Enter your name' : stepNo === 2 ? 'Enter your number' : 'Enter your OTP'}
        </Text>
      </View>
      <AuthScreenLines stepNo={stepNo} />
    </View>
  );
};

HeaderTextAuthScreens.propTypes = {
  stepNo: PropTypes.number,
};

export default HeaderTextAuthScreens;
