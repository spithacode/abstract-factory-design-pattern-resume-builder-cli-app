import { Resume } from "../../interfaces/Resume";
import { ResumeData } from "../../interfaces/Types";
import * as fs from "fs";
import PDFDocument from "pdfkit";

export abstract class PDFResume implements Resume {
  protected doc: PDFKit.PDFDocument;

  constructor() {
    this.doc = new PDFDocument();
  }

  abstract generate(data: ResumeData): void;

  async saveToFile(fileName: string): Promise<void> {
    const stream = fs.createWriteStream(fileName);
    this.doc.pipe(stream);
    this.doc.end();

    await new Promise<void>((resolve, reject) => {
      stream.on("finish", resolve);
      stream.on("error", reject);
    });
  }

  getBuffer(): Buffer {
    return this.doc.read() as Buffer;
  }
}
