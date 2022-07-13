const ALL_BILLS = [500, 200, 100, 50, 20, 10] as const;
type Bill = typeof ALL_BILLS[number];

export type Withdrawal = Partial<Record<Bill, number>>;
type Accumulator = { withdrawal: Withdrawal; remainingAmount: number };

export const atm = (amount: number): Withdrawal => {
  return ALL_BILLS.reduce(
    (acc, bill) => {
      if (acc.remainingAmount >= bill) {
        const nextRemainingAmount = acc.remainingAmount % bill;
        const multipleAmount = acc.remainingAmount - nextRemainingAmount;
        const specificNbOfBill = multipleAmount / bill;
        return {
          withdrawal: {
            ...acc.withdrawal,
            [bill]: specificNbOfBill,
          },
          remainingAmount: nextRemainingAmount,
        };
      }
      return acc;
    },
    { withdrawal: {}, remainingAmount: amount }
  ).withdrawal;
};
