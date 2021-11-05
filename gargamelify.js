const targetNode = document.body;

function gargamelify(item) {
  var textNode;
  let walk = document.createTreeWalker(item, NodeFilter.SHOW_TEXT, null, false);
  // Replace in body
  while (textNode = walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue
      .replace(/d'([EÉeé]ric *)?[Zz]emmour/g, 'de Gargamel')
        .replace(/qu'([EÉeé]ric *)?[Zz]emmour/g, 'que Gargamel')
          .replace(/([EÉeé]ric *)?[Zz]emmour/g, 'Gargamel');
        }

}

const config = { childList: true, subtree: true };
const callback = function(mutationsList, observer) {
  for(let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      gargamelify(mutation.target)
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

gargamelify(targetNode)
