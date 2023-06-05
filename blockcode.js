// Get all the lesson blocks
const lessonBlocks = document.querySelectorAll('.lesson-block');

let draggedBlock = null;

// Add event listeners for drag and drop events
lessonBlocks.forEach(block => {
  block.addEventListener('dragstart', dragStart);
  block.addEventListener('dragover', dragOver);
  block.addEventListener('drop', drop);
});

// Function called when drag starts
function dragStart(e) {
  draggedBlock = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', draggedBlock.innerHTML);
}

// Function called when element is being dragged over
function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

// Function called when element is dropped
function drop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (draggedBlock !== this) {
    draggedBlock.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}
