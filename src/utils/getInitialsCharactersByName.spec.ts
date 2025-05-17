import getInitialsCharactersByName from "./getInitialsCharactersByName";

describe("getInitialsCharactersByName", () => {
  it("should return the initials of a single name", () => {
    expect(getInitialsCharactersByName("John")).toBe("J");
  });

  it("should return the initials of a first and last name", () => {
    expect(getInitialsCharactersByName("John Doe")).toBe("JD");
  });

  it("should return the initials of a first, middle, and last name", () => {
    expect(getInitialsCharactersByName("John Michael Doe")).toBe("JM");
  });

  it("should handle names with extra spaces", () => {
    expect(getInitialsCharactersByName("   John Doe   ")).toBe("JD");
  });

  it("should handle empty strings", () => {
    expect(getInitialsCharactersByName("")).toBe("");
  });
});
