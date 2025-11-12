// API requests utilities

export const api = {
  // Exemplo de função para fazer requisições
  get: async (url: string) => {
    const response = await fetch(url);
    return response.json();
  },
  
  post: async (url: string, data: unknown) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

