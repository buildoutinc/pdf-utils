# pdf-utils

Utilities to manipulate a PDF. Currently focuses on accessibility properties of a document.
This is a work in progress.

# Install

yarn add 'https://github.com/buildoutinc/pdf-utils'

# Usage

pdf-utils can be used as a module, or run as a command-line utility.

Command line:

    ./node_modules/.bin/pdf-utils ARGS

or

    npx pdf-utils ARGS

## Examples

Print the properties relevant to accessibility:

    $ npx pdf-utils INPUT_FILE

Write the properties relevant to accessibility:

    $ npx pdf-utils INPUT_FILE OUTPUT_FILE JSON

Sample JSON (remember to quote the JSON properly for your shell):

    {"language": "en", "title": "Your Title Here"}

If you omit the JSON argument, defaults will be used.

# Contributing

Since the source is TypeScript, proper installation requires the package.json scripts.prepare value to build the .ts files.
