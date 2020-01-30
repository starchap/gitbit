export type GitBranch = {
  name: string;
  path: string;
}
/** See:
      https://git-scm.com/docs/git-log
      https://git-scm.com/docs/pretty-formats
**/
export enum GitCommands {
  GIT_BRANCH_ALL = 'git for-each-ref --shell   --format=%(refname)',
  GIT_BRANCH_LOCAL = 'git for-each-ref --shell   --format=%(refname) refs/heads/',
  GIT_BRANCH_REMOTE = 'git for-each-ref --shell   --format=%(refname) refs/remotes',
  GIT_LOG = 'git log --pretty=format:"{\\"author\\":\\"%an\\", \\"branchId\\":\\"%H\\", \\"parentIds\\":[{\\"id\\":\\"%P\\"}], \\"branchName\\":\\"%D\\", \\"message\\":\\"%s\\", \\"time\\":\\"%cd\\"}"' // [author, branchID, [parentIDs], branchName, message, time]
}

export type FlatBranch = {
  branchName: string,
  branchId: string,
  parentIds: parent[],
  time: string,
  author: string,
  message: string
}
export type parent = {
  id: string
}
