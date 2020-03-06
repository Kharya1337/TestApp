import { PHOTOS_LIST_RECIVED, PHOTOS_LIST_LOADING } from '../constants/photos';

const initialState = {
  photos: [],
  photosLoading: false,
  recived: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PHOTOS_LIST_RECIVED: {
      const { photos, recived } = action;

      return { ...state, photos, recived };
    }
    case PHOTOS_LIST_LOADING: {
      const { photosLoading } = action;

      return { ...state, photosLoading };
    }
    default: {
      return state;
    }
  }
};
