const ALL_BILLS = [500, 200, 100, 50, 20, 10] as const;
type Bill = typeof ALL_BILLS[number];

export type Withdrawal = Partial<Record<Bill, number>>;

export const atm = (amount: number): Withdrawal => {
  let result: Withdrawal = {};
  let remainingAmount = amount;
  for (let index = 0; index < ALL_BILLS.length; index++) {
    const billType = ALL_BILLS[index];

    if (remainingAmount >= billType) {
      const nextRemainingAmount = remainingAmount % billType;
      const multipleAmount = remainingAmount - nextRemainingAmount;
      const specificNbOfBill = multipleAmount / billType;
      result = { ...result, [billType]: specificNbOfBill };
      remainingAmount = nextRemainingAmount;
      console.log({ billType, nextRemainingAmount, multipleAmount, specificNbOfBill, result });
    }
  }
  return result;
};
