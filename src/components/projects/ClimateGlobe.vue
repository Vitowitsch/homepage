<template>
  <figure>
    <v-chart :options="options" :init-options="initOptions" autoresize />
  </figure>
</template>

<script>
import Vue from "vue";
import ECharts from "vue-echarts"; // refers to components/ECharts.vue in webpack

// import ECharts modules manually to reduce bundle size
import "echarts/lib/component/tooltip";

// If you want to use ECharts extensions, just import the extension package and it will work
// Taking ECharts-GL as an example:
// You only need to install the package with `npm install --save echarts-gl` and import it as follows
import "echarts-gl";

// register component to use
Vue.component("v-chart", ECharts);
import "echarts/lib/chart/map";
import "echarts/lib/component/geo";
import "echarts/lib/component/visualMap";
import "echarts/map/js/world";

export default {
  components: {
    ECharts,
  },
  data: function () {
    return {
      initOptions: {
        renderer: "canvas",
      },
      options: {
        draggable: false,
        title: {
          text: "CO₂ tons per head",
          left: "center",
          top: "top",
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            var value = (params.value + "").split(".");
            value =
              value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + "." + value[1];
            return params.seriesName + "<br/>" + params.name + " : " + value;
          },
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
        },
        visualMap: {
          min: 0,
          max: 20,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        series: [
          {
            name: "",
            type: "map",
            mapType: "world",
            roam: false,
            itemStyle: {
              emphasis: { label: { show: true } },
            },
            data: [
              {
                name: "Aruba",
                value: 8.408362638,
              },
              {
                name: "Afghanistan",
                value: 0.299444991,
              },
              {
                name: "Angola",
                value: 1.291328315,
              },
              {
                name: "Albania",
                value: 1.978763312,
              },
              {
                name: "Andorra",
                value: 5.832169951,
              },
              {
                name: "Arab World",
                value: 4.860233832,
              },
              {
                name: "United Arab Emirates",
                value: 23.30202251,
              },
              {
                name: "Argentina",
                value: 4.746797455,
              },
              {
                name: "Armenia",
                value: 1.90275891,
              },
              {
                name: "American Samoa",
                value: "",
              },
              {
                name: "Antigua and Barbuda",
                value: 5.377648546,
              },
              {
                name: "Australia",
                value: 15.38876602,
              },
              {
                name: "Austria",
                value: 6.86986793,
              },
              {
                name: "Azerbaijan",
                value: 3.931560609,
              },
              {
                name: "Burundi",
                value: 0.044485376,
              },
              {
                name: "Belgium",
                value: 8.328159898,
              },
              {
                name: "Benin",
                value: 0.614213852,
              },
              {
                name: "Burkina Faso",
                value: 0.162018806,
              },
              {
                name: "Bangladesh",
                value: 0.459141965,
              },
              {
                name: "Bulgaria",
                value: 5.871615869,
              },
              {
                name: "Bahrain",
                value: 23.44975483,
              },
              {
                name: "Bahamas. The",
                value: 6.323257512,
              },
              {
                name: "Bosnia and Herzegovina",
                value: 6.234719162,
              },
              {
                name: "Belarus",
                value: 6.701957705,
              },
              {
                name: "Belize",
                value: 1.407601494,
              },
              {
                name: "Bermuda",
                value: 8.838314988,
              },
              {
                name: "Bolivia",
                value: 1.932419499,
              },
              {
                name: "Brazil",
                value: 2.594388285,
              },
              {
                name: "Barbados",
                value: 4.490177673,
              },
              {
                name: "Brunei Darussalam",
                value: 22.12470124,
              },
              {
                name: "Bhutan",
                value: 1.289321371,
              },
              {
                name: "Botswana",
                value: 3.243287637,
              },
              {
                name: "Central African Republic",
                value: 0.066593111,
              },
              {
                name: "Canada",
                value: 15.11715878,
              },
              {
                name: "Central Europe and the Baltics",
                value: 6.14888254,
              },
              {
                name: "Switzerland",
                value: 4.311562994,
              },
              {
                name: "Channel Islands",
                value: "",
              },
              {
                name: "Chile",
                value: 4.687376624,
              },
              {
                name: "China",
                value: 7.543907641,
              },
              {
                name: "Cote d'Ivoire",
                value: 0.490206046,
              },
              {
                name: "Cameroon",
                value: 0.314928068,
              },
              {
                name: "Congo. Dem. Rep.",
                value: 0.063369191,
              },
              {
                name: "Congo. Rep.",
                value: 0.635369293,
              },
              {
                name: "Colombia",
                value: 1.759537174,
              },
              {
                name: "Comoros",
                value: 0.202814119,
              },
              {
                name: "Cabo Verde",
                value: 0.933403237,
              },
              {
                name: "Costa Rica",
                value: 1.630951062,
              },
              {
                name: "Caribbean small states",
                value: 8.884541385,
              },
              {
                name: "Cuba",
                value: 3.045210624,
              },
              {
                name: "Curacao",
                value: 37.72628905,
              },
              {
                name: "Cayman Islands",
                value: 9.171838032,
              },
              {
                name: "Cyprus",
                value: 5.260352041,
              },
              {
                name: "Czech Republic",
                value: 9.165978376,
              },
              {
                name: "Germany",
                value: 8.889370395,
              },
              {
                name: "Djibouti",
                value: 0.791961752,
              },
              {
                name: "Dominica",
                value: 1.864285911,
              },
              {
                name: "Denmark",
                value: 5.935712482,
              },
              {
                name: "Dominican Republic",
                value: 2.069986634,
              },
              {
                name: "Algeria",
                value: 3.717409901,
              },
              {
                name: "East Asia & Pacific (excluding high income)",
                value: 5.775478345,
              },
              {
                name: "Early-demographic dividend",
                value: 2.295302152,
              },
              {
                name: "East Asia & Pacific",
                value: 6.293604976,
              },
              {
                name: "Europe & Central Asia (excluding high income)",
                value: 7.421328159,
              },
              {
                name: "Europe & Central Asia",
                value: 6.916049326,
              },
              {
                name: "Ecuador",
                value: 2.761702175,
              },
              {
                name: "Egypt. Arab Rep.",
                value: 2.198980246,
              },
              {
                name: "Euro area",
                value: 6.474920548,
              },
              {
                name: "Eritrea",
                value: "",
              },
              {
                name: "Spain",
                value: 5.033824487,
              },
              {
                name: "Estonia",
                value: 14.84881917,
              },
              {
                name: "Ethiopia",
                value: 0.119124015,
              },
              {
                name: "European Union",
                value: 6.379148848,
              },
              {
                name: "Fragile and conflict affected situations",
                value: 0.886959024,
              },
              {
                name: "Finland",
                value: 8.660721243,
              },
              {
                name: "Fiji",
                value: 1.320574708,
              },
              {
                name: "France",
                value: 4.573182147,
              },
              {
                name: "Faroe Islands",
                value: 12.23784857,
              },
              {
                name: "Micronesia. Fed. Sts.",
                value: 1.445435754,
              },
              {
                name: "Gabon",
                value: 2.768265721,
              },
              {
                name: "United Kingdom",
                value: 6.49744049,
              },
              {
                name: "Georgia",
                value: 2.416460496,
              },
              {
                name: "Ghana",
                value: 0.536533378,
              },
              {
                name: "Gibraltar",
                value: 15.51348493,
              },
              {
                name: "Guinea",
                value: 0.207492621,
              },
              {
                name: "Gambia. The",
                value: 0.267684889,
              },
              {
                name: "Guinea-Bissau",
                value: 0.157241167,
              },
              {
                name: "Equatorial Guinea",
                value: 4.733816529,
              },
              {
                name: "Greece",
                value: 6.180337268,
              },
              {
                name: "Grenada",
                value: 2.275498308,
              },
              {
                name: "Greenland",
                value: 8.989181988,
              },
              {
                name: "Guatemala",
                value: 1.150977994,
              },
              {
                name: "Guam",
                value: "",
              },
              {
                name: "Guyana",
                value: 2.632347952,
              },
              {
                name: "High income",
                value: 10.71269229,
              },
              {
                name: "Hong Kong SAR. China",
                value: 6.393600526,
              },
              {
                name: "Honduras",
                value: 1.07522179,
              },
              {
                name: "Heavily indebted poor countries (HIPC)",
                value: 0.26534215,
              },
              {
                name: "Croatia",
                value: 3.973804906,
              },
              {
                name: "Haiti",
                value: 0.270538586,
              },
              {
                name: "Hungary",
                value: 4.265574976,
              },
              {
                name: "IBRD only",
                value: 4.508560979,
              },
              {
                name: "IDA & IBRD total",
                value: 3.529660952,
              },
              {
                name: "IDA total",
                value: 0.525891424,
              },
              {
                name: "IDA blend",
                value: 0.880445467,
              },
              {
                name: "Indonesia",
                value: 1.819363319,
              },
              {
                name: "IDA only",
                value: 0.348440393,
              },
              {
                name: "Isle of Man",
                value: "",
              },
              {
                name: "India",
                value: 1.730000432,
              },
              {
                name: "Not classified",
                value: "",
              },
              {
                name: "Ireland",
                value: 7.313939808,
              },
              {
                name: "Iran. Islamic Rep.",
                value: 8.283020787,
              },
              {
                name: "Iraq",
                value: 4.811839686,
              },
              {
                name: "Iceland",
                value: 6.059657407,
              },
              {
                name: "Israel",
                value: 7.863181348,
              },
              {
                name: "Italy",
                value: 5.270866786,
              },
              {
                name: "Jamaica",
                value: 2.59321537,
              },
              {
                name: "Jordan",
                value: 3.002514727,
              },
              {
                name: "Japan",
                value: 9.538706103,
              },
              {
                name: "Kazakhstan",
                value: 14.36316974,
              },
              {
                name: "Kenya",
                value: 0.310415314,
              },
              {
                name: "Kyrgyz Republic",
                value: 1.646395339,
              },
              {
                name: "Cambodia",
                value: 0.437759998,
              },
              {
                name: "Kiribati",
                value: 0.564368357,
              },
              {
                name: "St. Kitts and Nevis",
                value: 4.2989449,
              },
              {
                name: "Korea. Rep.",
                value: 11.57034541,
              },
              {
                name: "Kuwait",
                value: 25.22386443,
              },
              {
                name: "Latin America & Caribbean (excluding high income)",
                value: 2.781101756,
              },
              {
                name: "Lao PDR",
                value: 0.297200884,
              },
              {
                name: "Lebanon",
                value: 4.295732552,
              },
              {
                name: "Liberia",
                value: 0.212967664,
              },
              {
                name: "Libya",
                value: 9.186845393,
              },
              {
                name: "St. Lucia",
                value: 2.307191321,
              },
              {
                name: "Latin America & Caribbean",
                value: 3.063307099,
              },
              {
                name: "Least developed countries: UN classification",
                value: 0.314163047,
              },
              {
                name: "Low income",
                value: 0.320595161,
              },
              {
                name: "Liechtenstein",
                value: 1.185229079,
              },
              {
                name: "Sri Lanka",
                value: 0.885247473,
              },
              {
                name: "Lower middle income",
                value: 1.474025508,
              },
              {
                name: "Low & middle income",
                value: 3.476109882,
              },
              {
                name: "Lesotho",
                value: 1.150111032,
              },
              {
                name: "Late-demographic dividend",
                value: 6.744762333,
              },
              {
                name: "Lithuania",
                value: 4.378090123,
              },
              {
                name: "Luxembourg",
                value: 17.36212137,
              },
              {
                name: "Latvia",
                value: 3.498192882,
              },
              {
                name: "Macao SAR. China",
                value: 2.17984276,
              },
              {
                name: "St. Martin (French part)",
                value: "",
              },
              {
                name: "Morocco",
                value: 1.744379974,
              },
              {
                name: "Monaco",
                value: "",
              },
              {
                name: "Moldova",
                value: 1.386829142,
              },
              {
                name: "Madagascar",
                value: 0.130421321,
              },
              {
                name: "Maldives",
                value: 3.26955985,
              },
              {
                name: "Middle East & North Africa",
                value: 6.159356049,
              },
              {
                name: "Mexico",
                value: 3.866241113,
              },
              {
                name: "Marshall Islands",
                value: 1.941018564,
              },
              {
                name: "Middle income",
                value: 3.874128243,
              },
              {
                name: "North Macedonia",
                value: 3.614938183,
              },
              {
                name: "Mali",
                value: 0.083228663,
              },
              {
                name: "Malta",
                value: 5.400613957,
              },
              {
                name: "Myanmar",
                value: 0.416600362,
              },
              {
                name: "Middle East & North Africa (excluding high income)",
                value: 3.927253364,
              },
              {
                name: "Montenegro",
                value: 3.55607179,
              },
              {
                name: "Mongolia",
                value: 7.127326348,
              },
              {
                name: "Northern Mariana Islands",
                value: "",
              },
              {
                name: "Mozambique",
                value: 0.309666607,
              },
              {
                name: "Mauritania",
                value: 0.666822428,
              },
              {
                name: "Mauritius",
                value: 3.353110472,
              },
              {
                name: "Malawi",
                value: 0.07476291,
              },
              {
                name: "Malaysia",
                value: 8.032991579,
              },
              {
                name: "North America",
                value: 16.36232406,
              },
              {
                name: "Namibia",
                value: 1.583728667,
              },
              {
                name: "New Caledonia",
                value: 16.00593173,
              },
              {
                name: "Niger",
                value: 0.111073516,
              },
              {
                name: "Nigeria",
                value: 0.545622113,
              },
              {
                name: "Nicaragua",
                value: 0.808520856,
              },
              {
                name: "Netherlands",
                value: 9.920138075,
              },
              {
                name: "Norway",
                value: 9.270945132,
              },
              {
                name: "Nepal",
                value: 0.283538526,
              },
              {
                name: "Nauru",
                value: 4.021851008,
              },
              {
                name: "New Zealand",
                value: 7.686575825,
              },
              {
                name: "OECD members",
                value: 9.523556491,
              },
              {
                name: "Oman",
                value: 15.44316719,
              },
              {
                name: "Other small states",
                value: 7.519311831,
              },
              {
                name: "Pakistan",
                value: 0.896264105,
              },
              {
                name: "Panama",
                value: 2.254311363,
              },
              {
                name: "Peru",
                value: 1.993485949,
              },
              {
                name: "Philippines",
                value: 1.055456846,
              },
              {
                name: "Palau",
                value: 12.34270409,
              },
              {
                name: "Papua New Guinea",
                value: 0.814648807,
              },
              {
                name: "Poland",
                value: 7.517151585,
              },
              {
                name: "Pre-demographic dividend",
                value: 0.536757223,
              },
              {
                name: "Puerto Rico",
                value: "",
              },
              {
                name: "Korea. Dem. People’s Rep.",
                value: 1.613596841,
              },
              {
                name: "Portugal",
                value: 4.331554028,
              },
              {
                name: "Paraguay",
                value: 0.870219291,
              },
              {
                name: "West Bank and Gaza",
                value: "",
              },
              {
                name: "Pacific island small states",
                value: 1.064149686,
              },
              {
                name: "Post-demographic dividend",
                value: 10.35677267,
              },
              {
                name: "French Polynesia",
                value: 2.915134817,
              },
              {
                name: "Qatar",
                value: 45.42323996,
              },
              {
                name: "Romania",
                value: 3.516153691,
              },
              {
                name: "Russia",
                value: 11.85752777,
              },
              {
                name: "Rwanda",
                value: 0.074016446,
              },
              {
                name: "South Asia",
                value: 1.461467463,
              },
              {
                name: "Saudi Arabia",
                value: 19.5292718,
              },
              {
                name: "Sudan",
                value: 0.299732598,
              },
              {
                name: "Senegal",
                value: 0.608809117,
              },
              {
                name: "Singapore",
                value: 10.30633191,
              },
              {
                name: "Solomon Islands",
                value: 0.350449345,
              },
              {
                name: "Sierra Leone",
                value: 0.184925702,
              },
              {
                name: "El Salvador",
                value: 1.000644623,
              },
              {
                name: "San Marino",
                value: "",
              },
              {
                name: "Somalia",
                value: 0.045046723,
              },
              {
                name: "Serbia",
                value: 5.282521917,
              },
              {
                name: "Sub-Saharan Africa (excluding high income)",
                value: 0.840028002,
              },
              {
                name: "South Sudan",
                value: 0.129749351,
              },
              {
                name: "Sub-Saharan Africa",
                value: 0.840453498,
              },
              {
                name: "Small states",
                value: 7.384025519,
              },
              {
                name: "Sao Tome and Principe",
                value: 0.59433982,
              },
              {
                name: "Suriname",
                value: 3.634019433,
              },
              {
                name: "Slovak Republic",
                value: 5.661581328,
              },
              {
                name: "Slovenia",
                value: 6.213686845,
              },
              {
                name: "Sweden",
                value: 4.478182178,
              },
              {
                name: "Eswatini",
                value: 0.928714992,
              },
              {
                name: "Sint Maarten (Dutch part)",
                value: 19.46132413,
              },
              {
                name: "Seychelles",
                value: 5.418677963,
              },
              {
                name: "Syrian Arab Republic",
                value: 1.598898459,
              },
              {
                name: "Turks and Caicos Islands",
                value: 6.086487448,
              },
              {
                name: "Chad",
                value: 0.053777688,
              },
              {
                name: "East Asia & Pacific (IDA & IBRD countries)",
                value: 5.827867179,
              },
              {
                name: "Europe & Central Asia (IDA & IBRD countries)",
                value: 7.39596064,
              },
              {
                name: "Togo",
                value: 0.362696892,
              },
              {
                name: "Thailand",
                value: 4.621860032,
              },
              {
                name: "Tajikistan",
                value: 0.620466725,
              },
              {
                name: "Turkmenistan",
                value: 12.51729534,
              },
              {
                name: "Latin America & the Caribbean (IDA & IBRD countries)",
                value: 3.032804906,
              },
              {
                name: "Timor-Leste",
                value: 0.387014002,
              },
              {
                name: "Middle East & North Africa (IDA & IBRD countries)",
                value: 3.967544488,
              },
              {
                name: "Tonga",
                value: 1.143965892,
              },
              {
                name: "South Asia (IDA & IBRD)",
                value: 1.461467463,
              },
              {
                name: "Sub-Saharan Africa (IDA & IBRD countries)",
                value: 0.840453498,
              },
              {
                name: "Trinidad and Tobago",
                value: 34.16324263,
              },
              {
                name: "Tunisia",
                value: 2.587059584,
              },
              {
                name: "Turkey",
                value: 4.491479026,
              },
              {
                name: "Tuvalu",
                value: 1.008525853,
              },
              {
                name: "Tanzania",
                value: 0.221347372,
              },
              {
                name: "Uganda",
                value: 0.134656001,
              },
              {
                name: "Ukraine",
                value: 5.020747064,
              },
              {
                name: "Upper middle income",
                value: 6.588135175,
              },
              {
                name: "Uruguay",
                value: 1.973150822,
              },
              {
                name: "United States",
                value: 16.50283724,
              },
              {
                name: "Uzbekistan",
                value: 3.420722746,
              },
              {
                name: "St. Vincent and the Grenadines",
                value: 1.91134541,
              },
              {
                name: "Venezuela. RB",
                value: 6.025697582,
              },
              {
                name: "British Virgin Islands",
                value: 6.072833581,
              },
              {
                name: "Virgin Islands (U.S.)",
                value: "",
              },
              {
                name: "Vietnam",
                value: 1.80356575,
              },
              {
                name: "Vanuatu",
                value: 0.594993239,
              },
              {
                name: "World",
                value: 4.970155157,
              },
              {
                name: "Samoa",
                value: 1.029788341,
              },
              {
                name: "Kosovo",
                value: "",
              },
              {
                name: "Yemen. Rep.",
                value: 0.864834535,
              },
              {
                name: "South Africa",
                value: 8.980119297,
              },
              {
                name: "Zambia",
                value: 0.288271141,
              },
              {
                name: "Zimbabwe",
                value: 0.779955845,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
<style lang="stylus" scoped>
figure {
  .echarts {
    height: 500px;
    width: 95%;
  }
}
</style>
