import axios from "axios";

const update = (id, payload) => {
  console.log(payload)
  axios.post(`/api/customers/${id}`, {
    customer: payload,
  });
}
  

const create = payload =>
  axios.post("/api/customers", {
    customer: payload,
  });

const destroy = (id) => axios.delete(`/api/customers/${id}`);


const customerApi = {
  create,
  update,
  destroy
};

export default customerApi;