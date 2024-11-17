import { ResumeFactory } from "../interfaces/ResumeFactory";
import { CreativePDFResume } from "../resumes/pdf/CreativePDFResume";
import { CreativeMarkdownResume } from "../resumes/markdown/CreativeMarkdownResume";
import { CreativeJSONResume } from "../resumes/json/CreativeJSONResume";

export class CreativeResumeFactory implements ResumeFactory {
  createPDFResume(): CreativePDFResume {
    return new CreativePDFResume();
  }

  createMarkdownResume(): CreativeMarkdownResume {
    return new CreativeMarkdownResume();
  }

  createJSONResume(): CreativeJSONResume {
    return new CreativeJSONResume();
  }
}
