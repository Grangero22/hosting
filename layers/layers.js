var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Puntos_Aljibes_1 = new ol.format.GeoJSON();
var features_Puntos_Aljibes_1 = format_Puntos_Aljibes_1.readFeatures(json_Puntos_Aljibes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_Aljibes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_Aljibes_1.addFeatures(features_Puntos_Aljibes_1);
var lyr_Puntos_Aljibes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_Aljibes_1, 
                style: style_Puntos_Aljibes_1,
                interactive: true,
                title: '<img src="styles/legend/Puntos_Aljibes_1.png" /> Puntos_Aljibes'
            });
var format_Area_Estudio_2 = new ol.format.GeoJSON();
var features_Area_Estudio_2 = format_Area_Estudio_2.readFeatures(json_Area_Estudio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_Estudio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Estudio_2.addFeatures(features_Area_Estudio_2);
var lyr_Area_Estudio_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_Estudio_2, 
                style: style_Area_Estudio_2,
                interactive: true,
                title: '<img src="styles/legend/Area_Estudio_2.png" /> Area_Estudio'
            });
var format_alijibesjuana_3 = new ol.format.GeoJSON();
var features_alijibesjuana_3 = format_alijibesjuana_3.readFeatures(json_alijibesjuana_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alijibesjuana_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alijibesjuana_3.addFeatures(features_alijibesjuana_3);
var lyr_alijibesjuana_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alijibesjuana_3, 
                style: style_alijibesjuana_3,
                interactive: true,
                title: '<img src="styles/legend/alijibesjuana_3.png" /> alijibes juana'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Puntos_Aljibes_1.setVisible(true);lyr_Area_Estudio_2.setVisible(true);lyr_alijibesjuana_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Puntos_Aljibes_1,lyr_Area_Estudio_2,lyr_alijibesjuana_3];
lyr_Puntos_Aljibes_1.set('fieldAliases', {'id': 'id', });
lyr_Area_Estudio_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DEPTO': 'DEPTO', 'NOMBRE': 'NOMBRE', 'COD_DANE': 'COD_DANE', 'area': 'area', 'area_ha': 'area_ha', 'area_km': 'area_km', 'NOM_MUNI': 'NOM_MUNI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'PROYECTO': 'PROYECTO', });
lyr_alijibesjuana_3.set('fieldAliases', {'id': 'id', 'Atributo': 'Atributo', });
lyr_Puntos_Aljibes_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Area_Estudio_2.set('fieldImages', {'OBJECTID': 'Range', 'DEPTO': 'TextEdit', 'NOMBRE': 'TextEdit', 'COD_DANE': 'TextEdit', 'area': 'TextEdit', 'area_ha': 'TextEdit', 'area_km': 'TextEdit', 'NOM_MUNI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'PROYECTO': 'TextEdit', });
lyr_alijibesjuana_3.set('fieldImages', {'id': 'TextEdit', 'Atributo': 'TextEdit', });
lyr_Puntos_Aljibes_1.set('fieldLabels', {'id': 'no label', });
lyr_Area_Estudio_2.set('fieldLabels', {'OBJECTID': 'no label', 'DEPTO': 'no label', 'NOMBRE': 'no label', 'COD_DANE': 'no label', 'area': 'no label', 'area_ha': 'no label', 'area_km': 'no label', 'NOM_MUNI': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'PROYECTO': 'no label', });
lyr_alijibesjuana_3.set('fieldLabels', {'id': 'no label', 'Atributo': 'no label', });
lyr_alijibesjuana_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});