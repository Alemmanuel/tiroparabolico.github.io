function resolve() {
    var area = document.getElementById('area')
    var vi = document.getElementById('vi').value
    var theta = document.getElementById('theta').value
    
    theta = theta * (Math.PI / 180)
    var g = document.getElementById('g').value
    var mostrar = document.getElementById('mostrar')
    //Vix, Viy
    var vix = vi * Math.cos(theta).toFixed(3)
    var viy = vi * Math.sin(theta).toFixed(3)
    //Ts, Tt
    var ts = viy / g
    var tt = ts * 2
    //Xmax, Ymax
    var xmax = vix * tt
    var ymax = Math.pow(viy, 2) / 2 * g
    //Mostrar Resultados
    console.log(vix.toFixed(3))
    console.log(viy.toFixed(3))
    console.log(ts.toFixed(3))
    console.log(tt.toFixed(3))
    console.log(xmax.toFixed(3))
    console.log(ymax.toFixed(3))

    for (t = 0; t <= tt; t++) {
        var x = vix * t
        var y = 590-(viy * t - (g * Math.pow(t, 2)) / 2)
        console.log(x.toFixed(3))
        console.log(y.toFixed(3))
        var angrybirds = document.createElement('img')
        angrybirds.src = 'https://i.picasion.com/pic92/171f8354f21801c9e7bd274e768d1422.gif'
        angrybirds.className='angrybirds'
        angrybirds.style.position = 'absolute'
        angrybirds.style.left = x + 'px'
        angrybirds.style.top = y + 'px'
        area.appendChild(angrybirds)
    }
}
