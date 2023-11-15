import { createContext, useState } from "react";

import ComboLanguage from "../../ui/comboLanguage/ComboLanguaje";
import { TranslateContext } from "../../../services/translationContext/translation.context";
import useTranslation from "../../../custom/useTranslation/useTranslation";

export const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = (value) => {
    setIsLoading(value);
  };

  return (
    <APIContext.Provider value={{ isLoading, toggleLoading }}>
      {children}
    </APIContext.Provider>
  );
};
