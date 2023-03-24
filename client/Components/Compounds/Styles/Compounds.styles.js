import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    borderRadius: 5,
    height: 56,
    justifyContent: 'center',
    marginVertical: 12,
    width: '100%',
  },
  otpContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 24,
    marginBottom: '40%',
  },
  otpField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  otpText: {
    color: '#f6f6f6',
    fontSize: 24,
    fontWeight: 'bold',
    borderColor: '#a21d21',
    borderWidth: 2,
    textAlign: 'center',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  stdTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  stdWhiteB: {
    color: '#f6f6f6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stdWhiteN: {
    color: '#f6f6f6',
    fontSize: 18,
    fontWeight: 'normal',
  },
  stepContainer: {
    alignItems: 'flex-start',
    borderColor: 'red',
    height: '30%',
    justifyContent: 'center',
    width: '100%',
  },
  stepHeader: {
    borderColor: 'red',
    flexDirection: 'row',
    width: '100%',
  },
  stepHeaderText: {
    color: '#f6f6f6',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  stepLine: {
    backgroundColor: '#f6f6f6',
    height: 3,
    width: '32%',
  },

  stepLineContainer: {
    borderColor: 'red',
    flexDirection: 'row',
    height: '50%',
    justifyContent: 'space-between',
    width: '100%',
  },

  text: {
    color: '#f6f6f6',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify',
    width: '100%',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textBoldItalic: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    width: '100%',
  },

  // OTP Screen Text
  OTPScreenTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  OTPScreenText1: {
    color: '#f6f6f6',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
    textTransform: 'uppercase',
    color: '#A21D21',
  },
  OTPScreenText2: {
    color: '#f6f6f6',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'normal',
    marginBottom: 8,
    lineHeight: 24,
    fontWeight: '300',
  },

  // Header
  headerContainer: {
    alignItems: 'center',
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },

  backNavContainer: {
    width: '50%',
  },
  logoContainer: {
    width: '50%',
    alignItems: 'flex-end',
  },
});

export default styles;
