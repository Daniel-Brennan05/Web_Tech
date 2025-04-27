//selects elemetns from dropdown from 'sort'
const sortSelect = document.getElementById('sort');

//gets the valued that have been listed for each bup from sort
const pubSortContainer = document.getElementById('pub-sort');

// used to listen for when user changees the sort option
sortSelect.addEventListener('change', () => {
  const pubs = Array.from(pubSortContainer.querySelectorAll('.pub'));
  const value = sortSelect.value;
// turns all data into an array for sorting
  let sortedPubs = [...pubs];
  
// Options for sorting
  if (value === 'pub-name-asc') {
    sortedPubs.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
  } else if (value === 'pub-name-des') {
    sortedPubs.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
  } else if (value === 'pub-price-asc') {
    sortedPubs.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
  } else if (value === 'pub-price-des') {
    sortedPubs.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
  } else if (value === 'pub-rating-asc') {
    sortedPubs.sort((a, b) => parseFloat(a.dataset.rating) - parseFloat(b.dataset.rating));
  } else if (value === 'pub-rating-des') {
    sortedPubs.sort((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
  } else if (value === 'pub-popularity-asc') {
    sortedPubs.sort((a, b) => parseFloat(a.dataset.popularity) - parseFloat(b.dataset.popularity));
  } else if (value === 'pub-popularity-des') {
    sortedPubs.sort((a, b) => parseFloat(b.dataset.popularity) - parseFloat(a.dataset.popularity));
  }
// used for clearing the space for new sort to be placed inside
  pubSortContainer.innerHTML = '';
  sortedPubs.forEach(pub => pubSortContainer.appendChild(pub));
});
