function formatDate(date) {
  return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
}

const formatPrice = (price) => {
  return price.toLocaleString();
};

module.exports = {
  formatDate,
  formatPrice,
};
