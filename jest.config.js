module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'json', 'js'],
    rootDir: './',
    testRegex: '\\.test\\.ts$',
    transform: {'^.+\\.ts$': 'ts-jest'},
    collectCoverageFrom: ["**/*.(t|j)s"],
    coverageDirectory: '../coverage',
    moduleNameMapper: {"^src/(.*)$": "<rootDir>/src/$1"}
};