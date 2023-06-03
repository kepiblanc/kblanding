import { milliSecondToSecondConversionRate } from "@/constants";

export function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

export const verifyIsDigit = (value: string | number): boolean => {
  const re = /^[0-9\b]+$/;

  // if value is not blank, then test the regex

  if (value === "" || re.test(String(value))) {
    return true;
  }
  return false;
};

export const secondsToMilliSeconds = (seconds: number): number => {
  return seconds * milliSecondToSecondConversionRate;
};
