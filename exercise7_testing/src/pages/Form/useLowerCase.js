import { useState, useEffect } from "react";

export function useLowercase(initialValue) {
  const transformed = initialValue.toLowerCase()
  const [value, setValue] = useState(transformed);

  const update = (newValue) => {
    setValue(newValue.toLowerCase());
  };

  useEffect(() => {
    setValue(initialValue.toLowerCase());
  }, [initialValue]);

  return { value, update };
}