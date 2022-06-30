import { useSelector } from "react-redux";
import { ReducerType } from "src/data/modules/store";

const useSelectState = () => {
  return useSelector((state: ReducerType) => state);
};

export default useSelectState;
