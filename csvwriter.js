import * as FileSystem from 'expo-file-system';

const { UTF8 } = FileSystem.EncodingType;
const CSV_DIRECTORY = FileSystem.documentDirectory;
const CSV_HEADER_DATETIME = 'Datetime';
const CSV_HEADER_LAT = 'Lat';
const CSV_HEADER_LONG = 'Long';
const CSV_HEADER_FULL = `${CSV_HEADER_DATETIME},${CSV_HEADER_LAT},${CSV_HEADER_LONG}`;
