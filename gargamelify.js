var textNode;
let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

// Replace in body
while (textNode = walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue
  .replace(/d'([EÉeé]ric *)?[Zz]emmour/g, 'de Gargamel')
  .replace(/qu'([EÉeé]ric *)?[Zz]emmour/g, 'que Gargamel')
  .replace(/([EÉeé]ric *)?[Zz]emmour/g, 'Gargamel');
}

