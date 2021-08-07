import fs from 'fs';
import { PDFDocument, PDFName, PDFString } from 'pdf-lib';

type PdfUtilsConfig = {
  language?: string;
  title?: string;
  displayDocTitle?: boolean;
};

type PdfOutputData = {
  language: string | undefined;
  title: string | undefined;
  displayDocTitle: boolean;
};

const DEFAULTS = {
  lang: 'en',
  title: '',
};

export default class PdfUtils {
  private readonly inputFilePath: string;
  private doc: PDFDocument | undefined;

  static async create(inputFilePath: string): Promise<PdfUtils> {
    const pdfUtil = new PdfUtils(inputFilePath);
    await pdfUtil._loadDoc();
    return pdfUtil;
  }

  // Only `create` should be using `new`. Constructors can't be `async`, so every other caller of
  // `new` needs to call `_loadDoc` also - that would be fragile.
  private constructor(inputFilePath: string) {
    this.inputFilePath = inputFilePath;
  }

  private async _loadDoc(): Promise<PDFDocument> {
    if (!this.doc) {
      this.doc = await PDFDocument.load(fs.readFileSync(this.inputFilePath));
    }
    return this.doc;
  }

  // `create` already awaited `_loadDoc`, so use this instead of `doc` to avoid ts error
  private getDoc(): PDFDocument {
    return this.doc as PDFDocument;
  }

  async writeFile(outputFilePath: string): Promise<void> {
    fs.writeFileSync(outputFilePath, await this.getDoc().save());
  }

  setLanguage(lang = DEFAULTS.lang): void {
    this.getDoc().setLanguage(lang);
  }

  getLanguage(): string | undefined {
    const wrappedLang = this.getDoc().catalog.get(PDFName.of('Lang')) as PDFString;
    return wrappedLang ? wrappedLang.asString() : undefined;
  }

  setTitle(title = DEFAULTS.title): void {
    this.getDoc().setTitle(title);
  }

  getTitle(): string | undefined {
    return this.getDoc().getTitle();
  }

  // Controls what displays in the viewer's titlebar:
  // true: display the document's title (accessibility requirement)
  // false: display the filename
  setDisplayDocTitle(bool = true): void {
    this.getDoc().catalog.getOrCreateViewerPreferences().setDisplayDocTitle(bool);
  }

  getDisplayDocTitle(): boolean {
    return this.getDoc().catalog.getOrCreateViewerPreferences().getDisplayDocTitle();
  }

  // ===== STATIC CONVENIENCE METHODS =====

  // To overwrite the input file, use the same value for inputFilePath & outputFilePath.
  /* eslint-disable indent */
  static async writeAccessibilityData(inputFilePath: string, outputFilePath: string,
                                      options: PdfUtilsConfig = {}): Promise<void> {
    /* eslint-disable indent */
    const pdfUtil = await PdfUtils.create(inputFilePath);

    pdfUtil.setLanguage(options.language || DEFAULTS.lang);
    pdfUtil.setTitle(options.title || DEFAULTS.title);
    pdfUtil.setDisplayDocTitle(typeof options.displayDocTitle !== 'undefined' ? options.displayDocTitle : true);

    await pdfUtil.writeFile(outputFilePath);
  }

  static async readAccessibilityData(inputFilePath: string): Promise<PdfOutputData> {
    const pdfUtil = await PdfUtils.create(inputFilePath);

    return {
      language: pdfUtil.getLanguage(),
      title: pdfUtil.getTitle(),
      displayDocTitle: pdfUtil.getDisplayDocTitle(),
    };
  }

  static async printAccessibilityData(inputFilePath: string): Promise<void> {
    Object.entries(await this.readAccessibilityData(inputFilePath))
      .forEach((pair) => {
        /* eslint-disable no-console */
        console.log(`${pair[0]}: ${JSON.stringify(pair[1])}`);
        /* eslint-enable no-console */
      });
  }
}
