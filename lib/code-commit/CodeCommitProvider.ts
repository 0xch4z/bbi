import { Config, CodeCommit, AWSError } from 'aws-sdk';
import * as git from 'simple-git';

const config = {
  region: 'us-east-1'
}

export class CodeCommitProvider {
  private static _client = new CodeCommit(config);
  public static clone(name: string): Promise<void> {
    return new Promise(resolve => {
      this._client.getRepository({
        repositoryName: name
      }, (err: AWSError, data: CodeCommit.GetRepositoryOutput) => {
        if (err) throw err;

      });
    });
  }

  // @todo
  public static async search(/*term: string*/): Promise<void> {
    
  }

  public static create(name: string): Promise<CodeCommit.RepositoryMetadata> {
    return new Promise(resolve => {
      this._client.createRepository({
        repositoryName: name
      }, (err: AWSError, data: CodeCommit.CreateRepositoryOutput) => {
        if (err) throw err;
        resolve(data.repositoryMetadata);
      });
    });
  }
}
