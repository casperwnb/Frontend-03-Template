function match(selector, element) {
    if(element.tagName.toLowerCase() !== 'div') {
      return false;
    }

    if(element.className !== 'class') {
      return false;
    }
    return true;
}


match("div #id.class", document.getElementById("id"));
