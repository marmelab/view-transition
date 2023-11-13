import { Riddle } from "../../riddles/type.js";

export const loadRiddle = async (riddleId: number) => {
  let riddle: { default: Riddle } | undefined;
  switch (riddleId) {
    case 1:
      riddle = (await import("../../riddles/riddle-1.js")) as {
        default: Riddle;
      };
      break;
    case 2:
      riddle = (await import("../../riddles/riddle-2.js")) as {
        default: Riddle;
      };
      break;
    default:
      riddle = (await import("../../riddles/riddle-1.js")) as {
        default: Riddle;
      };
      break;
  }
  return riddle.default;
};
