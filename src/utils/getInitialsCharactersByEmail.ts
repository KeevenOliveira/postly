export default function getInitialsCharactersByEmail(email: string): string {
  const words = email?.trim();
  const first = words?.[0]?.trim() || "";
  const second = words?.[1]?.trim() || "";
  return (first + second)?.toUpperCase();
}
