import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },

  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain',
  },

  inputContainer: {
    marginBottom: 12,
  },

  input: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
    height: 48,
  },

  button: {
    backgroundColor: '#0095F6',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },

  forgotPassword: {
    alignItems: 'center',
    marginTop: 20,
  },

  forgotText: {
    color: '#00376B',
    fontSize: 13,
    fontWeight: '500',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#DBDBDB',
  },
  
  dividerText: {
    marginHorizontal: 18,
    color: '#8E8E8E',
    fontSize: 13,
  },

  facebookButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  
  facebookText: {
    color: '#385185',
    fontWeight: '600',
    fontSize: 15,
  },

  signupContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  signupText: {
    color: '#8E8E8E',
    fontSize: 13,
  },

  signupLink: {
    color: '#0095F6',
    fontWeight: '600',
  },
});