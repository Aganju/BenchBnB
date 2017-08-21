export const fetchBenches = (filters) => {
  return $.ajax({
    url: `/api/benches?bounds=${JSON.stringify(filters.bounds)}`,
    method: 'GET',
  });
};
