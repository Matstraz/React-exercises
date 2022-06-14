import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
      currentLanguage: "The selected language is: ",
    },
    it: {
        currentLanguage: "La lingua selezionata è: ",
    },
  };

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <h1> {Strings[language].currentLanguage}{language}</h1>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
