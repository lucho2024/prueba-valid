import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerAccordion: {
    marginVertical: 15,
  },
  headerContainerAccordion: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  containerleft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerExpand: {
    marginHorizontal: 10,
  },
  containerTextExpand: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  containerImgExpand: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
  },
  text: {
    fontSize: 24,
    color: 'black',
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: 'black',
  },
});
