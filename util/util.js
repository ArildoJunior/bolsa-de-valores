const request = require('request')
const api_token = `khLNvRTYjtdz5QkkeDdgRrxdT9VPAatTrJYqJo5qqxWejv597dV6wtdDdQgb`

const _cotacao = (symbol, callback) => {

    const url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`
 
    request({url: url, json: true}, (err, response)=>{   
        if(err){ 
            throw new Error(`Somenthing went worng: ${err}`)
        }
        
        if (response.body.data === undefined){
            throw new Error(`No data found`)
        }
        
        const parsedJSON = response.body.data[0]
                
        const {symbol, price_open, price, day_high, day_low} = parsedJSON

        const data = {symbol, price_open, price, day_high, day_low}

        callback(data)
    })
}

module.exports = {
    cotacao: _cotacao
}