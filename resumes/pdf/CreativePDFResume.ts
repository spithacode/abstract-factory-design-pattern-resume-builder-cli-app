import { ResumeData } from "../../interfaces/Types";
import { PDFResume } from "./PdfResume";

export class CreativePDFResume extends PDFResume {
  generate(data: ResumeData): void {
    this.doc.rect(0, 0, 200, this.doc.page.height).fill("#FFD700");
    this.doc.fill("black").fontSize(28).text(data.name, 220, 50);
    this.doc.fontSize(12).text(`${data.email} | ${data.phone}`, 220, 80);
    this.doc.fontSize(16).text("Experience", 220, 120);
    let yPos = 140;
    data.experience.forEach((exp: any) => {
      this.doc.fontSize(14).text(exp.company, 220, yPos);
      this.doc
        .fontSize(12)
        .text(
          `${exp.position} (${exp.startDate} - ${exp.endDate})`,
          220,
          yPos + 20,
        );
      this.doc
        .fontSize(10)
        .text(exp.description, 220, yPos + 40, { width: 350 });
      yPos += 80;
    });
  }
}
