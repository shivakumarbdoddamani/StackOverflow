export const getDataFromApi = (page, key) => {
  const url = `https://api.stackexchange.com/2.3/questions?page=${page}&pagesize=20&order=desc&sort=hot&tagged=${key}&site=stackoverflow`;
  console.log('url', url);
  return fetch(url, {method: 'get'})
    .then(response => response.json())
    .catch(e => {
      console.log(e.message);
    });
};

export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}) => {
  const paddingToBottom = 150;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
