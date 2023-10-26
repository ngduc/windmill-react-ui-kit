import type { JestConfigWithTsJest } from 'ts-jest'
const jestConfig: JestConfigWithTsJest = {
    "preset": "ts-jest",
    "testEnvironment": "jest-environment-jsdom",
    "testPathIgnorePatterns": [
      ".*\\.d\\.ts",
      "/node_modules/"
    ],
    "collectCoverageFrom": [
      "src/**/*.{ts,tsx}",
      "!src/{Transition,index}.{ts,tsx}",
      "!src/{stories,utils}/*"
    ],
    "setupFilesAfterEnv": [
      "./setupTests.ts"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    },
    "transform": {
      "^.+\\.svg$": "jest-transformer-svg",
      "^.+\\.(ts|tsx)$": "ts-jest"
    }
  }

export default jestConfig