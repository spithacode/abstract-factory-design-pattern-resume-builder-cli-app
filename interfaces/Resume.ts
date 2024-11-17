import { ResumeData } from "./Types";

export interface Resume {
  generate(data: ResumeData): void;
  saveToFile(fileName: string): Promise<void>;
}
