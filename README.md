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

Due to a yarn [race condiiton](https://github.com/yarnpkg/yarn/issues/7212#issuecomment-493720651), do not add entries
under "scripts" in package.json that would be run during installation. While it would be convenient to have TypeScript
compiled during install via a "prepare" entry, we'll just need to compile manually and commit the resulting files to the
repo.
