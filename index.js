const venom = require('venom-bot');

venom.create().then((client) => start(client)).catch((error) => {
  console.log(error);
});

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase().includes('cardápio')) {
      client.sendText(message.from, 'Nosso cardápio inclui: Margherita, Calabresa, Quatro Queijos...');
    } else if (message.body.toLowerCase().includes('horário')) {
      client.sendText(message.from, 'Estamos abertos todos os dias das 18h às 23h.');
    } else if (message.body.toLowerCase().includes('endereço')) {
      client.sendText(message.from, 'Estamos localizados na Rua das Flores, 123, Centro.');
    } else {
      client.sendText(message.from, 'Desculpe, não entendi sua mensagem. Você pode perguntar sobre nosso cardápio, horário ou endereço.');
    }
  });
}
