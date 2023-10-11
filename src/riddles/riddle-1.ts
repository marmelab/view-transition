import { Riddle } from "./type";

export default {
  title: "Security",
  questions: [
    {
      text: "What is the most secure password?",
      isMultipleChoice: false,
      answers: [
        {
          text: "123456",
          correct: false,
        },
        {
          text: "password",
          correct: false,
        },
        {
          text: "qwerty",
          correct: false,
        },
        {
          text: "Using a password manager",
          correct: true,
        },
      ],
    },
    {
      text: "What is the best way to protect your computer from malware?",
      isMultipleChoice: true,
      answers: [
        {
          text: "Install an antivirus",
          correct: false,
        },
        {
          text: "Install an adblocker",
          correct: false,
        },
        {
          text: "Install updates",
          correct: true,
        },
        {
          text: "Install a firewall",
          correct: false,
        },
      ],
    },
    {
      text: "What is the best way to totally protect your computer from threats?",
      isMultipleChoice: true,
      answers: [
        {
          text: "Pray",
          correct: false,
        },
        {
          text: "Remove windows",
          correct: true,
        },
        {
          text: "Remove MacOS",
          correct: false,
        },
        {
          text: "Install Linux",
          correct: false,
        },
      ],
    },
  ],
} satisfies Riddle;
