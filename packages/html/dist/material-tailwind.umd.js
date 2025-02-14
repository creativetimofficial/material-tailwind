
/*!
 * Material Tailwind JavaScript/TypeScript Library v3.0.0-beta.7
 * (c) 2025 Material Tailwind - Creative Tim
 * Released under the MIT License.
 * Written in TypeScript, usable in both JavaScript and TypeScript projects.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MaterialTailwind = {}));
})(this, (function (exports) { 'use strict';

  let popperLoaded = false; // Singleton flag to track loading state
  let popperReady = null; // Promise to handle loading Popper.js once
  function loadPopperJs() {
      if (popperLoaded) {
          return popperReady; // Return the existing Promise if already loading or loaded
      }
      popperLoaded = true; // Mark Popper.js as being loaded
      popperReady = new Promise((resolve, reject) => {
          if (window.Popper) {
              resolve(window.Popper); // If already loaded globally, resolve immediately
              return;
          }
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/@popperjs/core@2';
          script.defer = true;
          script.onload = () => {
              resolve(window.Popper); // Resolve once Popper.js is loaded
          };
          script.onerror = () => {
              reject(new Error('Failed to load Popper.js'));
          };
          document.head.appendChild(script);
      });
      return popperReady;
  }

  const initializedElements$2 = new WeakSet();
  function closeAlert(event) {
      const button = event.currentTarget; // No need for type assertion; AlertEvent ensures it's an HTMLElement
      const alert = button.closest('[role="alert"]');
      if (alert) {
          alert.remove(); // Remove the alert
      }
  }
  function initAlert() {
      document.querySelectorAll("[data-dismiss='alert']").forEach((button) => {
          if (!initializedElements$2.has(button)) {
              // Cast the listener to ensure compatibility with AlertEvent
              button.addEventListener("click", closeAlert);
              initializedElements$2.add(button);
          }
      });
  }
  // Auto-initialize on DOMContentLoaded and observe dynamically added elements
  if (typeof window !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
          initAlert(); // Initialize alerts after DOM is loaded
          // Observe the DOM for dynamically added alerts
          const observer = new MutationObserver(() => {
              initAlert(); // Re-initialize alerts when new elements are added
          });
          observer.observe(document.body, { childList: true, subtree: true });
      });
  }

  // Gallery component
  const initializedElements$1 = new WeakSet();
  function changeMainImage(event) {
      const thumbnail = event.currentTarget;
      const mainImage = document.querySelector('[data-main-image]');
      if (mainImage) {
          // Change the main image's src to the clicked thumbnail's src
          mainImage.src = thumbnail.src;
          // Optional: Add an "active" class to the clicked thumbnail
          document.querySelectorAll('[data-thumbnail]').forEach((thumb) => {
              thumb.classList.remove('active-thumbnail');
          });
          thumbnail.classList.add('active-thumbnail');
      }
  }
  function initGallery() {
      document.querySelectorAll('[data-thumbnail]').forEach((thumbnail) => {
          if (!initializedElements$1.has(thumbnail)) {
              thumbnail.addEventListener('click', changeMainImage);
              initializedElements$1.add(thumbnail);
          }
      });
  }
  function cleanupGallery() {
      document.querySelectorAll('[data-thumbnail]').forEach((thumbnail) => {
          if (initializedElements$1.has(thumbnail)) {
              thumbnail.removeEventListener('click', changeMainImage);
              initializedElements$1.delete(thumbnail);
          }
      });
  }
  // Auto-initialize on DOMContentLoaded and observe dynamically added elements
  if (typeof window !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
          initGallery(); // Initialize gallery after DOM is loaded
          // Observe the DOM for dynamically added thumbnails
          const observer = new MutationObserver(() => {
              initGallery(); // Re-initialize gallery when new elements are added
          });
          observer.observe(document.body, { childList: true, subtree: true });
      });
  }

  // Collapse Component in TypeScript
  // Track initialized elements
  const initializedElements = new WeakSet();
  /**
   * Toggles the visibility of a collapsible element.
   * @param event - The click event triggering the toggle.
   */
  function toggleCollapse(event) {
      const button = event.currentTarget;
      if (!button)
          return;
      const collapseID = button.getAttribute("data-target");
      if (collapseID && collapseID.startsWith("#")) {
          const collapseElement = document.querySelector(collapseID);
          const isExpanded = button.getAttribute("aria-expanded") === "true";
          if (collapseElement) {
              // Toggle max-height for collapsible content
              collapseElement.style.maxHeight = isExpanded ? "0" : `${collapseElement.scrollHeight}px`;
              // Update aria-expanded attribute
              button.setAttribute("aria-expanded", `${!isExpanded}`);
              // Toggle rotate-180 class on the icon
              const icon = button.querySelector("[data-icon]");
              if (icon) {
                  icon.classList.toggle("rotate-180", !isExpanded);
              }
          }
      }
  }
  /**
   * Initializes collapsible buttons by attaching event listeners.
   */
  function initCollapse() {
      document.querySelectorAll("[data-toggle='collapse']").forEach((button) => {
          if (!initializedElements.has(button)) {
              button.addEventListener("click", toggleCollapse);
              initializedElements.add(button); // Mark as initialized
          }
      });
  }
  // Auto-initialize on DOMContentLoaded and observe dynamically added elements
  if (typeof window !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
          initCollapse(); // Initialize collapsibles after DOM is loaded
          // Observe the DOM for dynamically added collapsible elements
          const observer = new MutationObserver(() => {
              initCollapse(); // Re-initialize collapsibles when new elements are added
          });
          observer.observe(document.body, { childList: true, subtree: true });
      });
  }

  /**
   * Class representing a programmatic Collapse component.
   */
  class Collapse {
      /**
       * Creates an instance of Collapse.
       * @param button - The button element or its selector controlling the collapsible content.
       * @param collapseElement - The collapsible content element or its selector.
       * @param config - Configuration options for the collapse.
       */
      constructor(button, collapseElement, config = {}) {
          this.button = this.resolveElement(button, "Button element not found");
          this.collapseElement = this.resolveElement(collapseElement, "Collapsible content element not found");
          this.config = config;
          this.init();
      }
      /**
       * Resolves an element from an HTMLElement or selector string.
       * @param elementOrSelector - HTMLElement or a selector string.
       * @param errorMessage - Error message if the element is not found.
       * @returns The resolved HTMLElement.
       */
      resolveElement(elementOrSelector, errorMessage) {
          if (typeof elementOrSelector === "string") {
              const resolvedElement = document.querySelector(elementOrSelector);
              if (!resolvedElement)
                  throw new Error(errorMessage);
              return resolvedElement;
          }
          else if (elementOrSelector instanceof HTMLElement) {
              return elementOrSelector;
          }
          throw new Error(errorMessage);
      }
      /**
       * Initializes the Collapse component by attaching event listeners.
       */
      init() {
          this.button.addEventListener("click", () => this.toggle());
      }
      /**
       * Toggles the collapsible content visibility.
       */
      toggle() {
          const isExpanded = this.button.getAttribute("aria-expanded") === "true";
          // Toggle max-height
          this.collapseElement.style.maxHeight = isExpanded ? "0" : `${this.collapseElement.scrollHeight}px`;
          // Update aria-expanded attribute
          this.button.setAttribute("aria-expanded", `${!isExpanded}`);
          // Toggle rotate class for icons if specified
          if (this.config.iconSelector) {
              const icon = document.querySelector(this.config.iconSelector);
              if (icon) {
                  icon.classList.toggle("rotate-180", !isExpanded);
              }
          }
      }
      /**
       * Expands the collapsible content.
       */
      expand() {
          this.collapseElement.style.maxHeight = `${this.collapseElement.scrollHeight}px`;
          this.button.setAttribute("aria-expanded", "true");
          // Update icon state
          if (this.config.iconSelector) {
              const icon = document.querySelector(this.config.iconSelector);
              if (icon) {
                  icon.classList.add("rotate-180");
              }
          }
      }
      /**
       * Collapses the collapsible content.
       */
      collapse() {
          this.collapseElement.style.maxHeight = "0";
          this.button.setAttribute("aria-expanded", "false");
          // Update icon state
          if (this.config.iconSelector) {
              const icon = document.querySelector(this.config.iconSelector);
              if (icon) {
                  icon.classList.remove("rotate-180");
              }
          }
      }
  }

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];
        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }
  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules

  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function (item) {
        return item.brand + "/" + item.version;
      }).join(' ');
    }
    return navigator.userAgent;
  }

  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x: x,
      y: y
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...

        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false

    return false;
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument :
    // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot ||
      // step into the shadow DOM of the parent of a slotted node
      element.parentNode || (
      // DOM Element detected
      isShadowRoot(element) ? element.host : null) ||
      // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback
    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) ||
    // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === 'fixed') {
      return null;
    }
    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block

  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle(element);
      if (elementCss.position === 'fixed') {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.

  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
      return window;
    }
    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }
  function effect$1(_ref2) {
    var state = _ref2.state,
      options = _ref2.options;
    var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) {
      return;
    } // CSS selector

    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules

  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x,
      y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';
      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);
        if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp];
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x,
      y: y
    }, getWindow(popper)) : {
      x: x,
      y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state,
      options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration,
      isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules

  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
    var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }
    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }
      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules

  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList :
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`

  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents

  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);
          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules

  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state,
      name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules

  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
      })) : offset,
      skidding = _ref[0],
      distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
    var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules

  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
      name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules

  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
    var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = offset + overflow[mainSide];
      var max$1 = offset - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === 'x' ? top : left;
      var _altSide = mainAxis === 'x' ? bottom : right;
      var _offset = popperOffsets[altAxis];
      var _len = altAxis === 'y' ? 'height' : 'width';
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules

  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.

  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' ||
      // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }
      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers

          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;
            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference, popper)) {
        return instance;
      }
      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref) {
          var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;
          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });
            var noopFn = function noopFn() {};
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  const initializedDropdowns = new WeakSet(); // Prevent duplicate initialization
  let activeDropdowns = []; // Track active dropdowns for cleanup
  let Dropdown$1 = class Dropdown {
      constructor(dropdownElement) {
          this.popperInstance = null;
          this.dropdown = dropdownElement;
          this.button = this.dropdown.querySelector('[data-toggle="dropdown"],[data-toggle="menu"]');
          this.menu = this.dropdown.querySelector('[data-role="menu"]');
          this.placement = this.dropdown.getAttribute("data-placement") || "bottom-start";
          this.init();
      }
      init() {
          return __awaiter(this, void 0, void 0, function* () {
              // Ensure Popper.js is loaded
              yield loadPopperJs();
              // Initialize Popper.js
              this.popperInstance = createPopper(this.button, this.menu, {
                  placement: this.placement,
                  modifiers: [{ name: "offset", options: { offset: [0, 5] } }],
              });
              // Add event listeners
              this.button.addEventListener("click", (e) => {
                  e.stopPropagation();
                  this.toggleDropdown();
              });
              document.addEventListener("click", (e) => {
                  if (!this.dropdown.contains(e.target)) {
                      this.closeDropdown();
                  }
              });
              // Track active dropdown for cleanup
              activeDropdowns.push({ dropdown: this.dropdown, popperInstance: this.popperInstance });
          });
      }
      toggleDropdown() {
          const isExpanded = this.button.getAttribute("aria-expanded") === "true";
          isExpanded ? this.closeDropdown() : this.openDropdown();
      }
      openDropdown() {
          this.button.setAttribute("aria-expanded", "true");
          this.menu.hidden = false;
          this.menu.classList.remove("hidden");
          if (this.popperInstance) {
              this.popperInstance.update();
          }
      }
      closeDropdown() {
          this.button.setAttribute("aria-expanded", "false");
          this.menu.hidden = true;
          this.menu.classList.add("hidden");
      }
  };
  function initDropdowns() {
      document.querySelectorAll(".dropdown, .menu").forEach((dropdownElement) => {
          if (!initializedDropdowns.has(dropdownElement)) {
              new Dropdown$1(dropdownElement);
              initializedDropdowns.add(dropdownElement);
          }
      });
  }
  // Cleanup function to destroy all active dropdowns
  function cleanupDropdowns() {
      activeDropdowns.forEach(({ dropdown, popperInstance }) => {
          if (popperInstance)
              popperInstance.destroy();
          if (dropdown)
              initializedDropdowns.delete(dropdown);
      });
      activeDropdowns = [];
  }
  // Combined initialization function
  function loadAndInitDropdowns() {
      return __awaiter(this, void 0, void 0, function* () {
          yield loadPopperJs();
          initDropdowns();
      });
  }
  // Auto-initialize Dropdowns in the Browser Environment
  if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
          loadAndInitDropdowns();
          // Observe the DOM for dynamically added dropdowns
          const observer = new MutationObserver(() => {
              initDropdowns();
          });
          observer.observe(document.body, { childList: true, subtree: true });
      });
  }

  /**
   * Class representing a programmatic Dropdown component.
   */
  class Dropdown {
      /**
       * Creates an instance of Dropdown.
       * @param reference - The element or selector to position the dropdown menu relative to.
       * @param menu - The menu element to display as the dropdown.
       * @param config - Configuration options for the dropdown.
       */
      constructor(reference, menu, config) {
          var _a;
          this.popperInstance = null;
          this.isOpen = false; // Internal state
          this.shouldIgnoreClick = false;
          // Resolve referenceElement and menu
          this.referenceElement = this.resolveElement(reference, "Reference element not found");
          this.menu = this.resolveElement(menu, "Menu element not found");
          this.config = {
              placement: config.placement || "bottom-start",
              closeOnOutsideClick: (_a = config.closeOnOutsideClick) !== null && _a !== void 0 ? _a : true,
              offset: config.offset || [0, 5],
          };
          // Bind the document click handler to this instance
          this.documentClickHandler = this.handleDocumentClick.bind(this);
          this.init();
      }
      /**
       * Resolves an element from an HTMLElement or selector string.
       * @param elementOrSelector - HTMLElement or a selector string.
       * @param errorMessage - Error message if the element is not found.
       * @returns The resolved HTMLElement.
       */
      resolveElement(elementOrSelector, errorMessage) {
          if (typeof elementOrSelector === "string") {
              const resolvedElement = document.querySelector(elementOrSelector);
              if (!resolvedElement)
                  throw new Error(errorMessage);
              return resolvedElement;
          }
          else if (elementOrSelector instanceof HTMLElement) {
              return elementOrSelector;
          }
          throw new Error(errorMessage);
      }
      /**
       * Handles document click events for outside clicks
       */
      handleDocumentClick(e) {
          if (this.shouldIgnoreClick) {
              this.shouldIgnoreClick = false; // Reset flag
              return;
          }
          if (!this.menu.contains(e.target) && !this.referenceElement.contains(e.target)) {
              this.close();
          }
      }
      /**
       * Initializes the Dropdown component.
       */
      init() {
          return __awaiter(this, void 0, void 0, function* () {
              // Load Popper.js dynamically
              yield loadPopperJs();
              this.popperInstance = createPopper(this.referenceElement, this.menu, {
                  placement: this.config.placement,
                  modifiers: [{ name: "offset", options: { offset: this.config.offset } }],
              });
              // Close dropdown if clicked outside
              if (this.config.closeOnOutsideClick) {
                  document.addEventListener("click", this.documentClickHandler);
              }
          });
      }
      /**
       * Set the prevent outside click flag to true.
       */
      preventOutsideClick() {
          this.shouldIgnoreClick = true;
      }
      /**
       * Toggles the dropdown menu visibility.
       */
      toggle() {
          this.isOpen ? this.close() : this.open();
      }
      /**
       * Opens the dropdown menu programmatically.
       */
      open() {
          var _a;
          if (this.isOpen)
              return; // Prevent redundant calls
          this.menu.hidden = false;
          this.menu.classList.remove("hidden");
          (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
          this.isOpen = true; // Update internal state
      }
      /**
       * Closes the dropdown menu programmatically.
       */
      close() {
          if (!this.isOpen)
              return; // Prevent redundant calls
          this.menu.hidden = true;
          this.menu.classList.add("hidden");
          this.isOpen = false; // Update internal state
      }
      /**
       * Destroys the Dropdown instance and cleans up resources.
       */
      destroy() {
          var _a;
          (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
          this.popperInstance = null;
          document.removeEventListener("click", this.documentClickHandler);
      }
  }

  /**
   * Tracks initialized popover triggers to prevent duplicate initialization.
   */
  const initializedPopovers = new WeakSet();
  /**
   * Tracks active popovers for cleanup.
   */
  let activePopovers = [];
  /**
   * Initializes all popovers in the DOM.
   */
  function initPopovers() {
      document.querySelectorAll("[data-toggle='popover']").forEach((trigger) => {
          var _a;
          if (initializedPopovers.has(trigger))
              return; // Skip if already initialized
          const placement = trigger.getAttribute("data-placement") || "top";
          const popoverClasses = trigger.getAttribute("data-popover-class") || "popover-default";
          const plainContent = trigger.getAttribute("data-popover-content");
          const isOpenByDefault = trigger.hasAttribute("data-open");
          let popoverInstance = null;
          let popperInstance = null;
          let popoverElement = null;
          let originalContentElement = null;
          // Find content element next to the trigger
          const contentElement = ((_a = trigger.nextElementSibling) === null || _a === void 0 ? void 0 : _a.matches("[data-popover-content]"))
              ? trigger.nextElementSibling
              : null;
          /**
           * Opens the popover.
           */
          function openPopover() {
              return __awaiter(this, void 0, void 0, function* () {
                  yield loadPopperJs();
                  // Create the popover element
                  popoverElement = document.createElement("div");
                  popoverElement.className = popoverClasses;
                  // Use custom HTML content or plain text
                  if (contentElement) {
                      originalContentElement = contentElement.cloneNode(true);
                      originalContentElement.classList.remove("hidden");
                      popoverElement.appendChild(originalContentElement);
                  }
                  else if (plainContent) {
                      popoverElement.textContent = plainContent;
                  }
                  else {
                      console.error("No content provided for popover:", trigger);
                      return;
                  }
                  // Append the popover element to the body
                  document.body.appendChild(popoverElement);
                  // Initialize Popper.js
                  popoverInstance = createPopper(trigger, popoverElement, {
                      placement: placement,
                      modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
                  });
                  // Add a small delay to ensure Popper.js calculations are correct
                  requestAnimationFrame(() => {
                      if (popoverElement) {
                          popoverElement.style.opacity = "1"; // Make the popover visible
                          popoverElement.style.transform = "scale(1)"; // Apply scaling animation
                          popoverInstance === null || popoverInstance === void 0 ? void 0 : popoverInstance.update(); // Ensure Popper.js recalculates position
                      }
                  });
                  // Track active popovers for cleanup
                  if (popoverInstance) {
                      activePopovers.push({ trigger, popoverElement, popperInstance });
                  }
              });
          }
          /**
           * Closes the popover.
           */
          function closePopover() {
              if (popoverInstance) {
                  popoverInstance.destroy();
                  popoverInstance = null;
              }
              if (popoverElement) {
                  popoverElement.remove();
                  popoverElement = null;
              }
              if (originalContentElement) {
                  originalContentElement.classList.add("hidden");
              }
              // Remove from active popovers
              activePopovers = activePopovers.filter((p) => p.trigger !== trigger);
          }
          // Toggle popover on click
          trigger.addEventListener("click", (event) => {
              event.stopPropagation();
              if (popoverInstance) {
                  closePopover();
              }
              else {
                  openPopover();
              }
          });
          // Open popover by default if specified
          if (isOpenByDefault) {
              openPopover();
          }
          // Mark as initialized
          initializedPopovers.add(trigger);
      });
  }
  /**
   * Cleans up all active popovers and their event listeners.
   */
  function cleanupPopovers() {
      activePopovers.forEach(({ popoverElement, popperInstance }) => {
          if (popperInstance)
              popperInstance.destroy();
          if (popoverElement)
              popoverElement.remove();
      });
      activePopovers = [];
  }
  /**
   * Loads Popper.js dynamically and initializes popovers.
   */
  function loadAndInitPopovers() {
      return __awaiter(this, void 0, void 0, function* () {
          yield loadPopperJs();
          initPopovers();
      });
  }
  // Auto-initialize Popovers in the Browser Environment
  if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
          loadAndInitPopovers();
          // Observe the DOM for dynamically added popovers
          const observer = new MutationObserver(() => {
              initPopovers(); // Reinitialize popovers when new elements are added
          });
          observer.observe(document.body, { childList: true, subtree: true });
      });
  }

  /**
   * Class representing a programmatic Popover component.
   */
  class Popover {
      /**
       * Creates an instance of Popover.
       * @param trigger - The element that triggers the popover.
       * @param config - Configuration options for the popover.
       */
      constructor(trigger, config) {
          this.popperInstance = null;
          this.popoverElement = null;
          this.trigger = trigger;
          this.config = {
              placement: config.placement || "top",
              popoverClass: config.popoverClass || "popover-default",
              content: config.content || "",
              openByDefault: config.openByDefault || false,
              offset: config.offset || [0, 8],
          };
          this.init();
      }
      /**
       * Initializes the Popover instance.
       */
      init() {
          return __awaiter(this, void 0, void 0, function* () {
              if (this.config.openByDefault) {
                  yield this.open();
              }
              // Attach click event to toggle popover
              this.trigger.addEventListener("click", this.handleTriggerClick.bind(this));
          });
      }
      /**
       * Handles the click event on the trigger element.
       * @param event - The click event.
       */
      handleTriggerClick(event) {
          event.stopPropagation();
          this.toggle();
      }
      /**
       * Opens the popover programmatically.
       */
      open() {
          return __awaiter(this, void 0, void 0, function* () {
              if (this.popoverElement)
                  return; // Prevent duplicate popovers
              yield loadPopperJs();
              // Create the popover element
              this.popoverElement = document.createElement("div");
              this.popoverElement.className = this.config.popoverClass || "popover-default";
              // Set the content
              if (typeof this.config.content === "string") {
                  this.popoverElement.textContent = this.config.content;
              }
              else if (this.config.content instanceof HTMLElement) {
                  this.popoverElement.appendChild(this.config.content);
              }
              else {
                  console.error("Invalid content provided for popover:", this.trigger);
                  return;
              }
              // Append to the body
              document.body.appendChild(this.popoverElement);
              // Initialize Popper.js
              this.popperInstance = createPopper(this.trigger, this.popoverElement, {
                  placement: this.config.placement,
                  modifiers: [{ name: "offset", options: { offset: this.config.offset } }],
              });
              // Make visible
              requestAnimationFrame(() => {
                  var _a;
                  if (this.popoverElement) {
                      this.popoverElement.style.opacity = "1";
                      this.popoverElement.style.transform = "scale(1)";
                      (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
                  }
              });
          });
      }
      /**
       * Closes the popover programmatically.
       */
      close() {
          if (!this.popperInstance || !this.popoverElement)
              return;
          this.popperInstance.destroy();
          this.popperInstance = null;
          this.popoverElement.remove();
          this.popoverElement = null;
      }
      /**
       * Toggles the popover's visibility programmatically.
       */
      toggle() {
          if (this.popoverElement) {
              this.close();
          }
          else {
              this.open();
          }
      }
      /**
       * Destroys the Popover instance and cleans up resources.
       */
      destroy() {
          this.close();
          this.trigger.removeEventListener("click", this.handleTriggerClick.bind(this));
      }
  }

  const initializedTooltips = new WeakSet(); // Track initialized tooltips
  let activeTooltips = []; // Track active tooltips for cleanup
  function initTooltips() {
      document.querySelectorAll("[data-toggle='tooltip']").forEach((trigger) => {
          var _a;
          if (initializedTooltips.has(trigger))
              return; // Skip already initialized tooltips
          const title = trigger.getAttribute("data-title") || ""; // Tooltip text content
          const placement = trigger.getAttribute("data-placement") || "top";
          const tooltipClasses = trigger.getAttribute("data-tooltip-class") || "tooltip-default";
          let tooltipInstance = null;
          let tooltipElement = null;
          let customContentElement = null;
          // Check for custom HTML content in sibling
          if ((_a = trigger.nextElementSibling) === null || _a === void 0 ? void 0 : _a.matches("[data-tooltip-content]")) {
              customContentElement = trigger.nextElementSibling;
          }
          // Function to show the tooltip
          function showTooltip() {
              return __awaiter(this, void 0, void 0, function* () {
                  if (tooltipElement)
                      return; // Avoid creating multiple tooltips
                  yield loadPopperJs(); // Ensure Popper.js is loaded
                  tooltipElement = document.createElement("div");
                  tooltipElement.className = tooltipClasses;
                  // Add custom HTML or plain text to tooltip
                  if (customContentElement) {
                      const contentClone = customContentElement.cloneNode(true);
                      contentClone.classList.remove("hidden");
                      tooltipElement.appendChild(contentClone);
                  }
                  else if (title) {
                      tooltipElement.textContent = title;
                  }
                  else {
                      console.warn("No tooltip content provided for:", trigger);
                      return;
                  }
                  document.body.appendChild(tooltipElement);
                  tooltipInstance = createPopper(trigger, tooltipElement, {
                      placement,
                      modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
                  });
                  // Track active tooltip for cleanup
                  activeTooltips.push({ trigger, tooltipElement, tooltipInstance });
              });
          }
          // Function to hide the tooltip
          function hideTooltip() {
              if (tooltipInstance) {
                  tooltipInstance.destroy();
                  tooltipInstance = null;
              }
              if (tooltipElement) {
                  tooltipElement.remove();
                  tooltipElement = null;
              }
              // Remove from active tooltips
              activeTooltips = activeTooltips.filter((t) => t.trigger !== trigger);
          }
          // Event listeners for showing and hiding tooltips
          trigger.addEventListener("mouseenter", showTooltip);
          trigger.addEventListener("mouseleave", hideTooltip);
          // Mark the trigger as initialized
          initializedTooltips.add(trigger);
      });
  }
  // Cleanup function to remove all active tooltips
  function cleanupTooltips() {
      activeTooltips.forEach(({ tooltipElement, tooltipInstance }) => {
          if (tooltipInstance)
              tooltipInstance.destroy();
          if (tooltipElement)
              tooltipElement.remove();
      });
      activeTooltips = [];
  }
  // Combined initialization and loading function
  function loadAndInitTooltips() {
      return __awaiter(this, void 0, void 0, function* () {
          yield loadPopperJs();
          initTooltips();
      });
  }
  // Auto-initialize Tooltips in the browser
  if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
          loadAndInitTooltips();
          // Observe DOM for dynamically added tooltips
          const observer = new MutationObserver(() => {
              initTooltips();
          });
          observer.observe(document.body, { childList: true, subtree: true });
      });
  }

  class Tooltip {
      constructor(triggerElement, options = {}) {
          this.tooltipElement = null;
          this.tooltipInstance = null;
          this.triggerElement = triggerElement;
          this.options = {
              placement: options.placement || "top",
              tooltipClass: options.tooltipClass || "tooltip-default",
              content: options.content || "",
          };
          this.init();
      }
      init() {
          return __awaiter(this, void 0, void 0, function* () {
              yield loadPopperJs();
              this.triggerElement.addEventListener("mouseenter", this.showTooltip.bind(this));
              this.triggerElement.addEventListener("mouseleave", this.hideTooltip.bind(this));
          });
      }
      showTooltip() {
          return __awaiter(this, void 0, void 0, function* () {
              if (this.tooltipElement)
                  return; // Avoid duplicate tooltips
              this.tooltipElement = document.createElement("div");
              this.tooltipElement.className = this.options.tooltipClass;
              if (typeof this.options.content === "string") {
                  this.tooltipElement.textContent = this.options.content;
              }
              else if (this.options.content instanceof HTMLElement) {
                  const contentClone = this.options.content.cloneNode(true);
                  contentClone.classList.remove("hidden");
                  this.tooltipElement.appendChild(contentClone);
              }
              else {
                  console.warn("No valid content provided for tooltip.");
                  return;
              }
              document.body.appendChild(this.tooltipElement);
              this.tooltipInstance = createPopper(this.triggerElement, this.tooltipElement, {
                  placement: this.options.placement,
                  modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
              });
          });
      }
      hideTooltip() {
          if (this.tooltipInstance) {
              this.tooltipInstance.destroy();
              this.tooltipInstance = null;
          }
          if (this.tooltipElement) {
              this.tooltipElement.remove();
              this.tooltipElement = null;
          }
      }
      destroy() {
          this.triggerElement.removeEventListener("mouseenter", this.showTooltip.bind(this));
          this.triggerElement.removeEventListener("mouseleave", this.hideTooltip.bind(this));
          this.hideTooltip();
      }
  }

  const initializedTabs$1 = new WeakSet(); // Track initialized tabs to prevent duplication
  /**
   * Initialize all tabs in the document.
   */
  function initTabs() {
      document.querySelectorAll(".tab-group").forEach((tabGroup) => {
          if (initializedTabs$1.has(tabGroup))
              return; // Skip already initialized tab groups
          const tabList = tabGroup.querySelector("[role='tablist']");
          const tabLinks = (tabList === null || tabList === void 0 ? void 0 : tabList.querySelectorAll(".tab-link")) || [];
          const tabContents = tabGroup.querySelectorAll(".tab-content");
          const indicator = tabList === null || tabList === void 0 ? void 0 : tabList.querySelector(".tab-indicator");
          const isVertical = tabGroup.getAttribute("data-orientation") === "vertical";
          /**
           * Updates the indicator's position dynamically.
           * @param link The active tab link element.
           */
          function updateIndicator(link) {
              const rect = link.getBoundingClientRect();
              const parentRect = tabList === null || tabList === void 0 ? void 0 : tabList.getBoundingClientRect();
              if (!parentRect || !indicator)
                  return;
              requestAnimationFrame(() => {
                  if (isVertical) {
                      indicator.style.transform = `translateY(${rect.top - parentRect.top}px)`;
                      indicator.style.height = `${rect.height}px`;
                  }
                  else {
                      indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`;
                      indicator.style.width = `${rect.width}px`;
                  }
                  // Make the indicator visible
                  indicator.classList.remove("hidden");
                  indicator.style.opacity = "1";
                  indicator.style.scale = "1";
              });
          }
          /**
           * Activates the specified tab.
           * @param link The tab link element to activate.
           */
          function activateTab(link) {
              // Deactivate all tabs and hide their content
              tabLinks.forEach((item) => item.classList.remove("active"));
              tabContents.forEach((content) => {
                  content.classList.add("hidden");
                  content.classList.remove("block");
              });
              // Activate the clicked tab
              link.classList.add("active");
              const targetContentId = link.getAttribute("data-tab-target");
              const targetContent = targetContentId ? document.getElementById(targetContentId) : null;
              if (targetContent) {
                  targetContent.classList.add("block");
                  targetContent.classList.remove("hidden");
              }
              // Update the indicator position
              updateIndicator(link);
          }
          /**
           * Initializes the tab group.
           */
          function initializeTabGroup() {
              const activeLink = tabList === null || tabList === void 0 ? void 0 : tabList.querySelector(".tab-link.active");
              if (activeLink) {
                  activateTab(activeLink); // Set indicator for the initially active tab
              }
              else if (tabLinks.length > 0) {
                  activateTab(tabLinks[0]); // Fallback to the first tab if no active tab is defined
              }
              // Attach click listeners to each tab link
              tabLinks.forEach((link) => {
                  link.addEventListener("click", (event) => {
                      event.preventDefault(); // Prevent default browser behavior
                      activateTab(link); // Activate the clicked tab and update the indicator
                  });
              });
          }
          initializeTabGroup();
          initializedTabs$1.add(tabGroup); // Mark the tab group as initialized
      });
  }
  /**
   * Cleans up all initialized tabs.
   */
  function cleanupTabs() {
      // Query all tab groups in the document instead of trying to iterate WeakSet
      document.querySelectorAll(".tab-group").forEach((tabGroup) => {
          if (initializedTabs$1.has(tabGroup)) {
              const tabList = tabGroup.querySelector("[role='tablist']");
              const tabLinks = (tabList === null || tabList === void 0 ? void 0 : tabList.querySelectorAll(".tab-link")) || [];
              // Remove event listeners from tab links
              tabLinks.forEach((link) => {
                  if (link.parentNode) {
                      const clone = link.cloneNode(true);
                      link.parentNode.replaceChild(clone, link);
                  }
              });
              // Remove the tab group from the WeakSet
              initializedTabs$1.delete(tabGroup);
          }
      });
  }
  // Auto-initialize tabs in the browser
  if (typeof window !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
          initTabs();
          // Observe DOM changes to reinitialize tabs dynamically
          const observer = new MutationObserver(() => {
              initTabs();
          });
          observer.observe(document.body, { childList: true, subtree: true });
      });
  }

  const initializedTabs = new WeakSet();
  /**
   * A class for managing tabs programmatically.
   */
  class Tabs {
      /**
       * Creates a new Tabs instance.
       * @param tabGroup - The container element of the tab group.
       * @param options - Configuration options for the tabs.
       */
      constructor(tabGroup, options = { orientation: "horizontal" }) {
          var _a, _b, _c;
          if (initializedTabs.has(tabGroup)) {
              throw new Error("This tab group is already initialized.");
          }
          this.tabGroup = tabGroup;
          this.tabList = tabGroup.querySelector("[role='tablist']");
          this.tabLinks = Array.from(((_a = this.tabList) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".tab-link")) || []);
          this.tabContents = Array.from(tabGroup.querySelectorAll(".tab-content"));
          this.indicator = ((_b = this.tabList) === null || _b === void 0 ? void 0 : _b.querySelector(".tab-indicator")) || null; // Fallback to null if undefined
          this.orientation = options.orientation || "horizontal";
          this.defaultTabId = options.defaultTabId || ((_c = this.tabLinks[0]) === null || _c === void 0 ? void 0 : _c.id) || "tab1";
          this.initialize();
          initializedTabs.add(tabGroup);
      }
      /**
       * Initializes the tab group by setting up event listeners and activating the initial tab.
       */
      initialize() {
          var _a;
          // First check for defaultTabId
          const defaultTab = this.tabLinks.find(link => link.id === this.defaultTabId);
          // Then check for an active tab
          const activeTab = defaultTab ||
              ((_a = this.tabList) === null || _a === void 0 ? void 0 : _a.querySelector(".tab-link.active")) ||
              this.tabLinks[0];
          if (activeTab) {
              // Ensure all other tabs are deactivated first
              this.tabLinks.forEach((t) => t.classList.remove("active"));
              this.tabContents.forEach((c) => {
                  c.classList.add("hidden");
                  c.classList.remove("block");
              });
              setTimeout(() => {
                  this.activateTab(activeTab.id);
              }, 300);
          }
          this.tabLinks.forEach((link) => {
              link.addEventListener("click", (event) => {
                  event.preventDefault();
                  this.activateTab(link.id);
              });
          });
      }
      /**
       * Updates the position of the tab indicator dynamically.
       * @param link - The active tab link element.
       */
      updateIndicator(link) {
          var _a;
          const rect = link.getBoundingClientRect();
          const parentRect = (_a = this.tabList) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
          if (!parentRect || !this.indicator)
              return;
          requestAnimationFrame(() => {
              if (this.orientation === "vertical") {
                  this.indicator.style.transform = `translateY(${rect.top - parentRect.top}px)`;
                  this.indicator.style.height = `${rect.height}px`;
              }
              else {
                  this.indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`;
                  this.indicator.style.width = `${rect.width}px`;
              }
              this.indicator.classList.remove("hidden");
              this.indicator.style.opacity = "1";
              this.indicator.style.scale = "1";
          });
      }
      /**
       * Activates the specified tab by its ID.
       * @param tabId - The ID of the tab to activate.
       */
      activateTab(tabId) {
          const tab = this.tabLinks.find((t) => t.id === tabId);
          const content = this.tabContents.find((c) => c.id === `${tabId}-content`);
          if (!tab || !content) {
              console.warn(`Tab or content with id ${tabId} not found`);
              return;
          }
          // Deactivate all tabs and contents
          this.tabLinks.forEach((t) => t.classList.remove("active"));
          this.tabContents.forEach((c) => {
              c.classList.add("hidden");
              c.classList.remove("block");
          });
          // Activate the clicked tab
          tab.classList.add("active");
          content.classList.add("block");
          content.classList.remove("hidden");
          // Update the indicator position
          this.updateIndicator(tab);
      }
      /**
       * Cleans up the tab group by removing event listeners and resetting the DOM.
       */
      cleanup() {
          this.tabLinks.forEach((link) => {
              const clone = link.cloneNode(true);
              link.replaceWith(clone);
          });
          initializedTabs.delete(this.tabGroup);
      }
  }

  // A reference to all initialized triggers, so we don't rebind event listeners.
  let initializedModals = new WeakSet();
  // Track active modals for cleanup
  let activeModals = [];
  /**
   * Toggle the modal on or off.
   */
  function toggleModal(event) {
      const trigger = event.currentTarget;
      if (!trigger)
          return;
      const modalID = trigger.getAttribute("data-target");
      if (!modalID)
          return;
      const modal = document.querySelector(modalID);
      if (!modal)
          return;
      const isHidden = modal.classList.contains("pointer-events-none");
      // Toggle opacity classes
      modal.classList.toggle("opacity-0", !isHidden);
      modal.classList.toggle("opacity-100", isHidden);
      // Toggle pointer-events
      if (isHidden) {
          modal.classList.remove("pointer-events-none");
      }
      else {
          setTimeout(() => modal.classList.add("pointer-events-none"), 300);
      }
      // Toggle scale classes
      const modalContent = modal.querySelector(isHidden ? ".scale-95" : ".scale-100");
      if (modalContent) {
          modalContent.classList.toggle("scale-95", !isHidden);
          modalContent.classList.toggle("scale-100", isHidden);
      }
      // Update aria-hidden
      modal.setAttribute("aria-hidden", String(!isHidden));
      // Add or remove event listener for outside clicks
      if (isHidden) {
          modal.addEventListener("click", closeOnOutsideClick);
          activeModals.push(modal);
      }
      else {
          modal.removeEventListener("click", closeOnOutsideClick);
          activeModals = activeModals.filter((m) => m !== modal);
      }
  }
  /**
   * Close the modal programmatically or via an event.
   * Accepts either an Event or a direct HTMLElement.
   */
  function closeModal(input) {
      let modal = null;
      if (input instanceof Event) {
          const trigger = input.currentTarget;
          if (!trigger)
              return;
          modal = trigger.closest(".fixed");
      }
      else {
          modal = input;
      }
      if (!modal)
          return;
      // Fade out
      modal.classList.add("opacity-0");
      modal.classList.remove("opacity-100");
      // Scale down
      const modalContent = modal.querySelector(".scale-100");
      if (modalContent) {
          modalContent.classList.add("scale-95");
          modalContent.classList.remove("scale-100");
      }
      // After transition finishes, hide pointer events
      setTimeout(() => {
          modal.classList.add("pointer-events-none");
          modal.setAttribute("aria-hidden", "true");
      }, 300);
      modal.removeEventListener("click", closeOnOutsideClick);
      // Remove from the active modals array
      activeModals = activeModals.filter((m) => m !== modal);
  }
  /**
   * Close the modal if a click happens outside of the modal content.
   */
  function closeOnOutsideClick(event) {
      const modal = event.currentTarget;
      if (!modal)
          return;
      const modalContent = modal.querySelector(".scale-100, .scale-95");
      if (!modalContent)
          return;
      if (!modalContent.contains(event.target)) {
          closeModal(modal); // Pass the modal directly
      }
  }
  /**
   * Initialize modal triggers and dismiss buttons.
   */
  function initModal() {
      // For opening modals
      document.querySelectorAll("[data-toggle='modal']").forEach((trigger) => {
          if (!initializedModals.has(trigger)) {
              trigger.addEventListener("click", toggleModal);
              initializedModals.add(trigger);
          }
      });
      // For closing modals
      document.querySelectorAll("[data-dismiss='modal']").forEach((button) => {
          if (!initializedModals.has(button)) {
              button.addEventListener("click", closeModal);
              initializedModals.add(button);
          }
      });
  }
  /**
   * Cleanup function to remove event listeners from active modals.
   */
  function cleanupModals() {
      activeModals.forEach((modal) => {
          modal.removeEventListener("click", closeOnOutsideClick);
      });
      activeModals = [];
      // Reassign a new WeakSet to "clear" it
      initializedModals = new WeakSet();
  }
  // Auto-initialize Modals in the Browser Environment
  if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
          initModal();
          // Observe the DOM for dynamically added modals
          const observer = new MutationObserver(() => {
              initModal(); // Re-initialize modals when new elements are added
          });
          observer.observe(document.body, { childList: true, subtree: true });
      });
  }

  /**
   * A class to handle programmatic modal behavior.
   * @implements {IModal}
   */
  class Modal {
      /**
       * Initialize the modal.
       * @param {HTMLElement} modalElement - The modal element.
       * @param {ModalConfig} [config={}] - Configuration options for the modal.
       */
      constructor(modalElement, config = {}) {
          this._isVisible = false;
          /**
           * Handle keydown events (e.g., Escape to close the modal).
           * @param {KeyboardEvent} event
           */
          this.handleKeydown = (event) => {
              if (event.key === 'Escape') {
                  this.hide();
              }
          };
          /**
           * Handle clicks outside the modal content to close the modal.
           * @param {MouseEvent} event
           */
          this.handleOutsideClick = (event) => {
              const target = event.target;
              // Reference to the first child of the modal element
              const modalContent = this._modalElement.firstElementChild;
              // Check if the click is outside the modal content
              if (modalContent && !modalContent.contains(target)) {
                  this.hide();
              }
          };
          this._modalElement = modalElement;
          this._config = Object.assign({ keyboard: true, closeOnOutsideClick: true }, config);
          // Setup modal
          this.setupModal();
          setTimeout(() => {
              this.removeHiddenClass();
          }, 300);
      }
      /**
       * Show the modal.
       */
      show() {
          if (this._isVisible)
              return;
          this._isVisible = true;
          this._modalElement.classList.remove('opacity-0', 'pointer-events-none');
          this._modalElement.classList.add('opacity-100');
          this._modalElement.setAttribute('aria-hidden', 'false');
          // Add listeners
          if (this._config.keyboard) {
              document.addEventListener('keydown', this.handleKeydown);
          }
          if (this._config.closeOnOutsideClick) {
              document.addEventListener('click', this.handleOutsideClick, true); // Capture phase
          }
      }
      /**
       * Hide the modal.
       */
      hide() {
          if (!this._isVisible)
              return;
          this._isVisible = false;
          // Hide the modal element with animation
          this._modalElement.classList.add('opacity-0', 'pointer-events-none');
          this._modalElement.classList.remove('opacity-100');
          this._modalElement.setAttribute('aria-hidden', 'true');
          // Remove listeners
          if (this._config.keyboard) {
              document.removeEventListener('keydown', this.handleKeydown);
          }
          if (this._config.closeOnOutsideClick) {
              document.removeEventListener('click', this.handleOutsideClick, true);
          }
      }
      /**
       * Toggle the modal's visibility.
       */
      toggle() {
          this._isVisible ? this.hide() : this.show();
      }
      /**
       * Check if the modal is currently visible.
       * @returns {boolean}
       */
      isVisible() {
          return this._isVisible;
      }
      /**
       * Set up initial modal state.
       * Hides the modal if it's not already hidden.
       */
      setupModal() {
          const isHidden = this._modalElement.classList.contains('opacity-0') ||
              this._modalElement.getAttribute('aria-hidden') === 'true';
          this._isVisible = !isHidden;
          // Ensure proper initial state
          if (isHidden) {
              this._modalElement.classList.add('opacity-0', 'pointer-events-none');
              this._modalElement.classList.remove('opacity-100');
          }
          else {
              this._modalElement.classList.remove('opacity-0', 'pointer-events-none');
              this._modalElement.classList.add('opacity-100');
          }
          this._modalElement.setAttribute('aria-hidden', String(isHidden));
      }
      /**
       * Removes the hidden class from the modal element.
       * This is typically called before showing the modal.
       */
      removeHiddenClass() {
          this._modalElement.classList.remove('hidden');
      }
  }

  // Accordion Component
  const initializedAccordionElements = new WeakSet();
  // Helper function to handle icons
  const handleIcons = (button, isExpanded, isRotating = false) => {
      const openIcon = button.querySelector("[data-accordion-icon-open]");
      const closeIcon = button.querySelector("[data-accordion-icon-close]");
      const rotatingIcon = button.querySelector("[data-accordion-icon]");
      if (openIcon && closeIcon) {
          openIcon.style.display = isExpanded ? "block" : "none";
          closeIcon.style.display = isExpanded ? "none" : "block";
      }
      if (rotatingIcon) {
          rotatingIcon.classList.toggle("rotate-180", isRotating ? isExpanded : !isExpanded);
      }
  };
  // Helper function to toggle accordion state
  const toggleAccordionState = (targetElement, button, isExpanded) => {
      targetElement.style.maxHeight = isExpanded ? `${targetElement.scrollHeight}px` : "0";
      button.setAttribute("aria-expanded", String(isExpanded));
      handleIcons(button, isExpanded);
  };
  // Function to toggle accordion items
  function toggleAccordion(event) {
      const button = event.currentTarget;
      if (button.getAttribute("aria-disabled") === "true")
          return;
      const targetID = button.dataset.accordionTarget;
      const parentElement = button.closest("[data-accordion-container]");
      const mode = parentElement === null || parentElement === void 0 ? void 0 : parentElement.dataset.accordionMode;
      if (targetID === null || targetID === void 0 ? void 0 : targetID.startsWith("#")) {
          const targetElement = document.querySelector(targetID);
          const isExpanded = button.getAttribute("aria-expanded") === "true";
          if (mode === "exclusive" && parentElement) {
              parentElement.querySelectorAll("[data-accordion-toggle]").forEach(otherButton => {
                  const otherTargetID = otherButton.dataset.accordionTarget;
                  if (otherTargetID && otherTargetID !== targetID) {
                      const otherElement = document.querySelector(otherTargetID);
                      if (otherElement instanceof HTMLElement) {
                          toggleAccordionState(otherElement, otherButton, false);
                      }
                  }
              });
          }
          if (targetElement) {
              toggleAccordionState(targetElement, button, !isExpanded);
          }
      }
  }
  // Function to manually toggle accordion item by ID
  function toggleAccordionById(targetId) {
      targetId = targetId.startsWith("#") ? targetId : `#${targetId}`;
      const targetElement = document.querySelector(targetId);
      const toggleButton = document.querySelector(`[data-accordion-target="${targetId}"]`);
      if ((toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.getAttribute("aria-disabled")) === "true" ||
          !targetElement ||
          !toggleButton)
          return;
      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
      const parentElement = toggleButton.closest("[data-accordion-container]");
      const mode = parentElement === null || parentElement === void 0 ? void 0 : parentElement.dataset.accordionMode;
      if (mode === "exclusive" && parentElement) {
          parentElement.querySelectorAll("[data-accordion-toggle]").forEach((otherButton) => {
              const otherTargetID = otherButton.dataset.accordionTarget;
              // Ensure otherTargetID is a string
              if (typeof otherTargetID === "string" && otherTargetID !== targetId) {
                  const otherElement = document.querySelector(otherTargetID);
                  // Ensure otherElement is an instance of HTMLElement
                  if (otherElement instanceof HTMLElement) {
                      toggleAccordionState(otherElement, otherButton, false);
                  }
              }
          });
      }
      toggleAccordionState(targetElement, toggleButton, !isExpanded);
  }
  // Function to initialize accordion functionality
  function initAccordion() {
      document.querySelectorAll("[data-accordion-toggle]").forEach((button) => {
          if (!initializedAccordionElements.has(button)) {
              button.addEventListener("click", toggleAccordion);
              initializedAccordionElements.add(button);
              const targetID = button.dataset.accordionTarget;
              // Ensure targetID is a valid string
              if (typeof targetID === "string") {
                  const targetElement = document.querySelector(targetID);
                  // Ensure targetElement is an HTMLElement
                  if (targetElement instanceof HTMLElement) {
                      const isExpanded = button.getAttribute("aria-expanded") === "true";
                      toggleAccordionState(targetElement, button, isExpanded);
                  }
              }
          }
      });
  }
  // Function to cleanup accordion functionality
  function cleanupAccordions() {
      document.querySelectorAll("[data-accordion-toggle]").forEach(button => {
          if (initializedAccordionElements.has(button)) {
              button.removeEventListener("click", toggleAccordion);
              initializedAccordionElements.delete(button);
          }
      });
  }
  // Make toggleAccordionById available globally
  if (typeof window !== "undefined") {
      window.toggleAccordionById = toggleAccordionById;
      document.addEventListener("DOMContentLoaded", () => {
          initAccordion();
          new MutationObserver(initAccordion).observe(document.body, {
              childList: true,
              subtree: true,
          });
      });
  }

  class Accordion {
      constructor(container, options = {}) {
          this.initialized = new WeakSet();
          this.toggleHandler = (event) => {
              const button = event.currentTarget;
              this.toggle(button);
          };
          this.container = container;
          this.options = options;
          this.init();
      }
      init() {
          const buttons = Array.from(this.container.children).filter((el) => el instanceof HTMLElement);
          buttons.forEach((button) => {
              const content = button.nextElementSibling;
              if (content) {
                  this.initialized.add(button);
                  button.addEventListener('click', this.toggleHandler);
                  const isExpanded = this.options.allOpen || false;
                  this.setAccordionState(button, content, isExpanded);
              }
          });
          if (this.options.allOpen) {
              this.showAll();
          }
      }
      resolveElement(element) {
          if (typeof element === 'string') {
              return document.getElementById(element);
          }
          return element;
      }
      toggle(element) {
          const button = this.resolveElement(element);
          if (!button)
              return;
          const content = button.nextElementSibling;
          if (!content)
              return;
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
          if (this.options.exclusive) {
              Array.from(this.container.children).forEach((child) => {
                  if (child instanceof HTMLElement && child !== button) {
                      const otherContent = child.nextElementSibling;
                      if (otherContent) {
                          this.setAccordionState(child, otherContent, false);
                      }
                  }
              });
          }
          this.setAccordionState(button, content, !isExpanded);
      }
      show(element) {
          const button = this.resolveElement(element);
          if (!button)
              return;
          const content = button.nextElementSibling;
          if (!content)
              return;
          this.setAccordionState(button, content, true);
      }
      hide(element) {
          const button = this.resolveElement(element);
          if (!button)
              return;
          const content = button.nextElementSibling;
          if (!content)
              return;
          this.setAccordionState(button, content, false);
      }
      showAll() {
          Array.from(this.container.children).forEach((child) => {
              if (child instanceof HTMLElement) {
                  const content = child.nextElementSibling;
                  if (content) {
                      this.setAccordionState(child, content, true);
                  }
              }
          });
      }
      hideAll() {
          Array.from(this.container.children).forEach((child) => {
              if (child instanceof HTMLElement) {
                  const content = child.nextElementSibling;
                  if (content) {
                      this.setAccordionState(child, content, false);
                  }
              }
          });
      }
      cleanup() {
          Array.from(this.container.children).forEach((button) => {
              if (button instanceof HTMLElement && this.initialized.has(button)) {
                  button.removeEventListener('click', this.toggleHandler);
                  this.initialized.delete(button);
              }
          });
      }
      setAccordionState(button, content, isExpanded) {
          content.style.maxHeight = isExpanded ? `${content.scrollHeight}px` : '0';
          button.setAttribute('aria-expanded', String(isExpanded));
          const openIcon = button.querySelector('[data-accordion-icon-open]');
          const closeIcon = button.querySelector('[data-accordion-icon-close]');
          if (openIcon) {
              openIcon.style.display = isExpanded ? 'block' : 'none';
          }
          if (closeIcon) {
              closeIcon.style.display = isExpanded ? 'none' : 'block';
          }
          const icon = button.querySelector('[data-accordion-icon]');
          if (icon) {
              icon.classList.toggle('rotate-180', isExpanded);
          }
      }
  }

  // Stepper Component
  const initializedStepperElements = new WeakSet();
  function updateStepperState(container) {
      const steps = container.querySelectorAll("[data-step]");
      const stepContents = container.querySelectorAll("[data-step-content]");
      const prevButtons = container.querySelectorAll("[data-stepper-prev]");
      const nextButtons = container.querySelectorAll("[data-stepper-next]");
      let currentStep = parseInt(container.getAttribute("data-step") || "1", 10);
      function updateState() {
          // Update step circles and connector lines
          steps.forEach((step, index) => {
              const stepNumber = index + 1;
              step.setAttribute("data-active", String(stepNumber === currentStep));
              step.setAttribute("data-completed", String(stepNumber < currentStep));
              step.setAttribute("aria-disabled", String(stepNumber > currentStep));
          });
          // Update step content visibility
          stepContents.forEach((content) => {
              const contentStep = parseInt(content.getAttribute("data-step-content") || "0", 10);
              if (contentStep === currentStep) {
                  content.classList.remove("hidden");
              }
              else {
                  content.classList.add("hidden");
              }
          });
          // Enable/disable buttons based on step
          prevButtons.forEach((button) => {
              button.disabled = currentStep === 1;
          });
          nextButtons.forEach((button) => {
              button.disabled = currentStep === steps.length;
          });
      }
      // Event listeners for buttons
      function onNextButtonClick() {
          if (currentStep < steps.length) {
              currentStep++;
              container.setAttribute("data-step", String(currentStep));
              updateState();
          }
      }
      function onPrevButtonClick() {
          if (currentStep > 1) {
              currentStep--;
              container.setAttribute("data-step", String(currentStep));
              updateState();
          }
      }
      nextButtons.forEach((button) => {
          button.addEventListener("click", onNextButtonClick);
      });
      prevButtons.forEach((button) => {
          button.addEventListener("click", onPrevButtonClick);
      });
      // Store references to cleanup
      container.__stepperCleanup = () => {
          nextButtons.forEach((button) => {
              button.removeEventListener("click", onNextButtonClick);
          });
          prevButtons.forEach((button) => {
              button.removeEventListener("click", onPrevButtonClick);
          });
      };
      // Initialize the state
      updateState();
  }
  // Function to initialize all steppers
  function initStepper() {
      document.querySelectorAll("[data-stepper-container]").forEach((container) => {
          if (!initializedStepperElements.has(container)) {
              initializedStepperElements.add(container);
              // Set initial step based on attribute
              const initialStep = parseInt(container.getAttribute("data-initial-step") || "1", 10);
              container.setAttribute("data-step", String(initialStep));
              updateStepperState(container);
          }
      });
  }
  // Cleanup function to remove all steppers
  function cleanupSteppers() {
      document.querySelectorAll("[data-stepper-container]").forEach((container) => {
          if (container.__stepperCleanup) {
              container.__stepperCleanup();
              delete container.__stepperCleanup;
          }
          initializedStepperElements.delete(container);
      });
  }
  // Auto-initialize steppers on DOMContentLoaded and observe dynamically added elements
  if (typeof window !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
          initStepper();
          new MutationObserver(initStepper).observe(document.body, {
              childList: true,
              subtree: true,
          });
      });
  }

  class Stepper {
      constructor(config) {
          this.steps = config.stepElements;
          this.contents = config.contentElements;
          this.prevButton = config.prevButton;
          this.nextButton = config.nextButton;
          this.currentStep = config.initialStep || 1;
          this.updateState();
          this.prevButton.addEventListener('click', () => this.prev());
          this.nextButton.addEventListener('click', () => this.next());
      }
      updateState() {
          this.steps.forEach((step, index) => {
              const stepNumber = index + 1;
              step.dataset.active = String(stepNumber === this.currentStep);
              step.dataset.completed = String(stepNumber < this.currentStep);
              step.setAttribute('aria-disabled', String(stepNumber > this.currentStep));
          });
          this.contents.forEach((content, index) => {
              content.classList.toggle('hidden', index + 1 !== this.currentStep);
          });
          this.prevButton.disabled = this.currentStep === 1;
          this.nextButton.disabled = this.currentStep === this.steps.length;
      }
      next() {
          if (this.currentStep < this.steps.length) {
              this.currentStep++;
              this.updateState();
          }
      }
      prev() {
          if (this.currentStep > 1) {
              this.currentStep--;
              this.updateState();
          }
      }
      goToStep(step) {
          if (step >= 1 && step <= this.steps.length) {
              this.currentStep = step;
              this.updateState();
          }
      }
      getCurrentStep() {
          return this.currentStep;
      }
      destroy() {
          this.prevButton.removeEventListener('click', () => this.prev());
          this.nextButton.removeEventListener('click', () => this.next());
      }
  }

  // Utilities
  // Aggregate all exports into a single object for UMD consumers
  const MaterialTailwind = {
      initAlert,
      initCollapse,
      initDropdowns,
      cleanupDropdowns,
      initPopovers,
      cleanupPopovers,
      initTooltips,
      cleanupTooltips,
      initTabs,
      cleanupTabs,
      initModal,
      cleanupModals,
      initAccordion,
      cleanupAccordions,
      toggleAccordionById,
      initStepper,
      cleanupSteppers,
      initGallery,
      cleanupGallery,
  };
  // Global initialization function
  function initMaterialTailwind() {
      // Initialize non-Popper components
      initAlert();
      initCollapse();
      initTabs();
      initModal();
      initAccordion();
      initStepper();
      initGallery();
      // Dynamically load Popper.js and initialize Popper-dependent components
      loadPopperJs()
          .then(() => {
          initDropdowns();
          initPopovers();
          initTooltips();
      })
          .catch((error) => {
          console.error('Failed to load Popper.js:', error);
      });
  }
  // Automatically initialize in the browser environment
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', () => {
          // Initialize all components
          initMaterialTailwind();
          // Observe DOM changes for dynamically added elements
          const observer = new MutationObserver(() => {
              initAlert();
              initCollapse();
              initAccordion();
              initStepper();
              initGallery();
              initTabs();
              initModal();
              initDropdowns();
              initPopovers();
              initTooltips();
          });
          observer.observe(document.body, { childList: true, subtree: true });
          // Expose MaterialTailwind globally for UMD usage
          window.MaterialTailwind = Object.assign(Object.assign({}, MaterialTailwind), { initMaterialTailwind });
      });
  }
  // Default export for ES modules
  var index = Object.assign(Object.assign({}, MaterialTailwind), { initMaterialTailwind });

  exports.Accordion = Accordion;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.MaterialTailwind = MaterialTailwind;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Stepper = Stepper;
  exports.Tabs = Tabs;
  exports.Tooltip = Tooltip;
  exports.cleanupAccordions = cleanupAccordions;
  exports.cleanupDropdowns = cleanupDropdowns;
  exports.cleanupGallery = cleanupGallery;
  exports.cleanupModals = cleanupModals;
  exports.cleanupPopovers = cleanupPopovers;
  exports.cleanupSteppers = cleanupSteppers;
  exports.cleanupTabs = cleanupTabs;
  exports.cleanupTooltips = cleanupTooltips;
  exports.default = index;
  exports.initAccordion = initAccordion;
  exports.initAlert = initAlert;
  exports.initCollapse = initCollapse;
  exports.initDropdowns = initDropdowns;
  exports.initGallery = initGallery;
  exports.initMaterialTailwind = initMaterialTailwind;
  exports.initModal = initModal;
  exports.initPopovers = initPopovers;
  exports.initStepper = initStepper;
  exports.initTabs = initTabs;
  exports.initTooltips = initTooltips;
  exports.toggleAccordionById = toggleAccordionById;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-tailwind.umd.js.map
