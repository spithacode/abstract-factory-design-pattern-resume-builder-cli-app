import { Resume } from "../../interfaces/Resume";
import { ResumeData } from "../../interfaces/Types";
import * as fs from "fs/promises";

export abstract class JSONResume implements Resume {
  protected data!: ResumeData & { style: string };

  abstract generate(data: ResumeData): void;

  async saveToFile(fileName: string): Promise<void> {
    await fs.writeFile(fileName, JSON.stringify(this.data, null, 2));
  }

  getData(): any {
    return this.data;
  }
}
