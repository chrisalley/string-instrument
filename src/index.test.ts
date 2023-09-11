import { describe, test, expect } from "vitest";
import { camelise, dasherise, downcaseFirst } from "./index";

describe("camelise", () => {
  test("converts underscored string to camelcase with uppercase first letter by default", () => {
    expect(camelise("active_model")).toEqual("ActiveModel");
  });

  test("converts underscored string to camelcase with lowercase first letter when uppercase first letter is false", () => {
    expect(camelise("active_model", false)).toEqual("activeModel");
  });
});

describe("dasherise", () => {
  test("converts underscored string to a hyphenated string", () => {
    expect(dasherise("active_model")).toEqual("active-model");
  });
});

describe("downcaseFirst", () => {
  test("makes the first character of the first word lowercase", () => {
    expect(downcaseFirst("First Second")).toEqual("first Second");
  });
});
