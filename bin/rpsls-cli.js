#!/usr/bin/env node

import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2));

//help message
if (args.help || args.h) {
    console.log('Usage: node-rpsls [SHOT]');
    console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n');
    console.log('  -h, --help\t  display this help message and exit');
    console.log('  -r, --rules\t  display the rules and exit\n');
    console.log('Examples:');
    console.log('  node-rpsls\t  Return JSON with single player RPSLS result');
    console.log('\t\t  e.g. {"player":"rock"}');
    console.log('  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.');
    console.log('\t\t  e.g {"player":"rock","opponent":"Spock","result":"lose"}');
    process.exit(0);
}

//rules message
if (args.rules || args.r) {
    console.log(`Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`)
    process.exit(0);
}

let shot = args._[0];

let result = rpsls(shot);

//check for error
if (result === 'error') {
    console.error(`${shot} is out of range.`);

    console.log('Usage: node-rpsls [SHOT]');
    console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n');
    console.log('  -h, --help\t  display this help message and exit');
    console.log('  -r, --rules\t  display the rules and exit\n');
    console.log('Examples:');
    console.log('  node-rpsls\t  Return JSON with single player RPSLS result');
    console.log('\t\t  e.g. {"player":"rock"}');
    console.log('  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.');
    console.log('\t\t  e.g {"player":"rock","opponent":"Spock","result":"lose"}');

    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n');
    console.log(' Scissors CUTS Paper');
    console.log(' Paper COVERS Rock');
    console.log(' Rock SMOOSHES Lizard');
    console.log(' Lizard POISONS Spock');
    console.log(' Spock SMASHES Scissors');
    console.log(' Scissors DECAPITATES Lizard');
    console.log(' Lizard EATS Paper');
    console.log(' Paper DISPROVES Spock');
    console.log(' Spock VAPORIZES Rock');
    console.log(' Rock CRUSHES Scissors');

    process.exit(1);
} else {
    console.log(JSON.stringify(result));
}