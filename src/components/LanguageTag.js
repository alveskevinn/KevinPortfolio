import React from "react";

export default function LanguageTag({ description, imgUrl}) {
  return (
    <div className="item">
      <img src={imgUrl} alt={description} />
    </div>
  );
}
