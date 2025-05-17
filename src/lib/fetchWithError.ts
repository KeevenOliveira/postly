import { toast } from "react-toastify";

export async function fetchWithError<T = unknown>(
  input: RequestInfo,
  init?: RequestInit,
  errorMessage = "Something is wrong with application."
): Promise<T | null> {
  try {
    const response = await fetch(input, init);
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  } catch (err) {
    console.error(err);
    toast.error(errorMessage);
    return null;
  }
}
