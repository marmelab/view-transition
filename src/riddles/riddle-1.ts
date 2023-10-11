export default {
  title: "Security",
  questions: [
    {
      text: "What is the most secure password?",
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
      answers: [
        {
          text: "Install an antivirus",
          correct: false,
        },
        {
          text: "Turn off for ever your computer",
          correct: true,
        },
        {
          text: "Install a firewall",
          correct: false,
        },
        {
          text: "Install updates",
          correct: false,
        },
      ],
    },
  ],
};
