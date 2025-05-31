export interface LocaleText {
  openInStackblitz: string;
  openInCodeSandbox: string;
  openInGithub: string;
  openInGitlab: string;
  collapseCode: string;
  expandCode: string;
  copyCode: string;
  copySuccess: string;
}

export type Locale = {
  [key: string]: 'zh-CN' | 'en-US' | LocaleText;
};

export const CN: LocaleText = {
  openInStackblitz: 'Open In Stackblitz',
  openInCodeSandbox: 'Open In Codesandbox',
  openInGithub: 'Open in GitHub',
  openInGitlab: 'Open in GitLab',
  collapseCode: 'Collapse Code',
  expandCode: 'Expand Code',
  copyCode: 'Copy Code',
  copySuccess: 'The code has been copied to the clipboard!',
};

export const EN: LocaleText = {
  openInStackblitz: 'Open In Stackblitz',
  openInCodeSandbox: 'Open In Codesandbox',
  openInGithub: 'Open in GitHub',
  openInGitlab: 'Open in GitLab',
  collapseCode: 'Collapse Code',
  expandCode: 'Expand Code',
  copyCode: 'Copy Code',
  copySuccess: 'The code has been copied to the clipboard!',
};
