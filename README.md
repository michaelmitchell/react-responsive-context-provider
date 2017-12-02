[![github tag](https://img.shields.io/github/tag/michaelmitchell/react-responsive-context-provider.svg?maxAge=2592000)]()
[![npm version](https://badge.fury.io/js/react-responsive-context-provider.svg)](https://badge.fury.io/js/react-responsive-context-provider)
[![npm license](https://img.shields.io/npm/l/react-responsive-context-provider.svg?maxAge=2592000)]()
[![Known Vulnerabilities](https://snyk.io/test/npm/react-responsive-context-provider/badge.svg)](https://snyk.io/test/npm/react-responsive-context-provider)

# react-responsive-context-provider

Higher order component that provides responsive media context using [react-responsive](https://github.com/contra/react-responsive) and [react-responsive-multi-query](https://github.com/michaelmitchell/react-responsive-multi-query)

## Installation

```sh
$ npm install react-responsive-context-provider --save
```

## Example

```javascript
...
import ResponsiveContextProvider from 'react-responsive-context-provider';

// I prefer numbers for easier comparisons
export const XL = 5;
export const L = 4;
export const M = 3;
export const S = 2;
export const XS = 1;

//
const mediaQuery = [{
  query: { minWidth: 1921, maxWidth: 99999 },
  context: { size: XL }
}, {
  query: { minWidth: 1281, maxWidth: 1920 },
  context: { size: L }
}, {
  query: { minWidth: 721, maxWidth: 1280 },
  context: { size: M }
}, {
  query: { minWidth: 481, maxWidth: 720 },
  context: { size: S }
}, {
  query: { minWidth: 0, maxWidth: 480 },
  context: () => ({ size: XS }) // can be a function
}];

//
const Title = (props, context) => {
  const mediaSize = props.mediaSize || context.media.size || L;
  const fontSize = (mediaSize > M) ? 64 : 32;

  return (
    <h1 style={{ fontSize }}>Responsive Heading</h1>
  );
};

//
MyResponsiveComp.contextTypes = {
  media: React.PropTypes.object
};

//
const Viewport = () => (
  <ResponsiveContextProvider query={mediaQuery}>
    <Title />
  </ResponsiveContextProvider>
);
```

## Props
- `query` (Array) - Media queries to match against and context to provide if matched
  - `query` (String|Object) - Same as queries from  [react-responsive](https://github.com/contra/react-responsive)
  - `context` (Mixed|Function) - A value or function that will return a value that the `media` context will be set to when matched

## The catch...
Because this simply wraps [react-responsive](https://github.com/contra/react-responsive) and [react-responsive-multi-query](https://github.com/michaelmitchell/react-responsive-multi-query) to build the media queries based on the principle of showing and hiding children you must make sure your media queries are unique otherwise your nested components will render more than once.

## ...and how it should work
Because the above situation is not the ideal I would prefer it behaved a little more like [react-media-context](https://github.com/jxnblk/react-media-context) while maintaining the features of [react-responsive](https://github.com/contra/react-responsive) and the flexibility and configuration of [react-responsive-multi-query](https://github.com/michaelmitchell/react-responsive-multi-query) but only render the first matching media query at any given time.

But this is all I have time for right now and it works just fine for my purposes and maybe for yours too?

# License

MIT

---
[![Donate](https://liberapay.com/assets/widgets/donate.svg)](https://liberapay.com/michaelmitchell/donate)
