module.exports = {
  moduleFileExtensions: ["ts", "vue", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
};
