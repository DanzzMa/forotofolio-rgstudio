import { Project, PricingTier, FaqItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_cinematic_fivem_1790904256693.jpg';
export const TRAILER_IMAGE = '/src/assets/images/fivem_server_trailer_1790904271615.jpg';
export const MONTAGE_IMAGE = '/src/assets/images/fivem_gang_montage_1790904282433.jpg';
export const PHOTOSHOOT_IMAGE = '/src/assets/images/fivem_rp_photoshoot_1790904296571.jpg';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'proj-server-trailer-01',
    title: 'BATAVIA CITY RP // Official Season 3 Launch Trailer',
    category: 'trailer',
    categoryLabel: 'Server Trailer',
    client: 'Batavia City Roleplay',
    serverName: 'Batavia RP ID #1',
    duration: '01:45',
    resolution: '4K UHD',
    fps: '60 FPS',
    image: TRAILER_IMAGE,
    aspectRatio: '16:9',
    views: '480K+',
    likes: '34.2K',
    synopsis: 'Trailer cinematic peluncuran update Season 3 Batavia City. Fokus ke aksi kejar-kejaran supercar pas jalanan basah malam hari, baku tembak polisi vs kartel, dan visual NVE yang tajem parah.',
    lore: 'Konflik panas polisi Los Santos sama sindikat impor mobil selundupan di dermaga. Semua klip diambil in-game pake CamTool & Rockstar Editor bareng player-player server.',
    specs: {
      graphicMod: 'NaturalVision Evolved (NVE) + QuantV Hybrid',
      cameraTool: 'Rockstar Editor Smooth Keyframing + CamTool v2',
      editingSoftware: 'DaVinci Resolve Studio & Premiere Pro 2024',
      colorGrade: 'RGSTUDIO Custom Film LUT (Kodak 2383 Inspired)'
    },
    tags: ['Rockstar Editor', 'CamTool', 'NVE Ultra', 'Sound Design', 'DaVinci Resolve', '4K 60FPS'],
    testimonial: {
      quote: 'Gokil banget trailer buatan RGSTUDIO! Pas hari H launching server kita langsung rame antre 200+ slot. Temponya pas, sound effect-nya nendang abis.',
      author: 'Reza "Vandals"',
      role: 'Owner Batavia RP'
    }
  },
  {
    id: 'proj-rp-photo-01',
    title: 'DONNA VITTORIA // Luxury Mafia Character Editorial',
    category: 'photo',
    categoryLabel: 'RP Photoshoot',
    client: 'Donna Vittoria (Lore Character)',
    serverName: 'Nusantara Pride Roleplay',
    photoCount: '8 Foto High-Res',
    resolution: '8K Master',
    fps: 'Ultra Still',
    image: PHOTOSHOOT_IMAGE,
    aspectRatio: '4:3',
    views: '125K+',
    likes: '19.8K',
    synopsis: 'Sesi photoshoot karakter boss mafia cewek dengan outfit desainer mewah. Pake pencahayaan studio custom in-game, tekstur baju tajem, dan efek blur background yang berasa kamera DSLR asli.',
    lore: 'Donna Vittoria, penguasa bisnis kasino Vinewood Hills. Foto-foto ini dipake buat banner Discord fraksi, profil karakter, dan konten Bleeter (Instagram IC).',
    specs: {
      graphicMod: 'QuantV 3.0 + Custom Raytracing Reshade',
      cameraTool: 'Extended Camera Freecam 90mm Lens Equiv',
      editingSoftware: 'Adobe Photoshop CC + Camera RAW',
      colorGrade: 'Editorial Golden Hour Warm Tone'
    },
    tags: ['RP Portrait', 'QuantV Raytracing', 'High-Res Texture', 'Photoshop CC', 'Character Lore'],
    testimonial: {
      quote: 'Puas parah sama hasilnya! Dari serat baju sampai lighting di rambut bener-bener rapi. Bikin karakter RP berasa hidup dan berkelas.',
      author: 'Alya "Vittoria"',
      role: 'Fraksi Leader Donna Famiglia'
    }
  },
  {
    id: 'proj-montage-01',
    title: 'SOUTH CENTRAL BLOCK WAR // District 9 Gang Highlights',
    category: 'montage',
    categoryLabel: 'Gang Montage',
    client: 'District 9 Syndicate',
    serverName: 'West Coast Gang Wars FiveM',
    duration: '01:12',
    resolution: '4K UHD',
    fps: '60 FPS',
    image: MONTAGE_IMAGE,
    aspectRatio: '4:3',
    views: '310K+',
    likes: '28.5K',
    synopsis: 'Montage aksi war gang dengan tempo cepet. Tiap tembakan senjata dan ledakan disinkronin sama ketukan beat musik trap phonk, transisinya mulus gak bikin pusing.',
    lore: 'Momen-momen panas waktu perebutan wilayah gang di Grove Street & Strawberry. Dibikin pake sound fx recoil senjata yang berbobot.',
    specs: {
      graphicMod: 'QuantV Graphics + Custom Gun Muzzle FX',
      cameraTool: 'Freecam In-Action Record + Cinematic POV',
      editingSoftware: 'After Effects 2024 & Sapphire Plugins',
      colorGrade: 'Gritty Bleach Bypass High Contrast'
    },
    tags: ['Speed Ramping', 'Sound FX Sync', 'Trap Phonk Edit', 'After Effects', 'Turf War'],
    testimonial: {
      quote: 'Bass drop-nya pas banget di tiap tembakan! Begitu di-upload ke TikTok langsung tembus 300K views. RGSTUDIO emang paham selera anak montage FiveM.',
      author: 'Kael "Bane"',
      role: 'War Leader District 9'
    }
  },
  {
    id: 'proj-cinematic-01',
    title: 'MIDNIGHT TUNERS // Car Meet & Touge Drift Teaser',
    category: 'cinematic',
    categoryLabel: 'Cinematic Reel',
    client: 'Los Santos Underground Racing Club',
    serverName: 'IndoStreet Drift FiveM',
    duration: '01:30',
    resolution: '4K UHD',
    fps: '60 FPS',
    image: HERO_IMAGE,
    aspectRatio: '16:9',
    views: '540K+',
    likes: '42.1K',
    synopsis: 'Video cinematic kumpul mobil tuner dan aksi drift di gunung Vinewood. Ada suara turbo spool, pantulan genangan air di jalan, sampai angle drone FPV yang dinamis abis.',
    lore: 'Kopdar malem komunitas balap liar sebelum konvoi bareng melibas tikungan Touge. Suasana malam neon ala Need for Speed.',
    specs: {
      graphicMod: 'NVE Ultra + Realistic Wet Roads + Reshade RTGI',
      cameraTool: 'FPV Drone Script + Smooth Pan Rail In-game',
      editingSoftware: 'Premiere Pro & DaVinci Resolve Studio',
      colorGrade: 'RGSTUDIO Cyber Neon Cyan & Amber'
    },
    tags: ['Car Meet', 'Drift Cinematic', 'FPV Drone Shot', 'Turbo Sound Design', '4K 60FPS'],
    testimonial: {
      quote: 'Kamera tracking-nya cakep pol, berasa nonton Tokyo Drift versi FiveM. Rekomen banget buat komunitas mobil atau server RP!',
      author: 'Dimas "Apex"',
      role: 'Founder IndoStreet Drift'
    }
  },
  {
    id: 'proj-server-trailer-02',
    title: 'METROPOLIS POLICE DEPT // Recruitment & Fleet Cinematic',
    category: 'trailer',
    categoryLabel: 'Server Trailer',
    client: 'Metropolis RP Police Department',
    serverName: 'Metropolis City RP',
    duration: '01:15',
    resolution: '4K UHD',
    fps: '60 FPS',
    image: TRAILER_IMAGE,
    aspectRatio: '16:9',
    views: '215K+',
    likes: '16.7K',
    synopsis: 'Video cinematic buat open recruitment kepolisian server. Menampilkan armada mobil dinas baru, latihan taktis SWAT, dan suara radio polisi yang realistis.',
    lore: 'Kesiapsiagaan polisi kota Los Santos dalam memberantas kejahatan terorganisir di jalanan.',
    specs: {
      graphicMod: 'NaturalVision Evolved (NVE) + Siren Lights Boost',
      cameraTool: 'Rockstar Editor Cinematic Track',
      editingSoftware: 'Adobe Premiere Pro + Audition SFX',
      colorGrade: 'Action Thriller Cool Blue Teal'
    },
    tags: ['LSPD Cinematic', 'SWAT Action', 'Radio Dispatch SFX', 'Emergency Lights', 'Trailer'],
    testimonial: {
      quote: 'Setelah video ini tayang, pendaftar akademi polisi langsung membludak. Komposisi shot sama audionya bener-bener berwibawa.',
      author: 'Chief Harris',
      role: 'Police Chief Metropolis RP'
    }
  },
  {
    id: 'proj-montage-02',
    title: 'THE VAPOR DRIFT // JDM Midnight Run Music Video',
    category: 'montage',
    categoryLabel: 'Gang Montage',
    client: 'Midnight Club Tokyo Crew',
    serverName: 'Tokyo Nights Roleplay',
    duration: '00:58',
    resolution: '4K UHD',
    fps: '60 FPS',
    image: HERO_IMAGE,
    aspectRatio: '16:9',
    views: '190K+',
    likes: '15.3K',
    synopsis: 'Edit video pendek pas buat TikTok, IG Reels, dan Shorts. Penuh dengan beat sync yang rapi, efek camera shake alami, dan transisi neon.',
    lore: 'Aksi tandem drift mulus di dermaga tanpa lecet sedikit pun.',
    specs: {
      graphicMod: 'QuantV 3.0 + Custom Motion Blur Reshade',
      cameraTool: 'CamTool Orbit Keyframe',
      editingSoftware: 'After Effects + Optical Flares',
      colorGrade: 'Neo-Tokyo Synthwave Vibrant'
    },
    tags: ['TikTok Reel', 'Music Video Sync', 'JDM Drift', 'After Effects', 'Neo Brutalism'],
    testimonial: {
      quote: 'Editingnya fresh, gak ngebosenin dan warnanya eye-catching banget. Enak diajak diskusi ide juga!',
      author: 'Ryuichi "Ken"',
      role: 'Content Creator & RP Streamer'
    }
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'tier-starter-photo',
    name: 'RP Photo Editorial',
    tagline: 'Pas banget buat profil karakter, banner fraksi, atau foto pasangan IC yang estetik.',
    price: 85000,
    color: '#00F59B',
    turnaround: '12 - 24 Jam Santai',
    idealFor: 'Player RP perorangan, foto couple IC, atau fraksi yang pengen profilnya makin keren.',
    features: [
      '3 - 5 Foto Master Resolusi 4K / 8K',
      'Preset Reshade Raytracing & Studio Lighting',
      'Retouch Kulit & Tekstur Pakaian (Gak Burem)',
      'Bebas Pilih Lokasi & Pose di Los Santos',
      'Format JPG / PNG + Siap Crop Wallpaper',
      'Bebas Revisi Warna & Angle Kamera'
    ]
  },
  {
    id: 'tier-montage',
    name: 'Action / Gang Montage',
    tagline: 'Video highlight aksi war, adu tembak, atau drift dengan tempo cepet dan beat sync.',
    price: 195000,
    color: '#FFE600',
    popular: true,
    badge: 'FAVORIT KLIEN 🔥',
    turnaround: '1 - 2 Hari Jadi',
    idealFor: 'Anak geng, mafia, tim balap, atau konten kreator TikTok & YouTube Shorts.',
    features: [
      'Durasi 45 - 75 Detik (Pacing Padat & Hype)',
      'Sinkronisasi Beat Musik (Bass Drop Tepat Sasaran)',
      'Sound FX Tembakan, Kokang Senjata & Mesin Mobil',
      'Color Grading Sinematik ala DaVinci Resolve',
      'Transisi Speed-Ramp & Glitch Mulus',
      'Export 4K UHD 60FPS (Format Landscape / Vertikal)',
      'Gratis 2x Putaran Revisi Santai'
    ]
  },
  {
    id: 'tier-trailer',
    name: 'Official Server Trailer',
    tagline: 'Paket lengkap buat promosi launching server baru atau update season FiveM.',
    price: 385000,
    color: '#FF3B94',
    turnaround: '2 - 3 Hari Pengerjaan',
    idealFor: 'Owner server FiveM yang mau narik ratusan player baru buat ngeramein kota.',
    features: [
      'Durasi 90 - 150 Detik (Full Alur Cerita / Storyline)',
      'Bantu Konsep Naskah & Ide Adegan In-Game',
      'Bisa Bantu Take Rekaman / Scripted Scenes',
      'Sinkronisasi Suara Radio Polisi / Dubbing Karakter',
      'Animasi 3D Logo Intro Server',
      'Mixing Audio Mantap Berasa Bioskop',
      'Gratis Revisi & File Master Disimpan Aman'
    ]
  },
  {
    id: 'tier-custom-vip',
    name: 'Custom Movie / Full Film',
    tagline: 'Produksi film pendek roleplay dengan alur cerita sinematik yang mendalam.',
    price: 650000,
    color: '#00D4FF',
    turnaround: '3 - 5 Hari Pengerjaan',
    idealFor: 'Event akbar server, series YouTube RP, atau project fraksi eksklusif.',
    features: [
      'Durasi 3 - 6 Menit (Film Pendek Komplit)',
      'Directing Aktor In-game (Kita Bantu Arahin)',
      'Banyak Angle Kamera (Drone, POV, Chase Car)',
      'Sound Design Asli & Efek Suara Lengkap',
      'Bonus Thumbnail YouTube yang Menarik Klik',
      'Revisi Bebas Sampe Kamu Bener-Bener Sreg',
      'Jalur Prioritas VIP Langsung Sama Editor'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Kirim Bahan & Rekaman',
    question: 'Gimana cara ngirim footage FiveM ke RGSTUDIO?',
    answer: 'Gampang banget! Kamu bisa kirim rekaman clip Rockstar Editor, video mentahan dari OBS (format mp4), atau kalau mau, tim RGSTUDIO juga bisa langsung join ke server kamu buat take rekaman angle kamera bareng player-player kamu.'
  },
  {
    category: 'Kualitas & Mod Grafis',
    question: 'Kualitas grafisnya pake apa aja biar bisa semulus itu?',
    answer: 'Kami pake racikan mod grafis terbaik: NaturalVision Evolved (NVE), QuantV, Reshade Raytracing (RTGI), CamTool v2, plus color grading khusus RGSTUDIO di DaVinci Resolve Studio. Hasil akhirnya tajam 4K 60FPS dan warnanya enak dipandang.'
  },
  {
    category: 'Waktu & Revisi',
    question: 'Berapa lama jadinya, dan bisa minta revisi gak kalau ada yang kurang pas?',
    answer: 'Foto RP biasanya kelar dalam hitungan jam sampai 1 hari. Montage 1-2 hari, dan trailer server 2-3 hari. Tenang aja, semua paket sudah termasuk revisi santai sampai hasilnya sesuai sama ekspektasi kamu.'
  },
  {
    category: 'Cara Order & Bayar',
    question: 'Gimana alur pemesanannya dan bayarnya lewat apa?',
    answer: 'Tinggal klik tombol "Order via Discord" di website ini. Begitu join Discord RGSTUDIO, kamu bisa langsung buka tiket atau chat admin. Pembayarannya fleksibel banget: bisa via QRIS, Transfer Bank (BCA, Mandiri, BRI, dll), Dana, GoPay, atau OVO.'
  },
  {
    category: 'Request Bebas',
    question: 'Bisa request lagu sendiri atau minta diisi suara dubbing polisi/mafia?',
    answer: 'Bisa banget dong! Kamu bebas pilih lagu favorit kamu (Phonk, Hip-Hop, Orchestral, atau No-Copyright). Kami juga bisa bikinin efek suara radio dispatch polisi yang realistis biar suasananya makin hidup.'
  }
];

export const STATS = [
  { label: 'Server FiveM Dilayani', value: '75+' },
  { label: 'Project Video & Foto Kelar', value: '420+' },
  { label: 'Total Viewers Terjangkau', value: '3.8M+' },
  { label: 'Rating Puas Klien', value: '4.9/5.0' },
];
