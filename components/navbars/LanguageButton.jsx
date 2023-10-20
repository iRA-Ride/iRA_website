import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "english", label: "🇬🇧 English" },
  { value: "french", label: "🇫🇷 French" },
  { value: "spanish", label: "🇪🇸 Spanish" },
  { value: "german", label: "🇩🇪 German" },
];

export default function LanguageSelect() {
  return <Select options={options} aria-label="Select Language" />;
}
