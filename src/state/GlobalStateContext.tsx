import { SelectProps } from "antd";
import { createContext, ReactNode, useContext, useReducer } from "react";

// React Context + useReducer

// interface Option { 
//   key: string;
//   value: string
// }

// GlobalState
interface GlobalState {
  // categoryOptions: Option[];
  categoryOptions: SelectProps['options'];
  theme: 'light' | 'dark';
}

// Action
type Action =
  | { type: 'SET_CATEGORY_OPTIONS'; payload: GlobalState['categoryOptions'] }
  | { type: 'TOGGLE_THEME' };

const initialState: GlobalState = {
  categoryOptions: [],
  theme: 'light',
};

// Reducer  
const globalReducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case 'SET_CATEGORY_OPTIONS':
      return { ...state, categoryOptions: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

// GlobalStateContext
const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);


// Provider
export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Hook
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};