export const fetchBenches = () => {
  return $.ajax({
    url: '/api/benches',
    method: 'GET',
  });
};
