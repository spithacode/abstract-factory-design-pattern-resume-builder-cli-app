import { ResumeData } from "../../interfaces/Types";
import { PDFResume } from "./PdfResume";

export class ModernPDFResume extends PDFResume {
  generate(data: ResumeData): void {
    this.doc.rect(0, 0, this.doc.page.width, 60).fill("#4A90E2");
    this.doc.fill("white").fontSize(28).text(data.name, 50, 20);
    this.doc.fontSize(12).text(`${data.email} | ${data.phone}`, 50, 50);
    this.doc.fill("black").fontSize(16).text("Experience", 50, 80);
    let yPos = 100;
    data.experience.forEach((exp: any) => {
      this.doc.fontSize(14).text(exp.company, 50, yPos);
      this.doc
        .fontSize(12)
        .text(
          `${exp.position} (${exp.startDate} - ${exp.endDate})`,
          50,
          yPos + 20,
        );
      this.doc
        .fontSize(10)
        .text(exp.description, 50, yPos + 40, { width: 500 });
      yPos += 80;
    });
  }
}
