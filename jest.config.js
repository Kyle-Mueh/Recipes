// module.exports = {
//     preset: 'jest-preset-angular',
//     setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
//         transformIgnorePatterns: [
    
//             "<rootDir>/node_modules/(?!@ionic-native|@ionic|ionicons)",
//     ],
//     coverageReporters: ['text', 'html'],
//     coverageDirectory: '<rootDir>/coverage',
// }
const esModules = ['@ionic'].join('|');
module.exports = {
        setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],

  globals: {
    'ts-jest': {
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
            { targets: { node: true }, modules: 'commonjs' }
          ]
        ],
        plugins: ['@babel/plugin-syntax-dynamic-import']
      }
    }
  },
  transformIgnorePatterns:[
    `<rootDir>/node_modules/(?!${esModules})`
  ]
};