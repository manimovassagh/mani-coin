import pino from "pino"
//logger to 
export const logger = pino({
  transport: {
    target: 'pino-pretty'
  },
})
