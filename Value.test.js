const calculatePrizes = require('./Value');

describe('calculatePrizes', () => {
  test('Test Case 1', () => {
    const testCase1 = [
      { name: "Alice", category: "swimming", team: "Aqua Stars", year: 2022 },
      { name: "Bob", category: "swimming", team: "Aqua Stars", year: 2022 },
      { name: "Charlie", category: "swimming", team: "Water Wizards", year: 2022 },
      { name: "David", category: "running", team: "Speed Demons", year: 2022 },
      { name: "Eve", category: "running", team: "Swift Feet", year: 2022 },
      { name: "Frank", category: "swimming", team: "Aqua Stars", year: 2023 },
      { name: "Grace", category: "swimming", team: "Water Wizards", year: 2023 },
      { name: "Henry", category: "running", team: "Speed Demons", year: 2023 },
    ];

    const expectedOutput1 = [
      {
        category: "swimming",
        year: 2022,
        winners: [
          { name: "Alice", share: 0.25 },
          { name: "Bob", share: 0.25 },
          { name: "Charlie", share: 0.5 },
        ],
      },
      {
        category: "running",
        year: 2022,
        winners: [
          { name: "David", share: 0.5 },
          { name: "Eve", share: 0.5 },
        ],
      },
      {
        category: "swimming",
        year: 2023,
        winners: [
          { name: "Frank", share: 0.5 },
          { name: "Grace", share: 0.5 },
        ],
      },
      {
        category: "running",
        year: 2023,
        winners: [
          { name: "Henry", share: 1 },
        ],
      },
    ];

    expect(calculatePrizes(testCase1)).toEqual(expectedOutput1);
  });

  test('Test Case 2', () => {
    const testCase2 = [
      { name: "John", category: "chess", team: "Mind Masters", year: 2024 },
      { name: "Jane", category: "chess", team: "Mind Masters", year: 2024 },
      { name: "Jack", category: "chess", team: "Brain Busters", year: 2024 },
      { name: "Jill", category: "chess", team: "Thinkers United", year: 2024 },
      { name: "Jim", category: "chess", team: "Thinkers United", year: 2024 },
    ];

    const expectedOutput2 = [
      {
        category: "chess",
        year: 2024,
        winners: [
          { name: "John", share: 0.1667 },
          { name: "Jane", share: 0.1667 },
          { name: "Jack", share: 0.3333 },
          { name: "Jill", share: 0.1667 },
          { name: "Jim", share: 0.1667 },
        ],
      },
    ];

    expect(calculatePrizes(testCase2)).toEqual(expectedOutput2);
  });

  test('Test Case 3', () => {
    const testCase3 = [
      { name: "Alex", category: "archery", team: "Arrow Aces", year: 2025 },
      { name: "Beth", category: "archery", team: "Arrow Aces", year: 2025 },
      { name: "Carl", category: "fencing", team: "Sword Stars", year: 2025 },
      { name: "Dana", category: "fencing", team: "Sword Stars", year: 2025 },
      { name: "Erik", category: "fencing", team: "Sword Stars", year: 2025 },
    ];

    const expectedOutput3 = [
      {
        category: "archery",
        year: 2025,
        winners: [
          { name: "Alex", share: 0.5 },
          { name: "Beth", share: 0.5 },
        ],
      },
      {
        category: "fencing",
        year: 2025,
        winners: [
          { name: "Carl", share: 0.3333 },
          { name: "Dana", share: 0.3333 },
          { name: "Erik", share: 0.3333 },
        ],
      },
    ];

    expect(calculatePrizes(testCase3)).toEqual(expectedOutput3);
  });

  test('Test Case 4', () => {
    const testCase4 = [];
    const expectedOutput4 = [];
    expect(calculatePrizes(testCase4)).toEqual(expectedOutput4);
  });

  test('Test Case 5', () => {
    const testCase5 = [
      { name: "Solo Winner", category: "solo", team: "One Person Show", year: 2026 },
    ];

    const expectedOutput5 = [
      {
        category: "solo",
        year: 2026,
        winners: [
          { name: "Solo Winner", share: 1 },
        ],
      },
    ];

    expect(calculatePrizes(testCase5)).toEqual(expectedOutput5);
  });
});