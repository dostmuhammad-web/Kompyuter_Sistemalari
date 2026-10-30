export const categories = ["Barchasi", "Asosiy", "Xotira", "Qo'shimcha"];

export const components = [
  {
    id: "cpu",
    tag: "CPU",
    name: "Protsessor",
    en: "Central Processing Unit",
    category: "Asosiy",
    short: "Kompyuterning miyasi — barcha hisob-kitoblarni bajaradi.",
    description:
      "Protsessor buyruqlarni qabul qiladi, ularni tahlil qiladi va bajaradi. U soniyada milliardlab amallarni bajarishga qodir. Tezligi takt chastotasi (GHz), yadrolar soni va kesh xotira hajmi bilan o'lchanadi. Ona platadagi maxsus uyaga (socket) o'rnatiladi.",
    specs: [
      { k: "Takt chastotasi", v: "2.5 – 5.5 GHz" },
      { k: "Yadrolar", v: "2 – 24 va undan ko'p" },
      { k: "Kesh xotira", v: "L1, L2, L3 (MB)" },
      { k: "Uya (socket)", v: "LGA / AM5 kabi" },
      { k: "Ishlab chiqaruvchi", v: "Intel, AMD" },
    ],
    points: [
      "Fetch – Decode – Execute tsiklida ishlaydi",
      "Har bir yadro alohida potokni (thread) bajaradi",
      "Ma'lumotni avval keshdan, keyin RAMdan oladi",
      "Ko'p issiqlik ajratadi — sovutgich majburiy",
    ],
    fact: "Zamonaviy protsessorda 10 milliarddan ortiq tranzistor bor — ularning har biri mayda elektr kaliti kabi ishlaydi.",
  },
  {
    id: "gpu",
    tag: "GPU",
    name: "Videokarta",
    en: "Graphics Processing Unit",
    category: "Asosiy",
    short: "Tasvirni hisoblaydi va monitorga chiqaradi.",
    description:
      "Grafik protsessor minglab kichik yadrolardan iborat bo'lib, bir vaqtda ko'p bir xil amallarni bajarishga moslashgan. O'yinlar, 3D modellashtirish, video montaj va sun'iy intellekt hisob-kitoblari uchun muhim. Ona plataga PCIe x16 uyasi orqali ulanadi.",
    specs: [
      { k: "Video xotira (VRAM)", v: "4 – 24 GB GDDR6/6X" },
      { k: "Interfeys", v: "PCIe x16" },
      { k: "Quvvat iste'moli", v: "75 – 450 Vt" },
      { k: "Chiqish portlari", v: "HDMI, DisplayPort" },
      { k: "Ishlab chiqaruvchi", v: "NVIDIA, AMD, Intel" },
    ],
    points: [
      "Rasterizatsiya va ray tracing (nur izlash)",
      "Video oqimini apparat bilan dekodlaydi",
      "Minglab yadroda parallel hisoblaydi",
      "Alohida radiator va ventilyatorlarga ega",
    ],
    fact: "Agar vazifa parallel bo'lsa, GPU ayrim hisoblarni CPU'dan 100 barobargacha tezroq bajaradi.",
  },
  {
    id: "ram",
    tag: "RAM",
    name: "Operativ xotira",
    en: "Random Access Memory",
    category: "Xotira",
    short: "Vaqtinchalik, eng tez ishlaydigan xotira.",
    description:
      "Kompyuter yoqilganda dasturlar va ochiq fayllar RAMga yuklanadi. RAM energiya uzilganda tozalanadi — bu uchuvchan (volatile) xotira. Hajmi va tezligi tizimning silliq ishlashiga bevosita ta'sir qiladi.",
    specs: [
      { k: "Hajm", v: "8 – 128 GB" },
      { k: "Tur", v: "DDR4 / DDR5" },
      { k: "Chastota", v: "2400 – 8000 MT/s" },
      { k: "Kanal", v: "1 – 2 (dual channel)" },
      { k: "Shakl", v: "DIMM (PC), SO-DIMM (noutbuk)" },
    ],
    points: [
      "CPU ma'lumotni birinchi navbatda RAMdan oladi",
      "Dual channel rejim o'tkazish tezligini oshiradi",
      "To'lib qolsa tizim diskka murojaat qiladi (swap)",
      "Statik elektrga juda sezgir komponent",
    ],
    fact: "RAM diskdan taxminan 100 000 marta tezroq ishlaydi, lekin elektrsiz ma'lumotni saqlab qolmaydi.",
  },
  {
    id: "rom",
    tag: "ROM",
    name: "Doimiy xotira (BIOS / UEFI)",
    en: "Read-Only Memory",
    category: "Xotira",
    short: "Kompyuter yoqilganda birinchi bo'lib ishga tushadigan dastur.",
    description:
      "Ona platadagi kichik chipda saqlanadi. U kompyuterni sinovdan o'tkazadi (POST), qurilmalarni aniqlaydi va operatsion tizimni yuklashni boshlaydi. Zamonaviy versiyasi UEFI deb ataladi va sichqoncha bilan boshqariladigan menyuga ega.",
    specs: [
      { k: "Mikrosxema", v: "Flash / EEPROM" },
      { k: "Hajm", v: "8 – 32 MB" },
      { k: "Sozlamalar", v: "CMOS + batareya" },
      { k: "Interfeys", v: "UEFI (eski: BIOS)" },
      { k: "Yangilash", v: "Firmware update" },
    ],
    points: [
      "POST — Power-On Self-Test sinovi",
      "Yuklash qurilmasini tanlaydi (boot order)",
      "Sozlamalar batareya hisobiga saqlanadi",
      "Noto'g'ri yangilash platani ishdan chiqarishi mumkin",
    ],
    fact: "BIOS batareyasi tugasa, kompyuter har safar vaqtni va sozlamalarni yo'qotadi.",
  },
  {
    id: "motherboard",
    tag: "MB",
    name: "Ona plata",
    en: "Motherboard",
    category: "Asosiy",
    short: "Barcha qurilmalarni bog'laydigan asosiy plata.",
    description:
      "Protsessor, RAM, videokarta, disk va boshqa qurilmalar ona plataga ulanadi. Ular orasidagi ma'lumot almashinuvi chipset va shinalar (bus) orqali amalga oshiriladi. Plata o'lchami form-faktor deb ataladi.",
    specs: [
      { k: "Form-faktor", v: "ATX, micro-ATX, mini-ITX" },
      { k: "Protsessor uyasi", v: "LGA / AM" },
      { k: "Kengaytirish", v: "PCIe x16, x1" },
      { k: "Xotira uyalari", v: "2 – 4 DIMM" },
      { k: "Ulanish", v: "SATA, M.2, USB, RJ-45" },
    ],
    points: [
      "Chipset qurilmalar orasidagi trafikni boshqaradi",
      "PCIe shinasi videokarta va tez SSD uchun",
      "Quvvat 24-pin va 8-pin konnektorlar orqali beriladi",
      "Orqa panelda tashqi qurilmalar uchun portlar bor",
    ],
    fact: "Ona platadagi mis yo'llar (tracelar) juda nozik — shuning uchun platani egish yoki bosish mumkin emas.",
  },
  {
    id: "psu",
    tag: "PSU",
    name: "Quvvat bloki",
    en: "Power Supply Unit",
    category: "Asosiy",
    short: "Rozetkadagi 220 V tokni kompyuter uchun mos tokka aylantiradi.",
    description:
      "Quvvat bloki o'zgaruvchan tokni (AC) doimiy tokka (DC) aylantiradi: +12 V, +5 V va +3.3 V. Quvvati vattda o'lchanadi, samaradorligi esa 80 PLUS sertifikati bilan belgilanadi. Barcha qurilmalar aynan shu blokdan oziqlanadi.",
    specs: [
      { k: "Quvvat", v: "400 – 1200 Vt" },
      { k: "Kuchlanish", v: "+12 V, +5 V, +3.3 V" },
      { k: "Samaradorlik", v: "80 PLUS Bronze – Titanium" },
      { k: "Konnektorlar", v: "24-pin, 8-pin CPU, PCIe" },
      { k: "Sovutish", v: "120 – 140 mm ventilyator" },
    ],
    points: [
      "Barqaror kuchlanish — barqaror ishlash",
      "Videokarta uchun yetarli quvvat muhim",
      "Sifatli blok boshqa qismlarni himoya qiladi",
      "Modulli kabellar korpusni toza saqlaydi",
    ],
    fact: "80 PLUS Bronze blok taxminan 85% samaradorlikka ega — qolgan energiya issiqlikka aylanadi.",
  },
  {
    id: "hdd",
    tag: "HDD",
    name: "Qattiq disk",
    en: "Hard Disk Drive",
    category: "Xotira",
    short: "Ma'lumotni magnit plastinalarda saqlaydi.",
    description:
      "HDD ichida aylanuvchi magnit plastinalar va ular ustida harakatlanuvchi o'qish-yozish kallagi bor. Arzon va katta hajmli, lekin SSD'ga qaraganda sekin va shovqinli. Katta arxivlar va media fayllar uchun qulay.",
    specs: [
      { k: "Hajm", v: "500 GB – 20 TB" },
      { k: "Aylanish tezligi", v: "5400 / 7200 rpm" },
      { k: "Interfeys", v: "SATA III" },
      { k: "Tezlik", v: "100 – 200 MB/s" },
      { k: "Tuzilish", v: "Mexanik harakatlanuvchi qismlar" },
    ],
    points: [
      "Katta hajm arzon narxda",
      "Mexanik qismlar zarbaga sezgir",
      "Tasodifiy o'qish sekin",
      "Arxiv va media kutubxonalari uchun mos",
    ],
    fact: "HDD kallagi plastinadan bir necha nanometr balandlikda uchadi — chang zarri ham unga zarar yetkazishi mumkin.",
  },
  {
    id: "ssd",
    tag: "SSD",
    name: "SSD disk",
    en: "Solid State Drive",
    category: "Xotira",
    short: "Ma'lumotni flesh-xotirada saqlaydigan tez disk.",
    description:
      "SSD'da harakatlanuvchi qism yo'q — ma'lumot NAND flesh chiplarda saqlanadi. Shu sababli tez ishga tushadi, zarbaga chidamli va jim ishlaydi. M.2 NVMe shakli ona plataga to'g'ridan-to'g'ri ulanib, eng yuqori tezlikni beradi.",
    specs: [
      { k: "Hajm", v: "240 GB – 8 TB" },
      { k: "Interfeys", v: "SATA yoki PCIe NVMe" },
      { k: "Tezlik", v: "SATA ~550 MB/s, NVMe 3000–14000 MB/s" },
      { k: "Shakl", v: "2.5 dyuym, M.2" },
      { k: "Resurs", v: "TBW (yozilgan baytlar)" },
    ],
    points: [
      "Operatsion tizim uchun eng yaxshi tanlov",
      "Harakatlanuvchi qism yo'q — jim ishlaydi",
      "NVMe M.2 eng yuqori tezlikni beradi",
      "Yozish resursi cheklangan (TBW)",
    ],
    fact: "NVMe SSD operatsion tizimni HDD'dan 50–100 barobar tezroq yuklashi mumkin.",
  },
  {
    id: "cooler",
    tag: "COOL",
    name: "Sovutish tizimi",
    en: "Cooling system",
    category: "Asosiy",
    short: "Protsessor va videokartani qizib ketishdan saqlaydi.",
    description:
      "Protsessor ishlaganda issiqlik ajratadi. Havo sovutgich (radiator + ventilyator) yoki suyuqlik sovutish tizimi bu issiqlikni olib chiqadi. Termopasta metall radiator bilan protsessor orasidagi mikro bo'shliqlarni to'ldiradi.",
    specs: [
      { k: "Tur", v: "Havo yoki suyuqlik (SIV)" },
      { k: "Radiator", v: "Alyuminiy yoki mis" },
      { k: "Ventilyator", v: "80 – 140 mm" },
      { k: "Termopasta", v: "1 – 3 yilda almashtiriladi" },
      { k: "Ish harorati", v: "40 – 90 °C" },
    ],
    points: [
      "Issiqlikni korpusdan chiqaradi",
      "Shovqin darajasi aylanish soniga bog'liq",
      "Chang va chang filtrlari tozalanishi kerak",
      "Haddan tashqari qizish — throttling (sekinlashuv)",
    ],
    fact: "Termopasta qurib qolsa, harorat 10–20 °C ga ko'tarilib, protsessor tezligini pasaytirishi mumkin.",
  },
  {
    id: "case",
    tag: "CASE",
    name: "Korpus",
    en: "Computer case",
    category: "Qo'shimcha",
    short: "Barcha qismlarni joylashtiradi va himoya qiladi.",
    description:
      "Korpus qismlarni chang, zarba va statik elektrdan himoya qiladi hamda havo oqimini tashkil qiladi. Oldi ventilyatorlar salqin havo kiritadi, orqa ventilyator issiq havoni chiqaradi. Kabel tartibi ham haroratga ta'sir qiladi.",
    specs: [
      { k: "Form-faktor", v: "ATX, micro-ATX, mini-ITX" },
      { k: "Material", v: "Po'lat, alyuminiy, shisha" },
      { k: "Ventilyatorlar", v: "2 – 6 ta" },
      { k: "Filtrlar", v: "Chang ushlagich" },
      { k: "Qulaylik", v: "Kabel boshqaruvi" },
    ],
    points: [
      "Havo oqimi: old → orqa, past → yuqori",
      "Chang filtrlari muntazam tozalanishi kerak",
      "Kabel tartibi haroratni pasaytiradi",
      "RGB yoritish — faqat estetika, tezlikka ta'siri yo'q",
    ],
    fact: "Noto'g'ri havo oqimi yopiq korpusda haroratni 10 °C dan ortiq oshirishi mumkin.",
  },
  {
    id: "network",
    tag: "LAN",
    name: "Tarmoq kartasi",
    en: "Network Interface Card",
    category: "Qo'shimcha",
    short: "Kompyuterni tarmoq va internetga ulaydi.",
    description:
      "Ethernet (LAN) kabeli yoki Wi-Fi orqali internet va lokal tarmoqqa ulanadi. Ona platada o'rnatilgan bo'lishi yoki alohida PCIe karta shaklida bo'lishi mumkin. Har bir karta tarmoqda o'z MAC manzili bilan taniladi.",
    specs: [
      { k: "Tezlik", v: "100 Mbps – 10 Gbps" },
      { k: "Interfeys", v: "RJ-45, Wi-Fi 6/7" },
      { k: "O'rnatish", v: "Ona platada yoki PCIe x1" },
      { k: "Manzil", v: "Unikal MAC" },
      { k: "Drayver", v: "OS bilan birga o'rnatiladi" },
    ],
    points: [
      "IP manzil orqali tarmoqda taniladi",
      "Wi-Fi uchun antennalar kerak",
      "Kabel ulanish odatda barqarorroq",
      "Ishlashi uchun drayver talab qilinadi",
    ],
    fact: "Har bir tarmoq kartasining MAC manzili zavodda unikal qilib yozib qo'yiladi.",
  },
  {
    id: "sound",
    tag: "AUD",
    name: "Ovoz kartasi",
    en: "Sound card",
    category: "Qo'shimcha",
    short: "Raqamli signalni ovozga aylantiradi.",
    description:
      "DAC (digital-to-analog converter) yordamida raqamli ma'lumotni analog ovoz signaliga aylantiradi va dinamik yoki naushnikka uzatadi. Ko'pchilik ona platada o'rnatilgan chip ko'rinishida bo'ladi, audiofillar esa tashqi USB kartani tanlaydi.",
    specs: [
      { k: "Kanallar", v: "2.0 – 7.1" },
      { k: "Bit / chastota", v: "16–32 bit, 44.1–192 kHz" },
      { k: "Ulanish", v: "3.5 mm jack, USB, HDMI" },
      { k: "Chip", v: "Realtek, Creative" },
      { k: "Mikrofon", v: "ADC kirishi" },
    ],
    points: [
      "DAC ovoz sifatini belgilaydi",
      "Mikrofon uchun ADC kerak",
      "USB audio — tashqi variant",
      "SNR shovqin darajasini ko'rsatadi",
    ],
    fact: "192 kHz / 24 bit audio inson qulog'i sezadigan chegaradan ancha yuqori sifat beradi.",
  },
  {
    id: "optical",
    tag: "DVD",
    name: "Optik disk drayveri",
    en: "Optical drive",
    category: "Qo'shimcha",
    short: "CD, DVD va Blu-ray disklarni o'qiydi va yozadi.",
    description:
      "Lazer yordamida disk yuzasidagi ma'lumotni o'qiydi. Bugungi kunda kam ishlatiladi, chunki flesh-xotira va internet tezroq hamda qulayroq. Yozuvchi (RW) versiyalari diskka ma'lumot yozish imkonini beradi.",
    specs: [
      { k: "Formatlar", v: "CD, DVD, Blu-ray" },
      { k: "Tezlik", v: "24x – 52x" },
      { k: "Ulanish", v: "SATA" },
      { k: "Hajm", v: "CD 700 MB, DVD 4.7 GB, BD 25–50 GB" },
      { k: "Holat", v: "Endi kam uchraydi" },
    ],
    points: [
      "Lazer nuri ma'lumotni o'qiydi",
      "Yozuvchi versiyalar diskni kuydiradi",
      "Arxivlash uchun ishlatilgan",
      "Zamonaviy korpuslarda kam joy ajratiladi",
    ],
    fact: "Blu-ray nomi uni o'qiydigan ko'k-binafsha lazerdan olingan.",
  },
  {
    id: "ports",
    tag: "I/O",
    name: "Portlar va uyalar",
    en: "Ports & Expansion slots",
    category: "Qo'shimcha",
    short: "Tashqi qurilmalar va kengaytirish kartalari uchun ulanish nuqtalari.",
    description:
      "USB, HDMI, audio va RJ-45 kabi portlar tashqi qurilmalarni ulaydi. PCIe uyalari esa ichki kengaytirish kartalarini (videokarta, tarmoq, ovoz) o'rnatish uchun xizmat qiladi. Portlar orqali ma'lumot bilan birga quvvat ham uzatiladi.",
    specs: [
      { k: "USB", v: "2.0 / 3.x / 4" },
      { k: "Video", v: "HDMI, DisplayPort, VGA" },
      { k: "Audio", v: "3.5 mm jack" },
      { k: "Tarmoq", v: "RJ-45" },
      { k: "Kengaytirish", v: "PCIe x1, x4, x16" },
    ],
    points: [
      "USB — universal ulanish standarti",
      "HDMI video va ovozni birga uzatadi",
      "PCIe x16 odatda videokarta uchun",
      "USB-C quvvat, video va ma'lumot bera oladi",
    ],
    fact: "USB-C bir xil konnektorda quvvat, video va yuqori tezlikdagi ma'lumotni uzatishi mumkin.",
  },
];

export const cycleSteps = [
  {
    title: "Fetch",
    sub: "Olish",
    text: "Protsessor xotiradan keyingi buyruqni o'qiydi. Buyruq manzili dastur hisoblagichi (program counter) orqali aniqlanadi.",
  },
  {
    title: "Decode",
    sub: "Tahlil",
    text: "Buyruq ochiladi: bu qanday amal, qaysi registrlar va qanday ma'lumotlar ishtirok etadi — bularning hammasi aniqlanadi.",
  },
  {
    title: "Execute",
    sub: "Bajarish",
    text: "Arifmetik-mantiqiy qurilma (ALU) hisoblaydi, ma'lumot xotiradan olinadi yoki tashqi qurilmaga yoziladi.",
  },
  {
    title: "Write-back",
    sub: "Qaytarish",
    text: "Natija registrga yoki xotiraga yoziladi. So'ngra tsikl keyingi buyruq bilan qaytadan boshlanadi.",
  },
];

export const dataPaths = [
  {
    title: "Shinalar (bus)",
    text: "Qurilmalar orasidagi ma'lumot yo'llari. Kengligi va chastotasi qanchalik yuqori bo'lsa, ma'lumot shunchalik tez o'tadi.",
  },
  {
    title: "PCIe",
    text: "Videokarta, NVMe SSD va kengaytirish kartalari uchun yuqori tezlikdagi ketma-ket shina. x16 eng keng variant.",
  },
  {
    title: "SATA va NVMe",
    text: "SATA — eski disk interfeysi (~550 MB/s). NVMe esa PCIe orqali ishlab, bir necha GB/s tezlik beradi.",
  },
];

export const memoryTable = {
  columns: ["Xotira", "Tezlik", "Uchuvchan?", "Hajm", "Vazifasi"],
  rows: [
    ["Kesh (L1–L3)", "Eng tez", "Ha", "KB–MB", "CPU ichidagi vaqtinchalik bufer"],
    ["RAM", "Juda tez", "Ha", "GB", "Ochiq dasturlar va fayllar"],
    ["SSD", "Tez", "Yo'q", "GB–TB", "OS, dasturlar, fayllar"],
    ["HDD", "Sekin", "Yo'q", "TB", "Arxiv va katta fayllar"],
    ["ROM / BIOS", "Sekin", "Yo'q", "MB", "Yuklash dasturi va sozlamalar"],
  ],
};

export const bootSteps = [
  {
    title: "Quvvat beriladi",
    text: "Tugma bosilganda quvvat bloki ona plataga tok uzatadi va protsessor ishga tushadi.",
    time: "0 s",
  },
  {
    title: "POST sinovi",
    text: "BIOS/UEFI asosiy qurilmalarni tekshiradi: protsessor, RAM, videokarta. Xato bo'lsa signal (bip) yoki xabar chiqadi.",
    time: "1–3 s",
  },
  {
    title: "UEFI sozlamalari",
    text: "Qurilmalar ro'yxati aniqlanadi, yuklash tartibi (boot order) o'qiladi va yuklash qurilmasi tanlanadi.",
    time: "2–5 s",
  },
  {
    title: "Bootloader",
    text: "Diskdagi yuklash dasturi (masalan, Windows Boot Manager yoki GRUB) operatsion tizim yadrosini xotiraga yuklaydi.",
    time: "3–8 s",
  },
  {
    title: "OS yadrosi",
    text: "Yadro apparatni boshqarishni o'z qo'liga oladi, drayverlarni yuklaydi va foydalanuvchi muhitini tayyorlaydi.",
    time: "5–20 s",
  },
  {
    title: "Xizmatlar va ish stoli",
    text: "Fon xizmatlari ishga tushadi, foydalanuvchi profili yuklanadi va ish stoli paydo bo'ladi.",
    time: "10–40 s",
  },
];

export const quiz = [
  {
    q: "Kompyuterning «miyasi» hisoblangan qurilma qaysi?",
    options: ["RAM", "Protsessor (CPU)", "Quvvat bloki", "Korpus"],
    answer: 1,
    explain:
      "Protsessor buyruqlarni bajaradi va barcha hisob-kitoblarni boshqaradi. Boshqa qurilmalar unga yordam beradi.",
  },
  {
    q: "RAM haqidagi qaysi fikr to'g'ri?",
    options: [
      "Ma'lumotni elektrsiz ham saqlaydi",
      "Faqat videokarta ishlatadi",
      "Energiya uzilganda ma'lumot yo'qoladi",
      "Diskdan sekinroq ishlaydi",
    ],
    answer: 2,
    explain:
      "RAM — uchuvchan xotira. Kompyuter o'chsa, undagi barcha ma'lumot tozalanadi, shuning uchun fayllar diskka saqlanadi.",
  },
  {
    q: "Qaysi yuklash (boot) qurilmasi eng tez ishlaydi?",
    options: ["HDD", "DVD", "NVMe SSD", "Flesh-karta USB 2.0"],
    answer: 2,
    explain:
      "NVMe SSD PCIe shinasi orqali ishlaydi va bir necha GB/s tezlikka yetadi — bu HDD'dan o'nlab barobar tez.",
  },
  {
    q: "BIOS/UEFI ning asosiy vazifasi nima?",
    options: [
      "Video o'yinlarni render qilish",
      "Qurilmalarni sinash va OS yuklashni boshlash",
      "Fayllarni saqlash",
      "Internetga ulanish",
    ],
    answer: 1,
    explain:
      "UEFI POST sinovini o'tkazadi, qurilmalarni aniqlaydi va operatsion tizimni yuklash uchun bootloader'ni ishga tushiradi.",
  },
  {
    q: "Ona platadagi 24-pin konnektor nima uchun kerak?",
    options: [
      "Monitor ulash uchun",
      "Plataga asosiy quvvat berish uchun",
      "Audio uzatish uchun",
      "Internet kabeli uchun",
    ],
    answer: 1,
    explain:
      "24-pin konnektor quvvat blokidan ona plataga asosiy kuchlanishlarni (+12 V, +5 V, +3.3 V) uzatadi.",
  },
  {
    q: "GPU nega ayrim ishlarda CPU'dan tezroq?",
    options: [
      "Chastotasi har doim yuqori",
      "Minglab kichik yadroda parallel hisoblaydi",
      "Diskdan tezroq o'qiydi",
      "RAMga muhtoj emas",
    ],
    answer: 1,
    explain:
      "Grafik ishlar bir xil amallarni ko'p ma'lumot ustida bajaradi. GPU'ning minglab yadrosi buni bir vaqtda bajaradi.",
  },
  {
    q: "Termopasta nima uchun ishlatiladi?",
    options: [
      "Protsessorni RAM bilan ulash uchun",
      "Issiqlik o'tkazishni yaxshilash uchun",
      "Changni tozalash uchun",
      "Quvvatni oshirish uchun",
    ],
    answer: 1,
    explain:
      "Metall yuzalar mikroskopik notekis. Termopasta bo'shliqlarni to'ldirib, issiqlikning radiatorda samarali o'tishini ta'minlaydi.",
  },
  {
    q: "Takt chastotasi qaysi birlikda o'lchanadi?",
    options: ["Vatt (Vt)", "Gerts (GHz)", "Bayt (GB)", "Volt (V)"],
    answer: 1,
    explain:
      "Takt chastotasi gertsda o'lchanadi. 1 GHz — soniyada 1 milliard takt. Har bir taktda protsessor amal bajaradi.",
  },
  {
    q: "Qaysi xotira turi uchuvchan emas?",
    options: ["RAM", "Kesh (L3)", "SSD", "Registrlar"],
    answer: 2,
    explain:
      "SSD ma'lumotni NAND flesh chiplarda saqlaydi, shuning uchun quvvat uzilganda ham ma'lumot qoladi.",
  },
  {
    q: "PCIe x16 uyasi odatda nimaga mo'ljallangan?",
    options: ["Videokarta", "Operativ xotira", "Protsessor", "Quvvat bloki"],
    answer: 0,
    explain:
      "PCIe x16 eng keng kengaytirish uyasi bo'lib, odatda videokarta uchun ishlatiladi. U katta ma'lumot oqimini talab qiladi.",
  },
];

export const glossary = [
  { term: "Bit", def: "Ma'lumotning eng kichik birligi — 0 yoki 1." },
  { term: "Bayt", def: "8 bitdan iborat birlik. Bitta belgini saqlash uchun yetarli." },
  { term: "Gerts (Hz)", def: "Soniyadagi tebranishlar soni. 1 GHz = soniyada 1 milliard takt." },
  { term: "Takt chastotasi", def: "Protsessorning soniyada bajaradigan tsikllari soni (GHz)." },
  { term: "Yadro", def: "Protsessor ichidagi mustaqil hisoblash bloki." },
  { term: "Potok (thread)", def: "Yadro bajarayotgan buyruqlar ketma-ketligi." },
  { term: "Kesh", def: "Protsessor ichidagi juda tez kichik xotira (L1, L2, L3)." },
  { term: "Registr", def: "Protsessor ichidagi eng tez saqlash katakchasi." },
  { term: "ALU", def: "Arifmetik-mantiqiy qurilma — matematik va mantiqiy amallarni bajaradi." },
  { term: "BIOS", def: "Eski turdagi yuklash dasturi (Basic Input/Output System)." },
  { term: "UEFI", def: "BIOS'ning zamonaviy versiyasi, kengaytirilgan imkoniyatlar bilan." },
  { term: "POST", def: "Power-On Self-Test — yoqilganda qurilmalarni tekshirish sinovi." },
  { term: "Drayver", def: "Operatsion tizimga qurilma bilan ishlashni o'rgatuvchi dastur." },
  { term: "Chipset", def: "Ona platadagi qurilmalar orasidagi trafikni boshqaruvchi chip." },
  { term: "PCIe", def: "Yuqori tezlikdagi kengaytirish shinasi (uya va interfeys)." },
  { term: "SATA", def: "Disk ulash interfeysi, taxminan 550 MB/s gacha." },
  { term: "NVMe", def: "SSD uchun PCIe asosidagi tez protokol." },
  { term: "VRAM", def: "Videokartaning shaxsiy video xotirasi." },
  { term: "DAC", def: "Raqamli signalni analog (ovoz) signaliga aylantiruvchi qurilma." },
  { term: "Throttling", def: "Qizib ketganda protsessor chastotasini majburan pasaytirishi." },
  { term: "Overclocking", def: "Qurilmani zavod chastotasidan yuqoriroq rejimda ishlatish." },
  { term: "Form-faktor", def: "Plata yoki korpusning standart o'lchami (ATX, micro-ATX, mini-ITX)." },
  { term: "Firmware", def: "Qurilma ichidagi doimiy dastur (masalan, UEFI yoki SSD boshqaruvchisi)." },
  { term: "Statik elektr", def: "Komponentlarga zarar yetkazuvchi elektr zaryadi — ishlashdan oldin yerga ulanish kerak." },
];
