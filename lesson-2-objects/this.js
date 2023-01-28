let counter = {
  count: 0,
  advance: function () {
    this.count += 1
  },
}

counter // {count: 0, advance: [Function]}

counter.advance();
counter // {count: 1, advance: [Function]}
