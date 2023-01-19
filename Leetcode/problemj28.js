var findItinerary2 = function (tickets) {
  let itineries = {};
  for (let [src, dest] of tickets) {
    if (!itineries[src]) {
      itineries[src] = [dest];
    } else {
      itineries[src].push(dest);
    }
    itineries[src] = itineries[src].sort();
  }
  console.log(itineries);
  let output = [];
  let current = "JFK";
  if (!itineries[current] || itineries[current].length === 0) {
    return output;
  } else {
    output.push("JFK");
  }
  while (itineries[current] && itineries[current].length > 0) {
    output.push(itineries[current][0]);
    current = itineries[current].shift();
  }
  return output;
};

var findItinerary = function (tickets) {
  if (tickets.length === 0) {
    return [];
  }
  if (tickets.length === 1) {
    return tickets[0];
  }
  let itineries = {};
  for (let [src, dest] of tickets) {
    if (!itineries[src]) {
      itineries[src] = [[src, dest, false]];
    } else {
      itineries[src].push([src, dest, false]);
    }
    itineries[src] = itineries[src].sort();
  }
  console.log(itineries);
  let output = [];
  depthSearch(itineries, "JFK", "JFK", 0, tickets.length, output, false);
  return output[0] ? output[0].split(",") : [];
};

function depthSearch(itineries, itin, vertex, count, n, output, found) {
  if (found) {
    return;
  }
  if (count === n) {
    output.push(itin);
    found = true;
    return;
  }
  if (!itineries[vertex]) {
    //itineries[vertex]
    return -1;
  }
  for (let paths of itineries[vertex]) {
    if (!paths[2]) {
      paths[2] = true;
      let num = depthSearch(
        itineries,
        itin + `,${paths[1]}`,
        paths[1],
        count + 1,
        n,
        output
      );
      if (num === -1) {
        paths[2] = false;
      }
    }
  }
  return -1;
}

module.exports = () =>
  console.log(
    findItinerary([
      ["AXA", "EZE"],
      ["EZE", "AUA"],
      ["ADL", "JFK"],
      ["ADL", "TIA"],
      ["AUA", "AXA"],
      ["EZE", "TIA"],
      ["EZE", "TIA"],
      ["AXA", "EZE"],
      ["EZE", "ADL"],
      ["ANU", "EZE"],
      ["TIA", "EZE"],
      ["JFK", "ADL"],
      ["AUA", "JFK"],
      ["JFK", "EZE"],
      ["EZE", "ANU"],
      ["ADL", "AUA"],
      ["ANU", "AXA"],
      ["AXA", "ADL"],
      ["AUA", "JFK"],
      ["EZE", "ADL"],
      ["ANU", "TIA"],
      ["AUA", "JFK"],
      ["TIA", "JFK"],
      ["EZE", "AUA"],
      ["AXA", "EZE"],
      ["AUA", "ANU"],
      ["ADL", "AXA"],
      ["EZE", "ADL"],
      ["AUA", "ANU"],
      ["AXA", "EZE"],
      ["TIA", "AUA"],
      ["AXA", "EZE"],
      ["AUA", "SYD"],
      ["ADL", "JFK"],
      ["EZE", "AUA"],
      ["ADL", "ANU"],
      ["AUA", "TIA"],
      ["ADL", "EZE"],
      ["TIA", "JFK"],
      ["AXA", "ANU"],
      ["JFK", "AXA"],
      ["JFK", "ADL"],
      ["ADL", "EZE"],
      ["AXA", "TIA"],
      ["JFK", "AUA"],
      ["ADL", "EZE"],
      ["JFK", "ADL"],
      ["ADL", "AXA"],
      ["TIA", "AUA"],
      ["AXA", "JFK"],
      ["ADL", "AUA"],
      ["TIA", "JFK"],
      ["JFK", "ADL"],
      ["JFK", "ADL"],
      ["ANU", "AXA"],
      ["TIA", "AXA"],
      ["EZE", "JFK"],
      ["EZE", "AXA"],
      ["ADL", "TIA"],
      ["JFK", "AUA"],
      ["TIA", "EZE"],
      ["EZE", "ADL"],
      ["JFK", "ANU"],
      ["TIA", "AUA"],
      ["EZE", "ADL"],
      ["ADL", "JFK"],
      ["ANU", "AXA"],
      ["AUA", "AXA"],
      ["ANU", "EZE"],
      ["ADL", "AXA"],
      ["ANU", "AXA"],
      ["TIA", "ADL"],
      ["JFK", "ADL"],
      ["JFK", "TIA"],
      ["AUA", "ADL"],
      ["AUA", "TIA"],
      ["TIA", "JFK"],
      ["EZE", "JFK"],
      ["AUA", "ADL"],
      ["ADL", "AUA"],
      ["EZE", "ANU"],
      ["ADL", "ANU"],
      ["AUA", "AXA"],
      ["AXA", "TIA"],
      ["AXA", "TIA"],
      ["ADL", "AXA"],
      ["EZE", "AXA"],
      ["AXA", "JFK"],
      ["JFK", "AUA"],
      ["ANU", "ADL"],
      ["AXA", "TIA"],
      ["ANU", "AUA"],
      ["JFK", "EZE"],
      ["AXA", "ADL"],
      ["TIA", "EZE"],
      ["JFK", "AXA"],
      ["AXA", "ADL"],
      ["EZE", "AUA"],
      ["AXA", "ANU"],
      ["ADL", "EZE"],
      ["AUA", "EZE"],
    ])
  );
