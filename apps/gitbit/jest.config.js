module.exports = {
  name: 'gitbit',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/gitbit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
