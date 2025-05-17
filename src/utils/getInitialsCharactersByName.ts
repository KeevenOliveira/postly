export default function getInitialsCharactersByName(name: string): string {
  const parts = name.trim().split(" ");
  const first = parts[0]?.[0]?.trim() || "";
  const second = parts[1]?.[0]?.trim() || "";
  return `${first}${second}`.toUpperCase();
}
