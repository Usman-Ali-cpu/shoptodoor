import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // eclipse
  eclipseContainer: {
    alignItems: 'center',
    width: '100%',
    height: '30%',
  },

  eclipse: {
    backgroundColor: '#A21D21',
    borderBottomLeftRadius: 200,
    height: '100%',
    left: '30%',
    position: 'absolute',
    transform: [{ scaleX: 2 }],
    width: '100%',
  },

  logoContainer: {
    display: 'flex',
    height: '40%',
    width: '100%',
  },

  logo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#252525',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // eclipse

  // step container
  stepContainer: {
    alignItems: 'center',
    height: '20%',
    justifyContent: 'center',
    width: '100%',
  },
  stepHeader: {
    flexDirection: 'row',
    width: '100%',
  },
  stepHeaderText: {
    color: '#f6f6f6',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  // step container
});

export default styles;
