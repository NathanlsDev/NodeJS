//external
const minimist = require("minimist")

// intern
const sum = require('./sum').sum

const args = minimist(process.argv.slice(2))

const a = Number(args["a"])
const b = Number(args["b"])


sum(a, b)