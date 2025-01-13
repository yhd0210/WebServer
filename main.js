var map = new ol.Map({
    target: 'map',
    layers:[
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view : new ol.View({
        center: ol.proj.fromLonLat([127.3920, 36.3380]),
        zoom: 17
    })
});

map.on('click', function(event){
    var coordinate = event.coordinate;
    var lonLat = ol.proj.toLonLat(coordinate);
    console.log('Coordiantes:',lonLat[0].toFixed(4),lonLat[1].toFixed(4));
});