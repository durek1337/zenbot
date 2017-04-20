var path = require('path')
var parallel = require('run-parallel')

module.exports = function container (get, set, clear) {
  return function (program) {
    program
      .command('list-selectors')
      .description('list available selectors to watch')
      .action(function (cmd) {
        get('lib.list-selectors')(function (err, selectors) {
          if (err) throw err
          console.log()
          selectors.forEach(function (selector) {
            console.log('  ' + selector)
          })
          console.log()
          process.exit(0)
        })
      })
  }
}