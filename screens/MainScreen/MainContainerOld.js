import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

const getLocation = async ({ setLocation, recordData, recordedData }) => async () => {
  const now = new Date();
  const location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Highest,
  });
  const lat = location.coords.latitude.toString();
  const long = location.coords.longitude.toString();
  setLocation({ lat, long });
  console.log(`${now.toISOString()},${lat},${long}`);
  recordData({ newData: `${now.toISOString()},${lat},${long},` });
};

const dataHandler = {
  closeFile: ({ recordedData }) => async () => {
    const now = new Date();
    const filePath = `${CSV_DIRECTORY}/demo ${now}.csv`;
    await FileSystem.writeAsStringAsync(filePath, `${CSV_HEADER_FULL},${recordedData}`,
      { encoding: UTF8 });
    const publicFile = await FileSystem.getContentUriAsync(filePath);
  },
  readFile: () => async () => {
    const files = await FileSystem.readDirectoryAsync(CSV_DIRECTORY);
    console.log(files);
    const data = await FileSystem.readAsStringAsync(`${CSV_DIRECTORY}/${files.slice(-1)[0]}`, { encoding: UTF8 });
    console.log(data);
  },
};

const handlers = {
  record: ({
    setLocation, startRecording, setIntervalFunction, recordData, recordedData,
  }) => async () => {
    // https://docs.expo.io/versions/v35.0.0/sdk/location/
    startRecording();
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('no permission');
    }
    const intervalFunction = setInterval(await getLocation({ setLocation, recordedData, recordData }), 500);
    setIntervalFunction({ funcId: intervalFunction });
  },
  finish: (props) => () => {
    const {
      stopRecording, intervalFunc, closeFile, readFile, recordedData,
    } = props;
    clearInterval(intervalFunc);
    console.log(recordedData);
    closeFile();
    stopRecording();
    readFile();
  },
};
