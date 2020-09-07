# React Json Csv
A React library to render a component that helps in json to csv conversion.

<p>
  <a href="https://badge.fury.io/js/react-json-csv">
    <img src="https://badge.fury.io/js/react-json-csv.svg" alt="npm version" height="18">
  </a>
  <a href="https://david-dm.org/praveenkumar-outlook/react-json-csv">
    <img src="https://david-dm.org/praveenkumar-outlook/react-json-csv/status.svg" alt="dependencies Status badge">
    </a>
  <a href="https://david-dm.org/praveenkumar-outlook/react-json-csv#info=devDependencies">
    <img src="https://david-dm.org/praveenkumar-outlook/react-json-csv/dev-status.svg" alt="devDependency Status badge">
  </a>
  <a href="https://gitter.im/praveekumar-outlook/react-json-csv">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="Gitter badge">
  </a>
</p>

## Install

Install the component using [NPM](https://www.npmjs.com/):

```sh
$ npm install --save react-json-csv
```

## Usage

### Initialise module

```js
import {
  JsonToCsv,
  useJsonToCsv
} from 'react-json-csv';
```

### Render
- [Json To Csv](#json-to-csv)

#### Json To Csv
Converts json to csv file (.csv format) and downloads it

```js
const filename = 'Csv-file',
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
  ],
  text = "Convert Json to Csv";
```

```html
<JsonToCsv
  data={data}
  filename={filename}
  fields={fields}
  style={style}
  text={text}
/>
```

```js
const { saveAsCsv } = useJsonToCsv();
```

```html
<button onClick={saveAsCsv({ data, fields, filename })}>
  useJsonToCsv
</button>
```html

## License

[MIT License](http://opensource.org/licenses/MIT)
