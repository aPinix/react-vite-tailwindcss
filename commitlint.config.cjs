const types = [
  // default categories
  'feat', // A new feature
  'fix', // A bug fix
  'refactor', // A code change that improves performance
  'perf', // A code change that neither fixes a bug or adds a feature
  'revert', // Revert some changes
  'style', // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  'test', // Adding, creating, updating tests
  'docs', // Documentation only changes
  'chore', // Changes to the build process or auxiliary tools and libraries such as documentation generation
  'build', // Changes that affect the build system or external dependencies
  'ci', // Changes in CI configuration files

  // custom categories
  'update', // Any update to code that doesn't fit on other categories
  'styling', // A code change only regarding styling (CSS, SCSS)
];

// vars (changeable) --------------------

const projTag = 'SEED'; // jira project tag
const enforceProjTag = false; // [SEED-123] is ok, [ASD-456] is not ok
const scopeIsOptional = true; // (scope) part is optional
const projTicketIsOptional = true; // [SEED-123] part is optional

// vars (non changeable) --------------------

const type = `(${types.join('|')})`;
const scope = '(\\(.+\\))';
const afterScope = '(\\:\\s)';
const projTicket = `(\\[([^,]${enforceProjTag ? `[${projTag}]` : '[A-Z]'}{1,}\\-[0-9]{1,},?[^,]){1,}\\]\\s)`;
const description = '\\w.*';

const commitLintRegex = new RegExp(
  `${type}${scope}${scopeIsOptional ? '?' : ''}${afterScope}${projTicket}${projTicketIsOptional ? '?' : ''}${description}`
);

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-empty': [0],
    'subject-empty': [0],
    'type-enum': [0],
    'header-max-length': [0, 'always', 200],
    'function-rules/type-enum': [
      2,
      'always',
      (parsed) => {
        const isHeaderValid = parsed.header.match(commitLintRegex);

        if (isHeaderValid) {
          return [true];
        }

        return [
          false,
          `Must match example:\n\t"fix(scope): [${projTag}-123] Message here"\n\t"fix(scope): [${projTag}-123,${projTag}-456] Message here"\n`,
        ];
      },
    ],
  },
};
