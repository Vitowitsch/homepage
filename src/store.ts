import Vue from "vue";
import Vuex, { Store } from "vuex";

import axios from "axios";
// import { mock, mock_axios } from "@/api/mock.js";

// console.log("mock: " + process.env.NODE_ENV);
// console.log(process.env.VUE_APP_MOCK);
// const axios = ('true' === process.env.VUE_APP_MOCK) ? mock_axios : real_axios;
// const axios = ('true' === process.env.VUE_APP_MOCK) ? mock_axios : real_axios;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    log: {
      types: [],
      infos: [-1],
      errors: [-1],
      traces: [-1],
      warnings: [-1],
      categories: [-1],
      graphSelect: {
        algo: "",
        train: "",
        car: ""
      },
      depth: 0,
      reqSuffix: "",
      reqFinished: true
    },

    health: {
      greenData: [-1],
      yellowData: [-1],
      redData: [-1],
      xData: [-1],
      graphSelect: {
        algo: "",
        train: "",
        car: ""
      },
      depth: 0,
      reqSuffix: "",
      reqFinished: true
    },
    healthUpdated: 0,
    logUpdated: 0
  },
  mutations: {
    SET_HEALTHSUM: (state, val) => {
      state.health.greenData = [];
      state.health.yellowData = [];
      state.health.redData = [];
      state.health.xData = [];
      for (let e of val) {
        state.health.greenData.push(e.green);
        state.health.yellowData.push(e.yellow);
        state.health.redData.push(e.red);
        state.health.xData.push(e.group);
      }
      state.healthUpdated++;
    },
    SET_LOGSUM: (state, val) => {
      state.log.errors = [];
      state.log.warnings = [];
      state.log.infos = [];
      state.log.traces = [];
      state.log.categories = [];
      for (let e of val) {
        state.log.errors.push(e.errors);
        state.log.warnings.push(e.warnings);
        state.log.infos.push(e.infos);
        state.log.traces.push(e.traces);
        state.log.categories.push(e.group);
      }
      state.logUpdated++;
    },
    SET_COMP_COMPARE: (state, val) => {
      state.health.greenData = [];
      state.health.yellowData = [];
      state.health.redData = [];
      state.health.xData = [];
      for (let e of val) {
        state.health.greenData.push(e.green);
        state.health.yellowData.push(e.yellow);
        state.health.redData.push(e.red);
        state.health.xData.push(e.objectid);
      }
      state.healthUpdated++;
    },
    SET_LOG_REQ_FINISHED: (state, val) => {
      state.log.reqFinished = val;
    },
    SET_HEALTH_REQ_FINISHED: (state, val) => {
      state.health.reqFinished = val;
    },
    RESET_HEALTHVIEW_SELECT: state => {
      state.health.graphSelect = {
        algo: "",
        train: "",
        car: ""
      };
      state.health.depth = 0;
      state.health.reqSuffix = "";
    },
    RESET_LOGVIEW_SELECT: state => {
      state.log.graphSelect = {
        algo: "",
        train: "",
        car: ""
      };
      state.log.depth = 0;
      state.log.reqSuffix = "";
    },
    SET_LOG_VIEW_STATE: (state, val) => {
      state.log.reqSuffix = val[0];
      state.log.graphSelect = val[1];
      state.log.depth = val[2];
    },
    SET_HEALTH_VIEW_STATE: (state, val) => {
      state.health.reqSuffix = val[0];
      state.health.graphSelect = val[1];
      state.health.depth = val[2];
    }
  },
  actions: {
    loadComponentCompare({ commit }, param) {
      if (!this.state.health.reqFinished) {
        return;
      }
      commit("SET_HEALTH_REQ_FINISHED", false);
      this.dispatch("fireRequest", {
        url:
          process.env.VUE_APP_SERVER_PREFIX +
          "/compresult?algo=" +
          param[0] +
          "&comp=" +
          param[1],
        setter: "SET_LOGSUM",
        sigDone: "SET_LOG_REQ_FINISHED"
      });
    },
    loadLogTypes({ commit }, group) {
      if (!this.state.log.reqFinished) {
        return;
      }
      commit("SET_LOG_REQ_FINISHED", false);
      commit(
        "SET_LOG_VIEW_STATE",
        buildReq(
          this.state.log.reqSuffix,
          group,
          this.state.log.graphSelect,
          this.state.log.depth
        )
      );
      this.dispatch("fireRequest", {
        url: process.env.VUE_APP_SERVER_PREFIX +"/logtypecnt" + this.state.log.reqSuffix,
        setter: "SET_LOGSUM",
        sigDone: "SET_LOG_REQ_FINISHED"
      });
    },
    loadHealthSummary({ commit }, group) {
      if (!this.state.health.reqFinished) {
        return;
      }
      commit("SET_HEALTH_REQ_FINISHED", false);
      commit(
        "SET_HEALTH_VIEW_STATE",
        buildReq(
          this.state.health.reqSuffix,
          group,
          this.state.health.graphSelect,
          this.state.health.depth
        )
      );
      this.dispatch("fireRequest", {
        url: "/healthsummary" + this.state.health.reqSuffix,
        setter: "SET_HEALTHSUM",
        sigDone: "SET_HEALTH_REQ_FINISHED"
      });
    },
    fireRequest({ commit }, p) {
      axios
        .get(p["url"])
        .then(response => {
          commit(p["setter"], response.data);
          commit(p["sigDone"], true);
        })
        .catch(err => console.log(err));
    }
  }
});

function buildReq(suffix, group, select, depth) {
  if (0 === depth) {
    if ("" != group) {
      suffix += "?algo=";
      suffix += group;
      select.algo = group;
      depth = 1;
    }
  } else if (1 === depth) {
    suffix += "&train=";
    suffix += group;
    select.train = group;
    depth = 2;
  } else if (2 === depth) {
    suffix += "&car=";
    suffix += group;
    select.car = group;
    depth = 3;
  }
  return [suffix, select, depth];
}
