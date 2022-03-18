import {useEffect, useState} from 'react';
import axios from 'axios';

// CUSTOM HOOKS

const UseFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      //normalde buradan response geliyor ama response u data olarak parçaladık ama resData isminde
      const {data: resData} = await axios.get(url);
      setData(resData);
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, data};
};

export default UseFetch;
