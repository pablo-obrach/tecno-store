class Productos {
  constructor(id, nombre, precio, type, cantidad, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.type = type;
    this.defaultType = "all";
    this.cantidad = cantidad;
    this.img = img;
  }
}

const productos = [
  new Productos(
    1,
    "Asus HD",
    150000,
    "laptop",
    1,
    "IMG/laptops/Asus-Laptop.png"
  ),
  new Productos(
    2,
    "Asus PRO",
    250000,
    "laptop",
    1,
    "IMG/laptops/Asus-Laptop2.png"
  ),
  new Productos(
    3,
    "Asus Gaming",
    300000,
    "laptop",
    1,
    "IMG/laptops/asus-laptop-gaming.png"
  ),
  new Productos(
    4,
    "Lenovo ThinkPad s450",
    200000,
    "laptop",
    1,
    "IMG/laptops/Lenovo-Laptop.png"
  ),
  new Productos(
    5,
    "Monitor led LG 14'",
    100000,
    "monitor",
    1,
    "IMG/monitores/monitor-led-lg.png"
  ),
  new Productos(
    6,
    "Monitor led LG WideScreen",
    150000,
    "monitor",
    1,
    "IMG/monitores/monitor-led-lg-wide.png"
  ),
  new Productos(
    7,
    "Monitor led LG WideScreen HD",
    150000,
    "monitor",
    1,
    "IMG/monitores/monitor-led-lg-wide2.png"
  ),
  new Productos(
    8,
    "Monitor led Samsung 20'",
    150000,
    "monitor",
    1,
    "IMG/monitores/monito-led-samsung.png"
  ),
  new Productos(
    9,
    "Procesador Intel I5",
    40000,
    "procesador",
    1,
    "IMG/procesadores/intel-I5.png"
  ),
  new Productos(
    10,
    "Procesador Intel I7",
    60000,
    "procesador",
    1,
    "IMG/procesadores/intel-I7.png"
  ),
  new Productos(
    11,
    "Procesador Intel I9",
    80000,
    "procesador",
    1,
    "IMG/procesadores/intel-I9.png"
  ),
  new Productos(
    12,
    "Procesador Ryzen-5",
    30000,
    "procesador",
    1,
    "IMG/procesadores/ryzen-5.png"
  ),
  new Productos(
    13,
    "Procesador Ryzen-7",
    50000,
    "procesador",
    1,
    "IMG/procesadores/ryzen-7.png"
  ),
  new Productos(
    14,
    "Procesador Ryzen-9",
    70000,
    "procesador",
    1,
    "IMG/procesadores/ryzen-9.png"
  ),
  new Productos(
    15,
    "Torre Red-Dragon RGB Alta",
    20000,
    "torre",
    1,
    "IMG/torres/torre-reddragon-alta.png"
  ),
  new Productos(
    16,
    "Torre Red-Dragon RGB Cool",
    30000,
    "torre",
    1,
    "IMG/torres/torre-reddragon-cool.png"
  ),
  new Productos(
    17,
    "Torre Red-Dragon No-RGB",
    15000,
    "torre",
    1,
    "IMG/torres/torre-reddragon-no-rgb.png"
  ),
  new Productos(
    18,
    "Torre Red-Dragon RGB Master",
    40000,
    "torre",
    1,
    "IMG/torres/torre-reddragon-rgb.png"
  ),
  new Productos(
    19,
    "Cooler RGB Insanity",
    20000,
    "cooler",
    1,
    "IMG/coolers/cooler-rgb.png"
  ),
  new Productos(
    20,
    "Cooler Corsair Cooler-Way",
    40000,
    "cooler",
    1,
    "IMG/coolers/corsair-cooler.png"
  ),
  new Productos(
    21,
    "Cooler Hyper 212",
    35000,
    "cooler",
    1,
    "IMG/coolers/hyper-212.png"
  ),
  new Productos(
    22,
    "Cooler Reeven AlphaTrend",
    30000,
    "cooler",
    1,
    "IMG/coolers/reeven-cooler.png"
  ),
  new Productos(
    23,
    "Teclado Mecanico Red-Dragon Born",
    20000,
    "teclado",
    1,
    "IMG/teclados/teclado-DRAGONBORN.png"
  ),
  new Productos(
    24,
    "Teclado Mecanico Red-Dragon RGB White",
    30000,
    "teclado",
    1,
    "IMG/teclados/teclado-reddragon.png"
  ),
  new Productos(
    25,
    "Teclado Mecanico Red-Dragon DITI",
    50000,
    "teclado",
    1,
    "IMG/teclados/teclado-reddragon-DITI.png"
  ),
  new Productos(
    26,
    "Teclado Mecanico Nisuta 60% White",
    35000,
    "teclado",
    1,
    "IMG/teclados/teclado-nisuta.png"
  ),
  new Productos(
    27,
    "Mouse Red-Dragon Griffin",
    15000,
    "mouse",
    1,
    "IMG/mouse/mouse-GRIFFIN-B.png"
  ),
  new Productos(
    28,
    "Mouse Red-Dragon RGB PowerLine",
    20000,
    "mouse",
    1,
    "IMG/mouse/mouse-reddragon2.png"
  ),
  new Productos(
    29,
    "Mouse Red-Dragon Carbon",
    10000,
    "mouse",
    1,
    "IMG/mouse/mouse-redragon.png"
  ),
  new Productos(
    30,
    "Mouse Red-Dragon Mammoth",
    30000,
    "mouse",
    1,
    "IMG/mouse/Redragon-M801-Mammoth.png"
  ),
];
