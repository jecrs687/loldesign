import { calc1, calc2 } from "./Components/Value"
describe("test calc1 function", () => {
  it("should return 15 for calc1(30, 30, 1.7)", () => {
    expect(calc1(30, 30, 1.7)).toBe("51.00");
  });
  it("should return 5 for calc1(45, 30, 1.9)", () => {
    expect(calc1(45, 30, 1.9)).toBe("88.35");
  });
  it("should return 5 for calc1(60, 30, 0.9)", () => {
    expect(calc1(60, 30, 0.9)).toBe("56.70");
  });
  it("should return 5 for calc1(30, 60, 0.9)", () => {
    expect(calc1(30, 60, 0.9)).toBe("24.30");
  });
  it("should return 5 for calc1(150, 120, 1.7)", () => {
    expect(calc1(150, 120, 1.7)).toBe("260.10");
  });
  it("should return 5 for calc1(244, 60, 1.9)", () => {
    expect(calc1(244, 60, 1.9)).toBe("498.56");
  });
});
describe("test calc1 function", () => {
  it("should return 15 for calc2(30, 1.7)", () => {
    expect(calc2(30, 1.7)).toBe("56.10");
  });
  it("should return 5 for calc2(45, 1.9)", () => {
    expect(calc2(45, 1.9)).toBe("94.05");
  });
  it("should return 5 for calc2(60, 0.9)", () => {
    expect(calc2(60, 0.9)).toBe("59.40");
  });
  it("should return 5 for calc2(30, 0.9)", () => {
    expect(calc2(30, 0.9)).toBe("29.70");
  });
  it("should return 5 for calc2(150, 1.7)", () => {
    expect(calc2(150, 1.7)).toBe("280.50");
  });
  it("should return 5 for calc2(244, 1.9)", () => {
    expect(calc2(244, 1.9)).toBe("509.96");
  });


});