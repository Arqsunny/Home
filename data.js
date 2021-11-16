var APP_DATA = {
  "scenes": [
    {
      "id": "0-street",
      "name": "Street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.4452914847327545,
        "pitch": -0.19299914467100088,
        "fov": 1.5327095591293887
      },
      "linkHotspots": [
        {
          "yaw": 1.3696057126219436,
          "pitch": -0.09775477205525185,
          "rotation": 0,
          "target": "2-entrance"
        },
        {
          "yaw": -0.24133591109380248,
          "pitch": 0.20277464203209838,
          "rotation": 0,
          "target": "1-street-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-street-2",
      "name": "Street 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.572382989751258,
        "pitch": -0.09642715062154217,
        "fov": 1.5327095591293887
      },
      "linkHotspots": [
        {
          "yaw": -1.8397263275711744,
          "pitch": -0.1290516427408548,
          "rotation": 0,
          "target": "2-entrance"
        },
        {
          "yaw": -0.5468206502604698,
          "pitch": 0.2120881206505345,
          "rotation": 0,
          "target": "0-street"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.821647309400408,
        "pitch": 0.1944614204201045,
        "fov": 1.5327095591293887
      },
      "linkHotspots": [
        {
          "yaw": 2.6060461055149986,
          "pitch": 0.2315523217787412,
          "rotation": 0,
          "target": "1-street-2"
        },
        {
          "yaw": 1.7612572569633693,
          "pitch": 0.22866382338814084,
          "rotation": 0,
          "target": "0-street"
        },
        {
          "yaw": -0.5584198813442747,
          "pitch": 0.2753659900368337,
          "rotation": 0,
          "target": "4-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom-3",
      "name": "Bathroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2685839794250633,
          "pitch": -0.05570452438432305,
          "rotation": 4.71238898038469,
          "target": "4-corridor-1"
        },
        {
          "yaw": 2.397483232032627,
          "pitch": -0.04817049375321503,
          "rotation": 7.853981633974483,
          "target": "2-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corridor-1",
      "name": "Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10372282632778251,
          "pitch": 0.16992761515647636,
          "rotation": 1.5707963267948966,
          "target": "3-bathroom-3"
        },
        {
          "yaw": 0.310102525445366,
          "pitch": -0.2431852627950537,
          "rotation": 3.141592653589793,
          "target": "2-entrance"
        },
        {
          "yaw": -1.19779961944554,
          "pitch": 0.3027666481629492,
          "rotation": 0,
          "target": "5-garage"
        },
        {
          "yaw": 2.45041331866879,
          "pitch": 0.0953181667153764,
          "rotation": 7.853981633974483,
          "target": "6-living-1"
        },
        {
          "yaw": 1.7567604764867282,
          "pitch": -0.13272030089541964,
          "rotation": 5.497787143782138,
          "target": "10-stair"
        },
        {
          "yaw": 3.0544870501863013,
          "pitch": 0.04276557870423758,
          "rotation": 8.63937979737193,
          "target": "7-living-2"
        },
        {
          "yaw": -2.6090666007028567,
          "pitch": 0.05417953804061071,
          "rotation": 7.853981633974483,
          "target": "8-dining"
        },
        {
          "yaw": -2.502166197916056,
          "pitch": -0.03435202107052859,
          "rotation": 2.356194490192345,
          "target": "9-back-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-garage",
      "name": "Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5182234481384578,
          "pitch": 0.008192641167340753,
          "rotation": 5.497787143782138,
          "target": "4-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-living-1",
      "name": "Living 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8327783735149428,
          "pitch": 0.0846566022092432,
          "rotation": 1.5707963267948966,
          "target": "7-living-2"
        },
        {
          "yaw": -0.37773195469704923,
          "pitch": 0.2304179471603014,
          "rotation": 1.5707963267948966,
          "target": "4-corridor-1"
        },
        {
          "yaw": -2.0023706262264085,
          "pitch": 0.06224544369263896,
          "rotation": 4.71238898038469,
          "target": "9-back-patio"
        },
        {
          "yaw": -1.8944270149760865,
          "pitch": 0.25508962160481197,
          "rotation": 1.5707963267948966,
          "target": "8-dining"
        },
        {
          "yaw": 0.7194816458213538,
          "pitch": -0.3076118271105983,
          "rotation": 0,
          "target": "10-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-living-2",
      "name": "Living 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7114126416521955,
          "pitch": 0.04877785446567984,
          "rotation": 4.71238898038469,
          "target": "9-back-patio"
        },
        {
          "yaw": -2.3750094804920323,
          "pitch": 0.29519020302798005,
          "rotation": 0,
          "target": "8-dining"
        },
        {
          "yaw": -1.223968514987959,
          "pitch": 0.1995774450339347,
          "rotation": 1.5707963267948966,
          "target": "4-corridor-1"
        },
        {
          "yaw": -0.3850227155823003,
          "pitch": 0.09080645603130577,
          "rotation": 4.71238898038469,
          "target": "6-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.7702331992971292,
        "pitch": 0.16293374799160532,
        "fov": 1.5327095591293887
      },
      "linkHotspots": [
        {
          "yaw": 1.0999931931580296,
          "pitch": 0.21305592197261447,
          "rotation": 10.995574287564278,
          "target": "9-back-patio"
        },
        {
          "yaw": -1.3931502541112923,
          "pitch": 0.09321665793781264,
          "rotation": 3.9269908169872414,
          "target": "7-living-2"
        },
        {
          "yaw": -2.275845773374961,
          "pitch": 0.06307746454459995,
          "rotation": 3.9269908169872414,
          "target": "6-living-1"
        },
        {
          "yaw": -2.4561369022590256,
          "pitch": -0.10637503424588779,
          "rotation": 5.497787143782138,
          "target": "10-stair"
        },
        {
          "yaw": -2.7312565770006056,
          "pitch": 0.033217002566770404,
          "rotation": 5.497787143782138,
          "target": "4-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-back-patio",
      "name": "Back Patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.354579171737365,
          "pitch": 0.062403429879658745,
          "rotation": 0,
          "target": "8-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-stair",
      "name": "Stair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3984015728408767,
          "pitch": 0.5422157652029647,
          "rotation": 1.5707963267948966,
          "target": "4-corridor-1"
        },
        {
          "yaw": 1.8123531205296288,
          "pitch": -0.36857905514011335,
          "rotation": 0,
          "target": "11-corridor-2"
        },
        {
          "yaw": 0.7883567385440724,
          "pitch": 0.4242317260934776,
          "rotation": 5.497787143782138,
          "target": "8-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-corridor-2",
      "name": "Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5507151423296026,
          "pitch": 0.7658566044975537,
          "rotation": 1.5707963267948966,
          "target": "10-stair"
        },
        {
          "yaw": -3.033771914576583,
          "pitch": 0.3157555107177341,
          "rotation": 1.5707963267948966,
          "target": "13-home-office"
        },
        {
          "yaw": -1.8933552910910567,
          "pitch": 0.14351363749947765,
          "rotation": 1.5707963267948966,
          "target": "12-bathroom-2"
        },
        {
          "yaw": 1.7655755745960882,
          "pitch": 0.3233392278213074,
          "rotation": 1.5707963267948966,
          "target": "14-laundry"
        },
        {
          "yaw": 0.706514180426348,
          "pitch": 0.13412703262893544,
          "rotation": 0,
          "target": "15-study"
        },
        {
          "yaw": 1.3982554629498747,
          "pitch": 0.19105173543917608,
          "rotation": 0,
          "target": "16-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6370555265508964,
          "pitch": 0.2342393265536593,
          "rotation": 0,
          "target": "11-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-home-office",
      "name": "Home Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8068265755841875,
          "pitch": 0.1807653201513606,
          "rotation": 1.5707963267948966,
          "target": "11-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7962675444839142,
          "pitch": 0.2518482766137211,
          "rotation": 4.71238898038469,
          "target": "11-corridor-2"
        },
        {
          "yaw": 2.4405971483811184,
          "pitch": 0.48003498298030856,
          "rotation": 0,
          "target": "15-study"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-study",
      "name": "Study",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4733541565508936,
          "pitch": -0.027388365551058058,
          "rotation": 1.5707963267948966,
          "target": "12-bathroom-2"
        },
        {
          "yaw": 2.318282852987524,
          "pitch": -0.011565487356890003,
          "rotation": 4.71238898038469,
          "target": "13-home-office"
        },
        {
          "yaw": 1.710995701816791,
          "pitch": 0.008174008141745404,
          "rotation": 4.71238898038469,
          "target": "16-master-bedroom"
        },
        {
          "yaw": 3.1223583317002097,
          "pitch": 0.14402555323079724,
          "rotation": 3.141592653589793,
          "target": "10-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.392197892607692,
          "pitch": 0.03328515907219831,
          "rotation": 5.497787143782138,
          "target": "17-master-closet"
        },
        {
          "yaw": 1.7375661414218406,
          "pitch": -0.05067323509136479,
          "rotation": 4.71238898038469,
          "target": "18-master-bath"
        },
        {
          "yaw": 2.250955056536819,
          "pitch": 0.011274587207363851,
          "rotation": 4.71238898038469,
          "target": "11-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-master-closet",
      "name": "Master Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.5581015001131782,
        "pitch": 0.20731837383630491,
        "fov": 1.5327095591293887
      },
      "linkHotspots": [
        {
          "yaw": 1.5035705752569068,
          "pitch": 0.1939468455409159,
          "rotation": 0.7853981633974483,
          "target": "16-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-master-bath",
      "name": "Master Bath",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6284961014860775,
          "pitch": 0.027527629980276913,
          "rotation": 4.71238898038469,
          "target": "17-master-closet"
        },
        {
          "yaw": 1.3475495912103135,
          "pitch": -0.0055712779590244565,
          "rotation": 7.853981633974483,
          "target": "16-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
