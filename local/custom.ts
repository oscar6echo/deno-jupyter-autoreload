const customA = (x: number, y: number) => x + 1 + (y || 0);
const customB = (x: number, y: number) => x + 10 + (y || 0);
const customC = (x: number, y: number) => x + 100 + (y || 0);
// const customC = (x: number, y: number) => x + 1000 + (y || 0);

export { customA, customB, customC };
