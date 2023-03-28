import React from "react";
import "./storefront.css"

const Storefront = () => {

  const embedUrl = "https://airtable.com/embed/shrPd1f8NCzaaVi57?backgroundColor=cyan"
  return (
    <div className="storefrontsection">
      <iframe
        title="form"
        className="airtable-embed"
        src={embedUrl}
        onWheel=""
      ></iframe>
    </div>
  );
};

export default Storefront;
