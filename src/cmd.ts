#!/usr/bin/env node

import PdfUtils from './index';

// `optionsJSON`: associative array. Make sure this is escaped/quoted properly.
const [inputFilePath, outputFilePath, optionsJSON] = process.argv.slice(2);
const options = ((json) => {
  try {
    return json ? JSON.parse(json) : {};
  } catch (e) {
    return {};
  }
})(optionsJSON);

if (outputFilePath) {
  PdfUtils.writeAccessibilityData(inputFilePath, outputFilePath, options);
} else {
  PdfUtils.printAccessibilityData(inputFilePath);
}
