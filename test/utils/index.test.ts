import { describe, expect, it } from "vitest";
import { add } from "@dup4/example-nestjs-utils";

describe("should", () => {
  it("add", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
