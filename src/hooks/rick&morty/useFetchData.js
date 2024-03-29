import axios from 'axios';
import { useState } from 'react';
import baseUrl from '../../data/rick&morty/baseUrl';

export default function useFetchData(endPoint, query = '') {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  async function fetchData() {
    try {
      const response = await axios(`${baseUrl}/${endPoint}?${query}`);
      setError(false);
      setData(response.data);
    } catch (error) {
      setData(null);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return { fetchData, data, isLoading, isError };
}
