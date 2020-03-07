import React, { useState } from "react";


export function SearchInput({ value, onChange }) {
  return <input value={value} onChange={onChange}></input>;
}
