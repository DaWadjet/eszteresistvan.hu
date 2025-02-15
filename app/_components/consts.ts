const weddingDate = new Date("2025-10-10T16:00:00");

export const getRemainingTimeInSeconds = () =>
  Math.floor((weddingDate.getTime() - Date.now()) / 1000);
