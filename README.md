# React Json Excel

<p>
  <a href="https://badge.fury.io/js/react-json-excel">
    <img src="https://badge.fury.io/js/react-json-excel.svg" alt="npm version" height="18">
  </a>
  <a href="https://david-dm.org/praveenkumar-outlook/react-json-excel">
    <img src="https://david-dm.org/praveenkumar-outlook/react-json-excel/status.svg" alt="dependencies Status badge">
    </a>
  <a href="https://david-dm.org/praveenkumar-outlook/react-json-excel#info=devDependencies">
    <img src="https://david-dm.org/praveenkumar-outlook/react-json-excel/dev-status.svg" alt="devDependency Status badge">
  </a>
  <a href="https://gitter.im/praveekumar-outlook/react-json-excel">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="Gitter badge">
  </a>
</p>

## Install

Install the component using [NPM](https://www.npmjs.com/):

```sh
$ npm install --save react-json-excel
```

## Usage

### Initialise module

```js
import {
  JsonToExcel
} from 'react-json-excel';
```

### Render
- [Json To Excel](#json-to-excel)

#### Json To Excel
Converts json to excel file (.csv format) and downloads it

```js
const className = 'class-name-for-style',
  filename = 'Excel-file',
  fields = {
    "index": "Index",
    "guid": "GUID"
  },
  style = {
    padding: "5px"
  },
  data = [
    { index: 0, guid: 'asdf231234'},
    { index: 1, guid: 'wetr2343af'}
  ];
```

```html
<JsonToExcel
  data={data}
  className={className}
  filename={filename}
  fields={fields}
  style={style}
/>
```

## License

[MIT License](http://opensource.org/licenses/MIT)
