module.exports = {
  name: 'gitbit-git-data-access',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/gitbit/git/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
