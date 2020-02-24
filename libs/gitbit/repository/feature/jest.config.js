module.exports = {
  name: 'gitbit-repository-feature',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/gitbit/repository/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
