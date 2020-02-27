module.exports = {
    verbose: true,
    testRegex: ['.*\\.spec\\.ts$'],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js'],
    moduleDirectories: ['node_modules'],
    globals: {
        'ts-jest': {
            tsConfig: './tsconfig.json',
            diagnostics: true,
        },
    },
    preset: 'ts-jest',
    testMatch: null,
    testEnvironment: 'node',
};
