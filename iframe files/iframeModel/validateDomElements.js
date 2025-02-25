export default function validateDomElements(CONFIG) {
  // Method() to check if Dom_Elements exist, so that the rest of code can use them.
  for (const [elementName, element] of Object.entries(CONFIG.DOM_ELEMENS)) {
    if (!element) {
      throw new Error(`Dom element 🎅${elementName}🎅 does not exist!`);
    }
    if (element instanceof NodeList) {
      if (element.length === 0) {
        throw new Error(`Dom element 🎅${elementName}🎅 does not exist!`);
      }
    }

    if (!element instanceof Element) {
      throw new Error(`Dom element 🎅${elementName}🎅 does not exist!`);
    }
  }
}
