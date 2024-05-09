// src/utils/apiResponseHandler.ts
export const handleApiResponse = async (response: Response, setResult: (result: string) => void) => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const reader = response.body?.getReader();
    if (!reader) return;
  
    let accumulator = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      accumulator += new TextDecoder().decode(value);
      setResult(accumulator);
    }
  };
  