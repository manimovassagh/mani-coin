import pino from "pino"
//logger to log color and format tt
export const logger = pino({
  transport: {
    target: 'pino-pretty'
  },
})
