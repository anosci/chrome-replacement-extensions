// ==UserScript==
// @name        alt-right language fixer
// @author      anosci
// @namespace   http://anosci.tumblr.com
// @description replaces "alt-right" with "neo-nazi"
// ==/UserScript==

//this is forked from https://github.com/hugovk/chrome-replacement-extensions
walk(document.body);

function walk(node)
{
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode)
{
  var v = textNode.nodeValue;

  v = v.replace(/\balt(ernat(iv)?e)?.?right\b/g, "rebranded neo-nazi");
  v = v.replace(/\bAlt(ernat(iv)?e)?.?[Rr]ight\b/g, "Rebranded Neo-Nazi");
  v = v.replace(/\bALT(ernat(iv)?e)?.?RIGHT\b/g, "REBRANDED NEO-NAZI");

  textNode.nodeValue = v;
}
