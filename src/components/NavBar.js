import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"],
  linkText = links.map(name => <a key={name} href={`#${name}`}>{name}</a>)
  // console.log("link", linkText)

  return <nav>{/* display an <a> tag for each link here */}
  {linkText}
  </nav>;
}

export default NavBar;
