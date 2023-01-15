/* eslint-disable prettier/prettier */
module.exports = {
    testPathIgnorePatterns: ['/node_modules'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    /* testEnvironment: 'jsdom', */
}
