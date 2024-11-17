import inquirer from "inquirer";
import { ResumeData, Experience } from "../interfaces/Types";

export async function getUserInput(): Promise<ResumeData> {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "Enter your full name:",
      validate: (input: string) => input.trim() !== "" || "Name is required",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
      validate: (input: string) =>
        /\S+@\S+\.\S+/.test(input) || "Please enter a valid email address",
    },
    {
      type: "input",
      name: "phone",
      message: "Enter your phone number:",
      validate: (input: string) =>
        input.trim() !== "" || "Phone number is required",
    },
  ];

  const { name, email, phone } = await inquirer.prompt<{
    name: string;
    email: string;
    phone: string;
    //@ts-ignore
  }>(questions);

  const experience = await getExperience();

  return { name, email, phone, experience };
}

async function getExperience(): Promise<Experience[]> {
  const experience: Experience[] = [];
  let addMore = true;

  while (addMore) {
    const job = await inquirer.prompt<Experience>([
      {
        type: "input",
        name: "company",
        message: "Enter company name:",
        validate: (input: string) =>
          input.trim() !== "" || "Company name is required",
      },
      {
        type: "input",
        name: "position",
        message: "Enter your position:",
        validate: (input: string) =>
          input.trim() !== "" || "Position is required",
      },
      {
        type: "input",
        name: "startDate",
        message: "Enter start date (MM/YYYY):",
        validate: (input: string) =>
          /^\d{2}\/\d{4}$/.test(input) || "Please enter a valid date (MM/YYYY)",
      },
      {
        type: "input",
        name: "endDate",
        message: 'Enter end date (MM/YYYY or "Present"):',
        validate: (input: string) =>
          /^\d{2}\/\d{4}$/.test(input) ||
          input.toLowerCase() === "present" ||
          'Please enter a valid date (MM/YYYY) or "Present"',
      },
      {
        type: "input",
        name: "description",
        message: "Enter job description:",
        validate: (input: string) =>
          input.trim() !== "" || "Job description is required",
      },
    ]);

    experience.push(job);

    const { continueAdding } = await inquirer.prompt<{
      continueAdding: boolean;
    }>({
      type: "confirm",
      name: "continueAdding",
      message: "Do you want to add another job experience?",
      default: false,
    });

    addMore = continueAdding;
  }

  return experience;
}
