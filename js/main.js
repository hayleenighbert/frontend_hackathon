  // create svg drawing
  // var svg = d3.select('body').append('svg');
  var draw = SVG('drawing')

  // create image
  var image = draw.image('http://amazingthailandholidays.com/wp/wp-content/uploads/2013/09/beach-koh-samui_780x322.jpg')
  image.size(650, 650).y(-150)

  // create text
  var text = draw.text('SVG.JS').move(300, 0)
    text.font({
    family: 'Source Sans Pro',
    size: 180,
    anchor: 'middle',
    leading: 1
  })

  // clip image with text
  image.clipWith(text)

  console.log("hello!")