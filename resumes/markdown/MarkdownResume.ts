import { Resume } from "../../interfaces/Resume";
import { ResumeData } from "../../interfaces/Types";
import * as fs from "fs/promises";

export abstract class MarkdownResume implements Resume {
  protected content: string = "";

  abstract generate(data: ResumeData): void;

  async saveToFile(fileName: string): Promise<void> {
    await fs.writeFile(fileName, this.content);
  }

  getContent(): string {
    return this.content;
  }
}
