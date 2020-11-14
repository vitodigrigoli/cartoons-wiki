const baseURL = 'https://sampleapis.com/cartoons/api/cartoons2D';

export const data = fetch(baseURL).then(resp => resp.json())