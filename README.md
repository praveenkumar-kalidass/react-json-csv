# React Json Csv
A React library to render a component that helps in json to csv conversion.

<div align="center">
  <a href="https://github.com/praveenkumar-kalidass/react-json-csv/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/react-json-csv">
    <img src="https://img.shields.io/npm/v/react-json-csv/latest.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/react-json-csv">
    <img src="https://img.shields.io/npm/dw/react-json-csv" alt="Downloads">
  </a>
  <a href="https://github.com/praveenkumar-kalidass/react-json-csv/commits/HEAD">
    <img src="https://img.shields.io/github/checks-status/praveenkumar-kalidass/react-json-csv/HEAD" alt="Branch Status">
  </a>
  <a href="https://app.codecov.io/gh/praveenkumar-kalidass/react-json-csv/">
    <img src="https://img.shields.io/codecov/c/github/praveenkumar-kalidass/react-json-csv.svg" alt="Coverage Status">
  </a>
  <a href="https://paypal.me/praveenkumarkalidass?locale.x=en_GB">
    <img src="https://img.shields.io/badge/paypal-donate-red" alt="Paypal">
  </a>
</div>

## Install

Install the component using [NPM](https://www.npmjs.com/):

```sh
$ npm install --save react-json-csv
```

Or [YARN]();

```sh
$ yarn add react-json-csv
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
- [JsonToCsv](#json-to-csv)
- [useJsonToCsv](#use-json-to-csv)

#### JsonToCsv
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

#### useJsonToCsv

```js
const { saveAsCsv } = useJsonToCsv();
```

```html
<button onClick={saveAsCsv({ data, fields, filename })}>
  useJsonToCsv
</button>
```

