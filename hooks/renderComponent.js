import { useState } from "react";

export default function useComponent(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onPress() {
      setValue(!value);
    }
  };
}
