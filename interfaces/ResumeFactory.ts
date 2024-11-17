import { MarkdownResume } from "../resumes/markdown/MarkdownResume";
import { JSONResume } from "../resumes/json/JSONResume";
import { PDFResume } from "../resumes/pdf/PdfResume";

export interface ResumeFactory {
  createPDFResume(): PDFResume;
  createMarkdownResume(): MarkdownResume;
  createJSONResume(): JSONResume;
}
