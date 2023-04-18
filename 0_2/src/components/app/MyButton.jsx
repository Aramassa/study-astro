import React, { useState, useEffect } from "react";

export const MyButton = ({label, handler})=>{
      return (
        <button onClick={handler}>
          {label}
        </button>
      );
  }