import {View, Text} from 'react-native';
import React from 'react';
import SVGImg from '../../assets/icons/LogoWhite.svg';
import styles from './Styles/Molecules.styles';

const HeaderNav = () => {
  return (
    <View style={styles.headerNavContainer}>
      <View style={styles.headerNav}>
        <View style={styles.headerNavLeft}>
          {/* back button */}
          <View style={styles.headerNavLeftBackBtn}>
            <Text style={styles.headerNavLeftBackBtnText}>Back</Text>
          </View>
        </View>

        <View style={styles.headerNavRight}>
          {/* logo */}
          <View style={styles.headerNavRightLogo}>
            <SVGImg height={35} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderNav;
