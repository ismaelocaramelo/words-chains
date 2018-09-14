/**
 * Word Chains
 * Kata 14-09-2018.
 * GuideSmiths Spain
 * ======================
 * @author Ismael, German
 */

const axios = require('axios');

const API_URL = 'https://wordsapiv1.p.mashape.com/words/';

function find($word) {}

// Preguntar por la primera palabra
// Preguntar por la segunda palabra

// Check two words has the same length
// If not make process again

const readline = require('readline');

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'words.txt');

let t = process.hrtime();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let word1, word2;

rl.question('Enter first word: ', answer => {
  word1 = answer;
  rl.question('Enter the second word: ', answer2 => {
    word2 = answer2;

    if (word1.length !== word2.length) {
      throw new Error('Must me the same length');
    }
    t = process.hrtime(t);
    fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {
      if (!err) {
        const words = data.split('\n');
        const result = words
          .reduce((acc, crr, crrIx, array) => {
            if (
              crr.length === word1.length &&
              crr.slice(1, crr.length) === word2.slice(1, word2.length)
            ) {
              acc.push(crr);
            }
            if (crr === word2) {
              acc.slice(acc.indexOf(word2));
            }

            return acc;
          }, [])
          .join(' --> ');

        console.log(
          `${word1.charAt(0).toUpperCase() +
            word1.slice(1)} ---> ${result} ---> ${word2
            .charAt(0)
            .toUpperCase() + word2.slice(1)}`
        );

        console.log('Benchmark took %d seconds ', t[0]);
      } else {
        console.log(err);
      }
    });

    rl.close();
  });
});
