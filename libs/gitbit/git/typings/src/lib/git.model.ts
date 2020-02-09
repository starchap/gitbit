/** See:
      https://git-scm.com/docs/git-log
      https://git-scm.com/docs/pretty-formats
**/
export enum GitCommands {
  GIT_BRANCH_ALL = 'git for-each-ref --shell   --format=%(refname)',
  GIT_BRANCH_LOCAL = 'git for-each-ref --shell   --format=%(refname) refs/heads/',
  GIT_BRANCH_REMOTE = 'git for-each-ref --shell   --format=%(refname) refs/remotes',
  GIT_LOG = 'git log --pretty=format:"§INJECT§"'
}

export function getGitCommand(command: GitCommands, GitFormatEnum: Object):string{
  return command.toString().replace('§INJECT§', (JSON.stringify(GitFormatEnum).replace(/\"/gi,"\\\"")));
}

export enum GitLogFormat {
  author = "%an",
  branchId = "%H",
  parentIds = "%P",
  branchName = "%D",
  message = "%s",
  time = "%cd"
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
