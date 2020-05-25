import { set, toggle } from "@/utils/vuex";

const state = {
  /* 1. drawer : true ( Navigation 이 열린 상태 )
     2. drawer : null or false ( Navigation 이 닫힌 상태 ) */
  isDrawer: false,
  /* 1. fullScreen : true ( AppBar 와 nav 가 없는 상태 )
     2. fullScreen : null or false */
  fullScreen: null
};

const mutations = {
  SET_DRAWER: set("isDrawer"),
  TOGGLE_DRAWER: toggle("isDrawer")
};

export default {
  state,
  mutations
};
