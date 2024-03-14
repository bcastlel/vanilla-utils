import { describe, it, expect } from 'vitest';
import isElementFocusable from '../is-element-focusable';

describe('isElementFocusable()', () => {
  it('should return true if the element matches the following selector: button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])', () => {
    expect(isElementFocusable(document.createElement('button'))).toBe(true);
    expect(isElementFocusable(document.createElement('input'))).toBe(true);
    expect(isElementFocusable(document.createElement('select'))).toBe(true);
    expect(isElementFocusable(document.createElement('textarea'))).toBe(true);

    const anchor = document.createElement('a');
    anchor.href = '/test';
    expect(isElementFocusable(anchor)).toBe(true);

    const tabindexed = document.createElement('span');
    tabindexed.tabIndex = 0;
    expect(isElementFocusable(tabindexed)).toBe(true);
  });

  it('should return false if the element is an anchor without "href" attribute or an input of type "hidden"', () => {
    expect(isElementFocusable(document.createElement('a'))).toBe(false);

    const input = document.createElement('input');
    input.type = 'hidden';
    expect(isElementFocusable(input)).toBe(false);
  });

  it('should return false if the element has the following attributes: disabled, tabindex="-1"', () => {
    const input = document.createElement('input');
    input.disabled = true;
    expect(isElementFocusable(input)).toBe(false);

    const button = document.createElement('button');
    button.tabIndex = -1;
    expect(isElementFocusable(button)).toBe(false);
  });
});
