import minimist from 'minimist';

var argv = minimist(process.argv.slice(2));

const Greeter = (name: string) => `Hello ${name}`;

console.log(Greeter(argv._[0]))
