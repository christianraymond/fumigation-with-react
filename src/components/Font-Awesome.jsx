import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FontAwesome = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Popular gadgets come from vendors like:
    <FontAwesomeIcon icon={["fab", "apple"]} />
    <FontAwesomeIcon icon={["fab", "microsoft"]} />
    <FontAwesomeIcon icon={["fab", "google"]} />
  </div>
);


