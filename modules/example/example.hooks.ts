import client from "@utils/apollo";
import { useDispatch } from "react-redux";
import {
  State,
  Dispatch,
  useSelector as useExampleSelector,
} from "@utils/redux";
import {
  UpdateExampleMutation,
  UpdateExampleMutationVariables,
} from "@modules/generated/graphqlSchema";
import { EXAMPLES_QUERY } from "./example.queries";
import store from "./example.store";

export function useExample() {
  const dispatch = useDispatch<Dispatch>();
  const useSelector = useExampleSelector((state: State) => state.example);
  const state = useSelector();

  /**
   * update redux store
   * @param hi
   */
  const setHi = (hi: string | undefined) => {
    dispatch(store.actions.setHi(hi));
  };

  /**
   * update and store hi in redux
   * @param hi
   */
  const fetchAndSetHi = (variables: UpdateExampleMutationVariables) => {
    client
      .query({ query: EXAMPLES_QUERY, variables })
      .then((res) => {
        dispatch(store.actions.setHi(res));
        return res;
      })
      .catch((err) => {
        if (err.code === "ERRROR_A")
          return Promise.reject(new Error("Oops something went wrong"));
        Promise.reject(err.message);
      });
  };

  return { ...state, setHi, fetchAndSetHi };
}
