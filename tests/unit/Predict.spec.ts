import "jest";
import { shallowMount } from "@vue/test-utils";
import axios from "axios";

describe("Test REST Mocking API", () => {
  test("fetch sound transciptions", () => {
    axios
      .post("/predict", {
        id: "my_id",
        text: "my_text"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});
