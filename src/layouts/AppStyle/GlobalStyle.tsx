import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    font-family: 'NanumSquareRound','Apple SD Gothic Neo',arial,sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    color: #333;
    overflow-y: scroll;
    font-size: 1.6rem;
    width: 100%;
    height: 100%;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-text-size-adjust: none;
  }
  span, object, div, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, button, abbr, address, big, cite, code, del, dfn, em, font, img, ins, q,
  s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, textarea, input, figure, figcaption, video, mark {
    margin: 0px;
    padding: 0px;
    vertical-align: baseline;
  }
  caption {
    line-height: 0;
    font-size: 0;
    text-indent: -1600px;
    color: transparent;
    vertical-align: top;
  }
  img {
    border: 0;
    vertical-align: top;
  }
  iframe {
    display: block;
  }
  
  h1, h2, h3, h4, h5, h6, input, select, button {
    font-family: inherit;
    font-size: inherit;
    font-weight: normal;
    color: inherit;
  }
  address, caption, cite, code, dfn, th, var{
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
  }
  em {
    font-style: italic;
    padding: 0;
    margin: 0;
  }
  strong {
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  ol, ul, li {
    list-style: none;
    text-decoration: none;
  }
  blockquote, q {
    quotes: none;
  }
  main, nav, aside, article, header, section, footer, figure {
    display: block;
  }
  table {
    width: 100%;
    table-layout: fixed;
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
    color: inherit;
  }
  label {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  input{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-width: 1px;
  }
  button, input, optgroup, select, textarea{
    font-family: inherit;
    color: inherit;
  }
  input[type=text],
  input[type=password],
  input[type=search],
  input[type=email] {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: textfield;
  }
  input[type=text]::-ms-clear ,
  input[type=search]::-ms-clear {
    display: none;
  }
  button {
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  fieldset {
    border: none;
    display: block;
  }
  .off-grid{
    position: absolute  !important;
    width: 1px !important;
    height: 1px !important;
    z-index: -1000  !important;
    overflow: hidden  !important;
    background: none !important;
    color: transparent !important;
  }
`;
