export const getData = () => {
  const data = {
    header: [
      { value: "Название" },
      { value: "Год выпуска" },
      { value: "Платформа(ы)" },
      { value: "Жанр" }
    ],
    rows: [
      [
        {
          value: "Warcraft: Orcs & Humans"
        },
        { value: 1994 },
        { value: "ПК (MS-DOS, Mac OS)" },
        { value: "Стратегия в реальном времени" }
      ],
      [
        {
          value: "Blackthorne"
        },
        { value: 1994 },
        { value: "Super Nintendo, MS-DOS, Sega 32X, Mac OS, GBA" },
        { value: "Платформер" }
      ],
      [
        {
          value: "Justice League Task Force"
        },
        { value: 1995 },
        { value: "Genesis, Super Nintendo" },
        { value: "Файтинг" }
      ],
      [
        {
          value: "The Death and Return of Superman"
        },
        { value: 1995 },
        { value: "Genesis, Super Nintendo" },
        { value: "Сайд-скроллер" }
      ],
      [
        {
          value: "Warcraft II: Tides of Darkness"
        },
        { value: 1995 },
        {
          value:
            "ПК (MS-DOS, Mac OS, Windows, Linux, AmigaOS 4), Saturn, PlayStation"
        },
        { value: "Стратегия в реальном времени" }
      ],
      [
        {
          value: "Diablo"
        },
        { value: 1996 },
        { value: "ПК (Windows, Mac OS), PlayStation" },
        { value: "Action/RPG" }
      ],
      [
        {
          value: "The Lost Vikings 2"
        },
        { value: 1997 },
        { value: "Super Nintendo, Saturn, PlayStation, ПК (Windows)" },
        { value: "Сайд-скроллер" }
      ],
      [
        {
          value: "StarCraft"
        },
        { value: 1998 },
        { value: "ПК (Windows, Mac OS), Nintendo 64" },
        { value: "Стратегия в реальном времени" }
      ],
      [
        {
          value: "Diablo II"
        },
        { value: 2000 },
        { value: "ПК (Windows, Mac OS, macOS)" },
        { value: "Action/RPG" }
      ],
      [
        {
          value: "Warcraft III: Reign of Chaos"
        },
        { value: 2002 },
        { value: "ПК (Windows, Mac OS, macOS)" },
        { value: "Стратегия в реальном времени" }
      ],
      [
        {
          value: "World of Warcraft"
        },
        { value: 2004 },
        { value: "ПК (Windows, macOS)" },
        { value: "MMORPG" }
      ],
      [
        {
          value: "StarCraft II: Wings of Liberty"
        },
        { value: 2010 },
        { value: "ПК (Windows, macOS)" },
        { value: "Стратегия в реальном времени" }
      ],
      [
        {
          value: "Diablo III"
        },
        { value: 2012 },
        {
          value:
            "ПК (Windows, macOS), PlayStation 3, Xbox 360, PlayStation 4, Xbox One"
        },
        { value: "Action/RPG" }
      ],
      [
        {
          value: "Hearthstone"
        },
        { value: 2014 },
        { value: "ПК (Windows, macOS), iOS, Android" },
        { value: "Коллекционная карточная игра" }
      ],
      [
        {
          value: "Heroes of the Storm"
        },
        { value: 2015 },
        { value: "ПК (Windows, macOS)" },
        { value: "MOBA" }
      ],
      [
        {
          value: "Overwatch"
        },
        { value: 2016 },
        { value: "ПК (Windows), PlayStation 4, Xbox One" },
        { value: "Шутер от первого лица" }
      ],
      [
        {
          value: "Diablo: Immortal"
        },
        {
          value: "2019 (в разработке)",
          cellStyle: { backgroundColor: "red", color: "white" }
        },
        { value: "iOS, Android" },
        { value: "MMOARPG" }
      ]
    ]
  };
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve(data);
    }, 4000);
  });
};
