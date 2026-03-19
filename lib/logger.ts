import { log as axiomLog } from "next-axiom";

type LogData = Record<string, unknown>;

export const log = {
  info: (message: string, data?: LogData) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`🟢 [INFO] ${message}`, data ?? "");
      return;
    }
    axiomLog.info(message, data);
  },
  warn: (message: string, data?: LogData) => {
    if (process.env.NODE_ENV === "development") {
      console.warn(`🟡 [WARN] ${message}`, data ?? "");
      return;
    }
    axiomLog.warn(message, data);
  },
  error: (message: string, data?: LogData) => {
    if (process.env.NODE_ENV === "development") {
      console.error(`🔴 [ERROR] ${message}`, data ?? "");
      return;
    }
    axiomLog.error(message, data);
  },
};
