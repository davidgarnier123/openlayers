import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenDataYellowService {

  constructor(private http: HttpClient) { }

  getYellowData() {
    // Construisez l'URL complète en utilisant les coordonnées de début et de fin
    // const url = `https://opendata.agglo-larochelle.fr/d4c/api/records/1.0/search/dataset=yelo___disponibilite_des_velos_en_libre_service`;
  
    // Utilisez HttpClient pour effectuer la requête GET
    // return this.http.get(url);
    return [
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 1,
          "fields": {
              "nombre_emplacements": "2",
              "station_nom": "Manufacture test",
              "total_count": "135",
              "accroches_libres": "1",
              "_full_text": "'1':3,4 '14.149999618530273':7 '14.14999962':9 '14.150000':13 '2':5 '50.139999':14 '50.13999938964844':6 '50.13999939':8 'coordinat':12 'manufactur':1 'point':11 'test':2 'typ':10",
              "geo_point_2d": "50.13999939,14.14999962",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[14.150000,50.139999]}",
              "station_longitude": "14.149999618530273",
              "station_latitude": "50.13999938964844",
              "velos_disponibles": "1",
              "_id": 1
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 2,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "02 Quai Valin 1",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.1506329774856567':9 '-1.15063298':11 '-1.150633':15 '02':1 '1':4 '4':5,6 '46.15783691':10 '46.1578369140625':8 '46.157837':16 '8':7 'coordinat':14 'point':13 'quai':2 'typ':12 'valin':3",
              "geo_point_2d": "46.15783691,-1.15063298",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.150633,46.157837]}",
              "station_longitude": "-1.1506329774856567",
              "station_latitude": "46.1578369140625",
              "velos_disponibles": "4",
              "_id": 2
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 3,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "02 Quai valin 2",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.149741':15 '-1.14974105':11 '-1.1497410535812378':9 '02':1 '2':4 '3':5 '46.156555':16 '46.15655517578125':8 '46.15655518':10 '5':6 '8':7 'coordinat':14 'point':13 'quai':2 'typ':12 'valin':3",
              "geo_point_2d": "46.15655518,-1.14974105",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.149741,46.156555]}",
              "station_longitude": "-1.1497410535812378",
              "station_latitude": "46.15655517578125",
              "velos_disponibles": "3",
              "_id": 3
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 4,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "03 Arsenal 1",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.148711':14 '-1.148711085319519':8 '-1.14871109':10 '03':1 '1':3 '4':4,5 '46.15988159':9 '46.159881591796875':7 '46.159882':15 '8':6 'arsenal':2 'coordinat':13 'point':12 'typ':11",
              "geo_point_2d": "46.15988159,-1.14871109",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.148711,46.159882]}",
              "station_longitude": "-1.148711085319519",
              "station_latitude": "46.159881591796875",
              "velos_disponibles": "4",
              "_id": 4
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 5,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "03 Arsenal 2",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.148691':14 '-1.1486910581588745':8 '-1.14869106':10 '03':1 '2':3 '4':4,5 '46.15991592':9 '46.159915924072266':7 '46.159916':15 '8':6 'arsenal':2 'coordinat':13 'point':12 'typ':11",
              "geo_point_2d": "46.15991592,-1.14869106",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.148691,46.159916]}",
              "station_longitude": "-1.1486910581588745",
              "station_latitude": "46.159915924072266",
              "velos_disponibles": "4",
              "_id": 5
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 6,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "03 Arsenal 3",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.148692':14 '-1.14869225':10 '-1.14869225025177':8 '03':1 '3':3 '4':4,5 '46.159942626953125':7 '46.15994263':9 '46.159943':15 '8':6 'arsenal':2 'coordinat':13 'point':12 'typ':11",
              "geo_point_2d": "46.15994263,-1.14869225",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.148692,46.159943]}",
              "station_longitude": "-1.14869225025177",
              "station_latitude": "46.159942626953125",
              "velos_disponibles": "4",
              "_id": 6
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 7,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "04 Marché",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.1483216285705566':7 '-1.14832163':9 '-1.148322':13 '04':1 '1':3 '46.16136169':8 '46.16136169433594':6 '46.161362':14 '7':4 '8':5 'coordinat':12 'march':2 'point':11 'typ':10",
              "geo_point_2d": "46.16136169,-1.14832163",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.148322,46.161362]}",
              "station_longitude": "-1.1483216285705566",
              "station_latitude": "46.16136169433594",
              "velos_disponibles": "1",
              "_id": 7
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 8,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "05 Place de Verdun",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.1525609493255615':9 '-1.15256095':11 '-1.152561':15 '05':1 '4':5,6 '46.16273498535156':8 '46.16273499':10 '46.162735':16 '8':7 'coordinat':14 'plac':2 'point':13 'typ':12 'verdun':4",
              "geo_point_2d": "46.16273499,-1.15256095",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.152561,46.162735]}",
              "station_longitude": "-1.1525609493255615",
              "station_latitude": "46.16273498535156",
              "velos_disponibles": "4",
              "_id": 8
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 9,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "06 Maison de la Mobilité 1",
              "total_count": "135",
              "accroches_libres": "8",
              "_full_text": "'-1.153686':17 '-1.1536861658096313':11 '-1.15368617':13 '06':1 '1':6 '10':9 '2':7 '46.16236877':12 '46.16236877441406':10 '46.162369':18 '8':8 'coordinat':16 'maison':2 'mobil':5 'point':15 'typ':14",
              "geo_point_2d": "46.16236877,-1.15368617",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153686,46.162369]}",
              "station_longitude": "-1.1536861658096313",
              "station_latitude": "46.16236877441406",
              "velos_disponibles": "2",
              "_id": 9
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 10,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "06 Maison de la Mobilité 2",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.15361392':13 '-1.1536139249801636':11 '-1.153614':17 '06':1 '10':9 '2':6 '3':7 '46.162357':18 '46.16235733':12 '46.162357330322266':10 '7':8 'coordinat':16 'maison':2 'mobil':5 'point':15 'typ':14",
              "geo_point_2d": "46.16235733,-1.15361392",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153614,46.162357]}",
              "station_longitude": "-1.1536139249801636",
              "station_latitude": "46.162357330322266",
              "velos_disponibles": "3",
              "_id": 10
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 11,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "07 Préfecture",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.156820':13 '-1.1568200588226318':7 '-1.15682006':9 '07':1 '10':5 '3':3 '46.157024':14 '46.15702438':8 '46.15702438354492':6 '7':4 'coordinat':12 'point':11 'préfectur':2 'typ':10",
              "geo_point_2d": "46.15702438,-1.15682006",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.156820,46.157024]}",
              "station_longitude": "-1.1568200588226318",
              "station_latitude": "46.15702438354492",
              "velos_disponibles": "3",
              "_id": 11
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 12,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "08 Vieux Port 1",
              "total_count": "135",
              "accroches_libres": "0",
              "_full_text": "'-1.153986':15 '-1.1539860963821411':9 '-1.15398610':11 '0':5,6 '08':1 '1':4 '46.156776':16 '46.156776428222656':8 '46.15677643':10 '8':7 'coordinat':14 'point':13 'port':3 'typ':12 'vieux':2",
              "geo_point_2d": "46.15677643,-1.15398610",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153986,46.156776]}",
              "station_longitude": "-1.1539860963821411",
              "station_latitude": "46.156776428222656",
              "velos_disponibles": "0",
              "_id": 12
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 13,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "08 Vieux Port 2",
              "total_count": "135",
              "accroches_libres": "0",
              "_full_text": "'-1.153873':15 '-1.153873085975647':9 '-1.15387309':11 '0':5,6 '08':1 '2':4 '46.15686798':10 '46.15686798095703':8 '46.156868':16 '8':7 'coordinat':14 'point':13 'port':3 'typ':12 'vieux':2",
              "geo_point_2d": "46.15686798,-1.15387309",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153873,46.156868]}",
              "station_longitude": "-1.153873085975647",
              "station_latitude": "46.15686798095703",
              "velos_disponibles": "0",
              "_id": 13
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 14,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "08 Vieux Port 3",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.1538729667663574':9 '-1.15387297':11 '-1.153873':15 '08':1 '3':4,5 '46.15695190':10 '46.156951904296875':8 '46.156952':16 '5':6 '8':7 'coordinat':14 'point':13 'port':3 'typ':12 'vieux':2",
              "geo_point_2d": "46.15695190,-1.15387297",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153873,46.156952]}",
              "station_longitude": "-1.1538729667663574",
              "station_latitude": "46.156951904296875",
              "velos_disponibles": "3",
              "_id": 14
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 15,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "09 Porte St Nicolas 1",
              "total_count": "135",
              "accroches_libres": "9",
              "_full_text": "'-1.1492489576339722':10 '-1.14924896':12 '-1.149249':16 '09':1 '1':5,6 '10':8 '46.155727':17 '46.15572738647461':9 '46.15572739':11 '9':7 'coordinat':15 'nicol':4 'point':14 'port':2 'st':3 'typ':13",
              "geo_point_2d": "46.15572739,-1.14924896",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.149249,46.155727]}",
              "station_longitude": "-1.1492489576339722",
              "station_latitude": "46.15572738647461",
              "velos_disponibles": "1",
              "_id": 15
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 16,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "09 Porte St Nicolas 2",
              "total_count": "135",
              "accroches_libres": "8",
              "_full_text": "'-1.1492429971694946':10 '-1.149243':16 '-1.14924300':12 '09':1 '10':8 '2':5,6 '46.155735':17 '46.15573501586914':9 '46.15573502':11 '8':7 'coordinat':15 'nicol':4 'point':14 'port':2 'st':3 'typ':13",
              "geo_point_2d": "46.15573502,-1.14924300",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.149243,46.155735]}",
              "station_longitude": "-1.1492429971694946",
              "station_latitude": "46.15573501586914",
              "velos_disponibles": "2",
              "_id": 16
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 17,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "100 Malidor",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.104941':13 '-1.1049411296844482':7 '-1.10494113':9 '100':1 '3':3 '46.131763':14 '46.13176345825195':6 '46.13176346':8 '5':4 '8':5 'coordinat':12 'malidor':2 'point':11 'typ':10",
              "geo_point_2d": "46.13176346,-1.10494113",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.104941,46.131763]}",
              "station_longitude": "-1.1049411296844482",
              "station_latitude": "46.13176345825195",
              "velos_disponibles": "3",
              "_id": 17
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 18,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "101 Mairie de Puilboreau",
              "total_count": "135",
              "accroches_libres": "9",
              "_full_text": "'-1.1188188791275024':9 '-1.11881888':11 '-1.118819':15 '1':5 '10':7 '101':1 '46.187618':16 '46.187618255615234':8 '46.18761826':10 '9':6 'coordinat':14 'mair':2 'point':13 'puilboreau':4 'typ':12",
              "geo_point_2d": "46.18761826,-1.11881888",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.118819,46.187618]}",
              "station_longitude": "-1.1188188791275024",
              "station_latitude": "46.187618255615234",
              "velos_disponibles": "1",
              "_id": 18
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 19,
          "fields": {
              "nombre_emplacements": "12",
              "station_nom": "102 Centre Aquatique de Châtelaillon",
              "total_count": "135",
              "accroches_libres": "9",
              "_full_text": "'-1.090833':16 '-1.090833306312561':10 '-1.09083331':12 '102':1 '12':8 '3':6 '46.062778':17 '46.06277847':11 '46.06277847290039':9 '9':7 'aquat':3 'centr':2 'châtelaillon':5 'coordinat':15 'point':14 'typ':13",
              "geo_point_2d": "46.06277847,-1.09083331",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.090833,46.062778]}",
              "station_longitude": "-1.090833306312561",
              "station_latitude": "46.06277847290039",
              "velos_disponibles": "3",
              "_id": 19
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 20,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "103 Gare de Châtelaillon",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.0913499593734741':9 '-1.09134996':11 '-1.091350':15 '103':1 '2':5 '46.07842254638672':8 '46.07842255':10 '46.078423':16 '6':6 '8':7 'châtelaillon':4 'coordinat':14 'gar':2 'point':13 'typ':12",
              "geo_point_2d": "46.07842255,-1.09134996",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.091350,46.078423]}",
              "station_longitude": "-1.0913499593734741",
              "station_latitude": "46.07842254638672",
              "velos_disponibles": "2",
              "_id": 20
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 21,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "104 Office de Tourisme Châtelaillon",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.0884089469909668':10 '-1.08840895':12 '-1.088409':16 '1':6 '104':1 '46.07691574':11 '46.0769157409668':9 '46.076916':17 '7':7 '8':8 'châtelaillon':5 'coordinat':15 'offic':2 'point':14 'tourism':4 'typ':13",
              "geo_point_2d": "46.07691574,-1.08840895",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.088409,46.076916]}",
              "station_longitude": "-1.0884089469909668",
              "station_latitude": "46.0769157409668",
              "velos_disponibles": "1",
              "_id": 21
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 22,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "105 Halte ferroviaire Angoulins",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.116121':15 '-1.11612105':11 '-1.1161210536956787':9 '10':7 '105':1 '3':5 '46.10767364501953':8 '46.10767365':10 '46.107674':16 '7':6 'angoulin':4 'coordinat':14 'ferroviair':3 'halt':2 'point':13 'typ':12",
              "geo_point_2d": "46.10767365,-1.11612105",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.116121,46.107674]}",
              "station_longitude": "-1.1161210536956787",
              "station_latitude": "46.10767364501953",
              "velos_disponibles": "3",
              "_id": 22
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 23,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "106 Toucharé",
              "total_count": "135",
              "accroches_libres": "3",
              "_full_text": "'-1.109215':13 '-1.10921502':9 '-1.1092150211334229':7 '106':1 '3':4 '46.106716':14 '46.10671615600586':6 '46.10671616':8 '5':3 '8':5 'coordinat':12 'point':11 'touchar':2 'typ':10",
              "geo_point_2d": "46.10671616,-1.10921502",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.109215,46.106716]}",
              "station_longitude": "-1.1092150211334229",
              "station_latitude": "46.10671615600586",
              "velos_disponibles": "5",
              "_id": 23
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 24,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "107 ZAC des fourneaux Angoulins",
              "total_count": "135",
              "accroches_libres": "8",
              "_full_text": "'-1.101140':16 '-1.10114002':12 '-1.101140022277832':10 '10':8 '107':1 '2':6 '46.108818':17 '46.10881805':11 '46.10881805419922':9 '8':7 'angoulin':5 'coordinat':15 'fourneau':4 'point':14 'typ':13 'zac':2",
              "geo_point_2d": "46.10881805,-1.10114002",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.101140,46.108818]}",
              "station_longitude": "-1.101140022277832",
              "station_latitude": "46.10881805419922",
              "velos_disponibles": "2",
              "_id": 24
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 25,
          "fields": {
              "nombre_emplacements": "14",
              "station_nom": "108 Vaucanson",
              "total_count": "135",
              "accroches_libres": "8",
              "_full_text": "'-1.1028519868850708':7 '-1.10285199':9 '-1.102852':13 '108':1 '14':5 '46.16539764':8 '46.16539764404297':6 '46.165398':14 '6':3 '8':4 'coordinat':12 'point':11 'typ':10 'vaucanson':2",
              "geo_point_2d": "46.16539764,-1.10285199",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.102852,46.165398]}",
              "station_longitude": "-1.1028519868850708",
              "station_latitude": "46.16539764404297",
              "velos_disponibles": "6",
              "_id": 25
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 26,
          "fields": {
              "nombre_emplacements": "14",
              "station_nom": "109 P+R Simone Veil",
              "total_count": "135",
              "accroches_libres": "11",
              "_full_text": "'-1.126718':16 '-1.12671828':12 '-1.126718282699585':10 '109':1 '11':7 '14':8 '3':6 '46.143051':17 '46.14305114746094':9 '46.14305115':11 'coordinat':15 'p':2 'point':14 'r':3 'simon':4 'typ':13 'veil':5",
              "geo_point_2d": "46.14305115,-1.12671828",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.126718,46.143051]}",
              "station_longitude": "-1.126718282699585",
              "station_latitude": "46.14305114746094",
              "velos_disponibles": "3",
              "_id": 26
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 27,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "11 Porte Dauphine",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.150408':14 '-1.1504080295562744':8 '-1.15040803':10 '11':1 '3':4 '46.16714096':9 '46.16714096069336':7 '46.167141':15 '5':5 '8':6 'coordinat':13 'dauphin':3 'point':12 'port':2 'typ':11",
              "geo_point_2d": "46.16714096,-1.15040803",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.150408,46.167141]}",
              "station_longitude": "-1.1504080295562744",
              "station_latitude": "46.16714096069336",
              "velos_disponibles": "3",
              "_id": 27
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 28,
          "fields": {
              "nombre_emplacements": "14",
              "station_nom": "110 Gare La Rochelle / Marais de Tasdon",
              "total_count": "135",
              "accroches_libres": "8",
              "_full_text": "'-1.141798':18 '-1.1417983770370483':12 '-1.14179838':14 '110':1 '14':10 '46.15327453613281':11 '46.15327454':13 '46.153275':19 '6':8 '8':9 'coordinat':17 'gar':2 'mar':5 'point':16 'rochel':4 'tasdon':7 'typ':15",
              "geo_point_2d": "46.15327454,-1.14179838",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.141798,46.153275]}",
              "station_longitude": "-1.1417983770370483",
              "station_latitude": "46.15327453613281",
              "velos_disponibles": "6",
              "_id": 28
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 29,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "12 Piscine",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.153578':13 '-1.15357804':9 '-1.1535780429840088':7 '10':5 '12':1 '4':3 '46.168697':14 '46.168697357177734':6 '46.16869736':8 '6':4 'coordinat':12 'piscin':2 'point':11 'typ':10",
              "geo_point_2d": "46.16869736,-1.15357804",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153578,46.168697]}",
              "station_longitude": "-1.1535780429840088",
              "station_latitude": "46.168697357177734",
              "velos_disponibles": "4",
              "_id": 29
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 30,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "13 Médiathèque 1",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.15286386':10 '-1.15286386013031':8 '-1.152864':14 '1':3 '13':1 '4':4,5 '46.153770':15 '46.153770446777344':7 '46.15377045':9 '8':6 'coordinat':13 'médiathequ':2 'point':12 'typ':11",
              "geo_point_2d": "46.15377045,-1.15286386",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.152864,46.153770]}",
              "station_longitude": "-1.15286386013031",
              "station_latitude": "46.153770446777344",
              "velos_disponibles": "4",
              "_id": 30
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 31,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "13 Mediathèque 2",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.15274167':10 '-1.1527416706085205':8 '-1.152742':14 '1':4 '13':1 '2':3 '46.153770':15 '46.153770446777344':7 '46.15377045':9 '7':5 '8':6 'coordinat':13 'mediathequ':2 'point':12 'typ':11",
              "geo_point_2d": "46.15377045,-1.15274167",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.152742,46.153770]}",
              "station_longitude": "-1.1527416706085205",
              "station_latitude": "46.153770446777344",
              "velos_disponibles": "1",
              "_id": 31
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 32,
          "fields": {
              "nombre_emplacements": "14",
              "station_nom": "14 Bibliothèque Universitaire 1",
              "total_count": "135",
              "accroches_libres": "8",
              "_full_text": "'-1.153524':15 '-1.15352404':11 '-1.1535240411758423':9 '1':4 '14':1,7 '46.152408599853516':8 '46.15240860':10 '46.152409':16 '6':5 '8':6 'bibliothequ':2 'coordinat':14 'point':13 'typ':12 'universitair':3",
              "geo_point_2d": "46.15240860,-1.15352404",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153524,46.152409]}",
              "station_longitude": "-1.1535240411758423",
              "station_latitude": "46.152408599853516",
              "velos_disponibles": "6",
              "_id": 32
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 33,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "14 Bibliothèque Universitaire 2",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.153916':15 '-1.15391600':11 '-1.1539160013198853':9 '10':7 '14':1 '2':4 '4':6 '46.152294':16 '46.15229415893555':8 '46.15229416':10 '6':5 'bibliothequ':2 'coordinat':14 'point':13 'typ':12 'universitair':3",
              "geo_point_2d": "46.15229416,-1.15391600",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153916,46.152294]}",
              "station_longitude": "-1.1539160013198853",
              "station_latitude": "46.15229415893555",
              "velos_disponibles": "6",
              "_id": 33
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 34,
          "fields": {
              "nombre_emplacements": "12",
              "station_nom": "15 Office de Tourisme 1",
              "total_count": "135",
              "accroches_libres": "10",
              "_full_text": "'-1.149953':16 '-1.149953007698059':10 '-1.14995301':12 '1':5 '10':7 '12':8 '15':1 '2':6 '46.15503692626953':9 '46.15503693':11 '46.155037':17 'coordinat':15 'offic':2 'point':14 'tourism':4 'typ':13",
              "geo_point_2d": "46.15503693,-1.14995301",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.149953,46.155037]}",
              "station_longitude": "-1.149953007698059",
              "station_latitude": "46.15503692626953",
              "velos_disponibles": "2",
              "_id": 34
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 35,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "15 Office de Tourisme 2",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.15012598':12 '-1.1501259803771973':10 '-1.150126':16 '15':1 '2':5 '4':6,7 '46.155029':17 '46.155029296875':9 '46.15502930':11 '8':8 'coordinat':15 'offic':2 'point':14 'tourism':4 'typ':13",
              "geo_point_2d": "46.15502930,-1.15012598",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.150126,46.155029]}",
              "station_longitude": "-1.1501259803771973",
              "station_latitude": "46.155029296875",
              "velos_disponibles": "4",
              "_id": 35
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 36,
          "fields": {
              "nombre_emplacements": "14",
              "station_nom": "16 Gare 1",
              "total_count": "135",
              "accroches_libres": "13",
              "_full_text": "'-1.1453399658203125':8 '-1.14533997':10 '-1.145340':14 '1':3,4 '13':5 '14':6 '16':1 '46.153419':15 '46.15341949':9 '46.153419494628906':7 'coordinat':13 'gar':2 'point':12 'typ':11",
              "geo_point_2d": "46.15341949,-1.14533997",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.145340,46.153419]}",
              "station_longitude": "-1.1453399658203125",
              "station_latitude": "46.153419494628906",
              "velos_disponibles": "1",
              "_id": 36
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 37,
          "fields": {
              "nombre_emplacements": "14",
              "station_nom": "16 Gare 2",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.146700':14 '-1.14670002':10 '-1.1467000246047974':8 '14':6 '16':1 '2':3 '46.15277099609375':7 '46.152771':15 '46.15277100':9 '7':4,5 'coordinat':13 'gar':2 'point':12 'typ':11",
              "geo_point_2d": "46.15277100,-1.14670002",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.146700,46.152771]}",
              "station_longitude": "-1.1467000246047974",
              "station_latitude": "46.15277099609375",
              "velos_disponibles": "7",
              "_id": 37
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 38,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "17 Dames Blanches",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.1496139764785767':8 '-1.14961398':10 '-1.149614':14 '1':4 '17':1 '46.159084':15 '46.15908432':9 '46.15908432006836':7 '7':5 '8':6 'blanch':3 'coordinat':13 'dam':2 'point':12 'typ':11",
              "geo_point_2d": "46.15908432,-1.14961398",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.149614,46.159084]}",
              "station_longitude": "-1.1496139764785767",
              "station_latitude": "46.15908432006836",
              "velos_disponibles": "1",
              "_id": 38
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 39,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "18 Quai Louis Durand",
              "total_count": "135",
              "accroches_libres": "0",
              "_full_text": "'-1.149796':15 '-1.1497960090637207':9 '-1.14979601':11 '0':5,6 '18':1 '46.15843582':10 '46.1584358215332':8 '46.158436':16 '8':7 'coordinat':14 'durand':4 'lou':3 'point':13 'quai':2 'typ':12",
              "geo_point_2d": "46.15843582,-1.14979601",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.149796,46.158436]}",
              "station_longitude": "-1.1497960090637207",
              "station_latitude": "46.1584358215332",
              "velos_disponibles": "0",
              "_id": 39
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 40,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "19 La Rossignolette",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.1880249977111816':8 '-1.188025':14 '-1.18802500':10 '1':4 '19':1 '46.165710':15 '46.16571044921875':7 '46.16571045':9 '7':5 '8':6 'coordinat':13 'point':12 'rossignolet':3 'typ':11",
              "geo_point_2d": "46.16571045,-1.18802500",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.188025,46.165710]}",
              "station_longitude": "-1.1880249977111816",
              "station_latitude": "46.16571044921875",
              "velos_disponibles": "1",
              "_id": 40
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 41,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "20 Faculté de Sciences 1",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.157960':16 '-1.157960057258606':10 '-1.15796006':12 '1':5 '10':8 '20':1 '3':6 '46.14663696':11 '46.146636962890625':9 '46.146637':17 '7':7 'coordinat':15 'facult':2 'point':14 'scienc':4 'typ':13",
              "geo_point_2d": "46.14663696,-1.15796006",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.157960,46.146637]}",
              "station_longitude": "-1.157960057258606",
              "station_latitude": "46.146636962890625",
              "velos_disponibles": "3",
              "_id": 41
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 42,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "20 Faculté de Sciences 2",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.1578999757766724':10 '-1.15789998':12 '-1.157900':16 '10':8 '2':5 '20':1 '3':6 '46.14663696':11 '46.146636962890625':9 '46.146637':17 '7':7 'coordinat':15 'facult':2 'point':14 'scienc':4 'typ':13",
              "geo_point_2d": "46.14663696,-1.15789998",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.157900,46.146637]}",
              "station_longitude": "-1.1578999757766724",
              "station_latitude": "46.146636962890625",
              "velos_disponibles": "3",
              "_id": 42
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 43,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "20 Faculté de Sciences 3",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.157856':16 '-1.1578561067581177':10 '-1.15785611':12 '10':8 '20':1 '3':5,6 '46.14663696':11 '46.146636962890625':9 '46.146637':17 '7':7 'coordinat':15 'facult':2 'point':14 'scienc':4 'typ':13",
              "geo_point_2d": "46.14663696,-1.15785611",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.157856,46.146637]}",
              "station_longitude": "-1.1578561067581177",
              "station_latitude": "46.146636962890625",
              "velos_disponibles": "3",
              "_id": 43
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 44,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "21 Technoforum 1",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.153586':14 '-1.1535861492156982':8 '-1.15358615':10 '1':3 '2':4 '21':1 '46.148277':15 '46.14827728':9 '46.148277282714844':7 '6':5 '8':6 'coordinat':13 'point':12 'technoforum':2 'typ':11",
              "geo_point_2d": "46.14827728,-1.15358615",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153586,46.148277]}",
              "station_longitude": "-1.1535861492156982",
              "station_latitude": "46.148277282714844",
              "velos_disponibles": "2",
              "_id": 44
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 45,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "21 Technoforum 2",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.153522':14 '-1.15352225':10 '-1.153522253036499':8 '2':3 '21':1 '4':4,5 '46.148273':15 '46.14827346801758':7 '46.14827347':9 '8':6 'coordinat':13 'point':12 'technoforum':2 'typ':11",
              "geo_point_2d": "46.14827347,-1.15352225",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153522,46.148273]}",
              "station_longitude": "-1.153522253036499",
              "station_latitude": "46.14827346801758",
              "velos_disponibles": "4",
              "_id": 45
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 46,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "21 Technoforum 3",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.1534556150436401':8 '-1.15345562':10 '-1.153456':14 '21':1 '3':3,4 '46.148277':15 '46.14827728':9 '46.148277282714844':7 '5':5 '8':6 'coordinat':13 'point':12 'technoforum':2 'typ':11",
              "geo_point_2d": "46.14827728,-1.15345562",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153456,46.148277]}",
              "station_longitude": "-1.1534556150436401",
              "station_latitude": "46.148277282714844",
              "velos_disponibles": "3",
              "_id": 46
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 47,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "22 Porte de Cougnes",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.1457469463348389':9 '-1.14574695':11 '-1.145747':15 '10':7 '22':1 '4':5 '46.162910':16 '46.16291046':10 '46.16291046142578':8 '6':6 'coordinat':14 'cougn':4 'point':13 'port':2 'typ':12",
              "geo_point_2d": "46.16291046,-1.14574695",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.145747,46.162910]}",
              "station_longitude": "-1.1457469463348389",
              "station_latitude": "46.16291046142578",
              "velos_disponibles": "4",
              "_id": 47
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 48,
          "fields": {
              "nombre_emplacements": "6",
              "station_nom": "23 Place Cacaud 1",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.14690995':11 '-1.1469099521636963':9 '-1.146910':15 '1':4 '2':5 '23':1 '4':6 '46.163719':16 '46.163719177246094':8 '46.16371918':10 '6':7 'cacaud':3 'coordinat':14 'plac':2 'point':13 'typ':12",
              "geo_point_2d": "46.16371918,-1.14690995",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.146910,46.163719]}",
              "station_longitude": "-1.1469099521636963",
              "station_latitude": "46.163719177246094",
              "velos_disponibles": "2",
              "_id": 48
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 49,
          "fields": {
              "nombre_emplacements": "6",
              "station_nom": "23 Place Cacaud 2",
              "total_count": "135",
              "accroches_libres": "3",
              "_full_text": "'-1.146944':15 '-1.14694440':11 '-1.1469444036483765':9 '2':4 '23':1 '3':5,6 '46.163719':16 '46.163719177246094':8 '46.16371918':10 '6':7 'cacaud':3 'coordinat':14 'plac':2 'point':13 'typ':12",
              "geo_point_2d": "46.16371918,-1.14694440",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.146944,46.163719]}",
              "station_longitude": "-1.1469444036483765",
              "station_latitude": "46.163719177246094",
              "velos_disponibles": "3",
              "_id": 49
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 50,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "24 EIGSI 1",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.153651':14 '-1.1536511182785034':8 '-1.15365112':10 '1':3 '2':4 '24':1 '46.14054870605469':7 '46.14054871':9 '46.140549':15 '6':5 '8':6 'coordinat':13 'eigs':2 'point':12 'typ':11",
              "geo_point_2d": "46.14054871,-1.15365112",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153651,46.140549]}",
              "station_longitude": "-1.1536511182785034",
              "station_latitude": "46.14054870605469",
              "velos_disponibles": "2",
              "_id": 50
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 51,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "24 EIGSI 2",
              "total_count": "135",
              "accroches_libres": "3",
              "_full_text": "'-1.153651':14 '-1.1536511182785034':8 '-1.15365112':10 '2':3 '24':1 '3':5 '46.140575':15 '46.14057540893555':7 '46.14057541':9 '5':4 '8':6 'coordinat':13 'eigs':2 'point':12 'typ':11",
              "geo_point_2d": "46.14057541,-1.15365112",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153651,46.140575]}",
              "station_longitude": "-1.1536511182785034",
              "station_latitude": "46.14057540893555",
              "velos_disponibles": "5",
              "_id": 51
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 52,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "24 EIGSI 3",
              "total_count": "135",
              "accroches_libres": "2",
              "_full_text": "'-1.153651':14 '-1.1536511182785034':8 '-1.15365112':10 '2':5 '24':1 '3':3 '46.140598':15 '46.14059829711914':7 '46.14059830':9 '6':4 '8':6 'coordinat':13 'eigs':2 'point':12 'typ':11",
              "geo_point_2d": "46.14059830,-1.15365112",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153651,46.140598]}",
              "station_longitude": "-1.1536511182785034",
              "station_latitude": "46.14059829711914",
              "velos_disponibles": "6",
              "_id": 52
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 53,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "25 IUT 1",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.152600':14 '-1.1526000499725342':8 '-1.15260005':10 '1':3 '25':1 '3':4 '46.142044':15 '46.14204406738281':7 '46.14204407':9 '5':5 '8':6 'coordinat':13 'iut':2 'point':12 'typ':11",
              "geo_point_2d": "46.14204407,-1.15260005",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.152600,46.142044]}",
              "station_longitude": "-1.1526000499725342",
              "station_latitude": "46.14204406738281",
              "velos_disponibles": "3",
              "_id": 53
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 54,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "25 IUT 2",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.1526999473571777':8 '-1.15269995':10 '-1.152700':14 '2':3 '25':1 '4':4,5 '46.142044':15 '46.14204406738281':7 '46.14204407':9 '8':6 'coordinat':13 'iut':2 'point':12 'typ':11",
              "geo_point_2d": "46.14204407,-1.15269995",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.152700,46.142044]}",
              "station_longitude": "-1.1526999473571777",
              "station_latitude": "46.14204406738281",
              "velos_disponibles": "4",
              "_id": 54
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 55,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "25 IUT 3",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.15279996':10 '-1.1527999639511108':8 '-1.152800':14 '2':4 '25':1 '3':3 '46.142044':15 '46.14204406738281':7 '46.14204407':9 '6':5 '8':6 'coordinat':13 'iut':2 'point':12 'typ':11",
              "geo_point_2d": "46.14204407,-1.15279996",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.152800,46.142044]}",
              "station_longitude": "-1.1527999639511108",
              "station_latitude": "46.14204406738281",
              "velos_disponibles": "2",
              "_id": 55
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 56,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "26 Maison du Département",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.152369':15 '-1.15236902':11 '-1.1523690223693848':9 '10':7 '26':1 '46.138187':16 '46.138187408447266':8 '46.13818741':10 '5':5,6 'coordinat':14 'départ':4 'maison':2 'point':13 'typ':12",
              "geo_point_2d": "46.13818741,-1.15236902",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.152369,46.138187]}",
              "station_longitude": "-1.1523690223693848",
              "station_latitude": "46.138187408447266",
              "velos_disponibles": "5",
              "_id": 56
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 57,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "27 Vaux de Foletier",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.153470':15 '-1.1534700393676758':9 '-1.15347004':11 '10':7 '27':1 '4':5 '46.140270':16 '46.14027023':10 '46.1402702331543':8 '6':6 'coordinat':14 'foleti':4 'point':13 'typ':12 'vaux':2",
              "geo_point_2d": "46.14027023,-1.15347004",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.153470,46.140270]}",
              "station_longitude": "-1.1534700393676758",
              "station_latitude": "46.1402702331543",
              "velos_disponibles": "4",
              "_id": 57
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 58,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "28 Maison du Port La Pallice",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.218858':17 '-1.21885800':13 '-1.218858003616333':11 '28':1 '4':7,8 '46.16054153':12 '46.16054153442383':10 '46.160542':18 '8':9 'coordinat':16 'maison':2 'pallic':6 'point':15 'port':4 'typ':14",
              "geo_point_2d": "46.16054153,-1.21885800",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.218858,46.160542]}",
              "station_longitude": "-1.218858003616333",
              "station_latitude": "46.16054153442383",
              "velos_disponibles": "4",
              "_id": 58
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 59,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "29 Mairie Annexe de Laleu",
              "total_count": "135",
              "accroches_libres": "3",
              "_full_text": "'-1.200193':16 '-1.2001930475234985':10 '-1.20019305':12 '29':1 '3':7 '46.167980':17 '46.16798019':11 '46.1679801940918':9 '5':6 '8':8 'annex':3 'coordinat':15 'laleu':5 'mair':2 'point':14 'typ':13",
              "geo_point_2d": "46.16798019,-1.20019305",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.200193,46.167980]}",
              "station_longitude": "-1.2001930475234985",
              "station_latitude": "46.1679801940918",
              "velos_disponibles": "5",
              "_id": 59
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 60,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "30 Ludothèque de Mireuil",
              "total_count": "135",
              "accroches_libres": "0",
              "_full_text": "'-1.177404':15 '-1.1774040460586548':9 '-1.17740405':11 '0':5,6 '30':1 '46.169979':16 '46.169979095458984':8 '46.16997910':10 '8':7 'coordinat':14 'ludothequ':2 'mireuil':4 'point':13 'typ':12",
              "geo_point_2d": "46.16997910,-1.17740405",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.177404,46.169979]}",
              "station_longitude": "-1.1774040460586548",
              "station_latitude": "46.169979095458984",
              "velos_disponibles": "0",
              "_id": 60
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 61,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "31 Mairie Annexe de Mireuil",
              "total_count": "135",
              "accroches_libres": "0",
              "_full_text": "'-1.178640':16 '-1.1786400079727173':10 '-1.17864001':12 '0':6,7 '31':1 '46.1657829284668':9 '46.16578293':11 '46.165783':17 '8':8 'annex':3 'coordinat':15 'mair':2 'mireuil':5 'point':14 'typ':13",
              "geo_point_2d": "46.16578293,-1.17864001",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.178640,46.165783]}",
              "station_longitude": "-1.1786400079727173",
              "station_latitude": "46.1657829284668",
              "velos_disponibles": "0",
              "_id": 61
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 62,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "32 Place St Maurice",
              "total_count": "135",
              "accroches_libres": "9",
              "_full_text": "'-1.1763019561767578':9 '-1.17630196':11 '-1.176302':15 '1':5 '10':7 '32':1 '46.164344787597656':8 '46.16434479':10 '46.164345':16 '9':6 'coordinat':14 'mauric':4 'plac':2 'point':13 'st':3 'typ':12",
              "geo_point_2d": "46.16434479,-1.17630196",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.176302,46.164345]}",
              "station_longitude": "-1.1763019561767578",
              "station_latitude": "46.164344787597656",
              "velos_disponibles": "1",
              "_id": 62
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 63,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "33 Marché de Port Neuf",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.179818':16 '-1.17981803':12 '-1.179818034172058':10 '3':6 '33':1 '46.159378':17 '46.15937805':11 '46.15937805175781':9 '5':7 '8':8 'coordinat':15 'march':2 'neuf':5 'point':14 'port':4 'typ':13",
              "geo_point_2d": "46.15937805,-1.17981803",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.179818,46.159378]}",
              "station_longitude": "-1.179818034172058",
              "station_latitude": "46.15937805175781",
              "velos_disponibles": "3",
              "_id": 63
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 64,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "34 Maison de l'Emploi",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.168858':16 '-1.16885805':12 '-1.1688580513000488':10 '1':6 '34':1 '46.16865158':11 '46.16865158081055':9 '46.168652':17 '7':7 '8':8 'coordinat':15 'emploi':5 'maison':2 'point':14 'typ':13",
              "geo_point_2d": "46.16865158,-1.16885805",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.168858,46.168652]}",
              "station_longitude": "-1.1688580513000488",
              "station_latitude": "46.16865158081055",
              "velos_disponibles": "1",
              "_id": 64
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 65,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "35 Aristide Briand",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.1641429662704468':8 '-1.16414297':10 '-1.164143':14 '3':4 '35':1 '46.165981':15 '46.16598129':9 '46.16598129272461':7 '5':5 '8':6 'aristid':2 'briand':3 'coordinat':13 'point':12 'typ':11",
              "geo_point_2d": "46.16598129,-1.16414297",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.164143,46.165981]}",
              "station_longitude": "-1.1641429662704468",
              "station_latitude": "46.16598129272461",
              "velos_disponibles": "3",
              "_id": 65
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 66,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "36 Eglise de La Genette",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.17160594':12 '-1.1716059446334839':10 '-1.171606':16 '3':6 '36':1 '46.160671':17 '46.16067123':11 '46.16067123413086':9 '5':7 '8':8 'coordinat':15 'eglis':2 'genet':5 'point':14 'typ':13",
              "geo_point_2d": "46.16067123,-1.17160594",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.171606,46.160671]}",
              "station_longitude": "-1.1716059446334839",
              "station_latitude": "46.16067123413086",
              "velos_disponibles": "3",
              "_id": 66
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 67,
          "fields": {
              "nombre_emplacements": "5",
              "station_nom": "36 La Genette coligny",
              "total_count": "135",
              "accroches_libres": "0",
              "_full_text": "'-1.16582596':11 '-1.1658259630203247':9 '-1.165826':15 '0':5,6 '36':1 '46.15983581542969':8 '46.15983582':10 '46.159836':16 '5':7 'coligny':4 'coordinat':14 'genet':3 'point':13 'typ':12",
              "geo_point_2d": "46.15983582,-1.16582596",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.165826,46.159836]}",
              "station_longitude": "-1.1658259630203247",
              "station_latitude": "46.15983581542969",
              "velos_disponibles": "0",
              "_id": 67
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 68,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "36 La Genette Guiton",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.166314959526062':9 '-1.16631496':11 '-1.166315':15 '1':5 '36':1 '46.15971374511719':8 '46.15971375':10 '46.159714':16 '7':6 '8':7 'coordinat':14 'genet':3 'guiton':4 'point':13 'typ':12",
              "geo_point_2d": "46.15971375,-1.16631496",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.166315,46.159714]}",
              "station_longitude": "-1.166314959526062",
              "station_latitude": "46.15971374511719",
              "velos_disponibles": "1",
              "_id": 68
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 69,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "37 Plage de la Concurrence 1",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.16073799':13 '-1.1607379913330078':11 '-1.160738':17 '1':6 '10':9 '3':7 '37':1 '46.15578079':12 '46.15578079223633':10 '46.155781':18 '7':8 'concurrent':5 'coordinat':16 'plag':2 'point':15 'typ':14",
              "geo_point_2d": "46.15578079,-1.16073799",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.160738,46.155781]}",
              "station_longitude": "-1.1607379913330078",
              "station_latitude": "46.15578079223633",
              "velos_disponibles": "3",
              "_id": 69
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 70,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "37 Plage de la Concurrence 2",
              "total_count": "135",
              "accroches_libres": "8",
              "_full_text": "'-1.160599946975708':11 '-1.16059995':13 '-1.160600':17 '10':9 '2':6,7 '37':1 '46.15570068':12 '46.15570068359375':10 '46.155701':18 '8':8 'concurrent':5 'coordinat':16 'plag':2 'point':15 'typ':14",
              "geo_point_2d": "46.15570068,-1.16059995",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.160600,46.155701]}",
              "station_longitude": "-1.160599946975708",
              "station_latitude": "46.15570068359375",
              "velos_disponibles": "2",
              "_id": 70
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 71,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "38 Le Mail",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.1707669496536255':8 '-1.17076695':10 '-1.170767':14 '2':4 '38':1 '46.155807':15 '46.15580749511719':7 '46.15580750':9 '6':5 '8':6 'coordinat':13 'mail':3 'point':12 'typ':11",
              "geo_point_2d": "46.15580750,-1.17076695",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.170767,46.155807]}",
              "station_longitude": "-1.1707669496536255",
              "station_latitude": "46.15580749511719",
              "velos_disponibles": "2",
              "_id": 71
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 72,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "39 Vieljeux",
              "total_count": "135",
              "accroches_libres": "8",
              "_full_text": "'-1.1516027450561523':7 '-1.15160275':9 '-1.151603':13 '10':5 '2':3 '39':1 '46.177223':14 '46.177223205566406':6 '46.17722321':8 '8':4 'coordinat':12 'point':11 'typ':10 'vieljeux':2",
              "geo_point_2d": "46.17722321,-1.15160275",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.151603,46.177223]}",
              "station_longitude": "-1.1516027450561523",
              "station_latitude": "46.177223205566406",
              "velos_disponibles": "2",
              "_id": 72
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 73,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "40 Cité Administrative Mangin",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.140437':15 '-1.1404370069503784':9 '-1.14043701':11 '10':7 '4':6 '40':1 '46.167320':16 '46.16732025':10 '46.167320251464844':8 '6':5 'administr':3 'cit':2 'coordinat':14 'mangin':4 'point':13 'typ':12",
              "geo_point_2d": "46.16732025,-1.14043701",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.140437,46.167320]}",
              "station_longitude": "-1.1404370069503784",
              "station_latitude": "46.167320251464844",
              "velos_disponibles": "6",
              "_id": 73
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 74,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "41 Debussy",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.135486':13 '-1.1354860067367554':7 '-1.13548601':9 '3':3 '41':1 '46.158546':14 '46.158546447753906':6 '46.15854645':8 '5':4 '8':5 'coordinat':12 'debussy':2 'point':11 'typ':10",
              "geo_point_2d": "46.15854645,-1.13548601",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.135486,46.158546]}",
              "station_longitude": "-1.1354860067367554",
              "station_latitude": "46.158546447753906",
              "velos_disponibles": "3",
              "_id": 74
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 75,
          "fields": {
              "nombre_emplacements": "12",
              "station_nom": "42 LEP de Rompsay",
              "total_count": "135",
              "accroches_libres": "10",
              "_full_text": "'-1.12761199':11 '-1.1276119947433472':9 '-1.127612':15 '10':6 '12':7 '2':5 '42':1 '46.160789':16 '46.160789489746094':8 '46.16078949':10 'coordinat':14 'lep':2 'point':13 'rompsay':4 'typ':12",
              "geo_point_2d": "46.16078949,-1.12761199",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.127612,46.160789]}",
              "station_longitude": "-1.1276119947433472",
              "station_latitude": "46.160789489746094",
              "velos_disponibles": "2",
              "_id": 75
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 76,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "43 Mairie Annexe de Villeneuve",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.122771978378296':10 '-1.12277198':12 '-1.122772':16 '4':6,7 '43':1 '46.151836':17 '46.15183639526367':9 '46.15183640':11 '8':8 'annex':3 'coordinat':15 'mair':2 'point':14 'typ':13 'villeneuv':5",
              "geo_point_2d": "46.15183640,-1.12277198",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.122772,46.151836]}",
              "station_longitude": "-1.122771978378296",
              "station_latitude": "46.15183639526367",
              "velos_disponibles": "4",
              "_id": 76
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 77,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "44 Centre Cial. de Villeneuve",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.125094':16 '-1.1250940561294556':10 '-1.12509406':12 '2':6 '44':1 '46.152099609375':9 '46.15209961':11 '46.152100':17 '6':7 '8':8 'centr':2 'cial':3 'coordinat':15 'point':14 'typ':13 'villeneuv':5",
              "geo_point_2d": "46.15209961,-1.12509406",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.125094,46.152100]}",
              "station_longitude": "-1.1250940561294556",
              "station_latitude": "46.152099609375",
              "velos_disponibles": "2",
              "_id": 77
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 78,
          "fields": {
              "nombre_emplacements": "14",
              "station_nom": "45 P+R Jean-Moulin",
              "total_count": "135",
              "accroches_libres": "12",
              "_full_text": "'-1.139753':17 '-1.13975334':13 '-1.1397533416748047':11 '12':8 '14':9 '2':7 '45':1 '46.152805':18 '46.15280532836914':10 '46.15280533':12 'coordinat':16 'jean':5 'jean-moulin':4 'moulin':6 'p':2 'point':15 'r':3 'typ':14",
              "geo_point_2d": "46.15280533,-1.13975334",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.139753,46.152805]}",
              "station_longitude": "-1.1397533416748047",
              "station_latitude": "46.15280532836914",
              "velos_disponibles": "2",
              "_id": 78
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 79,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "46 Eglise de Tasdon",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.143987':15 '-1.1439870595932007':9 '-1.14398706':11 '3':5 '46':1 '46.1484375':8 '46.14843750':10 '46.148438':16 '5':6 '8':7 'coordinat':14 'eglis':2 'point':13 'tasdon':4 'typ':12",
              "geo_point_2d": "46.14843750,-1.14398706",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.143987,46.148438]}",
              "station_longitude": "-1.1439870595932007",
              "station_latitude": "46.1484375",
              "velos_disponibles": "3",
              "_id": 79
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 80,
          "fields": {
              "nombre_emplacements": "12",
              "station_nom": "47 Institut Confucius de Chine",
              "total_count": "135",
              "accroches_libres": "9",
              "_full_text": "'-1.1697419881820679':10 '-1.16974199':12 '-1.169742':16 '12':8 '3':6 '46.14087677':11 '46.14087677001953':9 '46.140877':17 '47':1 '9':7 'chin':5 'confucius':3 'coordinat':15 'institut':2 'point':14 'typ':13",
              "geo_point_2d": "46.14087677,-1.16974199",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.169742,46.140877]}",
              "station_longitude": "-1.1697419881820679",
              "station_latitude": "46.14087677001953",
              "velos_disponibles": "3",
              "_id": 80
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 81,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "48 Plage des Minimes 1",
              "total_count": "135",
              "accroches_libres": "0",
              "_full_text": "'-1.17031598':12 '-1.1703159809112549':10 '-1.170316':16 '0':6,7 '1':5 '10':8 '46.14133071899414':9 '46.14133072':11 '46.141331':17 '48':1 'coordinat':15 'minim':4 'plag':2 'point':14 'typ':13",
              "geo_point_2d": "46.14133072,-1.17031598",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.170316,46.141331]}",
              "station_longitude": "-1.1703159809112549",
              "station_latitude": "46.14133071899414",
              "velos_disponibles": "0",
              "_id": 81
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 82,
          "fields": {
              "nombre_emplacements": "6",
              "station_nom": "48 Plage des Minimes 2",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.17042696':12 '-1.1704269647598267':10 '-1.170427':16 '1':6 '2':5 '46.141422':17 '46.14142227':11 '46.141422271728516':9 '48':1 '5':7 '6':8 'coordinat':15 'minim':4 'plag':2 'point':14 'typ':13",
              "geo_point_2d": "46.14142227,-1.17042696",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.170427,46.141422]}",
              "station_longitude": "-1.1704269647598267",
              "station_latitude": "46.141422271728516",
              "velos_disponibles": "1",
              "_id": 82
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 83,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "49 Capitainerie",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.166694':13 '-1.16669416':9 '-1.166694164276123':7 '1':3 '46.14363479614258':6 '46.14363480':8 '46.143635':14 '49':1 '7':4 '8':5 'capitainer':2 'coordinat':12 'point':11 'typ':10",
              "geo_point_2d": "46.14363480,-1.16669416",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.166694,46.143635]}",
              "station_longitude": "-1.166694164276123",
              "station_latitude": "46.14363479614258",
              "velos_disponibles": "1",
              "_id": 83
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 84,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "50 Lazaret",
              "total_count": "135",
              "accroches_libres": "7",
              "_full_text": "'-1.16590166':9 '-1.1659016609191895':7 '-1.165902':13 '1':3 '46.1408576965332':6 '46.14085770':8 '46.140858':14 '50':1 '7':4 '8':5 'coordinat':12 'lazaret':2 'point':11 'typ':10",
              "geo_point_2d": "46.14085770,-1.16590166",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.165902,46.140858]}",
              "station_longitude": "-1.1659016609191895",
              "station_latitude": "46.1408576965332",
              "velos_disponibles": "1",
              "_id": 84
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 85,
          "fields": {
              "nombre_emplacements": "12",
              "station_nom": "51 Gymnase Universitaire 1",
              "total_count": "135",
              "accroches_libres": "0",
              "_full_text": "'-1.14501798':11 '-1.1450179815292358':9 '-1.145018':15 '0':5,6 '1':4 '12':7 '46.13878250':10 '46.1387825012207':8 '46.138783':16 '51':1 'coordinat':14 'gymnas':2 'point':13 'typ':12 'universitair':3",
              "geo_point_2d": "46.13878250,-1.14501798",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.145018,46.138783]}",
              "station_longitude": "-1.1450179815292358",
              "station_latitude": "46.1387825012207",
              "velos_disponibles": "0",
              "_id": 85
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 86,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "51 Gymnase Universitaire 2",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.1450079679489136':9 '-1.14500797':11 '-1.145008':15 '2':4 '3':5 '46.13844680786133':8 '46.13844681':10 '46.138447':16 '5':6 '51':1 '8':7 'coordinat':14 'gymnas':2 'point':13 'typ':12 'universitair':3",
              "geo_point_2d": "46.13844681,-1.14500797",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.145008,46.138447]}",
              "station_longitude": "-1.1450079679489136",
              "station_latitude": "46.13844680786133",
              "velos_disponibles": "3",
              "_id": 86
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 87,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "52 Port de Pêche",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.220833':15 '-1.22083330':11 '-1.2208333015441895':9 '10':7 '4':5 '46.14944458':10 '46.149444580078125':8 '46.149445':16 '52':1 '6':6 'coordinat':14 'point':13 'port':2 'pêch':4 'typ':12",
              "geo_point_2d": "46.14944458,-1.22083330",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.220833,46.149445]}",
              "station_longitude": "-1.2208333015441895",
              "station_latitude": "46.149444580078125",
              "velos_disponibles": "4",
              "_id": 87
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 88,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "53 Les Parcs",
              "total_count": "135",
              "accroches_libres": "3",
              "_full_text": "'-1.159041':14 '-1.1590410470962524':8 '-1.15904105':10 '3':5 '46.162334':15 '46.16233444':9 '46.16233444213867':7 '5':4 '53':1 '8':6 'coordinat':13 'le':2 'parc':3 'point':12 'typ':11",
              "geo_point_2d": "46.16233444,-1.15904105",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.159041,46.162334]}",
              "station_longitude": "-1.1590410470962524",
              "station_latitude": "46.16233444213867",
              "velos_disponibles": "5",
              "_id": 88
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 89,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "54 La Corniche",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.17695999':10 '-1.1769599914550781':8 '-1.176960':14 '3':4 '46.153549':15 '46.15354919':9 '46.15354919433594':7 '5':5 '54':1 '8':6 'coordinat':13 'cornich':3 'point':12 'typ':11",
              "geo_point_2d": "46.15354919,-1.17695999",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.176960,46.153549]}",
              "station_longitude": "-1.1769599914550781",
              "station_latitude": "46.15354919433594",
              "velos_disponibles": "3",
              "_id": 89
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 90,
          "fields": {
              "nombre_emplacements": "14",
              "station_nom": "55 Plage Chef de Baie",
              "total_count": "135",
              "accroches_libres": "8",
              "_full_text": "'-1.205567':16 '-1.20556724':12 '-1.2055672407150269':10 '14':8 '46.15042877':11 '46.150428771972656':9 '46.150429':17 '55':1 '6':6 '8':7 'bai':5 'chef':3 'coordinat':15 'plag':2 'point':14 'typ':13",
              "geo_point_2d": "46.15042877,-1.20556724",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.205567,46.150429]}",
              "station_longitude": "-1.2055672407150269",
              "station_latitude": "46.150428771972656",
              "velos_disponibles": "6",
              "_id": 90
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 91,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "56 Hôpital St Louis",
              "total_count": "135",
              "accroches_libres": "8",
              "_full_text": "'-1.14466798':11 '-1.1446679830551147':9 '-1.144668':15 '10':7 '2':5 '46.15827178955078':8 '46.15827179':10 '46.158272':16 '56':1 '8':6 'coordinat':14 'hôpital':2 'lou':4 'point':13 'st':3 'typ':12",
              "geo_point_2d": "46.15827179,-1.14466798",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.144668,46.158272]}",
              "station_longitude": "-1.1446679830551147",
              "station_latitude": "46.15827178955078",
              "velos_disponibles": "2",
              "_id": 91
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 92,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "57 Marché de la Pallice",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.2072759866714478':10 '-1.20727599':12 '-1.207276':16 '4':6,7 '46.16127777':11 '46.161277770996094':9 '46.161278':17 '57':1 '8':8 'coordinat':15 'march':2 'pallic':5 'point':14 'typ':13",
              "geo_point_2d": "46.16127777,-1.20727599",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.207276,46.161278]}",
              "station_longitude": "-1.2072759866714478",
              "station_latitude": "46.161277770996094",
              "velos_disponibles": "4",
              "_id": 92
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 93,
          "fields": {
              "nombre_emplacements": "12",
              "station_nom": "58 Digue du Bout Blanc",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.1609539985656738':10 '-1.160954':16 '-1.16095400':12 '12':8 '46.14853286743164':9 '46.14853287':11 '46.148533':17 '58':1 '6':6,7 'blanc':5 'bout':4 'coordinat':15 'digu':2 'point':14 'typ':13",
              "geo_point_2d": "46.14853287,-1.16095400",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.160954,46.148533]}",
              "station_longitude": "-1.1609539985656738",
              "station_latitude": "46.14853286743164",
              "velos_disponibles": "6",
              "_id": 93
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 94,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "59 Lafond",
              "total_count": "135",
              "accroches_libres": "6",
              "_full_text": "'-1.145439':13 '-1.1454390287399292':7 '-1.14543903':9 '2':3 '46.174171':14 '46.174171447753906':6 '46.17417145':8 '59':1 '6':4 '8':5 'coordinat':12 'lafond':2 'point':11 'typ':10",
              "geo_point_2d": "46.17417145,-1.14543903",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.145439,46.174171]}",
              "station_longitude": "-1.1454390287399292",
              "station_latitude": "46.174171447753906",
              "velos_disponibles": "2",
              "_id": 94
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 95,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "60 Commissariat",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.146795':13 '-1.14679503':9 '-1.1467950344085693':7 '4':3,4 '46.169128':14 '46.16912841796875':6 '46.16912842':8 '60':1 '8':5 'commissariat':2 'coordinat':12 'point':11 'typ':10",
              "geo_point_2d": "46.16912842,-1.14679503",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.146795,46.169128]}",
              "station_longitude": "-1.1467950344085693",
              "station_latitude": "46.16912841796875",
              "velos_disponibles": "4",
              "_id": 95
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 96,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "61 Patte d'Oie",
              "total_count": "135",
              "accroches_libres": "0",
              "_full_text": "'-1.1376219987869263':9 '-1.137622':15 '-1.13762200':11 '0':5,6 '10':7 '46.166538':16 '46.16653823852539':8 '46.16653824':10 '61':1 'coordinat':14 'oie':4 'patt':2 'point':13 'typ':12",
              "geo_point_2d": "46.16653824,-1.13762200",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.137622,46.166538]}",
              "station_longitude": "-1.1376219987869263",
              "station_latitude": "46.16653823852539",
              "velos_disponibles": "0",
              "_id": 96
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 97,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "62 Aquarium 1",
              "total_count": "135",
              "accroches_libres": "0",
              "_full_text": "'-1.1499019861221313':8 '-1.14990199':10 '-1.149902':14 '0':4,5 '1':3 '46.152645':15 '46.15264511':9 '46.152645111083984':7 '62':1 '8':6 'aquarium':2 'coordinat':13 'point':12 'typ':11",
              "geo_point_2d": "46.15264511,-1.14990199",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.149902,46.152645]}",
              "station_longitude": "-1.1499019861221313",
              "station_latitude": "46.152645111083984",
              "velos_disponibles": "0",
              "_id": 97
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 98,
          "fields": {
              "nombre_emplacements": "10",
              "station_nom": "62 Aquarium 2",
              "total_count": "135",
              "accroches_libres": "9",
              "_full_text": "'-1.15011668':10 '-1.1501166820526123':8 '-1.150117':14 '1':4 '10':6 '2':3 '46.15349960':9 '46.153499603271484':7 '46.153500':15 '62':1 '9':5 'aquarium':2 'coordinat':13 'point':12 'typ':11",
              "geo_point_2d": "46.15349960,-1.15011668",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.150117,46.153500]}",
              "station_longitude": "-1.1501166820526123",
              "station_latitude": "46.153499603271484",
              "velos_disponibles": "1",
              "_id": 98
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 99,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "63 08 mai 1945",
              "total_count": "135",
              "accroches_libres": "4",
              "_full_text": "'-1.152075':15 '-1.15207505':11 '-1.1520750522613525':9 '08':2 '1945':4 '4':5,6 '46.18326950':10 '46.18326950073242':8 '46.183270':16 '63':1 '8':7 'coordinat':14 'mai':3 'point':13 'typ':12",
              "geo_point_2d": "46.18326950,-1.15207505",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.152075,46.183270]}",
              "station_longitude": "-1.1520750522613525",
              "station_latitude": "46.18326950073242",
              "velos_disponibles": "4",
              "_id": 99
          }
      },
      {
          "datasetid": "yelo___disponibilite_des_velos_en_libre_service",
          "recordid": 100,
          "fields": {
              "nombre_emplacements": "8",
              "station_nom": "64 Aéroport",
              "total_count": "135",
              "accroches_libres": "5",
              "_full_text": "'-1.195242':13 '-1.1952420473098755':7 '-1.19524205':9 '3':3 '46.175758':14 '46.17575836':8 '46.175758361816406':6 '5':4 '64':1 '8':5 'aéroport':2 'coordinat':12 'point':11 'typ':10",
              "geo_point_2d": "46.17575836,-1.19524205",
              "geojson": "{\"type\":\"Point\",\"coordinates\":[-1.195242,46.175758]}",
              "station_longitude": "-1.1952420473098755",
              "station_latitude": "46.175758361816406",
              "velos_disponibles": "3",
              "_id": 100
          }
      }
  ]
  }
}
