import React, { FunctionComponent } from "react";
import uuidv4 from "utils/uuid";

interface Props {
  content: string;
}
const Row: FunctionComponent<Props> = ({ content }) => {
  return (
    <div key={uuidv4()} className="row">
      Ticket Number #{content}
    </div>
  );
};

export default Row;
