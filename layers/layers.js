var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1 = new ol.format.GeoJSON();
var features_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1 = format_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1.readFeatures(json_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1.addFeatures(features_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1);
var lyr_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1, 
                style: style_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1,
                interactive: true,
                title: '<img src="styles/legend/road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1.png" /> road_polyline_2016_9_29_14_37 road_polyline_2016_9_29_14_37'
            });
var format_LandingsShpcopy_2 = new ol.format.GeoJSON();
var features_LandingsShpcopy_2 = format_LandingsShpcopy_2.readFeatures(json_LandingsShpcopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandingsShpcopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandingsShpcopy_2.addFeatures(features_LandingsShpcopy_2);
var lyr_LandingsShpcopy_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LandingsShpcopy_2, 
                style: style_LandingsShpcopy_2,
                interactive: true,
                title: '<img src="styles/legend/LandingsShpcopy_2.png" /> LandingsShp copy'
            });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                interactive: true,
                title: 'Roads'
            });
var format_QuarterdegreeIndexSheet_4 = new ol.format.GeoJSON();
var features_QuarterdegreeIndexSheet_4 = format_QuarterdegreeIndexSheet_4.readFeatures(json_QuarterdegreeIndexSheet_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuarterdegreeIndexSheet_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuarterdegreeIndexSheet_4.addFeatures(features_QuarterdegreeIndexSheet_4);
var lyr_QuarterdegreeIndexSheet_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QuarterdegreeIndexSheet_4, 
                style: style_QuarterdegreeIndexSheet_4,
                interactive: true,
                title: '<img src="styles/legend/QuarterdegreeIndexSheet_4.png" /> Quarter degree Index Sheet'
            });
var format_mainrivers_1_5 = new ol.format.GeoJSON();
var features_mainrivers_1_5 = format_mainrivers_1_5.readFeatures(json_mainrivers_1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mainrivers_1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mainrivers_1_5.addFeatures(features_mainrivers_1_5);
var lyr_mainrivers_1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mainrivers_1_5, 
                style: style_mainrivers_1_5,
                interactive: true,
                title: '<img src="styles/legend/mainrivers_1_5.png" /> mainrivers_1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1.setVisible(true);lyr_LandingsShpcopy_2.setVisible(true);lyr_Roads_3.setVisible(true);lyr_QuarterdegreeIndexSheet_4.setVisible(true);lyr_mainrivers_1_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1,lyr_LandingsShpcopy_2,lyr_Roads_3,lyr_QuarterdegreeIndexSheet_4,lyr_mainrivers_1_5];
lyr_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LandingsShpcopy_2.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'gpxx_Waypo': 'gpxx_Waypo', 'wptx1_Wayp': 'wptx1_Wayp', 'ctx_Creati': 'ctx_Creati', });
lyr_Roads_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'TYPE': 'TYPE', 'DATE_CHECK': 'DATE_CHECK', 'COMMENT': 'COMMENT', 'IMPORTANCE': 'IMPORTANCE', 'ROAD_TYPE': 'ROAD_TYPE', 'DIST': 'DIST', });
lyr_QuarterdegreeIndexSheet_4.set('fieldAliases', {'Sheet_No': 'Sheet_No', 'Description': 'Description', 'Scanned': 'Scanned', 'Quality_Digitizing': 'Quality_Digitizing', });
lyr_mainrivers_1_5.set('fieldAliases', {'NAME': 'NAME', 'NUM2': 'NUM2', });
lyr_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LandingsShpcopy_2.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'magvar': 'TextEdit', 'geoidheigh': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsd': 'TextEdit', 'dgpsid': 'TextEdit', 'gpxx_Waypo': 'TextEdit', 'wptx1_Wayp': 'TextEdit', 'ctx_Creati': 'TextEdit', });
lyr_Roads_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'TYPE': '', 'DATE_CHECK': '', 'COMMENT': '', 'IMPORTANCE': '', 'ROAD_TYPE': '', 'DIST': '', });
lyr_QuarterdegreeIndexSheet_4.set('fieldImages', {'Sheet_No': 'TextEdit', 'Description': 'TextEdit', 'Scanned': 'TextEdit', 'Quality_Digitizing': 'Range', });
lyr_mainrivers_1_5.set('fieldImages', {'NAME': '', 'NUM2': '', });
lyr_road_polyline_2016_9_29_14_37road_polyline_2016_9_29_14_37_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LandingsShpcopy_2.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheigh': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsd': 'no label', 'dgpsid': 'no label', 'gpxx_Waypo': 'no label', 'wptx1_Wayp': 'no label', 'ctx_Creati': 'no label', });
lyr_Roads_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'TYPE': 'no label', 'DATE_CHECK': 'no label', 'COMMENT': 'no label', 'IMPORTANCE': 'no label', 'ROAD_TYPE': 'no label', 'DIST': 'no label', });
lyr_QuarterdegreeIndexSheet_4.set('fieldLabels', {'Sheet_No': 'no label', 'Description': 'no label', 'Scanned': 'no label', 'Quality_Digitizing': 'no label', });
lyr_mainrivers_1_5.set('fieldLabels', {'NAME': 'no label', 'NUM2': 'no label', });
lyr_mainrivers_1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});