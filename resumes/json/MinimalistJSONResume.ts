import { ResumeData } from "../../interfaces/Types";
import { JSONResume } from "./JSONResume";

export class MinimalistJSONResume extends JSONResume {
  generate(data: ResumeData): void {
    this.data = {
      style: "minimalist",
      ...data,
    };
  }
}
