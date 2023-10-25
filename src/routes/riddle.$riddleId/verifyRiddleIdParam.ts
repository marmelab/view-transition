import { redirect } from "react-router-dom";

export const verifyRiddleIdParam = (riddleId?: string) => {
  if (!riddleId) {
    throw redirect("/");
  }
  const parsedRiddleId = parseInt(riddleId, 10);
  if (isNaN(parsedRiddleId)) {
    throw redirect("/");
  }

  if (parsedRiddleId < 0 || parsedRiddleId > 2) {
    throw redirect("/");
  }
  return parsedRiddleId;
};
