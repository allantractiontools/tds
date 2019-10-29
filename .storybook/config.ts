import { configure, addParameters } from "@storybook/react";
import theme from "./theme";

// Option defaults.
addParameters({
  options: {
    theme: theme
  }
});

// automatically import all files ending in *.stories.tsx
configure(
  require.context("../src/design-system", true, /\.stories\.tsx?$/),
  module
);
