import axios from 'axios';

const URL = 'https://perfanalytics--api.herokuapp.com/metrics';

const $fetch = (e) => {
  console.log(e?.endDate, e?.startDate);
  let query = null;
  if (e?.endDate && e?.startDate) {
    query = `${URL}/?min=${e?.startDate}&max=${e.endDate}`;
    console.log(query);
  } else {
    query = URL;
  }

  return axios.get(query);
};

export default $fetch;
