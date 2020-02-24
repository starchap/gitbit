module.exports = {
  name: 'gitbit-repository-library',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/gitbit/repository/library',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
