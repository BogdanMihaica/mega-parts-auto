const navigateLeft = document.getElementById('bulk-navigate-left');
const navigateRight = document.getElementById('bulk-navigate-right');

const bulks = document.getElementsByClassName('bulk');

function getCurrentIndex() {
  return Array.from(bulks).findIndex(bulk => bulk.classList.contains('visible'));
}

function showBulkAt(index) {
  Array.from(bulks).forEach(bulk => bulk.classList.remove('visible'));
  bulks[index].classList.add('visible');
}

navigateLeft.addEventListener('click', () => {
  let currentIndex = getCurrentIndex();
  let newIndex = (currentIndex - 1 + bulks.length) % bulks.length;
  showBulkAt(newIndex);
});

navigateRight.addEventListener('click', () => {
  let currentIndex = getCurrentIndex();
  let newIndex = (currentIndex + 1) % bulks.length;
  showBulkAt(newIndex);
});
