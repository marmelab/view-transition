import { Riddle } from "./type";

export default {
  title: "Security OWASP 2021",
  questions: [
    {
      text: "What is the first critical security risk?",
      isMultipleChoice: false,
      answers: [
        {
          text: "Security Misconfiguration",
          correct: false,
        },
        {
          text: "Injection",
          correct: false,
        },
        {
          text: "Broken Access Control",
          correct: true,
        },
        {
          text: "Insecure Design",
          correct: false,
        },
      ],
    },
    {
      text: "What is the second most critical security risk?",
      isMultipleChoice: false,
      answers: [
        {
          text: "Cryptographic Failures",
          correct: true,
        },
        {
          text: "Security Misconfiguration",
          correct: false,
        },
        {
          text: "Injection",
          correct: false,
        },
        {
          text: "Vulnerable and Outdate Components",
          correct: false,
        },
      ],
    },
    {
      text: "What is the third critical security risk?",
      isMultipleChoice: false,
      answers: [
        {
          text: "Security Misconfiguration",
          correct: false,
        },
        {
          text: "Injection",
          correct: true,
        },
        {
          text: "Broken Access Control",
          correct: false,
        },
        {
          text: "Insecure Design",
          correct: false,
        },
      ],
    },
  ],
} satisfies Riddle;
