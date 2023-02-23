import { useRow } from "tinybase/cjs/ui-react";

describe("TinybaseLib", () => {
  it("useRow is a function", () => {
    expect(typeof useRow).toBe("function");
  });
});

// Differences (working vs. not working)
// @nrwl: 15.7.2 vs 15.4.0
// jest: 28.1.1 vs 27.5.1
// babel-jest: 28.1.1 vs 27.5.1
// ts-jest: 28.0.5 vs 27.1.4
// ts-node: 28.0.5 vs 10.8.0
// typescript: 4.8.2 vs 4.3.5
// react/react-dom: 18.0.2 vs 17.0.2

// packages not present in working test repo
// "babel-eslint": "^10.1.0",
// "jest-esm-transformer": "^1.0.0",
// "jest-transform-stub": "^2.0.0",
// "tsconfig-paths": "^4.0.0",
// "tsconfig-paths-webpack-plugin": "^3.5.2",
// "webpack": "^5.75.0",
// "webpack-bundle-analyzer": "^4.5.0",
// "webpack-merge": "^5.8.0"
