import axios from 'axios'

export class Servers {
    constructor (connectServer = null, restServer = null, ksqlServer = null) {
        this.connect_server = connectServer
        this.rest_server = restServer
        this.ksql_server = ksqlServer

        this.ksql = []
    }

    async checkRestServer () {
        console.log('connecting to rest api...')
        try {
            let u = this.rest_server
            let r = await axios.get(u)

            if(r.status !== 200) {
                return false
            }

            console.log(`rest server connected: ${this.rest_server}`)

            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }

    async checkConnectServer () {
        console.log('connecting to connect api...')
        try {
            let u = this.connect_server

            console.log('url for connect:', u)

            let r = await axios.get(u)

            if(r.status !== 200) {
                return false
            }

            console.log(`connect server connected: ${this.connect_server}`)

            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }

    async checkKSQLServer () {
        console.log('connecting to ksql api...')
        try {
            let u = this.ksql_server

            console.log('url for ksql server:', u)

            let r = await axios.get(u)

            if(r.status !== 200) {
                return false
            }

            this.ksql = r
            console.log(`connect server connected: ${this.ksql_server}`)

            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }
}
