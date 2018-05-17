import { Config, CodeCommit } from 'aws-sdk';

const config = {
  region: 'east-us-1'
}

class CodeCommitProvider {
  private static _client = new CodeCommit(config);
  public static async clone(name: string): Promise<void> {
    
  }

  public static async search(term: string): Promise<void> {

  }

  public static async create(name: string): Promise<void> {

  }

  public static async doesRepoExist(name: string): Promise<void> {
    
  }
}
