import Vue from "vue";
import Vuex from "vuex";

const modules = {};

/*
  
1. 목적
    modules 폴더 안에 있는 파일들을 vuex 에 등록시키기 위한 사전 작업

  2. 설명
    2-(1) 파일명을 모듈명으로 규정
    2-(2) 해당 모듈들을 vuex에 등록
    2-(3) 공식 홈페이지 : https://medium.com/@Dongmin_Jang/vuejs-%EC%88%A8%EA%B2%A8%EC%A7%84-vue-%ED%8C%A8%ED%84%B4%EB%93%A4-1ea3adc585ac

*/
const requireModule = require.context("./modules", true, /\.js$/);
requireModule.keys().forEach(fileName => {
  if (fileName === "./index.js") return;
  const moduleName = fileName.replace(/(\.\/|\.js)/gi, "");
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default
  };
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV === "development"
});
