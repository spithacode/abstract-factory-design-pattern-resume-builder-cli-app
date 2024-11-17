import { ResumeData } from "../../interfaces/Types";
import { MarkdownResume } from "./MarkdownResume";

export class CreativeMarkdownResume extends MarkdownResume {
  generate(data: ResumeData): void {
    this.content = `# 🌟 ${data.name} 🌟\n\n`;
    this.content += `📧 ${data.email} | 📞 ${data.phone}\n\n`;
    this.content += "## 💼 Career Journey\n\n";
    data.experience.forEach((exp: any) => {
      this.content += `### 🏢 ${exp.company}\n\n`;
      this.content += `**${exp.position}** | ${exp.startDate} - ${exp.endDate}\n\n`;
      this.content += `${exp.description}\n\n`;
    });
  }
}
