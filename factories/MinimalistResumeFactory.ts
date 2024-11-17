import { ResumeFactory } from "../interfaces/ResumeFactory";
import { MinimalistPDFResume } from "../resumes/pdf/MinimalistPDFResume";
import { MinimalistMarkdownResume } from "../resumes/markdown/MinimalistMarkdownResume";
import { MinimalistJSONResume } from "../resumes/json/MinimalistJSONResume";

export class MinimalistResumeFactory implements ResumeFactory {
  createPDFResume(): MinimalistPDFResume {
    return new MinimalistPDFResume();
  }

  createMarkdownResume(): MinimalistMarkdownResume {
    return new MinimalistMarkdownResume();
  }

  createJSONResume(): MinimalistJSONResume {
    return new MinimalistJSONResume();
  }
}
