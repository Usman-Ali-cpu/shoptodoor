import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // STDbutton
  btn: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
    height: 48,
    justifyContent: 'center',
    width: '90%',
  },
  btnLogin: {
    backgroundColor: '#A21D21',
    borderWidth: 0,
  },
  btnRegister: {
    marginTop: 8,
    borderColor: '#fff',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  // STDbutton

  // Lines <horizontal>
  stepLineContainer: {
    borderColor: 'red',
    flexDirection: 'row',
    height: '50%',
    justifyContent: 'space-between',
    width: '100%',
  },

  stepLine: {
    backgroundColor: '#f6f6f6',
    height: 3,
    width: '32%',
  },

  dim: {
    opacity: 0.3,
  },
  // Lines <horizontal>

  // STDInput
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 4,
  },
  input: {
    color: '#f6f6f6',
    fontSize: 18,
    fontWeight: '400',
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderColor: '#f6f6f6',
    borderWidth: 2,
    borderRadius: 5,
    height: 56,
  },
  // when active
  inputFocused: {
    color: '#f6f6f6',
    fontSize: 18,
    fontWeight: '400',
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderColor: '#A21D21',
    borderWidth: 2,
    borderRadius: 5,
    height: 56,
  },
  // STDInput
});

export default styles;
