import { configure, addParameters } from "@storybook/react";
import theme from "./theme";
import "bootstrap/dist/css/bootstrap-grid.min.css";

// Option defaults.
addParameters({
  options: {
    theme: theme
  }
});

// automatically import all files ending in *.stories.tsx
configure(require.context("../src", true, /\.stories\.tsx?$/), module);
