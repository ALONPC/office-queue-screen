describe("functional behavior of the app", () => {
    test("sum array of numbers is working as expected", async () => {
        const waiting = [1, 2, 3];
        const total = waiting.reduce((a, b) => a + b);
        expect(total).toBe(6);
    });
});
