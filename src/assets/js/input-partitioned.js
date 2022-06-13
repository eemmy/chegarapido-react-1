const input = document.getElementById("input-partitioned");
input.addEventListener("keydown", stopCarret);
input.addEventListener("keyup", stopCarret);

function stopCarret() {
  if (input.value.length > 5) {
    setCaretPosition(input, 5);
  }
}

function setCaretPosition(elem, caretPos) {
  if (elem != null) {
    if (elem.createTextRange) {
      const range = elem.createTextRange();
      range.move("character", caretPos);
      range.select();
    } else {
      if (elem.selectionStart) {
        elem.focus();
        elem.setSelectionRange(caretPos, caretPos);
      } else elem.focus();
    }
  }
}
