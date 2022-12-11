const ALL_BILLS = [500, 200, 100, 50, 20, 10] as const;
type Bill = typeof ALL_BILLS[number];

const INVALID_AMOUNT_MESSAGE = "Invalid amount";
type Invalid_Amount_Message_Type = typeof INVALID_AMOUNT_MESSAGE;

export type Withdrawal = Partial<Record<Bill, number>>;
type Accumulator = { withdrawal: Withdrawal; remainingAmount: number };

export const atm = (amount: number): Withdrawal | Invalid_Amount_Message_Type => {
  return recursiveAtm(amount, ALL_BILLS);
};

const recursiveAtm = (amount: number, billArray: Readonly<Bill[]>): Withdrawal | Invalid_Amount_Message_Type => {
  if (billArray.length === 0 && amount !== 0) return INVALID_AMOUNT_MESSAGE;
  if (amount === 0) return;

  const [firstBill, ...rest] = billArray;
  if (amount >= firstBill) {
    const nextRemainingAmount = amount % firstBill;
    const multipleAmount = amount - nextRemainingAmount;
    const specificNbOfBill = multipleAmount / firstBill;
    const result = recursiveAtm(nextRemainingAmount, rest);
    if (result === INVALID_AMOUNT_MESSAGE) {
      return INVALID_AMOUNT_MESSAGE;
    }
    return { [firstBill]: specificNbOfBill, ...result };
  }
  return recursiveAtm(amount, rest);
};
