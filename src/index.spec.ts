// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { atm, Withdrawal } from ".";
expect.extend(matchers);

it("should return a bill", function () {
  //Given
  const amount = 10;
  //When
  const actual = atm(amount);
  //Then
  const expected: Withdrawal = { 10: 1 };
  expect(actual).toEqual(expected);
});

it("should return a bill", function () {
  //Given
  const amount = 20;
  //When
  const actual = atm(amount);
  //Then
  const expected: Withdrawal = { 20: 1 };
  expect(actual).toEqual(expected);
});

it("should return many time a same bill", function () {
  //Given
  const amount = 40;
  //When
  const actual = atm(amount);
  //Then
  const expected: Withdrawal = { 20: 2 };
  expect(actual).toEqual(expected);
});

it("should return many time a same bill", function () {
  //Given
  const amount = 400;
  //When
  const actual = atm(amount);
  //Then
  const expected: Withdrawal = { 200: 2 };
  expect(actual).toEqual(expected);
});

it("should return several bills", function () {
  //Given
  const amount = 700;
  //When
  const actual = atm(amount);
  //Then
  const expected: Withdrawal = { 500: 1, 200: 1 };
  expect(actual).toEqual(expected);
});

it("should return several bills", function () {
  //Given
  const amount = 30;
  //When
  const actual = atm(amount);
  //Then
  const expected: Withdrawal = { 20: 1, 10: 1 };
  expect(actual).toEqual(expected);
});
