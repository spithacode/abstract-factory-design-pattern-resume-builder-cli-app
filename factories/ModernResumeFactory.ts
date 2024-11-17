import { ResumeFactory } from "../interfaces/ResumeFactory";
import { ModernPDFResume } from "../resumes/pdf/ModernPDFResume";
import { ModernMarkdownResume } from "../resumes/markdown/ModernMarkdownResume";
import { ModernJSONResume } from "../resumes/json/ModernJSONResume";

export class ModernResumeFactory implements ResumeFactory {
  createPDFResume(): ModernPDFResume {
    return new ModernPDFResume();
  }

  createMarkdownResume(): ModernMarkdownResume {
    return new ModernMarkdownResume();
  }

  createJSONResume(): ModernJSONResume {
    return new ModernJSONResume();
  }
}
