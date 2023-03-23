import {View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Styles/Atoms.styles';

/**
 * @param {Number} stepNo
 * @return {JSX.Element} AuthScreenLines, a component that renders the lines for the auth screens
 */
const AuthScreenLines = ({stepNo}) => {
  return (
    <View style={styles.stepLineContainer}>
      <View style={styles.stepLine} />
      <View style={stepNo === 2 || stepNo === 3 ? styles.stepLine : [styles.stepLine, styles.dim]} />
      <View style={stepNo === 4 ? styles.stepLine : [styles.stepLine, styles.dim]} />
    </View>
  );
};

AuthScreenLines.propTypes = {
  stepNo: PropTypes.number,
};

export default AuthScreenLines;
