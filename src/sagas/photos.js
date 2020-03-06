import { put, takeLatest } from 'redux-saga/effects';
import { PHOTOS_GET_LIST } from '../constants/photos';
import { photosListLoading, photosListRecived } from '../actions/photos';

const URL = 'https://api.unsplash.com/photos';
const TOKEN = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

function* getPhotos() {
  yield put(photosListLoading(true));
  try {
    const res = yield fetch(`${URL}/?client_id=${TOKEN}`);
    const photos = yield res.json();

    yield put(photosListRecived(photos, true));
  } catch (err) {
    yield put(photosListRecived([], false));
  }
  yield put(photosListLoading(false));
}

export default function* photosSaga() {
  yield takeLatest(PHOTOS_GET_LIST, getPhotos);
}
