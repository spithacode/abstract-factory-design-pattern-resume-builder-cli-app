import { ResumeData } from "../../interfaces/Types";
import { PDFResume } from "./PdfResume";

export class MinimalistPDFResume extends PDFResume {
  generate(data: ResumeData): void {
    this.doc.fontSize(24).text(data.name, { align: "center" });
    this.doc
      .fontSize(12)
      .text(`Email: ${data.email} | Phone: ${data.phone}`, { align: "center" });
    this.doc.moveDown();
    this.doc.fontSize(16).text("Experience");
    data.experience.forEach((exp: any) => {
      this.doc.fontSize(14).text(exp.company);
      this.doc
        .fontSize(12)
        .text(`${exp.position} (${exp.startDate} - ${exp.endDate})`);
      this.doc.fontSize(10).text(exp.description);
      this.doc.moveDown();
    });
  }
}
