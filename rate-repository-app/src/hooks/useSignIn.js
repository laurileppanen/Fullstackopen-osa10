import { useMutation } from "@apollo/client";
import { SIGNIN } from "../graphql/queries";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGNIN);

  const signIn = async ({ username, password }) => {
    try {
      const credentials = { username, password };
      const response = await mutate({ variables: { credentials } });
      return response;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  };

  return [signIn, result];
};

export default useSignIn;
