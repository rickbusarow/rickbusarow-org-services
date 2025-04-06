'use strict';

module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'header-max-length': [1, 'always', 100],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'chore',
        'docs',
        'feat',
        'fix',
        'patch',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ],
    ],
  },
};
