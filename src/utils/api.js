import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getTestimonials = () => {
  return axios
    .get(`/testimonials`)
    .then((res) => res.data.results)
    .catch((error) => {
      console.log(error);
    });
};

export const postTestimonials = (data) => {
  return axios
    .post(`/testimonials`, data)
    .then((res) => res.data.results)
    .catch((error) => {
      console.log(error);
    });
};

export const postConsultation = (data) => {
  return axios
    .post(`/mailer`, data)
    .then((res) => res.data.results)
    .catch((error) => {
      console.log(error);
    });
};
