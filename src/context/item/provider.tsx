import { useState } from "react";
import { generateItems } from "../../utils";
import { ItemContext } from ".";
import { useCallback } from "../../@lib";

export const ItemProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [items, setItems] = useState(generateItems(1000));

  const addItems = useCallback(() => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(1000, prevItems.length),
    ]);
  }, [setItems]);

  return (
    <ItemContext.Provider value={{ items, addItems }}>
      {children}
    </ItemContext.Provider>
  );
};
