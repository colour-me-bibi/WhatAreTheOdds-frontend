export default {
  wato: {
    output: {
      workspace: "./src/gen/",
      target: "./wato.ts",
      schemas: "./model",
      mode: "tags-split",
      client: "react-query",
    },
    input: {
      target: "./wato-api.yaml",
    },
  },
};
