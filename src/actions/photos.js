import {
  PHOTOS_GET_LIST,
  PHOTOS_LIST_RECIVED,
  PHOTOS_LIST_LOADING
} from '../constants/photos';

export const photosGetList = () => ({ type: PHOTOS_GET_LIST });

export const photosListLoading = (photosLoading) => ({ type: PHOTOS_LIST_LOADING, photosLoading });

export const photosListRecived = (photos, recived) => ({
  type: PHOTOS_LIST_RECIVED, photos, recived
});
