import * as BenchApiUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES ='RECEIVE_BENCHES';

const receiveBenches = (benches) => {
  return {
    type: RECEIVE_BENCHES,
    benches: benches
  };
};


export const fetchBenches = (filters) => (dispatch) =>{
  return BenchApiUtil.fetchBenches(filters).then((benches) =>{
    dispatch(receiveBenches(benches));
  });
};
