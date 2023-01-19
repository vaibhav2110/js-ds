class Vertex {
  #data = "";
  #visited = false;
  #visiting = false;
  #neighbours = [];

  constructor(data, visited, visiting, neighbours) {
    this.data = data;
    this.visited = visited;
    this.visiting = visiting;
    this.neighbours = neighbours;
  }

  get data() {
    return this.#data;
  }

  set data(value) {
    this.#data = value;
  }

  get visited() {
    return this.#visited;
  }

  set visited(value) {
    this.#visited = value;
  }

  get visiting() {
    return this.#visiting;
  }

  set visiting(value) {
    this.#visiting = value;
  }

  get neighbours() {
    return this.#neighbours;
  }

  set neighbours(value) {
    this.#neighbours = value;
  }
}

module.exports = { Vertex };
