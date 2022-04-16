import request from "../../../requestV2/index"
import config from "../gui/gui"


request({
    url: "https://pastebin.com/raw/zbAKMkrP",
    method: "GET",
}).catch(function(error) {
    print(error)
}).then(function(response) {
    const data = JSON.parse(response)
    print(data.client.last_update)
})