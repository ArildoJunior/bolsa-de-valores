const yargs = require('yargs')
const chalk = require('chalk')
const util = require('./util/util')

yargs.command({
  command: 'search',
  describe: 'Busca dados de um ativo',
  builder: {
      ativo: {
          describe: 'Nome do ativo',
          demandOption: true,
          type: 'string'
      }
  },
  handler: (argv) => {
      util.cotacao(argv.ativo, (data) => {        
        console.log(chalk.green.inverse(`Ativo: ${data.symbol}`))
        console.log(chalk.green.bold(`Abertura: ${data.price_open}`))
        console.log(chalk.blue.bold(`Fechamento: ${data.price}`))
        console.log(chalk.red.bold(`Menor valor do dia: ${data.day_low}`))
        console.log(chalk.red.bold(`Maior valor do dia: ${data.day_low}`))

    })
  }
})

yargs.parse()