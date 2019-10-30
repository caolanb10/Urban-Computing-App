import {
  observeAuth, setToDB, postToDB, app, uid, ref,
} from './Fire';
import constants from './constants';
import requests from './requests';

const Database = {
  observeAuth, setToDB, postToDB, app, uid, ref,
};
export { constants, requests, Database };
