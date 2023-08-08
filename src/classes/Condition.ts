import {GlobalService} from "./GlobalService";

export interface ConditionDto {
    text: string,
    icon: string,
    code: number
}

export class Condition {
    private readonly _text: string;
    private readonly _icon: string;
    private readonly _code: number;

    constructor(condition: ConditionDto, private readonly engine: GlobalService) {
        this._text = condition.text;
        this._icon = condition.icon;
        this._code = condition.code;
    }

    get text(): string {
        return this._text;
    }

    get icon(): string {
        return this._icon;
    }

    get code(): number {
        return this._code;
    }
}