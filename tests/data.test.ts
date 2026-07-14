import { describe, expect, it } from "vitest";
import { programmes } from "../src/data/programmes";
import { organisation } from "../src/data/organisation";
import { contact } from "../src/data/contact";
describe("IRI public content", () => {
  it("has exactly four documented planned programmes", () =>
    expect(programmes).toHaveLength(4));
  it("uses unique programme ids", () =>
    expect(new Set(programmes.map((p) => p.id)).size).toBe(4));
  it("preserves the verified registration number", () =>
    expect(organisation.registration).toBe("80034850054909"));
  it("marks the future email for confirmation", () =>
    expect(contact.email.requiresConfirmation).toBe(false));
  it("does not include completed impact claims", () =>
    expect(JSON.stringify(programmes)).not.toMatch(
      /beneficiaries reached|completed project/i,
    ));
});
