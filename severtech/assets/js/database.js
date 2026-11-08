const clientsDB = {
  base: {
    name: "СЕВЕРТЕХ",
    phone: "+7 (000) 000-00-00",
    nds: true,
    equipment: {
      jcb: { priceHour: 3500, priceShift: 28000 },
      loader: { priceHour: 4500, priceShift: 36000 },
      bobcat: { priceHour: 3000, priceShift: 24000 },
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  gruztrading: {
    name: "Груз Трэйдинг Мастер",
    phone: "+7 (343) 213-82-82",
    nds: true,
    equipment: {
      jcb: { priceHour: 3500, priceShift: 28000 },
      loader: false,
      bobcat: false,
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  specgrad: {
    name: "Спецград",
    phone: "+7 (963) 440-23-23",
    email: "specgrad@mail.ru",
    ogrn: "1206600034112",
    inn: "6658535447",
    kpp: "665801001",
    nds: true,
    equipment: {
      jcb: { priceHour: 3500, priceShift: 28000 },
      loader: { priceHour: 4500, priceShift: 36000 },
      bobcat: { priceHour: 3000, priceShift: 24000 },
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  blagoustroystvo: {
    name: "Компания по благоустройству территорий",
    phone: "+7 (922) 166-55-77",
    nds: true,
    equipment: {
      jcb: { priceHour: 3500, priceShift: 28000 },
      loader: { priceHour: 4500, priceShift: 36000 },
      bobcat: { priceHour: 3000, priceShift: 24000 },
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  ask: {
    name: "Ассоциация строительных компаний",
    phone: "+7 (343) 213-22-85",
    nds: true,
    heroImg: "ask-1.jpg",
    equipment: {
      jcb: false,
      loader: {
        priceHour: 4500,
        priceShift: 36000,
        title: "Фронтальный погрузчик LG936"
      },
      bobcat: false,
      dump: {
        priceHour: 4000,
        priceShift: 32000
      }
    }
  },
  rubezh: {
    name: "Рубеж",
    phone: "+7 (912) 228-02-99",
    nds: true,
    equipment: {
      jcb: { priceHour: 3500, priceShift: 28000 },
      loader: { priceHour: 4500, priceShift: 36000 },
      bobcat: { priceHour: 3000, priceShift: 24000 },
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  transservisek: {
    name: "ТрансСервис-ЕК",
    phone: "+7 (343) 219-10-38",
    nds: true,
    equipment: {
      jcb: {
        priceHour: 3000,
        priceShift: 24000,
        title: "Экскаватор-погрузчик"
      },
      loader: {
        priceHour: 3500,
        priceShift: 28000,
        title: "Фронтальный погрузчик NEO"
      },
      bobcat: false,
      dump: {
        priceHour: 2700,
        priceShift: 21600,
        title: "Самосвал HOWO 20 м³"
      }
    }
  },
  rtk1: {
    name: "РТК-1",
    phone: "+7 (343) 201-75-45",
    nds: true,
    equipment: {
      jcb: { priceHour: 3500, priceShift: 28000 },
      loader: { priceHour: 4500, priceShift: 36000 },
      bobcat: { priceHour: 3000, priceShift: 24000 },
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  specavtotrans: {
    name: "Спецавтотранс",
    phone: "+7 (343) 383-50-74",
    nds: true,
    heroImg: "specavtotrans-1.jpg",
    badge: { val: "23 м³", desc: "Объём кузова<br>самосвала" },
    equipment: {
      jcb: {
        priceHour: 3000,
        priceShift: 24000,
        title: "Экскаватор-погрузчик"
      },
      loader: {
        priceHour: 3000,
        priceShift: 24000,
        title: "Фронтальный погрузчик"
      },
      bobcat: {
        priceHour: 3000,
        priceShift: 24000,
        title: "Мини-экскаватор"
      },
      dump: {
        priceHour: 5000,
        priceShift: 40000,
        title: "Самосвал Volvo FMX 23 м³"
      }
    }
  },
  vyvozsnega: {
    name: "Вывоз снега",
    phone: "+7 (904) 383-25-28",
    nds: true,
    equipment: {
      jcb: { priceHour: 3500, priceShift: 28000 },
      loader: { priceHour: 4500, priceShift: 36000 },
      bobcat: { priceHour: 3000, priceShift: 24000 },
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  techstroycity: {
    name: "ТехСтройСити",
    phone: "+7 (912) 202-04-04",
    nds: true,
    heroImg: "techstroycity-1.jpg",
    equipment: {
      jcb: {
        priceHour: 3000,
        priceShift: 24000,
        title: "Экскаватор-погрузчик JCB"
      },
      loader: {
        priceHour: 4500,
        priceShift: 36000,
        title: "Автогрейдер"
      },
      bobcat: false,
      dump: {
        priceHour: 2700,
        priceShift: 21600,
        title: "Самосвал"
      }
    }
  },
  vuvos_snega: {
    name: "Вывоз снега",
    phone: "+7 (926) 388-50-31",
    nds: true,
    heroImg: "vuvos_snega-1.jpg",
    badge: { val: "15 м³", desc: "Объём кузова<br>самосвала" },
    equipment: {
      jcb: {
        priceHour: 3500,
        priceShift: 28000,
        title: "Экскаватор-погрузчик JCB"
      },
      loader: false,
      bobcat: false,
      dump: {
        priceHour: 5000,
        priceShift: 40000,
        title: "Самосвал 15 м³"
      }
    }
  },
  vuvozz_snega: {
    name: "Вывоз снега",
    phone: "+7 (925) 032-22-24",
    nds: true,
    heroImg: "vuvozz_snega-1.jpg",
    equipment: {
      jcb: { priceHour: 3500, priceShift: 28000 },
      loader: { priceHour: 4500, priceShift: 36000 },
      bobcat: false,
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  specvozavito: {
    name: "Спецвоз",
    phone: "+7 (000) 000-00-00",
    nds: true,
    heroImg: "specvozavito-1.jpg",
    equipment: {
      jcb: false,
      loader: {
        priceHour: 4500,
        priceShift: 36000,
        title: "Фронтальный погрузчик Doosan"
      },
      bobcat: false,
      dump: {
        priceHour: 4000,
        priceShift: 32000,
        title: "Самосвал КамАЗ"
      }
    }
  },
  andrey_avito: {
    name: "Андрей",
    phone: "+7 (000) 000-00-00",
    nds: false,
    heroImg: "andrey_avito-1.jpg",
    equipment: {
      jcb: {
        priceHour: 2000,
        priceShift: 16000,
        title: "Экскаватор-погрузчик JCB"
      },
      loader: false,
      bobcat: false,
      dump: {
        priceHour: 4000,
        priceShift: 32000,
        title: "Самосвал КамАЗ"
      }
    }
  },
  uralvstroymontash: {
    name: "Уралавторемстроймонтаж",
    phone: "+7 (912) 675-00-60",
    nds: true,
    heroImg: "uralvstroymontash-1.jpg",
    equipment: {
      jcb: { priceHour: 3500, priceShift: 28000 },
      loader: { priceHour: 4500, priceShift: 36000 },
      bobcat: false,
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  "delo-techniki": {
    name: "Дело Техники",
    phone: "+7 (922) 222-02-72",
    nds: true,
    heroImg: "delo-techniki-1.jpg",
    equipment: {
      jcb: {
        priceHour: 3500,
        priceShift: 28000,
        title: "Экскаватор-погрузчик"
      },
      loader: false,
      bobcat: false,
      dump: false
    }
  },
  dorgradstroy: {
    name: "ДорГрадСтрой",
    phone: "+7 (992) 303-51-15",
    nds: true,
    heroImg: "dordorgradstroy-1.png",
    equipment: {
      jcb: { priceHour: 3500, priceShift: 28000 },
      loader: { priceHour: 4500, priceShift: 36000 },
      bobcat: false,
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  tumentechprom: {
    name: "ТюменьТехпром",
    phone: "+7 (909) 735-83-05",
    nds: true,
    heroImg: "tumentechprom-1.png",
    equipment: {
      jcb: false,
      loader: { priceHour: 4500, priceShift: 36000 },
      bobcat: false,
      dump: { priceHour: 4000, priceShift: 32000 }
    }
  },
  samosval72: {
    name: "Самосвал-72",
    phone: "+7 (3452) 55-10-55",
    email: "89199502233@bk.ru",
    inn: "720201250387",
    ogrn: "317723200082774",
    nds: false,
    heroImg: "samosval72-1.jpg",
    badge: { val: "19 м³", desc: "Объём кузова<br>самосвала" },
    equipment: {
      jcb: {
        priceHour: 3500,
        priceShift: 28000,
        title: "Экскаватор-погрузчик Cat / Case"
      },
      loader: {
        priceHour: 3000,
        priceShift: 24000,
        title: "Фронтальный погрузчик LGCE 933"
      },
      bobcat: false,
      dump: {
        priceHour: 3000,
        priceShift: 24000,
        title: "Самосвал Howo / Volvo"
      }
    }
  },
  autospec: {
    name: "Автоспец",
    phone: "+7 (383) 310-03-33",
    email: "avtospec2022@mail.ru",
    nds: true,
    heroImg: "autospec-1.png",
    equipment: {
      jcb: {
        priceHour: 3300,
        priceShift: 26400,
        title: "Экскаватор-погрузчик New Holland"
      },
      loader: {
        priceHour: 3300,
        priceShift: 26400,
        title: "Фронтальный погрузчик SEM 639B"
      },
      bobcat: {
        priceHour: 2300,
        priceShift: 18400,
        title: "Мини-погрузчик"
      },
      dump: {
        priceHour: 2200,
        priceShift: 17600,
        title: "Самосвал КамАЗ 10 м³"
      }
    }
  },
  vyvozsnegavnovosibirske: {
    name: "Вывоз снега в Новосибирске",
    phone: "+7 (383) 354-26-27",
    nds: true,
    badge: { val: "10 м³", desc: "Объём кузова<br>самосвала" },
    equipment: {
      jcb: false,
      loader: {
        priceHour: 4500,
        priceShift: 36000,
        title: "Фронтальный погрузчик"
      },
      bobcat: false,
      dump: {
        priceHour: 2000,
        priceShift: 16000,
        title: "Самосвал КамАЗ / МАЗ 10 м³"
      }
    }
  },
  blagostroy: {
    name: "БлагоСтрой",
    phone: "+7 (983) 147-48-37",
    nds: true,
    heroImg: "blagostroy-1.jpg",
    equipment: {
      jcb: {
        priceHour: 3500,
        priceShift: 28000,
        title: "Экскаватор-погрузчик JCB 3CX / 4CX"
      },
      loader: {
        priceHour: 4000,
        priceShift: 32000,
        title: "Автогрейдер ГС / XCMG"
      },
      bobcat: {
        priceHour: 3000,
        priceShift: 24000,
        title: "Мини-погрузчик Bobcat"
      },
      dump: {
        priceHour: 3200,
        priceShift: 25600,
        title: "Самосвал Howo / КамАЗ 25 т"
      }
    }
  },
  speckomtrans: {
    name: "СпецКомТранс",
    phone: "+7 (343) 288-50-05",
    nds: true,
    heroImg: "speckomtrans-1.jpg",
    equipment: {
      jcb: false,
      loader: {
        priceHour: 2370,
        priceShift: 18990,
        title: "Трактор МТЗ (щётка + ковш)",
        desc: "Механизированная уборка снега коммунальной щёткой и снеговым ковшом. Очистка дорог, стоянок и дворов.",
        specs: [
          "Навесное: коммунальная щётка + снеговой отвал",
          "Минимальный заказ: 2 часа (9 290 ₽) / 4 часа (13 290 ₽)",
          "Смена (8 часов): 18 990 ₽"
        ]
      },
      bobcat: false,
      dump: {
        priceHour: 4500,
        priceShift: 35000,
        title: "Самосвал (вывоз снега)",
        desc: "Вывоз собранного снега с погрузкой и утилизацией на специализированном полигоне.",
        specs: [
          "Объём кузова: до 20 м³",
          "Талоны на утилизацию: включены",
          "Подача под погрузку без простоев"
        ]
      }
    }
  }
};