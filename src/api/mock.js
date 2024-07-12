import mock_axios from "axios";
var MockAdapter = require("axios-mock-adapter");

let mock = new MockAdapter(mock_axios);

mock.onGet("/bogiediagnosis/healthsummary").reply(200, [
  { green: 584, yellow: 0, red: 0, group: "AirSpringSystem" },
  { green: 293, yellow: 0, red: 0, group: "AntiRollSystem" },
  { green: 633, yellow: 0, red: 0, group: "AntiYawDamper" },
  { green: 1188, yellow: 0, red: 0, group: "AxleBearing" },
  { green: 584, yellow: 0, red: 0, group: "EmergencySpring" },
  { green: 132, yellow: 2, red: 10, group: "EmRailBrake" },
  { green: 290, yellow: 0, red: 0, group: "LateralRideComfort" },
  { green: 290, yellow: 0, red: 0, group: "LateralRunningSafety" },
  { green: 1188, yellow: 0, red: 0, group: "OutOfRound" },
  { green: 1168, yellow: 0, red: 0, group: "PrimDamper" },
  { green: 292, yellow: 0, red: 0, group: "SecLatDamper" },
  { green: 584, yellow: 0, red: 0, group: "SecVertDamper" },
  { green: 288, yellow: 2, red: 0, group: "Stability" },
  { green: 290, yellow: 0, red: 0, group: "VerticalRideComfort" },
  { green: 290, yellow: 0, red: 0, group: "VerticalRunningSafety" },
  { green: 1172, yellow: 0, red: 16, group: "WheelDiameter" },
  { green: 1188, yellow: 0, red: 0, group: "WheelFlat" },
  { green: 1188, yellow: 0, red: 0, group: "WheelWear" },
]);

export { mock, mock_axios };
