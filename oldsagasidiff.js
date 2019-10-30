diff --git a/redux/sagas.js b/redux/sagas.js
index 1dd3bb1..591ad75 100644
--- a/redux/sagas.js
+++ b/redux/sagas.js
@@ -1,29 +1,35 @@
 import {
-  put, takeEvery, all, call,
+  put, all, call,
 } from 'redux-saga/effects';
-import { readDirectoryAsync, documentDirectory } from 'expo-file-system';
 import { Accuracy, watchPositionAsync } from 'expo-location';
 import { requests, constants, Database } from '../Firebase';
-import { ACTION_TYPES, actionCreators } from './actions';
+import { actionCreators } from './actions';
 
-///////////////
-// Workers ///
-///////////////
-
-function* newLocation({ location: { coords: { latitude, longitude, accuracy }, timestamp } }) {
-  console.log('here', latitude, longitude, accuracy, timestamp);
+function* putUpdate({
+  latitude, longitude, accuracy, timestamp,
+}) {
+  console.log('in generator');
+  console.log('args', {
+    latitude, longitude, accuracy, timestamp,
+  });
   yield put(actionCreators.updateLocation({
     latitude, longitude, accuracy, timestamp,
   }));
 }
 
-function* startWatchingLocation() {
-  yield call(watchPositionAsync, { accuracy: Accuracy.Highest, timeInterval: 500 }, newLocation);
+function newLocation({ coords: { latitude, longitude, accuracy }, timestamp }) {
+  console.log('here', latitude, longitude, accuracy, timestamp);
+  putUpdate({
+    latitude, longitude, accuracy, timestamp,
+  }).next();
 }
 
-function* updateCSVFiles() {
-  const files = yield call(readDirectoryAsync, documentDirectory);
-  yield put(actionCreators.updateCSVFiles({ csvFiles: files }));
+///////////////
+// Workers ///
+///////////////
+
+function* startWatchingLocation() {
+  yield call(watchPositionAsync, { accuracy: Accuracy.Highest, timeInterval: 500 }, newLocation);
 }
 
 function* setStationData() {
@@ -40,22 +46,10 @@ function* readStationData() {
     yield put(actionCreators.updateStationList({ stations: stationDataVar }));
   }
 }
-///////////////
-// Watchers //
-//////////////
-function* watchLocationUpdate() {
-  yield takeEvery(ACTION_TYPES.NEW_LOCATION, newLocation);
-}
-
-function* watchCSVFilesUpdate() {
-  yield takeEvery(ACTION_TYPES.TRIGGER_UPDATE_CSV_FILES, updateCSVFiles);
-}
 
 export default function* rootSaga() {
   yield all([
     startWatchingLocation(),
-    watchCSVFilesUpdate(),
-    watchLocationUpdate(),
     setStationData(),
     readStationData(),
   ]);
