import { ResumeData } from "../../interfaces/Types";
import { JSONResume } from "./JSONResume";

export class ModernJSONResume extends JSONResume {
  generate(data: ResumeData): void {
    this.data = {
      style: "modern",
      ...data,
    };
  }
}
