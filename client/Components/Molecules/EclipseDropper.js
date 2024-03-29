import React from 'react';
import {View} from 'react-native';
import styles from './Styles/Molecules.styles';

/**
 *
 * @return {JSX.Element} EclipseDropper, a component that renders the eclipse dropper for the auth and starter screens
 */
const EclipseDropper = () => {
  return (
    <View style={styles.eclipseContainer}>
      <View style={styles.eclipse} />
    </View>
  );
};

export default EclipseDropper;
