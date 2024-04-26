import { auth } from "@clerk/nextjs";

const adminIds = ["user_2ey9TcC13T18htoVvDduAvsNpcO"];

export const getIsAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }
  return adminIds.indexOf(userId) !== -1;
};
