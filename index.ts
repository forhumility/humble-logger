import { Logger } from "./src/logger";
export { Logger } from "./src/logger";

const logger = new Logger();
export const { log, info, warn, error } = logger;
