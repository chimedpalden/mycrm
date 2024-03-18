import axios from "axios";

const update = (id, payload) => {
  console.log(payload)
  axios.post(`/api/contacts/${id}`, {
    contact: payload,
  });
}
  

const create = payload =>
  axios.post("/api/contacts", {
    contact: payload,
  });

const destroy = (id) => axios.delete(`/api/contacts/${id}`);


const contactApi = {
  create,
  update,
  destroy
};

export default contactApi;