const alphabet: string[] = new Array(26)
	.fill(1)
	.map((_, i) => String.fromCharCode(65 + i));

class Templator {
  private static _getAlphabetSlice(n: number): string[] {
    return alphabet.slice(0, n);
  }

  private static async _resolveVariantTemplate(name: string): Promise<void> {

  }

  private static async _resolveProjectTemplate(name: string): Promise<void> {

  }
}
