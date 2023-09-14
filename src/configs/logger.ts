import pino from "pino"
//logger to log color and format
export const logger = pino({
  transport: {
    target: 'pino-pretty'
  },
})
