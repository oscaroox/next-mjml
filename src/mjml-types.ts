import type mjml from "mjml";

export type MJMLOptions = NonNullable<Parameters<typeof mjml>[1]>;

export type MJMLResult = ReturnType<typeof mjml>;

export type MJMLParseError = MJMLResult["errors"][number];
