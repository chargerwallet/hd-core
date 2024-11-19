export type SchemaParam = {
    name: string;
    type?: 'string' | 'number' | 'boolean' | 'bigNumber' | 'uint' | 'buffer' | 'object' | 'array' | 'hexString';
    required?: boolean;
    allowEmpty?: boolean;
    allowNegative?: boolean;
};
export declare const validateParams: (values: any, fields: Array<SchemaParam>) => void;
export declare function validateResult(result: any, nonNullableFields: string[], options?: {
    expectedLength?: number | undefined | null;
}): void;
//# sourceMappingURL=paramsValidator.d.ts.map