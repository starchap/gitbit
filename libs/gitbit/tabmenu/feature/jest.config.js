module.exports = {
  name: 'gitbit-tabmenu-feature',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/gitbit/tabmenu/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
