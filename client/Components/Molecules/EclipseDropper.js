import React from 'react';

import {View} from 'react-native';

import styles from './Molecules.styles';
import Logo from '../Atoms/Logo/Logo';

// eclipse dorrper for auth and starter screens
const EclipseDropper = () => {
  return (
    <View style={styles.eclipseContainer}>
      <View style={styles.eclipse} />
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Logo />
        </View>
      </View>
    </View>
  );
};

export default EclipseDropper;
