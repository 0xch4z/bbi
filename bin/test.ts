import { Prompter } from '../lib/prompter';
import { CodeCommitProvider } from '../lib/code-commit';

(async function() {
  const repoName = await Prompter.prompt('What do you want your new repo called', {
    pipe: (val: string) => val.replace(/\s/g, '_'),
    validate: (val: string) => val.length > 10,
    errorMessage: 'Repo name cannot contain spaces and must be at least 10 characters long'
  });
  await CodeCommitProvider.create(repoName);
  console.log('must\'ve been a success?');
})();
