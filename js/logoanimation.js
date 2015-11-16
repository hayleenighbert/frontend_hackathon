// $(document).ready(function()

$(".one")
  .delay(2500)
  .velocity({rotateZ: "360deg"})
  .delay(500)
  .velocity({x: "+=20", y: "100%" });

$(".two")
  .delay(500)
  .velocity({ fill: "#333", strokeWidth: 2})
  .velocity({rotateZ: "10deg"})
  .delay(500)
  .velocity({x: "+=20", y: "100%" });

$(".three")
  .delay(5000)
  .velocity({x: "+=20", y: "100%" });