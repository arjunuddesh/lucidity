
import axios from "axios";
const getAllInventoryData = () => {
  return axios
    .get('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory', {
      params: {},
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
let dashboardApi={
    getAllInventoryData
}

export default dashboardApi;