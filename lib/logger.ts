import { Logger } from "next-axiom";

type LogData = Record<string, unknown>;

const axiomLogger = new Logger();

export const log = {
  info: (message: string, data?: LogData) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`🟢 [INFO] ${message}`, data ?? "");
      return;
    }
    axiomLogger.info(message, data);
  },
  warn: (message: string, data?: LogData) => {
    if (process.env.NODE_ENV === "development") {
      console.warn(`🟡 [WARN] ${message}`, data ?? "");
      return;
    }
    axiomLogger.warn(message, data);
  },
  error: (message: string, data?: LogData) => {
    if (process.env.NODE_ENV === "development") {
      console.error(`🔴 [ERROR] ${message}`, data ?? "");
      return;
    }
    axiomLogger.error(message, data);
  },
  flush: () => axiomLogger.flush(),
};
