#!/usr/bin/env node

import minimist from "minimist";
import { rps } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2));

//help message
if (args.help || args.h) {
    console.log('Usage: node-rps [SHOT]');
    console.log('Play Rock Paper Scissors (RPS)\n');
    console.log('  -h, --help\t  display this help message and exit');
    console.log('  -r, --rules\t  display the rules and exit\n');
    console.log('Examples:');
    console.log('  node-rps\t  Return JSON with single player RPS result');
    console.log('\t\t  e.g. {"player":"rock"}');
    console.log('  node-rps rock   Return JSON with results for RPS played against a simulated opponent.');
    console.log('\t\t  e.g {"player":"rock","opponent":"scissors","result":"win"}');
    process.exit(0);
}

//rules message
if (args.rules || args.r) {
    console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`)
    process.exit(0);
}

let shot = args._[0];

let result = rps(shot);

//check for error
if (result === 'error') {
    console.error(`${shot} is out of range.`);

    console.log('Usage: node-rps [SHOT]');
    console.log('Play Rock Paper Scissors (RPS)\n');
    console.log('  -h, --help\t  display this help message and exit');
    console.log('  -r, --rules\t  display the rules and exit\n');
    console.log('Examples:');
    console.log('  node-rps\t  Return JSON with single player RPS result');
    console.log('\t\t  e.g. {"player":"rock"}');
    console.log('  node-rps rock   Return JSON with results for RPS played against a simulated opponent.');
    console.log('\t\t  e.g {"player":"rock","opponent":"scissors","result":"win"}');

    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`) 

    process.exit(1);
} else {
    console.log(JSON.stringify(result));
}