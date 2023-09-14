import pino from "pino"
//l
export const logger = pino({
  transport: {
    target: 'pino-pretty'
  },
})
