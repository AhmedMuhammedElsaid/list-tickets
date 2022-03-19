import React, { useState, useRef, FunctionComponent } from "react";
import ScrollableComponent from "components/ScrollableComponent";
import Row from "components/Row";

const Home: FunctionComponent = () => {
  const [tickets] = useState(() => Array.from({ length: 11000 }));
  const currentFirstIndex = useRef(0);
  const currentLastIndex = useRef(100);
  const [currentTickets, setCurrentTickets] = useState(() =>
    tickets.slice(currentFirstIndex.current, currentLastIndex.current)
  );

  const fetchMoreData = () => {
    currentFirstIndex.current = currentFirstIndex.current + 100;
    currentLastIndex.current = currentLastIndex.current + 100;
    setCurrentTickets([
      ...currentTickets,
      ...tickets.slice(currentFirstIndex.current, currentLastIndex.current),
    ]);
  };
  return (
    <div className="scrollableHolder">
      <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
        <ScrollableComponent
          dataLength={currentTickets.length}
          next={fetchMoreData}
          hasMore={tickets.length === currentTickets.length ? false : true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {currentTickets.map((_, index) => (
            <Row content={(1 + index).toString()} key={index} />
          ))}
        </ScrollableComponent>
      </div>
    </div>
  );
};
export default Home;
