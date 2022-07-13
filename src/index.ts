const ALL_BILLS = [500, 200, 100, 50, 20, 10] as const;
type Bill = typeof ALL_BILLS[number];

export type Withdrawal = Partial<Record<Bill, number>>;
type Accumulator = { withdrawal: Withdrawal; remainingAmount: number };

export const atm = (amount: number): Withdrawal => {
  return recursiveAtm(amount, ALL_BILLS);
};

const recursiveAtm = (amount: number, billArray: Readonly<Bill[]>): Withdrawal => {
  if (amount === 0) return;

  const [firstBill, ...rest] = billArray;
  if (amount >= firstBill) {
    const nextRemainingAmount = amount % firstBill;
    const multipleAmount = amount - nextRemainingAmount;
    const specificNbOfBill = multipleAmount / firstBill;
    return { [firstBill]: specificNbOfBill, ...recursiveAtm(nextRemainingAmount, rest) };
  }
  return recursiveAtm(amount, rest);
};
