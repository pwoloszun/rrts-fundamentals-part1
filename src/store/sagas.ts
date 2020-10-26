import { reduce, values } from 'lodash';
import { call, all } from 'redux-saga/effects'

// merge all App sagas here
const allSagasMap = {
};

export default function* rootSaga() {
  const allSagasList = reduce(allSagasMap, (memo, sliceSagasMap) => {
    const sliceSagasList = values(sliceSagasMap);
    return memo.concat(sliceSagasList as any);
  }, [] as Generator[]);
  yield all(allSagasList.map((saga) => call(saga as any)));
}
