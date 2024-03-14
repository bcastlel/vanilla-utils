const FOCUSABLE_ELEMENT_SELECTOR = 'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])';

const isElementFocusable = (element: HTMLElement): boolean => element.matches(FOCUSABLE_ELEMENT_SELECTOR)
  && !element.hasAttribute('disabled') && element.getAttribute('tabindex') !== '-1';

export default isElementFocusable;
