import axios from "axios";

axios.defaults.baseURL = "https://physician-project-back.onrender.com/api";

export const getTestimonials = () => {
  return axios
    .get(`/testimonials`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};

export const postTestimonials = (data) => {
  return axios
    .post(`/testimonials`, data)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};

export const postConsultation = (data) => {
  return axios
    .post(`/mailer`, data)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};
