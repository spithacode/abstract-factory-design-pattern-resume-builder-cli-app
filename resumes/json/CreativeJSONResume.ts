import { ResumeData } from "../../interfaces/Types";
import { JSONResume } from "./JSONResume";

export class CreativeJSONResume extends JSONResume {
  generate(data: ResumeData): void {
    this.data = {
      style: "creative",
      ...data,
    };
  }
}
