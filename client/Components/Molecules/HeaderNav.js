import {View} from 'react-native';
import React from 'react';
import Logo from '../../assets/icons/LogoRW.svg';
import BackBtn from '../../assets/icons/BackWhiteIcon.svg';
import styles from './Styles/Molecules.styles';
import PropTypes from 'prop-types';

/**
 *
 * @return {JSX.Element} HeaderNav, a component that renders the header navigation
 */
const HeaderNav = ({navigation}) => {
  return (
    <View style={styles.headerNavContainer}>
      <View style={styles.headerNav}>
        <View style={styles.headerNavLeft}>
          <BackBtn height={35} onPress={() => navigation.goBack()} />
        </View>

        <View style={styles.headerNavRight}>
          <Logo height={33} />
        </View>
      </View>
    </View>
  );
};

HeaderNav.propTypes = {
  navigation: PropTypes.object,
};

export default HeaderNav;
