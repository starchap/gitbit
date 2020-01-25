export type GitBranch = {
  name: string;
  path: string;
}
export enum GitCommands {
  GIT_BRANCH_ALL = 'git for-each-ref --shell   --format=%(refname)',
  GIT_BRANCH_LOCAL = 'git for-each-ref --shell   --format=%(refname) refs/heads/',
  GIT_BRANCH_REMOTE = 'git for-each-ref --shell   --format=%(refname) refs/remotes',
}
