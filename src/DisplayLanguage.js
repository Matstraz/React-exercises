import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
      currentLanguage: "The selected language is: ",
    },
    it: {
        currentLanguage: "La lingua selezionata è: ",
    },
  };

export function DisplayLanguage() { //Per far pratica, ho riscritto anche App come function component.

  const language = useContext(LanguageContext)

  return <h1> {Strings[language].currentLanguage}{language}</h1>

  }

