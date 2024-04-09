import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  console.log("ERRORI:", error);
  console.log("LOADING:", loading);
  if (data) {
    console.log("DATA:", data.repositories.edges);
    return data;
  }

  return { loading };
};

export default useRepositories;
