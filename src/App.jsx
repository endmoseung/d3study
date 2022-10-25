import { select } from "d3";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function App() {
  const datas = [24, 30, 45, 70, 26];

  const [data, setData] = useState(datas);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) =>
          enter
            .append("circle")
            .attr("class", "new")
            .attr("r", (value) => value)
            .attr("cx", (value) => value * 2)
            .attr("cy", (value) => value * 2)
            .attr("stroke", "blue"),
        (update) =>
          update
            .attr("class", "updated")
            .attr("r", (value) => value)
            .attr("cx", (value) => value * 2)
            .attr("cy", (value) => value * 2),
        (exit) => exit.remove()
      );
    console.log(svg);
  }, [data]);

  return (
    <Container>
      <Chart ref={svgRef}></Chart>
      <ChartButton onClick={() => setData(data.map((value) => value + 5))}>
        update data
      </ChartButton>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 700px;
  height: 100vh;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Chart = styled.svg`
  width: 1000px;
  height: 500px;
  background-color: aquamarine;
`;

const ChartButton = styled.button``;
