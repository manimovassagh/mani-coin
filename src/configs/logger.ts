import pino from "pino"
//logger to log color
export const logger = pino({
  transport: {
    target: 'pino-pretty'
  },
})
