import { createContext, useContext, useState } from 'react';

const ItemsContext = createContext();

function useItems() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("Ocorreu um erro, por favor entre em contato com nikolau");
  }
  return context;
}

const ItemsProvider = (props) => {
  const [items, setItems] = useState([]);

  return <ItemsContext.Provider {...props} value={{ items, setItems }} />;
};

export { ItemsProvider, useItems };