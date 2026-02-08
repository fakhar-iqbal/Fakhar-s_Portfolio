/// <reference types="vite/client" />

declare namespace React {
  type FC<P = {}> = (props: P) => any;
  type ReactNode = any;
  
  const useState: any;
  const useEffect: any;
  const useContext: any;
  const useReducer: any;
  const useCallback: any;
  const useMemo: any;
  const useRef: any;
  const useImperativeHandle: any;
  const useLayoutEffect: any;
  const useDebugValue: any;
  const Fragment: any;
  const StrictMode: any;
  const Suspense: any;
  const lazy: any;
  const memo: any;
  const forwardRef: any;
  const createContext: any;
  
  type ChangeEvent<T = any> = {
    target: T & {
      name: string;
      value: string;
    };
    preventDefault: () => void;
  };
  
  type FormEvent<T = any> = {
    preventDefault: () => void;
  };
}

declare module 'react' {
  export = React;
  export as namespace React;
}

declare module 'react-dom/client' {
  export const createRoot: any;
}

declare module 'react/jsx-runtime' {
    export default any;
}
