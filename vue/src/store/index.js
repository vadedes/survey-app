import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "TheCodeholic YouTube channel content",
    slug: "thecodeholic-youtube-channel-content",
    status: "draft",
    image:
      "https://pbs.twmg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
    description:
      "My name is Zura. <br> I am a Web Developer with 9+ years of experience, free educational content at my website.",
    create_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you from?",
        description: null,
        data: {
          options: [
            { uuid: "fa123", text: "United States of America" },
            { uuid: "fa124", text: "Georgia" },
            { uuid: "fa1245", text: "Germany" },
            { uuid: "fa123456", text: "India" },
            { uuid: "fa1234567", text: "United Kingdom" },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "Which language videos do you want to see on my channel?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia lacinia diam, consequat rutrum augue convallis in. Nam augue nisi, dapibus a vestibulum et, interdum vitae lorem.",
        data: {
          options: [
            { uuid: "fb231", text: "Javascript" },
            { uuid: "fb124", text: "PHP" },
            { uuid: "fb12345", text: "HTML + CSS" },
            { uuid: "fb12356", text: "All of the above" },
            { uuid: "fb1532356", text: "Everything Zura thinks will be good" },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question:
          "Which PHP framework videos do you want to see on my channel?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia lacinia diam, consequat rutrum augue convallis in. Nam augue nisi, dapibus a vestibulum et, interdum vitae lorem.",
        data: {
          options: [
            { uuid: "fc231", text: "Laravel" },
            { uuid: "fc124", text: "Yii2" },
            { uuid: "fc12345", text: "Codeigniter" },
            { uuid: "fc12356", text: "Symfony" },
          ],
        },
      },
      {
        id: 4,
        type: "radio",
        question: "Which Laravel Framework do you love most?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia lacinia diam, consequat rutrum augue convallis in. Nam augue nisi, dapibus a vestibulum et, interdum vitae lorem.",
        data: {
          options: [
            { uuid: "fd231", text: "Laravel 5" },
            { uuid: "fd124", text: "Laravel 6" },
            { uuid: "fd12345", text: "Laravel 7" },
            { uuid: "fd12356", text: "Laravel 8" },
            { uuid: "fd123566", text: "Laravel 9" },
          ],
        },
      },
      {
        id: 5,
        type: "checkbox",
        question:
          "What type of projects do you want to see on my channel built with Laravel?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia lacinia diam, consequat rutrum augue convallis in. Nam augue nisi, dapibus a vestibulum et, interdum vitae lorem.",
        data: {
          options: [
            { uuid: "fe231", text: "REST API" },
            { uuid: "fe124", text: "E-commerce" },
            { uuid: "fe12345", text: "Real Estate" },
            { uuid: "fe12356", text: "Movie App" },
            { uuid: "fe123566", text: "All of the above" },
          ],
        },
      },
      {
        id: 6,
        type: "text",
        question: "What's your favourite YouTube channel?",
        description: null,
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "What do you think about TheCodeholic channel?",
        description: "Write your honest opinion. Everything is anonymous.",
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: "Laravel 8",
    slug: "laravel-8",
    status: "active",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/330px-Laravel.svg.png",
    description:
      "My name is Zura. <br> I am a Web Developer with 9+ years of experience, free educational content at my website.",
    create_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [],
  },
  {
    id: 300,
    title: "Vue 3",
    slug: "vue-3",
    status: "active",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/330px-Vue.js_Logo_2.svg.png",
    description: `Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.`,
    create_at: "2021-12-20 17:00:00",
    updated_at: "2021-12-20 17:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [],
  },
  {
    id: 400,
    title: "Tailwind 3",
    slug: "tailwind-3",
    status: "active",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png?20211001194333",
    description:
      "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    create_at: "2021-12-20 14:00:00",
    updated_at: "2021-12-20 14:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [],
  },
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("./register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("./login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    logout({ commit }) {
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },
    //fetch API version
    // login({ commit }, user) {
    //   return fetch(`http://localhost:8000/api/register`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     method: "POST",
    //     body: JSON.stringify(user),
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       commit("setUser", res);
    //       console.log(res);
    //       return res;
    //     });
    // },
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
