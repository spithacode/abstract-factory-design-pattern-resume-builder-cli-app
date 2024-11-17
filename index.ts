#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { ResumeFactory } from "./interfaces/ResumeFactory";
import { MinimalistResumeFactory } from "./factories/MinimalistResumeFactory";
import { ModernResumeFactory } from "./factories/ModernResumeFactory";
import { CreativeResumeFactory } from "./factories/CreativeResumeFactory";
import { getUserInput } from "./utils/userInput";

async function main() {
  console.log(chalk.blue.bold("Welcome to the Theme-Based Resume Generator!"));

  const { theme, format } = await inquirer.prompt([
    {
      type: "list",
      name: "theme",
      message: "Choose a resume theme:",
      choices: ["minimalist", "modern", "creative"],
    },
    {
      type: "list",
      name: "format",
      message: "Choose an output format:",
      choices: ["pdf", "markdown", "json"],
    },
  ]);

  let factory: ResumeFactory;

  switch (theme) {
    case "minimalist":
      factory = new MinimalistResumeFactory();
      break;
    case "modern":
      factory = new ModernResumeFactory();
      break;
    case "creative":
      factory = new CreativeResumeFactory();
      break;
    default:
      throw new Error("Invalid theme.");
  }

  const userInput = await getUserInput();
  let resume;

  switch (format) {
    case "pdf":
      resume = factory.createPDFResume();
      break;
    case "markdown":
      resume = factory.createMarkdownResume();
      break;
    case "json":
      resume = factory.createJSONResume();
      break;
    default:
      throw new Error("Invalid format.");
  }

  console.log(chalk.yellow("Generating your resume..."));

  try {
    resume.generate(userInput);
    const fileName = `${userInput.name.replace(/\s+/g, "_")}_${theme}_resume.${format}`;
    await resume.saveToFile(fileName);
    console.log(chalk.green.bold("Resume generated successfully!"));
    console.log(
      chalk.cyan(
        `Your ${theme} ${format} resume has been saved as ${fileName}.`,
      ),
    );
  } catch (error) {
    console.error(
      chalk.red("Error generating resume:"),
      (error as Error).message,
    );
  }
}

main().catch((error) => {
  console.error(chalk.red("An unexpected error occurred:"), error.message);
  process.exit(1);
});
