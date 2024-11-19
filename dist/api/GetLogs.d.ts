import { BaseMethod } from './BaseMethod';
export default class GetLogs extends BaseMethod {
    init(): void;
    serializeLog({ level, prefix, message, timestamp, }: {
        level: string;
        prefix: string;
        message: any[];
        timestamp: number;
    }): string;
    run(): Promise<string[]>;
}
//# sourceMappingURL=GetLogs.d.ts.map