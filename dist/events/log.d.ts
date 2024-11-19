import type { MessageFactoryFn } from './utils';
export declare const LOG_EVENT = "LOG_EVENT";
export declare const LOG: {
    readonly OUTPUT: "log-output";
};
export interface LogOutput {
    type: typeof LOG.OUTPUT;
    payload: any;
}
export type LogEvent = LogOutput;
export type LogEventMessage = LogEvent & {
    event: typeof LOG_EVENT;
};
export declare const createLogMessage: MessageFactoryFn<typeof LOG_EVENT, LogEvent>;
//# sourceMappingURL=log.d.ts.map