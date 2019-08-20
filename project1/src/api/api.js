import axios from 'axios'

let $http = axios.create({
    baseURL: "http://localhost:8083"
})
 

export function GetData () {
    return $http.post('/Home/getBooksList')
}