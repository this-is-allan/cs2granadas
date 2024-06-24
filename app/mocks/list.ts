const list = [
  {
    name: 'de_inferno',
    icon: '/images/maps/icons/infernocs2-logo.png',
    map: '/images/maps/inferno.webp',
    bombs: [
      {
        type: 'smoke',
        title: 'Passagem da Banana',
        side: 'ct',
        cx: 400,
        cy: 209,
        thumb:
          'https://steamuserimages-a.akamaihd.net/ugc/2091416298281308694/7A2B54F2D674677B264441AC5DD6FB354F1E4F1A/',
        positions: [
          {
            title: 'Passagem da banana',
            side: 'ct',
            video: {
              filename: 'de_inferno_passagem_banana.mp4',
              thumb: 'de_inferno_passagem_banana.png',
            },
          },
        ],
      },
      {
        type: 'smoke',
        title: 'Passagem Base CT',
        side: 'tr',
        cx: 437,
        cy: 156,
        thumb:
          'https://steamuserimages-a.akamaihd.net/ugc/2024986142286489744/031EE29FBC1D00576A8CFB36AAFB7E5594894862/',
        positions: [
          {
            title: 'Banana',
            side: 'tr',
            video: {
              filename: 'de_inferno_passagem_base_ct.mp4',
              thumb: 'de_inferno_passagem_base_ct.png',
            },
          },
        ],
      },
      {
        type: 'smoke',
        title: 'Caixão',
        side: 'tr',
        cx: 357,
        cy: 88,
        thumb:
          'https://steamuserimages-a.akamaihd.net/ugc/2024986142286489744/031EE29FBC1D00576A8CFB36AAFB7E5594894862/',
        positions: [
          {
            title: 'Banana',
            side: 'tr',
            video: {
              filename: 'de_inferno_caixao.mp4',
              thumb: 'de_inferno_caixao.png',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'de_mirage',
    icon: '/images/maps/icons/Set_mirage.webp',
    map: '/images/maps/de_inferno.svg',
    bombs: [
      {
        name: 'smoke',
        cx: 336,
        cy: 145,
        positions: [],
      },
    ],
  },
  {
    name: 'de_dust2',
    icon: '/images/maps/icons/Map_icon_de_dust2.webp',
    map: '/images/maps/de_inferno.svg',
    bombs: [],
  },
  {
    name: 'de_nuke',
    icon: '/images/maps/icons/Set_nuke_2.webp',
    map: '/images/maps/de_inferno.svg',
    bombs: [],
  },
  {
    name: 'de_overpass',
    icon: '/images/maps/icons/360fx360f.png',
    map: '/images/maps/de_inferno.svg',
    bombs: [],
  },
  {
    name: 'de_train',
    icon: '/images/maps/icons/settrain.png',
    map: '/images/maps/de_inferno.svg',
    bombs: [],
  },
  {
    name: 'de_vertigo',
    icon: '/images/maps/icons/Vertigo-logo-new.webp',
    map: '/images/maps/de_inferno.svg',
    bombs: [],
  },
  {
    name: 'de_ancient',
    icon: '/images/maps/icons/mapicondeancient.png',
    map: '/images/maps/de_inferno.svg',
    bombs: [],
  },
  {
    name: 'de_anubis',
    icon: '/images/maps/icons/mapicondeanubis.png',
    map: '/images/maps/de_inferno.svg',
    bombs: [],
  },
];

export default list;
