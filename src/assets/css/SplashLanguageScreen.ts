import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF6E1',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF6E1',
  },
  logo: {
    width: width * 0.55,
    height: width * 0.55,
    marginTop: 80,
  },
  content: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
    marginBottom: 20,
    color: '#1A1A1A',
  },
  dropdown: {
    width: width * 0.75,
    height: 48,
    borderWidth: 1,
    borderColor: '#CFC6B8',
    borderRadius: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF8E9',
  },
  dropdownText: {
    fontSize: 14,
    color: '#7A7A7A',
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#F7931E',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#F7931E',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 18,
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});


export default styles;