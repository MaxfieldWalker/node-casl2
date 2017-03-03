"use strict";


export const commandLineOptions: Array<CommandLineOption> = [
    {
        name: "useGR8",
        type: "boolean",
        description: "GR8を有効な汎用レジスタとして使用します。"
    },
    {
        name: "enableLabelScope",
        type: "boolean",
        description: "ラベルのスコープを有効にします。"
    },
    {
        name: "version",
        shortName: "v",
        type: "boolean",
        description: "バージョンを表示します。"
    }
];

type OptionType = "boolean" | "string";

interface CommandLineOption {
    name: string;
    shortName?: string;
    type: OptionType;
    description: string;
}
