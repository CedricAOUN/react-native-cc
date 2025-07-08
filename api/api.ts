function* genItems() {
  let cat = 0;

  while (true) {
    yield { key: cat.toString(), value: `Item ${cat++}` };
  }
}

let items = genItems();

export function fetchItems({ refresh }: { refresh?: boolean } = {}) {
  if (refresh) {
    items = genItems();
  }

  return Promise.resolve({
    json: () =>
      Promise.resolve({
        items: new Array(30).fill(null).map((_, index) => {
          const result = items.next();
          return result.value;
        }),
      }),
  });
}
