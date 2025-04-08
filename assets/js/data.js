// Inisialisasi peta, pusat di Yogyakarta
var map = L.map('map').setView([-7.8014, 110.3644], 13);

// Tambahkan tile dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Daftar lokasi dan data sampah
var locations = [
  { name: "Tegal Rejo", lat: -7.7829, lng: 110.3612, organik: 220, plastik: 140, residu: 134 },
  { name: "Jetis", lat: -7.7821, lng: 110.3675, organik: 210, plastik: 135, residu: 127 },
  { name: "Gondokusuman", lat: -7.7819, lng: 110.3850, organik: 150, plastik: 105, residu: 85 },
  { name: "Gedongtengen", lat: -7.7925, lng: 110.3638, organik: 200, plastik: 130, residu: 120 },
  { name: "Danurejan", lat: -7.7961, lng: 110.3731, organik: 160, plastik: 110, residu: 92 },
  { name: "Umbulharjo", lat: -7.8210, lng: 110.3927, organik: 130, plastik: 95, residu: 71 },
  { name: "Kotagede", lat: -7.8223, lng: 110.4060, organik: 140, plastik: 100, residu: 78 },
  { name: "Mergangsan", lat: -7.8163, lng: 110.3783, organik: 120, plastik: 90, residu: 64 },
  { name: "Gondomanan", lat: -7.8007, lng: 110.3711, organik: 170, plastik: 115, residu: 99 },
  { name: "Kraton", lat: -7.8085, lng: 110.3667, organik: 110, plastik: 85, residu: 57 },
  { name: "Ngampilan", lat: -7.8035, lng: 110.3536, organik: 180, plastik: 120, residu: 106 },
  { name: "Wirobrajan", lat: -7.8045, lng: 110.3510, organik: 190, plastik: 125, residu: 113 },
  { name: "Mantrijeron", lat: -7.8217, lng: 110.3631, organik: 100, plastik: 80, residu: 50 }
];

// Tambahkan marker dan popup ke peta
locations.forEach(function(loc) {
  L.marker([loc.lat, loc.lng])
    .addTo(map)
    .bindPopup(
      `<strong>${loc.name}</strong><br>
       Organik: ${loc.organik} Kg<br>
       Plastik: ${loc.plastik} Kg<br>
       Residu: ${loc.residu} Kg`
    );
});