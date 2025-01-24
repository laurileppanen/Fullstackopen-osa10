import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useState, useEffect } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (error) {
      console.error(error);
      return;
    }
    if (!loading && data) {
      setRepositories(data.repositories);
    }
  }, [data, error, loading]);

  const fetchRepositories = () => {};
  
  return { repositories, loading, refetch: fetchRepositories };

};

export default useRepositories;
