const capitalize = (s: string): string => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

const hello = (s: string): string => {
    // return "Hello " + capitalize(s);
    return "Bonjour " + capitalize(s);
    // return "Bongiorno " + capitalize(s);
    // return "Ola " + capitalize(s);
};

type Operation = (arg0: number, arg1: number) => number;

interface Process {
    add: Operation;
    sub: Operation;
    mul: Operation;
    div: Operation;
    custom: Operation;
}

const add = (x: number, y: number) => (x || 0) + y;
const sub = (x: number, y: number) => (x || 0) - y;
const mul = (x: number, y: number) => (x || 1) * y;
const div = (x: number, y: number) => (x || 1) / y;

class CalculatorV1 {
    current: number;

    constructor() {
        this.current = 0;
    }

    show() {
        console.log(`current: ${this.current}`);
    }

    add(x: number) {
        this.current = add(this.current, x);
        return this.current;
    }

    sub(x: number) {
        this.current = sub(this.current, x);
        return this.current;
    }
    mul(x: number) {
        this.current = mul(this.current, x);
        return this.current;
    }
    div(x: number) {
        this.current = div(this.current, x);
        return this.current;
    }
    custom(x: number) {
        this.current = this.current + 10 + x;
        return this.current;
    }
}

class CalculatorV2 {
    current: number;
    process: Process;

    constructor() {
        this.current = 0;
        this.process = {
            add,
            sub,
            mul,
            div,
            custom: (x: number, _y: number) => x,
        };
    }

    setCustom(custom: Operation) {
        this.process.custom = custom;
    }

    show() {
        console.log(`current: ${this.current}`);
    }

    add(x: number) {
        this.current = this.process.add(this.current, x);
        return this.current;
    }

    sub(x: number) {
        this.current = this.process.sub(this.current, x);
        return this.current;
    }
    mul(x: number) {
        this.current = this.process.mul(this.current, x);
        return this.current;
    }
    div(x: number) {
        this.current = this.process.div(this.current, x);
        return this.current;
    }
    custom(x: number) {
        this.current = this.process.custom(this.current, x);
        return this.current;
    }
}

export { CalculatorV1, CalculatorV2, hello };
