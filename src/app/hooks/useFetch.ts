import { useEffect, useState } from 'react';

export default function useFetch<Type>(url: string): Type | null {
  const [data, setData] = useState<Type | null>(null);

  async function fetchData() {
    const response = await fetch(url);
    if (response.status == 200) {
      const newData = await response.json();
      setData(newData);
    } else console.error(`${response.status}: Pfad existiert nicht`);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return data;
}
