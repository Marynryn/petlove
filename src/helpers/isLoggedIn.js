import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from "store/selectors";

export const IsLoggedIn = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLogIn,
    isRefreshing,
    user,
  };
};
