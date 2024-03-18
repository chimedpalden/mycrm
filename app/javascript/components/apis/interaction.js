import axios from "axios";

const update = (id, payload) => {
  axios.post(`/api/interactions/${id}`, {
    interaction: payload,
  });
}

const show = (id) => {
  axios.get(`/api/interactions/${id}`);
}

const create = payload =>
  axios.post("/api/interactions", {
    interaction: payload,
  });

const destroy = (id) => axios.delete(`/api/interactions/${id}`);


const interactionApi = {
  create,
  show,
  update,
  destroy
};

export default interactionApi;