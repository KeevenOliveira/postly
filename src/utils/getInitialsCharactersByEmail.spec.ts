import getInitialsCharactersByEmail from "./getInitialsCharactersByEmail";

describe("getInitialsCharactersByEmail", () => {
  it("should return the initials of a single email", () => {
    expect(getInitialsCharactersByEmail("johndue@gmail.com")).toBe("JO");
  });

  it("should trim leading spaces and return the correct initials", () => {
    expect(getInitialsCharactersByEmail("   alice@domain.com")).toBe("AL");
  });

  it("should return empty string if email is empty", () => {
    expect(getInitialsCharactersByEmail("")).toBe("");
  });

  it("should return single character uppercased if email has only one character", () => {
    expect(getInitialsCharactersByEmail("a")).toBe("A");
  });

  it("should handle emails with only one character and spaces", () => {
    expect(getInitialsCharactersByEmail("  a   ")).toBe("A");
  });

  it("should return empty string if email is only spaces", () => {
    expect(getInitialsCharactersByEmail("    ")).toBe("");
  });
});
