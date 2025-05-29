const navigateLeft = document.getElementById('bulk-navigate-left');
const navigateRight = document.getElementById('bulk-navigate-right');

const bulks = document.getElementsByClassName('bulk');

// Find index of the currently visible bulk
function getCurrentIndex() {
  return Array.from(bulks).findIndex(bulk => bulk.classList.contains('visible'));
}

// Set visible bulk at index, hide others
function showBulkAt(index) {
  Array.from(bulks).forEach(bulk => bulk.classList.remove('visible'));
  bulks[index].classList.add('visible');
}

// Navigate left with loop
navigateLeft.addEventListener('click', () => {
  let currentIndex = getCurrentIndex();
  let newIndex = (currentIndex - 1 + bulks.length) % bulks.length;
  showBulkAt(newIndex);
});

// Navigate right with loop
navigateRight.addEventListener('click', () => {
  let currentIndex = getCurrentIndex();
  let newIndex = (currentIndex + 1) % bulks.length;
  showBulkAt(newIndex);
});
