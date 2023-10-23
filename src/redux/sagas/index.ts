import { all } from 'redux-saga/effects';

import authSaga from './auth';
import fileLoadSaga from './fileLoad';

function* rootSaga() {
  yield all([
    ...authSaga,
    ...fileLoadSaga
  ])
}

export default rootSaga;