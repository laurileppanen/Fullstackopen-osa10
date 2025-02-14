import { useMutation, useApolloClient } from "@apollo/client";
import { SIGNIN } from "../graphql/queries";
import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from "react-router-native"

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient()
  const navigate = useNavigate()
  const [mutate, result] = useMutation(SIGNIN);

  const signIn = async ({ username, password }) => {
    try {
      const credentials = { username, password };
      const { data } = await mutate({ variables: { credentials } });

      if (!data || !data.authenticate) {
        throw new Error("Authentication failed: No data received")
      }

      const accessToken = data.authenticate.accessToken
      if (!accessToken) {
        throw new Error("Authentication failed: No access token")
      }

      await authStorage.setAccessToken(accessToken)
      await apolloClient.resetStore()
      navigate("/")
      
      return data;

    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  };

  return [signIn, result];
};

export default useSignIn;
