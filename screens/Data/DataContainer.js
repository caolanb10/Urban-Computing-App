import { compose, withProps, withHandlers } from 'recompose';
import * as FileSystem from 'expo-file-system';
import * as Launcher from 'expo-intent-launcher';

import Data from './Data';

const CSV_DIRECTORY = FileSystem.documentDirectory;

const fileGetter = async () => {
  const dir2 = await FileSystem.readDirectoryAsync(CSV_DIRECTORY);
  const fileData = [];
  dir2.forEach((fileName) => fileData.push({
    name: fileName.slice(0, fileName.length - 4),
    URI: fileName,
  }));
  console.log(fileData);
  return ({ csvFiles: fileData });
};

const launchFile = () => ({ uri }) => Launcher.startActivityAsync(
  'android.intent.action.VIEW',
  { data: uri },
);

export default compose(
  withHandlers(launchFile),
  withProps(fileGetter),
)(Data);
