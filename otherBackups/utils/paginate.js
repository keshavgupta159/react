export function paginate(items, pageNumber, pageSize) {
  return items.slice((pageNumber - 1) * pageSize).slice(0, pageSize);
}
