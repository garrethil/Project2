function formatDate(date) {
  return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
}

const formattedDate = formatDate("2024-03-07");
console.log(formattedDate);

module.exports = {
  formatDate,
};
