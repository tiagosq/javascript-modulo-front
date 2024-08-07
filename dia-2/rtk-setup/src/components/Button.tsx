import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { AppDispatch, RootState } from "../redux/store";

function Button() {
  // const teste = useSelector((state: RootState) => state.theme);
  // useSelector para extrair dados do Redux.
  const theme = useSelector((state: RootState) => state.theme.colorScheme);
  // useDispatch para enviar dados para o Redux.
  const dispatch: AppDispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleTheme({
          colorScheme: theme === 'dark' ? 'light' : 'dark',
        }));
      }}
    >{theme}</button>
  )
}

export default Button;
