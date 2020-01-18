module.exports = {
  name: 'gitbit-tree-feature',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/gitbit/tree/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
