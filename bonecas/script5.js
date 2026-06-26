const bonecas = [
    // --- BÁSICAS ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraBasic.jpg", genero: "Feminino", colecao: "Básicas" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenBasic.jpg", genero: "Feminino", colecao: "Básicas" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieBasic.jpg", genero: "Feminino", colecao: "Básicas" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaBasic.jpg", genero: "Feminino", colecao: "Básicas" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoBasic.jpg", genero: "Feminino", colecao: "Básicas" },
    { nome: "Deuce Gorgon", imagem: "../imagens/imagens bonecas/DeuceBasic.jpg", genero: "Masculino", colecao: "Básicas" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaBasic.jpg", genero: "Feminino", colecao: "Básicas" },
    { nome: "Holt Hyde", imagem: "../imagens/imagens bonecas/HoltBasic.jpg", genero: "Masculino", colecao: "Básicas" },

    // --- DAWN OF THE DANCE ---
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/Clawdeendotd.jpg", genero: "Feminino", colecao: "Dawn of the Dance" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoDotd.jpg", genero: "Feminino", colecao: "Dawn of the Dance" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieDotd.jpg", genero: "Feminino", colecao: "Dawn of the Dance" },
    { nome: "Deuce Gorgon", imagem: "../imagens/imagens bonecas/DeuceDotd.jpg", genero: "Masculino", colecao: "Dawn of the Dance" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraDotd.jpg", genero: "Feminino", colecao: "Dawn of the Dance" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaDotd.jpg", genero: "Feminino", colecao: "Dawn of the Dance" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaDotd.jpg", genero: "Feminino", colecao: "Dawn of the Dance" },

    // --- GLOOM BEACH ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraGB.jpg", genero: "Feminino", colecao: "Gloom Beach" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaGb.jpg", genero: "Feminino", colecao: "Gloom Beach" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenGB.jpg", genero: "Feminino", colecao: "Gloom Beach" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoGb.jpg", genero: "Gloom Beach", colecao: "Gloom Beach" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieGB.jpg", genero: "Feminino", colecao: "Gloom Beach" },
    { nome: "Jackson Jekyll", imagem: "../imagens/imagens bonecas/JacksonGb.jpg", genero: "Masculino", colecao: "Gloom Beach" },

    // --- SCHOOL'S OUT ---
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeySO.jpg", genero: "Feminino", colecao: "School's Out" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenSO.jpg", genero: "Feminino", colecao: "School's Out" },
    { nome: "Clawd Wolf", imagem: "../imagens/imagens bonecas/ClawdSO.jpg", genero: "Feminino", colecao: "School's Out" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieSO.jpg", genero: "Feminino", colecao: "School's Out" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoSO.jpg", genero: "Feminino", colecao: "School's Out" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraSO.jpg", genero: "Feminino", colecao: "School's Out" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraSO.jpg", genero: "Feminino", colecao: "School's Out" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaSO.jpg", genero: "Feminino", colecao: "School's Out" },

    // --- DEAD TIRED ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/Draculaura DT.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraDT.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaDT.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraDT2.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Clawdeen Wolf (Room to Howl)", imagem: "../imagens/imagens bonecas/ClawdeenDT2.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenDT.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieDT.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaDT2.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoDT.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaDT.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Robecca Steam", imagem: "../imagens/imagens bonecas/RobeccaDT.jpg", genero: "Feminino", colecao: "Dead Tired" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyDT.jpg", genero: "Feminino", colecao: "Dead Tired" },

    // --- KILLER STYLE ---
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaKS.jpg", genero: "Feminino", colecao: "Killer Style" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenKS.jpg", genero: "Feminino", colecao: "Killer Style" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraKS.jpg", genero: "Feminino", colecao: "Killer Style" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieKS.jpg", genero: "Feminino", colecao: "Killer Style" },

    // --- CLASSROOM ---
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieClassroom.jpg", genero: "Feminino", colecao: "Classroom" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaClassroom.jpg", genero: "Feminino", colecao: "Classroom" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaClassroom.jpg", genero: "Feminino", colecao: "Classroom" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaClassroom2.jpg", genero: "Feminino", colecao: "Classroom" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoClassroom.jpg", genero: "Feminino", colecao: "Classroom" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyClassroom.jpg", genero: "Feminino", colecao: "Classroom" },
    { nome: "Heath Burns", imagem: "../imagens/imagens bonecas/HeathClassroom.jpg", genero: "Feminino", colecao: "Classroom" },
   
    // --- COLECÃO: GO MONSTER HIGH TEAM!!! (FEARLEADING) ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraGo Monster High Team!!!.jpg", genero: "Feminino", colecao: "Go Monster High Team!!!" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoGo Monster High Team!!!.jpg", genero: "Feminino", colecao: "Go Monster High Team!!!" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaGo Monster High Team!!!.jpg", genero: "Feminino", colecao: "Go Monster High Team!!!" },
    { nome: "Toralei Stripe", imagem: "../imagens/imagens bonecas/ToraleiGo Monster High Team!!!.jpg", genero: "Feminino", colecao: "Go Monster High Team!!!" },
    { nome: "Meowlody", imagem: "../imagens/imagens bonecas/MeowlodyGo Monster High Team!!!.jpg", genero: "Feminino", colecao: "Go Monster High Team!!!" },
    { nome: "Purrsephone", imagem: "../imagens/imagens bonecas/PurrsephoneGo Monster High Team!!!.jpg", genero: "Feminino", colecao: "Go Monster High Team!!!" },

    // --- COLECÃO: CAMPUS STROLL ---
    { nome: "Howleen Wolf", imagem: "../imagens/imagens bonecas/HowleenCampus.jpg", genero: "Feminino", colecao: "Campus Stroll" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenCampus.jpg", genero: "Feminino", colecao: "Campus Stroll" },
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaCampus.jpg", genero: "Feminino", colecao: "Campus Stroll" },
    { nome: "Purrsephone", imagem: "../imagens/imagens bonecas/PurrsephoneCampus.jpg", genero: "Feminino", colecao: "Campus Stroll" },
    { nome: "Toralei Stripe", imagem: "../imagens/imagens bonecas/ToraleiCampus.jpg", genero: "Feminino", colecao: "Campus Stroll" },
    { nome: "Meowlody", imagem: "../imagens/imagens bonecas/MeowlodyCampus.jpg", genero: "Feminino", colecao: "Campus Stroll" },
    { nome: "Nefera de Nile", imagem: "../imagens/imagens bonecas/NeferaCampus.jpg", genero: "Feminino", colecao: "Campus Stroll" },

    // --- COLECÃO: SKULL SHORES ---
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaSkull.jpg", genero: "Feminino", colecao: "Skull Shores" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaSkull.jpg", genero: "Feminino", colecao: "Skull Shores" },
    { nome: "Gil Webber", imagem: "../imagens/imagens bonecas/GilSkull.jpg", genero: "Masculino", colecao: "Skull Shores" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeySkull.jpg", genero: "Feminino", colecao: "Skull Shores" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraSkull.jpg", genero: "Feminino", colecao: "Skull Shores" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoSkull.jpg", genero: "Feminino", colecao: "Skull Shores" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenSkull.jpg", genero: "Feminino", colecao: "Skull Shores" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieSkull.jpg", genero: "Feminino", colecao: "Skull Shores" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieSkull2.jpg", genero: "Feminino", colecao: "Skull Shores" },

    // --- COLECÃO: SWEET 1600 ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraSweet.jpg", genero: "Feminino", colecao: "Sweet 1600" },
    { nome: "Clawd Wolf", imagem: "../imagens/imagens bonecas/ClawdSweet.jpg", genero: "Masculino", colecao: "Sweet 1600" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenSweet.jpg", genero: "Feminino", colecao: "Sweet 1600" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieSweet.jpg", genero: "Feminino", colecao: "Sweet 1600" },
    { nome: "C.A. Cupid", imagem: "../imagens/imagens bonecas/CupidSweet.jpg", genero: "Feminino", colecao: "Sweet 1600" },

    // --- COLECÃO: BETWEEN CLASSES ---
    { nome: "Rochelle Goyle", imagem: "../imagens/imagens bonecas/RochelleBetween.jpg", genero: "Feminino", colecao: "Between Classes" },
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusBetween.jpg", genero: "Feminino", colecao: "Between Classes" },
    { nome: "Robecca Steam", imagem: "../imagens/imagens bonecas/RobeccaBetween.jpg", genero: "Feminino", colecao: "Between Classes" },
    { nome: "Jackson Jekyll", imagem: "../imagens/imagens bonecas/JacksonBetween.jpg", genero: "Masculino", colecao: "Between Classes" },

    // --- COLECÃO: DOT DEAD GORGEOUS ---
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaDDG.jpg", genero: "Feminino", colecao: "Dot Dead Gorgeous" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraDDG.jpg", genero: "Feminino", colecao: "Dot Dead Gorgeous" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaDDG.jpg", genero: "Feminino", colecao: "Dot Dead Gorgeous" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraDDG.jpg", genero: "Feminino", colecao: "Dot Dead Gorgeous" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyDDG.jpg", genero: "Feminino", colecao: "Dot Dead Gorgeous" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaDDG.jpg", genero: "Feminino", colecao: "Dot Dead Gorgeous" },

    // --- COLECÃO: GHOULS RULE ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraGhouls.jpg", genero: "Feminino", colecao: "Ghouls Rule" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieGhouls.jpg", genero: "Feminino", colecao: "Ghouls Rule" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenGhouls.jpg", genero: "Feminino", colecao: "Ghouls Rule" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoGhouls.jpg", genero: "Feminino", colecao: "Ghouls Rule" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyGhouls.jpg", genero: "Feminino", colecao: "Ghouls Rule" },

    // --- COLECÃO: I HEART FASHION ---
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyFashion.jpg", genero: "Feminino", colecao: "I Heart Fashion" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieFashion.jpg", genero: "Feminino", colecao: "I Heart Fashion" },
    { nome: "Scarah Screams", imagem: "../imagens/imagens bonecas/ScarahFashion.jpg", genero: "Feminino", colecao: "I Heart Fashion" },
    { nome: "Wydowna Spider", imagem: "../imagens/imagens bonecas/WydownaFashion.jpg", genero: "Feminino", colecao: "I Heart Fashion" },
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusFashion.jpg", genero: "Feminino", colecao: "I Heart Fashion" },
    { nome: "Iris Clops", imagem: "../imagens/imagens bonecas/IrisFashion.jpg", genero: "Feminino", colecao: "I Heart Fashion" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoFashion.jpg", genero: "Feminino", colecao: "I Heart Fashion" },
    { nome: "Whisp Grant", imagem: "../imagens/imagens bonecas/WhispFashion.jpg", genero: "Feminino", colecao: "I Heart Fashion" },

    // --- COLECÃO: SKULTIMATE ROLLER MAZE ---
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieRoller.jpg", genero: "Feminino", colecao: "Skultimate Roller Maze" },
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaRoller.jpg", genero: "Feminino", colecao: "Skultimate Roller Maze" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaRoller.jpg", genero: "Feminino", colecao: "Skultimate Roller Maze" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaRoller.jpg", genero: "Feminino", colecao: "Skultimate Roller Maze" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyRoller.jpg", genero: "Feminino", colecao: "Skultimate Roller Maze" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenRoller.jpg", genero: "Feminino", colecao: "Skultimate Roller Maze" },

    // --- COLECÃO: SCARILY EVER AFTER ---
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieFairytale.jpg", genero: "Feminino", colecao: "Scarily Ever After" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraFairytale.jpg", genero: "Feminino", colecao: "Scarily Ever After" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenFairytale.jpg", genero: "Feminino", colecao: "Scarily Ever After" },

    // --- COLECÃO: DANCE CLASS ---
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaDance.jpg", genero: "Feminino", colecao: "Dance Class" },
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaDance.jpg", genero: "Feminino", colecao: "Dance Class" },
    { nome: "Howleen Wolf", imagem: "../imagens/imagens bonecas/HowleenDance.jpg", genero: "Feminino", colecao: "Dance Class" },
    { nome: "Rochelle Goyle", imagem: "../imagens/imagens bonecas/RochelleDance.jpg", genero: "Feminino", colecao: "Dance Class" },
    { nome: "Robecca Steam", imagem: "../imagens/imagens bonecas/RobeccaDance.jpg", genero: "Feminino", colecao: "Dance Class" },
    { nome: "Gil Webber", imagem: "../imagens/imagens bonecas/GilDance.jpg", genero: "Masculino", colecao: "Dance Class" },

    // --- COLECÃO: SCARIS ---
    { nome: "Rochelle Goyle", imagem: "../imagens/imagens bonecas/RochelleScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Catrine DeMew", imagem: "../imagens/imagens bonecas/CatrineScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Jinafire Long", imagem: "../imagens/imagens bonecas/JinafireScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Skelita Calaveras", imagem: "../imagens/imagens bonecas/SkelitaScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaScaris.jpg", genero: "Feminino", colecao: "Scaris" },
    { nome: "Deuce Gorgon", imagem: "../imagens/imagens bonecas/DeuceScaris.jpg", genero: "Masculino", colecao: "Scaris" },

    // --- COLECÃO: PICTURE DAY ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraPicture.jpg", genero: "Feminino", colecao: "Picture Day" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankiePicture.jpg", genero: "Feminino", colecao: "Picture Day" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoPicture.jpg", genero: "Feminino", colecao: "Picture Day" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaPicture.jpg", genero: "Feminino", colecao: "Picture Day" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraPicture.jpg", genero: "Feminino", colecao: "Picture Day" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyPicture.jpg", genero: "Feminino", colecao: "Picture Day" },
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaPicture.jpg", genero: "Feminino", colecao: "Picture Day" },
   
    // --- COLECÃO: GHOULS ALIVE! ---
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieAlive.jpg", genero: "Feminino", colecao: "Ghouls Alive!" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenAlive.jpg", genero: "Feminino", colecao: "Ghouls Alive!" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraAlive.jpg", genero: "Feminino", colecao: "Ghouls Alive!" },
    { nome: "Toralei Stripe", imagem: "../imagens/imagens bonecas/ToraleiAlive.jpg", genero: "Feminino", colecao: "Ghouls Alive!" },
    { nome: "Deuce Gorgon", imagem: "../imagens/imagens bonecas/DeuceAlive.JPG", genero: "Masculino", colecao: "Ghouls Alive!" },
    { nome: "Robecca Steam", imagem: "../imagens/imagens bonecas/RobeccaAlive.jpg", genero: "Feminino", colecao: "Ghouls Alive!" },

    // --- COLECÃO: POWER GHOULS ---
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenPower.jpg", genero: "Feminino", colecao: "Power Ghouls" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankiePower.jpg", genero: "Feminino", colecao: "Power Ghouls" },
    { nome: "Toralei Stripe", imagem: "../imagens/imagens bonecas/ToraleiPower.jpg", genero: "Feminino", colecao: "Power Ghouls" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraPower.jpg", genero: "Feminino", colecao: "Power Ghouls" },

    // --- COLECÃO: MAKE A SPLASH ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraSplash.jpg", genero: "Feminino", colecao: "Make a Splash" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaSplash.jpg", genero: "Feminino", colecao: "Make a Splash" },
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusSplash.jpg", genero: "Feminino", colecao: "Make a Splash" },
    { nome: "Holt Hyde", imagem: "../imagens/imagens bonecas/HoltSplash.jpg", genero: "Masculino", colecao: "Make a Splash" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenSplash.jpg", genero: "Feminino", colecao: "Make a Splash" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieSplash.jpg", genero: "Feminino", colecao: "Make a Splash" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraSplash.jpg", genero: "Feminino", colecao: "Make a Splash" },
    { nome: "Jinafire Long", imagem: "../imagens/imagens bonecas/JinafireSplash.jpg", genero: "Feminino", colecao: "Make a Splash" },
    { nome: "Rochelle Goyle", imagem: "../imagens/imagens bonecas/RochelleSplash.jpg", genero: "Feminino", colecao: "Make a Splash" },

    // --- COLECÃO: GHOULS' NIGHT OUT ---
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraNight.jpg", genero: "Feminino", colecao: "Ghouls' Night Out" },
    { nome: "Rochelle Goyle", imagem: "../imagens/imagens bonecas/RochelleNight.jpg", genero: "Feminino", colecao: "Ghouls' Night Out" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaNight.jpg", genero: "Feminino", colecao: "Ghouls' Night Out" },
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusNight.jpg", genero: "Feminino", colecao: "Ghouls' Night Out" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenNight.jpg", genero: "Feminino", colecao: "Ghouls' Night Out" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaNight.jpg", genero: "Feminino", colecao: "Ghouls' Night Out" },

    // --- COLECÃO: MUSIC FESTIVAL ---
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyMusic.jpg", genero: "Feminino", colecao: "Music Festival" },
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusMusic.jpg", genero: "Feminino", colecao: "Music Festival" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenMusic.jpg", genero: "Feminino", colecao: "Music Festival" },
    { nome: "Clawd Wolf", imagem: "../imagens/imagens bonecas/ClawdMusic.jpg", genero: "Masculino", colecao: "Music Festival" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraMusic.jpg", genero: "Feminino", colecao: "Music Festival" },

    // --- COLECÃO: 13 WISHES ---
    { nome: "Gigi Grant", imagem: "../imagens/imagens bonecas/GigiWishes.jpg", genero: "Feminino", colecao: "13 Wishes" },
    { nome: "Twyla", imagem: "../imagens/imagens bonecas/TwylaWishes.jpg", genero: "Feminino", colecao: "13 Wishes" },
    { nome: "Howleen Wolf", imagem: "../imagens/imagens bonecas/HowleenWishes.jpg", genero: "Feminino", colecao: "13 Wishes" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaWishes.jpg", genero: "Feminino", colecao: "13 Wishes" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraWishes.jpg", genero: "Feminino", colecao: "13 Wishes" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenWishes.jpg", genero: "Feminino", colecao: "13 Wishes" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieWishes.jpg", genero: "Feminino", colecao: "13 Wishes" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyWishes.jpg", genero: "Feminino", colecao: "13 Wishes" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoWishes.jpg", genero: "Feminino", colecao: "13 Wishes" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraWishes.jpg", genero: "Feminino", colecao: "13 Wishes" },

    // --- COLECÃO: I HEART SHOES ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraShoes.jpg", genero: "Feminino", colecao: "I Heart Shoes" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoShoes.jpg", genero: "Feminino", colecao: "I Heart Shoes" },

    // --- COLECÃO: ART CLASS ---
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyArt.jpg", genero: "Feminino", colecao: "Art Class" },
    { nome: "Skelita Calaveras", imagem: "../imagens/imagens bonecas/SkelitaArt.jpg", genero: "Feminino", colecao: "Art Class" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraArt.jpg", genero: "Feminino", colecao: "Art Class" },
    { nome: "Robecca Steam", imagem: "../imagens/imagens bonecas/RobeccaArt.jpg", genero: "Feminino", colecao: "Art Class" },

    // --- COLECÃO: FRIGHTS, CAMERA, ACTION! ---
    { nome: "Elissabat", imagem: "../imagens/imagens bonecas/ElissabatFCA.jpg", genero: "Feminino", colecao: "Frights, Camera, Action!" },
    { nome: "Clawdia Wolf", imagem: "../imagens/imagens bonecas/ClawdiaFCA.jpg", genero: "Feminino", colecao: "Frights, Camera, Action!" },
    { nome: "Honey Swamp", imagem: "../imagens/imagens bonecas/HoneyFCA.jpg", genero: "Feminino", colecao: "Frights, Camera, Action!" },
    { nome: "Viperine Gorgon", imagem: "../imagens/imagens bonecas/ViperineFCA.jpg", genero: "Feminino", colecao: "Frights, Camera, Action!" },
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaFCA.jpg", genero: "Feminino", colecao: "Frights, Camera, Action!" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraFCA.jpg", genero: "Feminino", colecao: "Frights, Camera, Action!" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenFCA.jpg", genero: "Feminino", colecao: "Frights, Camera, Action!" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoFCA.jpg", genero: "Feminino", colecao: "Frights, Camera, Action!" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaFCA.jpg", genero: "Feminino", colecao: "Frights, Camera, Action!" },

    // --- COLECÃO: NEW SCAREMESTER ---
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenScaremester.jpg", genero: "Feminino", colecao: "New Scaremester" },
    { nome: "Jinafire Long", imagem: "../imagens/imagens bonecas/JinafireScaremester.jpg", genero: "Feminino", colecao: "New Scaremester" },
    { nome: "Catrine DeMew", imagem: "../imagens/imagens bonecas/CatrineScaremester.jpg", genero: "Feminino", colecao: "New Scaremester" },
    { nome: "Twyla", imagem: "../imagens/imagens bonecas/TwylaScaremester.jpg", genero: "Feminino", colecao: "New Scaremester" },
    { nome: "Catty Noir", imagem: "../imagens/imagens bonecas/CattyScaremester.jpg", genero: "Feminino", colecao: "New Scaremester" },
    { nome: "Invisi Billy", imagem: "../imagens/imagens bonecas/InvisiScaremester.jpg", genero: "Masculino", colecao: "New Scaremester" },
    { nome: "Gigi Grant", imagem: "../imagens/imagens bonecas/GigiScaremester.jpg", genero: "Feminino", colecao: "New Scaremester" },

    // --- COLECÃO: GHOUL SPIRIT ---
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieSpirit.jpg", genero: "Feminino", colecao: "Ghoul Spirit" },
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusSpirit.jpg", genero: "Feminino", colecao: "Ghoul Spirit" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraSpirit.jpg", genero: "Feminino", colecao: "Ghoul Spirit" },
    { nome: "Slo Mo", imagem: "../imagens/imagens bonecas/SloMoSpirit.jpg", genero: "Masculino", colecao: "Ghoul Spirit" },

    // --- COLECÃO: SWEET SCREAMS ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraSScreams.jpg", genero: "Feminino", colecao: "Sweet Screams" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieSScreams.jpg", genero: "Feminino", colecao: "Sweet Screams" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeySScreams.jpg", genero: "Feminino", colecao: "Sweet Screams" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaSScreams.jpg", genero: "Feminino", colecao: "Sweet Screams" },

    // --- COLECÃO: COFFIN BEAN ---
    { nome: "Toralei Stripe", imagem: "../imagens/imagens bonecas/ToraleiCoffin.jpg", genero: "Feminino", colecao: "Coffin Bean" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieCoffin.jpg", genero: "Feminino", colecao: "Coffin Bean" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyCoffin.jpg", genero: "Feminino", colecao: "Coffin Bean" },
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusCoffin.jpg", genero: "Feminino", colecao: "Coffin Bean" },
    { nome: "Twyla", imagem: "../imagens/imagens bonecas/TwylaCoffin.jpg", genero: "Feminino", colecao: "Coffin Bean" },
    { nome: "Robecca Steam", imagem: "../imagens/imagens bonecas/RobeccaCoffin.jpg", genero: "Feminino", colecao: "Coffin Bean" },

    // --- COLECÃO: PICNIC CASKET FOR 2 ---
    { nome: "Jackson Jekyll", imagem: "../imagens/imagens bonecas/JacksonPicnic.jpg", genero: "Masculino", colecao: "Picnic Casket for 2" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankiePicnic.jpg", genero: "Feminino", colecao: "Picnic Casket for 2" },

    // --- COLECÃO: ZOMBIE SHAKE ---
    { nome: "Rochelle Goyle", imagem: "../imagens/imagens bonecas/RochelleZombie.jpg", genero: "Feminino", colecao: "Zombie Shake" },
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusZombie.jpg", genero: "Feminino", colecao: "Zombie Shake" },
    { nome: "Purrsephone", imagem: "../imagens/imagens bonecas/PurrsephoneZombie.jpg", genero: "Feminino", colecao: "Zombie Shake" },
    { nome: "Meowlody", imagem: "../imagens/imagens bonecas/MeowlodyZombie.jpg", genero: "Feminino", colecao: "Zombie Shake" },

    // --- COLECÃO: CREEPATERIA ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraCreepateria.jpg", genero: "Feminino", colecao: "Creepateria" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoCreepateria.jpg", genero: "Feminino", colecao: "Creepateria" },
    { nome: "Howleen Wolf", imagem: "../imagens/imagens bonecas/HowleenCreepateria.jpg", genero: "Feminino", colecao: "Creepateria" },
     

     // --- COLECÃO: FREAKY FUSION ---
    { nome: "Sirena Von Boo", imagem: "../imagens/imagens bonecas/SirenaFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Avea Trotter", imagem: "../imagens/imagens bonecas/AveaFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Bonita Femur", imagem: "../imagens/imagens bonecas/BonitaFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Neighthan Rot", imagem: "../imagens/imagens bonecas/NeighthanFusion.jpg", genero: "Masculino", colecao: "Freaky Fusion" },
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Scarah Screams", imagem: "../imagens/imagens bonecas/ScarahFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Clawdeen Wolf (Clawvenus)", imagem: "../imagens/imagens bonecas/ClawvenusFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Venus McFlytrap (Clawvenus)", imagem: "../imagens/imagens bonecas/ClawvenusFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieFusion2.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Jackson Jekyll", imagem: "../imagens/imagens bonecas/JacksonFusion.jpg", genero: "Masculino", colecao: "Freaky Fusion" },
   

    { nome: "Draculaura (Dracubecca)", imagem: "../imagens/imagens bonecas/DracubeccaFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Robecca Steam (Dracubecca)", imagem: "../imagens/imagens bonecas/DracubeccaFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    
    { nome: "Cleo de Nile (Cleolei)", imagem: "../imagens/imagens bonecas/CleoleiFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Toralei Stripe (Cleolei)", imagem: "../imagens/imagens bonecas/CleoleiFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    
    { nome: "Lagoona Blue (Lagoonafire)", imagem: "../imagens/imagens bonecas/LagoonafireFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },
    { nome: "Jinafire Long (Lagoonafire)", imagem: "../imagens/imagens bonecas/LagoonafireFusion.jpg", genero: "Feminino", colecao: "Freaky Fusion" },

    // --- COLECÃO: WE ARE MONSTER HIGH ---
    { nome: "Slo Mo ", imagem: "../imagens/imagens bonecas/SloMoWeAreMH.jpg", genero: "Masculino", colecao: "We Are Monster High" },
    { nome: "Cleo de Nile ", imagem: "../imagens/imagens bonecas/CleoWeAreMH.jpg", genero: "Feminino", colecao: "We Are Monster High" },
    { nome: "Gilda Goldstag ", imagem: "../imagens/imagens bonecas/GildaWeAreMH.jpg", genero: "Feminino", colecao: "We Are Monster High" },
    { nome: "Scarah Screams ", imagem: "../imagens/imagens bonecas/ScarahWeAreMH.jpg", genero: "Feminino", colecao: "We Are Monster High" },
    { nome: "Lagoona Blue ", imagem: "../imagens/imagens bonecas/LagoonaWeAreMH.jpg", genero: "Feminino", colecao: "We Are Monster High" },

    // --- COLECÃO: MANSTERS ---
    { nome: "Gil Webber", imagem: "../imagens/imagens bonecas/GilMansters.jpg", genero: "Masculino", colecao: "Mansters" },
    { nome: "Deuce Gorgon", imagem: "../imagens/imagens bonecas/DeuceMansters.jpg", genero: "Masculino", colecao: "Mansters" },

    // --- COLECÃO: I HEART ACCESSORIES ---
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaAccessoires.jpg", genero: "Feminino", colecao: "I Heart Accessories" },
    { nome: "Skelita Calaveras", imagem: "../imagens/imagens bonecas/SkelitaAccessoires.jpg", genero: "Feminino", colecao: "I Heart Accessories" },

    // --- COLECÃO: GHOUL CHAT ---
    { nome: "Rochelle Goyle ", imagem: "../imagens/imagens bonecas/RochelleChat.jpg", genero: "Feminino", colecao: "Ghoul Chat" },
    { nome: "Catrine DeMew", imagem: "../imagens/imagens bonecas/CatrineChat.jpg", genero: "Feminino", colecao: "Ghoul Chat" },

    // --- COLECÃO: A PACK OF TROUBLE ---
    { nome: "Clawdeen Wolf ", imagem: "../imagens/imagens bonecas/Clawdeentrouble.jpg", genero: "Feminino", colecao: "A Pack of Trouble" },
    { nome: "Clawd Wolf ", imagem: "../imagens/imagens bonecas/Clawdtrouble.jpg", genero: "Masculino", colecao: "A Pack of Trouble" },
    { nome: "Clawdia Wolf ", imagem: "../imagens/imagens bonecas/Clawdiatrouble.jpg", genero: "Feminino", colecao: "A Pack of Trouble" },
    { nome: "Howleen Wolf ", imagem: "../imagens/imagens bonecas/Howleentrouble.jpg", genero: "Feminino", colecao: "A Pack of Trouble" },

    // --- COLECÃO: MONSTER EXCHANGE PROGRAM ---
    { nome: "Marisol Coxi", imagem: "../imagens/imagens bonecas/MarisolExchange.jpg", genero: "Feminino", colecao: "Monster Exchange Program" },
    { nome: "Lorna McNessie", imagem: "../imagens/imagens bonecas/LornaExchange.jpg", genero: "Feminino", colecao: "Monster Exchange Program" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaExchange.jpg", genero: "Feminino", colecao: "Monster Exchange Program" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraExchange.jpg", genero: "Feminino", colecao: "Monster Exchange Program" },
   
    // --- COLECÃO: FREAKY FIELD TRIP ---
    { nome: "Toralei Stripe", imagem: "../imagens/imagens bonecas/ToraleiTrip.jpg", genero: "Feminino", colecao: "Freaky Field Trip" },
    { nome: "Gigi Grant", imagem: "../imagens/imagens bonecas/GigiTrip.jpg", genero: "Feminino", colecao: "Freaky Field Trip" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenTrip.jpg", genero: "Feminino", colecao: "Freaky Field Trip" },

    // --- COLECÃO: GLOOM AND BLOOM ---
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusBloom.jpg", genero: "Feminino", colecao: "Gloom and Bloom" },
    { nome: "Catrine DeMew", imagem: "../imagens/imagens bonecas/CatrineBloom.jpg", genero: "Feminino", colecao: "Gloom and Bloom" },
    { nome: "Jane Boolittle", imagem: "../imagens/imagens bonecas/JaneBloom.jpg", genero: "Feminino", colecao: "Gloom and Bloom" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoBloom.jpg", genero: "Feminino", colecao: "Gloom and Bloom" },
    { nome: "Jinafire Long", imagem: "../imagens/imagens bonecas/JinafireBloom.jpg", genero: "Feminino", colecao: "Gloom and Bloom" },

    // --- COLECÃO: GEEK SHRIEK ---
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieGeek.jpg", genero: "Feminino", colecao: "Geek Shriek" },
    { nome: "Howleen Wolf", imagem: "../imagens/imagens bonecas/HowleenGeek.jpg", genero: "Feminino", colecao: "Geek Shriek" },
    { nome: "Abbey Bominable", imagem: "../imagens/imagens bonecas/AbbeyGeek.jpg", genero: "Feminino", colecao: "Geek Shriek" },
    { nome: "Gigi Grant", imagem: "../imagens/imagens bonecas/GigiGeek.jpg", genero: "Feminino", colecao: "Geek Shriek" },
    { nome: "Catty Noir", imagem: "../imagens/imagens bonecas/CattyGeek.jpg", genero: "Feminino", colecao: "Geek Shriek" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaGeek.jpg", genero: "Feminino", colecao: "Geek Shriek" },

    // --- COLECÃO: HAUNTED ---
    { nome: "Vandala Doubloons", imagem: "../imagens/imagens bonecas/VandalaHaunted.jpg", genero: "Feminino", colecao: "Haunted" },
    { nome: "River Styxx", imagem: "../imagens/imagens bonecas/RiverHaunted.jpg", genero: "Feminino", colecao: "Haunted" },
    { nome: "Kiyomi Haunterly", imagem: "../imagens/imagens bonecas/KiyomiHaunted.jpg", genero: "Feminino", colecao: "Haunted" },
    { nome: "Porter Geiss", imagem: "../imagens/imagens bonecas/PorterHaunted.jpg", genero: "Masculino", colecao: "Haunted" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraHaunted.jpg", genero: "Feminino", colecao: "Haunted" },
    { nome: "Rochelle Goyle", imagem: "../imagens/imagens bonecas/RochelleHaunted.jpg", genero: "Feminino", colecao: "Haunted" },
    { nome: "Twyla", imagem: "../imagens/imagens bonecas/TwylaHaunted.jpg", genero: "Feminino", colecao: "Haunted" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraHaunted.jpg", genero: "Feminino", colecao: "Haunted" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenHaunted.jpg", genero: "Feminino", colecao: "Haunted" },

    // --- COLECÃO: ORIGINAL GHOULS COLLECTION ---
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieOriginalGhouls.jpg", genero: "Feminino", colecao: "Original Ghouls Collection" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraOriginalGhouls.jpg", genero: "Feminino", colecao: "Original Ghouls Collection" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenOriginalGhouls.jpg", genero: "Feminino", colecao: "Original Ghouls Collection" },
    { nome: "Cleo de Nile", imagem: "../imagens/imagens bonecas/CleoOriginalGhouls.jpg", genero: "Feminino", colecao: "Original Ghouls Collection" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaOriginalGhouls.jpg", genero: "Feminino", colecao: "Original Ghouls Collection" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaOriginalGhouls.jpg", genero: "Feminino", colecao: "Original Ghouls Collection" },

    // --- COLECÃO: LOVE IN SCARIS ---
    { nome: "Garrott DuRoque ", imagem: "../imagens/imagens bonecas/GarrottScaris.jpg", genero: "Masculino", colecao: "Love in Scaris" },
    { nome: "Rochelle Goyle ", imagem: "../imagens/imagens bonecas/RochelleScaris2.jpg", genero: "Feminino", colecao: "Love in Scaris" },

    // --- COLECÃO: GHOULEBRITIES IN LONDOOM ---
    { nome: "Catty Noir ", imagem: "../imagens/imagens bonecas/CattyLondoom.jpg", genero: "Feminino", colecao: "Ghoulebrities in Londoom" },
    { nome: "Elissabat ", imagem: "../imagens/imagens bonecas/ElissabatLondoom.jpg", genero: "Feminino", colecao: "Ghoulebrities in Londoom" },
    { nome: "Viperine Gorgon", imagem: "../imagens/imagens bonecas/ViperineLondoom.jpg", genero: "Feminino", colecao: "Ghoulebrities in Londoom" },

    // --- COLECÃO: BOO YORK, BOO YORK ---
    { nome: "Catty Noir", imagem: "../imagens/imagens bonecas/CattyBooYork.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Nefera de Nile", imagem: "../imagens/imagens bonecas/NeferaBooYork.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Luna Mothews", imagem: "../imagens/imagens bonecas/LunaBooYork.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Mouscedes King", imagem: "../imagens/imagens bonecas/MouscedesBooYork.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Elle Eedee", imagem: "../imagens/imagens bonecas/ElleBooYork.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Astranova", imagem: "../imagens/imagens bonecas/AstranovaBooYork.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaBooYork.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenBooYork.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraBooYork.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Cleo de Nile ", imagem: "../imagens/imagens bonecas/CleoBooYork.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Deuce Gorgon", imagem: "../imagens/imagens bonecas/DeuceBooYork.jpg", genero: "Masculino", colecao: "Boo York, Boo York" },
    { nome: "Luna Mothews", imagem: "../imagens/imagens bonecas/LunaBooYork2.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Mouscedes King ", imagem: "../imagens/imagens bonecas/MouscedesBooYork2.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Elle Eedee ", imagem: "../imagens/imagens bonecas/ElleBooYork2.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },
    { nome: "Catty Noir", imagem: "../imagens/imagens bonecas/CattyBooYork2.jpg", genero: "Feminino", colecao: "Boo York, Boo York" },

    // --- COLECÃO: WHEEL LOVE ---
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/lagoonaWheel.jpg", genero: "Feminino", colecao: "Wheel Love" },
    { nome: "Gil Webber ", imagem: "../imagens/imagens bonecas/GilWheel.jpg", genero: "Masculino", colecao: "Wheel Love" },

    // --- COLECÃO: FREAK DU CHIC ---
    { nome: "Gooliope Wellington", imagem: "../imagens/imagens bonecas/GooliopeChic.jpg", genero: "Feminino", colecao: "Freak Du Chic" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieChic.jpg", genero: "Feminino", colecao: "Freak Du Chic" },
    { nome: "Toralei Stripe", imagem: "../imagens/imagens bonecas/ToraleiChic.jpg", genero: "Feminino", colecao: "Freak Du Chic" },
    { nome: "Jinafire Long", imagem: "../imagens/imagens bonecas/JinafireChic.jpg", genero: "Feminino", colecao: "Freak Du Chic" },
    { nome: "Honey Swamp", imagem: "../imagens/imagens bonecas/HoneyChic.jpg", genero: "Feminino", colecao: "Freak Du Chic" },
    { nome: "Twyla", imagem: "../imagens/imagens bonecas/TwylaChic.jpg", genero: "Feminino", colecao: "Freak Du Chic" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenChic.jpg", genero: "Feminino", colecao: "Freak Du Chic" },
    { nome: "Rochelle Goyle", imagem: "../imagens/imagens bonecas/RochelleChic.jpg", genero: "Feminino", colecao: "Freak Du Chic" },

    // --- COLECÃO: GHOUL FAIR ---
    { nome: "Scarah Screams", imagem: "../imagens/imagens bonecas/ScarahFair.jpg", genero: "Feminino", colecao: "Ghoul Fair" },
    { nome: "Howleen Wolf", imagem: "../imagens/imagens bonecas/HowleenFair.jpg", genero: "Feminino", colecao: "Ghoul Fair" },
    { nome: "Elissabat", imagem: "../imagens/imagens bonecas/ElissabatFair.jpg", genero: "Feminino", colecao: "Ghoul Fair" },
    { nome: "Heath Burns", imagem: "../imagens/imagens bonecas/HeathFair.jpg", genero: "Masculino", colecao: "Ghoul Fair" },

    // --- COLECÃO: SCARNIVAL ---
    { nome: "Skelita Calaveras", imagem: "../imagens/imagens bonecas/SkelitaScarnival.jpg", genero: "Feminino", colecao: "Scarnival" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraScarnival.jpg", genero: "Feminino", colecao: "Scarnival" },
    { nome: "Clawd Wolf", imagem: "../imagens/imagens bonecas/ClawdScarnival.jpg", genero: "Masculino", colecao: "Scarnival" },

    // --- COLECÃO: GORE-GEOUS ACCESSORIES ---
    { nome: "Honey Swamp", imagem: "../imagens/imagens bonecas/HoneyAccessories2.jpg", genero: "Feminino", colecao: "Gore-Geous Accessories" },
    { nome: "Robecca Steam", imagem: "../imagens/imagens bonecas/RobeccaAccessories2.jpg", genero: "Feminino", colecao: "Gore-Geous Accessories" },
    // --- COLECÃO: FANGTASTIC FITNESS ---
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusFitness.jpg", genero: "Feminino", colecao: "Fangtastic Fitness" },
    { nome: "Catrine DeMew", imagem: "../imagens/imagens bonecas/CatrineFitness.jpg", genero: "Feminino", colecao: "Fangtastic Fitness" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaFitness.jpg", genero: "Feminino", colecao: "Fangtastic Fitness" },

    // --- COLECÃO: WHEELIN' WERECATS ---
    { nome: "Purrsephone", imagem: "../imagens/imagens bonecas/Purrsephonecats.jpg", genero: "Feminino", colecao: "Wheelin' Werecats" },
    { nome: "Meowlody ", imagem: "../imagens/imagens bonecas/Meowlodycats.jpg", genero: "Feminino", colecao: "Wheelin' Werecats" },

    // --- COLECÃO: FRIGHTFULLY TALL GHOULS ---
    { nome: "Clawdeen Wolf ", imagem: "../imagens/imagens bonecas/ClawdeenTall.jpg", genero: "Feminino", colecao: "Frightfully Tall" },
    { nome: "Draculaura ", imagem: "../imagens/imagens bonecas/DraculauraTall.jpg", genero: "Feminino", colecao: "Frightfully Tall" },
    { nome: "Frankie Stein ", imagem: "../imagens/imagens bonecas/FrankieTall.jpg", genero: "Feminino", colecao: "Frightfully Tall" },
    { nome: "Elissabat ", imagem: "../imagens/imagens bonecas/ElissabatTall.jpg", genero: "Feminino", colecao: "Frightfully Tall" },

    // --- COLECÃO: MAUL MONSTERISTAS ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraMonsteristas.jpg", genero: "Feminino", colecao: "Maul Monsteristas" },
    { nome: "Gigi Grant", imagem: "../imagens/imagens bonecas/GigiMonsteristas.jpg", genero: "Feminino", colecao: "Maul Monsteristas" },
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraMonsteristas.jpg", genero: "Feminino", colecao: "Maul Monsteristas" },
    { nome: "Invisi Billy", imagem: "../imagens/imagens bonecas/InvisiMonsteristas.jpg", genero: "Masculino", colecao: "Maul Monsteristas" },
    { nome: "Clawdeen Wolf ", imagem: "../imagens/imagens bonecas/ClawdeenMonsteristas.jpg", genero: "Feminino", colecao: "Maul Monsteristas" },

    // --- COLECÃO: LOVE'S NOT DEAD ---
    { nome: "Slo Mo ", imagem: "../imagens/imagens bonecas/SloMoLovesNotDead.jpg", genero: "Masculino", colecao: "Love's Not Dead" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaLovesNotDead.jpg", genero: "Feminino", colecao: "Love's Not Dead" },

    // --- COLECÃO: SCARE & MAKEUP ---
    { nome: "Clawdeen Wolf ", imagem: "../imagens/imagens bonecas/ClawdeencareMakeup.jpg", genero: "Feminino", colecao: "Scare & Makeup" },
    { nome: "Viperine Gorgon", imagem: "../imagens/imagens bonecas/ViperinecareMakeup.jpg", genero: "Feminino", colecao: "Scare & Makeup" },

    // --- COLECÃO: BRAND-BOO STUDENTS ---
    { nome: "Isi Dawndancer", imagem: "../imagens/imagens bonecas/IsirandBoo.jpg", genero: "Feminino", colecao: "Brand-Boo Students" },
    { nome: "Batsy Claro", imagem: "../imagens/imagens bonecas/BatsyrandBoo.jpg", genero: "Feminino", colecao: "Brand-Boo Students" },
    { nome: "Kjersti Trollson", imagem: "../imagens/imagens bonecas/KjerstirandBoo.jpg", genero: "Feminino", colecao: "Brand-Boo Students" },

    // --- COLECÃO: GREAT SCARRIER REEF ---
    { nome: "Posea Reef", imagem: "../imagens/imagens bonecas/PoseaScarrier.jpg", genero: "Feminino", colecao: "Great Scarrier Reef" },
    { nome: "Kala Mer'ri", imagem: "../imagens/imagens bonecas/KalaScarrier.jpg", genero: "Feminino", colecao: "Great Scarrier Reef" },
    { nome: "Peri e Pearl Serpentine ", imagem: "../imagens/imagens bonecas/PeriPearlScarrier.jpg", genero: "Feminino", colecao: "Great Scarrier Reef" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaScarrier.jpg", genero: "Feminino", colecao: "Great Scarrier Reef" },
    { nome: "Toralei Stripe", imagem: "../imagens/imagens bonecas/ToraleiScarrier.jpg", genero: "Feminino", colecao: "Great Scarrier Reef" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieScarrier.jpg", genero: "Feminino", colecao: "Great Scarrier Reef" },
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraScarrier.jpg", genero: "Feminino", colecao: "Great Scarrier Reef" },
    { nome: "Clawdeen Wolf ", imagem: "../imagens/imagens bonecas/ClawdeenScarrier.jpg", genero: "Feminino", colecao: "Great Scarrier Reef" },
   
    // --- COLECÃO: GHOULS GETAWAY ---
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens bonecas/SpectraGetaway.jpg", genero: "Feminino", colecao: "Ghouls Getaway" },
    { nome: "Meowlody", imagem: "../imagens/imagens bonecas/MeowlodyGetaway.jpg", genero: "Feminino", colecao: "Ghouls Getaway" },
     { nome: "Jinafire Long", imagem: "../imagens/imagens bonecas/JinafireGetaway.jpg", genero: "Feminino", colecao: "Ghouls Getaway" },
    { nome: "Jane Boolittle", imagem: "../imagens/imagens bonecas/JaneGetaway.jpg", genero: "Feminino", colecao: "Ghouls Getaway" },
    { nome: "Elissabat", imagem: "../imagens/imagens bonecas/ElissabatGetaway.jpg", genero: "Feminino", colecao: "Ghouls Getaway" },


    // --- COLECÃO: FIERCE ROCKERS ---
    { nome: "Catty Noir", imagem: "../imagens/imagens bonecas/CattyireRockers.jpg", genero: "Feminino", colecao: "Fierce Rockers" },
    { nome: "Toralei Stripe ", imagem: "../imagens/imagens bonecas/ToraleiireRockers.jpg", genero: "Feminino", colecao: "Fierce Rockers" },
    { nome: "Jinafire Long", imagem: "../imagens/imagens bonecas/JinafireireRockers.jpg", genero: "Feminino", colecao: "Fierce Rockers" },
     { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenireRockers.jpg", genero: "Feminino", colecao: "Fierce Rockers" },
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens bonecas/VenusireRockers.jpg", genero: "Feminino", colecao: "Fierce Rockers" },

    // --- COLECÃO: BUDGET BASIC ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraBudgetBasic.jpg", genero: "Feminino", colecao: "Budget Basic" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenBudgetBasic.jpg", genero: "Feminino", colecao: "Budget Basic" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieBudgetBasic.jpg", genero: "Feminino", colecao: "Budget Basic" },
    { nome: "Gigi Grant", imagem: "../imagens/imagens bonecas/GigiBudgetBasic.jpg", genero: "Feminino", colecao: "Budget Basic" },

    // --- COLECÃO: BUDGET SLEEPOVER ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraBudgetSleep.jpg", genero: "Feminino", colecao: "Budget Sleepover" },
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens bonecas/ClawdeenBudgetSleep.jpg", genero: "Feminino", colecao: "Budget Sleepover" },
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieBudgetSleep.jpg", genero: "Feminino", colecao: "Budget Sleepover" },

    // --- COLECÃO: DESIGNER BOOO-TIQUE ---
    { nome: "Frankie Stein", imagem: "../imagens/imagens bonecas/FrankieBoooTique.jpg", genero: "Feminino", colecao: "Designer Booo-Tique" },

    // --- COLECÃO: BEAST BITES CAFÉ ---
    { nome: "Draculaura ", imagem: "../imagens/imagens bonecas/DraculauraCafe.jpg", genero: "Feminino", colecao: "Beast Bites Café" },

    // --- COLECÃO: SELF-STANDING SIGNATURE ---
    { nome: "C.A. Cupid", imagem: "../imagens/imagens bonecas/CupidSelfStanding.jpg", genero: "Feminino", colecao: "Self-standing Signature" },
    { nome: "Diretora Sem Cabeça", imagem: "../imagens/imagens bonecas/DiretoraSelfStanding.jpg", genero: "Feminino", colecao: "Self-standing Signature" },
    { nome: "Nightmare ", imagem: "../imagens/imagens bonecas/NightmareSelfStanding.jpg", genero: "Feminino", colecao: "Self-standing Signature" },
    { nome: "Catty Noir", imagem: "../imagens/imagens bonecas/CattySelfStanding.jpg", genero: "Feminino", colecao: "Self-standing Signature" },
    { nome: "Jane Boolittle", imagem: "../imagens/imagens bonecas/JaneSelfStanding.jpg", genero: "Feminino", colecao: "Self-standing Signature" },
    { nome: "Casta Fierce", imagem: "../imagens/imagens bonecas/CastaSelfStanding.jpg", genero: "Feminino", colecao: "Self-standing Signature" },
    { nome: "Amanita Nightshade", imagem: "../imagens/imagens bonecas/AmanitaSelfStanding.jpg", genero: "Feminino", colecao: "Self-standing Signature" },
    { nome: "Finnegan Wake", imagem: "../imagens/imagens bonecas/FinneganSelfStanding.jpg", genero: "Masculino", colecao: "Self-standing Signature" },

    // --- COLECÃO: POWDER ROOM ---
    { nome: "Draculaura (Playset Powder Room)", imagem: "../imagens/imagens bonecas/DraculauraPowder.jpg", genero: "Feminino", colecao: "Powder Room" },

    // --- COLECÃO: SCOOTER ---
    { nome: "Ghoulia Yelps (Veículo Scooter)", imagem: "../imagens/imagens bonecas/GhouliaScooter.jpg", genero: "Feminino", colecao: "Scooter" },

    // --- COLECÃO: COFFIN BEAN ---
    { nome: "Clawdeen Wolf (Playset Coffin Bean)", imagem: "../imagens/imagens bonecas/ClawdeenCoffin.jpg", genero: "Feminino", colecao: "Coffin Bean" },
    { nome: "Draculaura (Playset Coffin Bean)", imagem: "../imagens/imagens bonecas/DraculauraCoffin.jpg", genero: "Feminino", colecao: "Coffin Bean" },

    // --- COLECÃO: ROADSTER ---
    { nome: "Draculaura (Veículo Roadster)", imagem: "../imagens/imagens bonecas/DraculauraRoadster.jpg", genero: "Feminino", colecao: "Roadster" },

    // --- COLECÃO: DIE-NER ---
    { nome: "Draculaura", imagem: "../imagens/imagens bonecas/DraculauraDieNer.jpg", genero: "Feminino", colecao: "Die-Ner" },
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaDieNer.jpg", genero: "Feminino", colecao: "Die-Ner" },

    // --- COLECÃO: THE DRACULOCKER ---
    { nome: "Draculaura (Playset The Draculocker)", imagem: "../imagens/imagens bonecas/DraculauraLocker.jpg", genero: "Feminino", colecao: "The Draculocker" },

    // --- COLECÃO: BOO-RIGINAL CREEPRODUCTIONS ---
    { nome: "Frankie Stein ", imagem: "../imagens/imagens bonecas/FrankieCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Draculaura ", imagem: "../imagens/imagens bonecas/DraculauraCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Clawdeen Wolf ", imagem: "../imagens/imagens bonecas/ClawdeenCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Lagoona Blue", imagem: "../imagens/imagens bonecas/LagoonaCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Cleo de Nile ", imagem: "../imagens/imagens bonecas/CleoCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Deuce Gorgon ", imagem: "../imagens/imagens bonecas/DeuceCreeproduction.jpg", genero: "Masculino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens bonecas/GhouliaCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Abbey Bominable ", imagem: "../imagens/imagens bonecas/AbbeyCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Spectra Vondergeist ", imagem: "../imagens/imagens bonecas/SpectraCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Operetta", imagem: "../imagens/imagens bonecas/OperettaCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Toralei Stripe", imagem: "../imagens/imagens bonecas/ToraleiCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Meowlody", imagem: "../imagens/imagens bonecas/MeowlodyCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Purrsephone", imagem: "../imagens/imagens bonecas/PurrsephoneCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Robecca Steam", imagem: "../imagens/imagens bonecas/RobeccaCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Rochelle Goyle", imagem: "../imagens/imagens bonecas/RochelleCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },
    { nome: "Venus Mcflytrap", imagem: "../imagens/imagens bonecas/VenusCreeproduction.jpg", genero: "Feminino", colecao: "Boo-Riginal Creeproductions" },

    // --- COLECÃO: REEL DRAMA ---
    { nome: "Draculaura ", imagem: "../imagens/imagens bonecas/DraculauraReelDrama.jpg", genero: "Feminino", colecao: "Reel Drama" },
    { nome: "Frankie Stein ", imagem: "../imagens/imagens bonecas/FrankieReelDrama.jpg", genero: "Feminino", colecao: "Reel Drama" },
    { nome: "Clawdeen Wolf ", imagem: "../imagens/imagens bonecas/ClawdeenReelDrama.jpg", genero: "Feminino", colecao: "Reel Drama" },
    { nome: "Lagoona Blue ", imagem: "../imagens/imagens bonecas/LagoonaReelDrama.jpg", genero: "Feminino", colecao: "Reel Drama" },
    {nome: "Cleo de Nile ", imagem: "../imagens/imagens bonecas/CleoReelDrama.jpg", genero: "Feminino", colecao: "Reel Drama" },

    // ==========================================
    // 1. COLEÇÃO: COLLECTORS EDITION
    // ==========================================
    { nome: "Draculaura (2015)", imagem: "../imagens/imagens bonecas/DraculauraCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Skelita Calaveras (2016)", imagem: "../imagens/imagens bonecas/SkelitaCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Abbey Bominable (2017)", imagem: "../imagens/imagens bonecas/AbbeyCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Cleo de Nile - Pack (2017)", imagem: "../imagens/imagens bonecas/CleoCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Ghoulia Yelps - Pack (2017)", imagem: "../imagens/imagens bonecas/GhouliaCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Draculaura - Vampire Heart (2023)", imagem: "../imagens/imagens bonecas/DraculauraCollectors2.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Frankie Stein - Stitched in Style (2023)", imagem: "../imagens/imagens bonecas/FrankieCollectors2.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Cleo de Nile - Mummy Majesties (2024)", imagem: "../imagens/imagens bonecas/CleoCollectors2.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Nefera de Nile - Mummy Majesties (2024)", imagem: "../imagens/imagens bonecas/NeferaCollectors2.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Venus McFlytrap (2025)", imagem: "../imagens/imagens bonecas/VenusCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Clawdeen Wolf - House of Wolf (2025)", imagem: "../imagens/imagens bonecas/ClawdeenCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Frankie Stein - MH x Barbie (2025)", imagem: "../imagens/imagens bonecas/FrankieCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Scarah Screams (2026)", imagem: "../imagens/imagens bonecas/ScarahCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "Skeletor - MH x MOTU (2026)", imagem: "../imagens/imagens bonecas/SkeletorCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    { nome: "River Styxx (2026)", imagem: "../imagens/imagens bonecas/RiverCollectors.jpg", genero: "Feminino", colecao: "Collectors Edition" },
    
    // Linha Haunt Couture
    { nome: "Clawdeen Wolf - Haunt Couture (2022)", imagem: "../imagens/imagens bonecas/ClawdeenHauntCouture2022.jpg", genero: "Feminino", colecao: "Haunt Couture" },
    { nome: "Draculaura - Haunt Couture (2022)", imagem: "../imagens/imagens bonecas/DraculauraHauntCouture2022.jpg", genero: "Feminino", colecao: "Haunt Couture" },
    { nome: "Frankie Stein - Haunt Couture (2022)", imagem: "../imagens/imagens bonecas/FrankieHauntCouture2022.jpg", genero: "Feminino", colecao: "Haunt Couture" },
    { nome: "Cleo de Nile - Haunt Couture (2022)", imagem: "../imagens/imagens bonecas/CleoHauntCouture2022.jpg", genero: "Feminino", colecao: "Haunt Couture" },
    { nome: "Lagoona Blue - Haunt Couture (2022)", imagem: "../imagens/imagens bonecas/LagoonaHauntCouture2022.jpg", genero: "Feminino", colecao: "Haunt Couture" },
    { nome: "Frankie Stein - Midnight Runway (2023)", imagem: "../imagens/imagens bonecas/FrankieMidnightRunway2023.jpg", genero: "Feminino", colecao: "Midnight Runway" },
    { nome: "Cleo de Nile - Midnight Runway (2023)", imagem: "../imagens/imagens bonecas/CleoMidnightRunway2023.jpg", genero: "Feminino", colecao: "Midnight Runway" },
    { nome: "Spectra Vondergeist - Midnight Runway (2023)", imagem: "../imagens/imagens bonecas/SpectraMidnightRunway2023.jpg", genero: "Feminino", colecao: "Midnight Runway" },
    
    // Linha Howliday & Comemorativas
    { nome: "Draculaura - Howliday Winter (2022)", imagem: "../imagens/imagens bonecas/DraculauraHowliday.jpg", genero: "Feminino", colecao: "Howliday" },
    { nome: "Cleo de Nile - Howliday Love (2023)", imagem: "../imagens/imagens bonecas/CleoHowliday.jpg", genero: "Feminino", colecao: "Howliday" },
    { nome: "Deuce Gorgon - Howliday Love (2023)", imagem: "../imagens/imagens bonecas/DeuceHowliday.jpg", genero: "Masculino", colecao: "Howliday" },
    { nome: "Clawdeen Wolf - Howliday Winter (2023)", imagem: "../imagens/imagens bonecas/ClawdeenHowliday.jpg", genero: "Feminino", colecao: "Howliday" },
    { nome: "Skelita Calaveras - Howliday Dia de Muertos (2023)", imagem: "../imagens/imagens bonecas/SkelitaHowliday.jpg", genero: "Feminino", colecao: "Howliday" },
    { nome: "Clawd Wolf - Howliday Love (2024)", imagem: "../imagens/imagens bonecas/ClawdHowliday.jpg", genero: "Masculino", colecao: "Howliday" },
    { nome: "Draculaura - Howliday Love (2024)", imagem: "../imagens/imagens bonecas/DraculauraHowliday2.jpg", genero: "Feminino", colecao: "Howliday" },
    { nome: "Skelita Calaveras - Howliday Dia de Muertos (2024)", imagem: "../imagens/imagens bonecas/SkelitaHowliday2.jpg", genero: "Feminino", colecao: "Howliday" },
    { nome: "Cleo de Nile - Howliday Gala (2024)", imagem: "../imagens/imagens bonecas/CleoHowliday2.jpg", genero: "Feminino", colecao: "Howliday" },
    

    // Exclusivas Mattel Creations, Fang Vote & Off-White
    { nome: "Ghoulia Yelps - Ghouluxe (2023)", imagem: "../imagens/imagens bonecas/GhouliaMattelcreations.jpg", genero: "Feminino", colecao: "Mattelcreations" },
    { nome: "Operetta - Outta Fright (2024)", imagem: "../imagens/imagens bonecas/Operettaattelcreations.jpg", genero: "Feminino", colecao: "Mattelcreations" },
    { nome: "Rochelle Goyle - (2023)", imagem: "../imagens/imagens bonecas/RochelleFangVote.jpg", genero: "Feminino", colecao: "Fang Vote" },
    { nome: "Jinafire Long - (2024)", imagem: "../imagens/imagens bonecas/JinafireFangVote.jpg", genero: "Feminino", colecao: "Fang Vote" },
  //  { nome: "Electra Melody - (2023)", imagem: "../imagens/imagens bonecas/ElectraOffWhite2023.jpg", genero: "Feminino", colecao: "Off-White" },
   // { nome: "Harmonie Ghoul - (2023)", imagem: "../imagens/imagens bonecas/HarmonieOffWhite2023.jpg", genero: "Feminino", colecao: "Off-White" },
   // { nome: "Raven Rhapsody - (2023)", imagem: "../imagens/imagens bonecas/RavenOffWhite2023.jpg", genero: "Feminino", colecao: "Off-White" },
  //  { nome: "Symphanee Midnight - (2023)", imagem: "../imagens/imagens bonecas/SymphaneeOffWhite2023.jpg", genero: "Feminino", colecao: "Off-White" },

    // ==========================================
    // 2. COLEÇÃO: SDCC (SAN DIEGO COMIC CON)
    // ==========================================
    { nome: "Frankie Stein B&W (SDCC 2010)", imagem: "../imagens/imagens bonecas/FrankieSDCC.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Ghoulia Yelps - Dead Fast (SDCC 2011)", imagem: "../imagens/imagens bonecas/GhouliaSDCC.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Hoodude Voodoo (SDCC 2012)", imagem: "../imagens/imagens bonecas/HoodudeSDCC.jpg", genero: "Masculino", colecao: "SDCC" },
    { nome: "Scarah Screams (SDCC 2012)", imagem: "../imagens/imagens bonecas/ScarahSDCC.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Wydowna Spider - Webarella (SDCC 2013)", imagem: "../imagens/imagens bonecas/WydownaSDCC.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Manny Taur (SDCC 2014)", imagem: "../imagens/imagens bonecas/MannySDCC.jpg", genero: "Masculino", colecao: "SDCC" },
    { nome: "Iris Clops (SDCC 2014)", imagem: "../imagens/imagens bonecas/IrisSDCC.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Djinni 'Whisp' Grant (SDCC 2015)", imagem: "../imagens/imagens bonecas/WhispSDCC.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Kieran Valentine (SDCC 2015)", imagem: "../imagens/imagens bonecas/KieranSDCC.jpg", genero: "Masculino", colecao: "SDCC" },
    { nome: "Hexiciah Steam (SDCC 2016)", imagem: "../imagens/imagens bonecas/HexiciahSDCC.jpg", genero: "Masculino", colecao: "SDCC" },
    { nome: "Robecca Steam (SDCC 2016)", imagem: "../imagens/imagens bonecas/RobeccaSDCC.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Frankie Stein - Ghostbusters (SDCC 2016)", imagem: "../imagens/imagens bonecas/FrankieSDCC2.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Frankie Stein - Voltageous B&W (SDCC 2022)", imagem: "../imagens/imagens bonecas/FrankieSDCC3.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Draculaura - Freak Du Chic (SDCC 2023)", imagem: "../imagens/imagens bonecas/DraculauraSDCC2.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Ghoulia Yelps - Deadfast (SDCC 2024)", imagem: "../imagens/imagens bonecas/GhouliaSDCC2.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Twyla - Sweet Screams (SDCC 2025)", imagem: "../imagens/imagens bonecas/TwylaSDCC.jpg", genero: "Feminino", colecao: "SDCC" },
    { nome: "Elvira Mistress of the Dark (SDCC 2025)", imagem: "../imagens/imagens bonecas/ElviraSDCC.jpg", genero: "Feminino", colecao: "SDCC" },
     { nome: "Kieran Valentine (2026) ", imagem: "../imagens/imagens bonecas/kieranpack.png", genero: "Feminino", colecao: "Monster High Pride" },
    { nome: "Spelldon Cauldronello (2026)", imagem: "../imagens/imagens bonecas/Spelldon.jpg", genero: "Feminino", colecao: "Monster High Pride" },

    // ==========================================
    // 3. COLEÇÃO: HORROR MOVIE DOLLS (SKULLECTOR)
    // ==========================================
   // { nome: "IT Pennywise (2020)", imagem: "../imagens/imagens bonecas/PennywiseeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Grady Twins - The Shining  (2020)", imagem: "../imagens/imagens bonecas/TheShiningeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Beetlejuice (2021)", imagem: "../imagens/imagens bonecas/BeetlejuiceeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Lydia Deetz (2021)", imagem: "../imagens/imagens bonecas/LydiaHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
  //  { nome: "Greta Gremlin (2021)", imagem: "../imagens/imagens bonecas/GretaHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
  //  { nome: "Dracula (2022)", imagem: "../imagens/imagens bonecas/DraculaHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Frankenstein (2022)", imagem: "../imagens/imagens bonecas/FrankesteinHorrorMovie.jpg", genero: "Masculino", colecao: "Horror Movie Dolls" },
   // { nome: "Bride of Frankenstein (2022)", imagem: "../imagens/imagens bonecas/TheBrideHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Elvira Mistress of the Dark (2023)", imagem: "../imagens/imagens bonecas/ElviraHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Chucky (2023)", imagem: "../imagens/imagens bonecas/ChuckyeHorrorMovie.jpg", genero: "Masculino", colecao: "Horror Movie Dolls" },
   // { nome: "Tiffany (2023)", imagem: "../imagens/imagens bonecas/TiffanyeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Annabelle (2023)", imagem: "../imagens/imagens bonecas/AnnabelleHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Jack Skellington (2023)", imagem: "../imagens/imagens bonecas/JackHorrorMovie.jpg", genero: "Masculino", colecao: "Horror Movie Dolls" },
   // { nome: "Sally (2023)", imagem: "../imagens/imagens bonecas/SallyHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
  //  { nome: "Creature From The Black Lagoon (2024)", imagem: "../imagens/imagens bonecas/CreatureBlackLagooneHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
  //  { nome: "Morticia Addams (2024)", imagem: "../imagens/imagens bonecas/MorticiaAddamseHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Wednesday Addams (2024)", imagem: "../imagens/imagens bonecas/WednesdayAddamseHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Mischievous Mary - Hocus Pocus (2024)", imagem: "../imagens/imagens bonecas/MaryeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Scheming Sarah - Hocus Pocus (2024)", imagem: "../imagens/imagens bonecas/SaraheHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Wicked Winifred - Hocus Pocus (2024)", imagem: "../imagens/imagens bonecas/WinifredeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Young-Hee - Squid Game (2024)", imagem: "../imagens/imagens bonecas/YoungHeeeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Beetlejuice (2025)", imagem: "../imagens/imagens bonecas/BeetlejuiceHorrorMovie2.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Lydia Deetz (2025)", imagem: "../imagens/imagens bonecas/LydiaeHorrorMovie2.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "David - The Lost Boys (2025)", imagem: "../imagens/imagens bonecas/LostBoyseHorrorMovie.jpg", genero: "Masculino", colecao: "Horror Movie Dolls" },
   // { nome: "M3GAN (2025)", imagem: "../imagens/imagens bonecas/M3GANHeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Elvira Mistress of the Dark (2025)", imagem: "../imagens/imagens bonecas/ElviraeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
    //{ nome: "Emily - Corpse Bride (2025)", imagem: "../imagens/imagens bonecas/EmilyeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
    //{ nome: "Adelaide Wilson - Us (2025)", imagem: "../imagens/imagens bonecas/AdelaideeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Red - Us (2025)", imagem: "../imagens/imagens bonecas/RedeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Xenomorph - Alien (2025)", imagem: "../imagens/imagens bonecas/XenomorpheHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Edward Scissorhands (2025)", imagem: "../imagens/imagens bonecas/EdwardeHorrorMovie.jpg", genero: "Masculino", colecao: "Horror Movie Dolls" },
   // { nome: "Magician's Assistant - Beetlejuice (2026)", imagem: "../imagens/imagens bonecas/AssistanteHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Miss Argentina - Beetlejuice (2026)", imagem: "../imagens/imagens bonecas/MissArgentinaeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },
   // { nome: "Coraline (2026)", imagem: "../imagens/imagens bonecas/CoralineeHorrorMovie.jpg", genero: "Feminino", colecao: "Horror Movie Dolls" },

    //Designer Series Skullebrity//

   // { nome: "Lenore Loomington (2024)", imagem: "../imagens/imagens bonecas/LenoreHorrorMovie.jpg", genero: "Feminino", colecao: "Designer Series" },
   // { nome: "Corazon Marikit (2025)", imagem: "../imagens/imagens bonecas/CorazonMarikitHorrorMovie.jpg", genero: "Masculino", colecao: "Designer Series" },
   // { nome: "RuPaul Dragon Queen(2024)", imagem: "../imagens/imagens bonecas/RuPaulDragonQueen.jpg", genero: "Feminino", colecao: "Skullebrity" },
   // { nome: "Witch Weaver Harris Reed (2024)", imagem: "../imagens/imagens bonecas/WitchWeaverHarrisReed.jpg", genero: "Feminino", colecao: "Skullebrity" },

    //Monster High x Wednesday//
 
  // { nome: "Wednesday Addams (2024)", imagem: "../imagens/imagens bonecas/WednesdayAddamsMHxWednesday.jpg", genero: "Feminino", colecao: "Monster High x Wednesday" },
  //  { nome: "Morticia Addams (2026)", imagem: "../imagens/imagens bonecas/MorticiaAddamsMHxWednesday2.jpg", genero: "Feminino", colecao: "Monster High x Wednesday" },
   // { nome: "Enid Sinclair (2024)", imagem: "../imagens/imagens bonecas/EnidSinclairMHxWednesday.jpg", genero: "Feminino", colecao: "Monster High x Wednesday" },
   // { nome: "Bianca Barclay(2025)", imagem: "../imagens/imagens bonecas/BiancaMHxWednesday.jpg", genero: "Masculino", colecao: "Monster High x Wednesday" },
   // { nome: "Wednesday Addams - Rave'n (2024)", imagem: "../imagens/imagens bonecas/WednesdayAddamsRaveMHxWednesday.jpg", genero: "Masculino", colecao: "Monster High x Wednesday" },

]; 

const container = document.getElementById('lista-bonecas');
const busca = document.getElementById('campo-busca');
const selectCategoria = document.getElementById('filtro-categoria');
const selectNomes = document.getElementById('filtro-nomes');
const selectColecoes = document.getElementById('filtro-colecoes');
const selectStatus = document.getElementById('filtro-status');

document.addEventListener("DOMContentLoaded", () => {
    // 1. Pega o termo de busca enviado pela URL (Ex: ?busca=DRACULAURA)
    const parametros = new URLSearchParams(window.location.search);
    const termoEnviado = parametros.get('busca');

    // 2. Se veio um termo e o seu input 'busca' existe na página
    if (termoEnviado && busca) {
        // Injeta o nome da monstrinha direto no seu campo-busca
        busca.value = termoEnviado.trim();
    }
    
    // Configura os filtros baseado nos parâmetros da URL ao carregar a página inicialmente
    configurarFiltrosIniciaisPorUrl();
    
    // Executa a renderização inicial
    aplicarFiltrosCombinados();
});

function renderizar(lista) {
    if (!container) return;
    
    const htmlCards = lista.map(b => {
        const bonecaId = b.id || `${b.nome}-${b.colecao}`.replace(/\s+/g, '-').toLowerCase();

        return `
        <div class="perso-card" data-id="${bonecaId}" data-foto="${b.imagem}">
            <div class="perso-img-container">
                <img src="${b.imagem}" alt="${b.nome} ${b.colecao}" loading="lazy">
            </div>
            
            <div class="perso-acoes-card">
                <button class="btn-acao btn-check" title="Marcar como 'Tenho na coleção'">
                    <svg viewBox="0 0 24 24" class="icone-vetor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </button>
                <button class="btn-acao btn-favorito" title="Adicionar aos favoritos">
                    <svg viewBox="0 0 24 24" class="icone-vetor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
            </div>

            <h3 class="perso-nome link-filtro-nome" data-nome="${b.nome.trim().split(" ")[0]}" title="Filtrar por esta personagem" style="cursor: pointer;">${b.nome}</h3>
            <p class="perso-colecao link-filtro-colecao" data-colecao="${b.colecao}" style="font-size: 0.85rem; opacity: 0.6; margin-top: 4px; cursor: pointer;" title="Filtrar por esta coleção">${b.colecao}</p>
            
            <a href="#" class="perso-link">Explorar</a>
        </div>
        `;
    }).join('');
    container.innerHTML = htmlCards; 
    
    atualizarEstadoVisualBotoes();
    observarCards();
}

function observarCards() {
    const cards = document.querySelectorAll('.perso-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
                setTimeout(() => {
                    entry.target.classList.add('visivel');
                }, index * 30); 
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.01 
    });

    cards.forEach(card => observer.observe(card));
}

function atualizarContador(quantidade) {
    const contador = document.getElementById("contador-resultados");
    if (contador) {
        contador.innerText = `${quantidade} ${quantidade === 1 ? 'boneca encontrada' : 'bonecas encontradas'}`;
    }
}

function aplicarFiltrosCombinados() {
    const categoria = selectCategoria ? selectCategoria.value : 'todos';
    const statusSelecionado = selectStatus ? selectStatus.value : 'todos';
    const nomeSelecionado = selectNomes ? selectNomes.value : 'todos';
    const colecaoSelecionada = selectColecoes ? selectColecoes.value : 'todos';
    const termoBusca = busca ? busca.value.trim().toLowerCase() : '';

    let filtrados = [...bonecas];

    // 1. Filtro por caixa de Texto (Busca)
    if (termoBusca) {
        filtrados = filtrados.filter(b => 
            b.nome.toLowerCase().includes(termoBusca) || 
            b.colecao.toLowerCase().includes(termoBusca)
        );
    }

    // 2. Filtro por Nome da Personagem
    if (nomeSelecionado !== "todos") {
        filtrados = filtrados.filter(b => b.nome.trim().split(" ")[0] === nomeSelecionado);
    }

    // 3. Filtro por Nome da Coleção
    if (colecaoSelecionada !== "todos") {
        filtrados = filtrados.filter(b => b.colecao === colecaoSelecionada);
    }

    // 4. Filtro por Gênero (Feminino / Masculino)
    if (categoria === "femininos") {
        filtrados = filtrados.filter(b => b.genero === "Feminino"); 
    } else if (categoria === "masculinos") {
        filtrados = filtrados.filter(b => b.genero === "Masculino");
    }

    // 5. Filtro de Status (Checklist / Wishlist) baseado na foto
    if (statusSelecionado === "checklist") {
        const obtidas = JSON.parse(localStorage.getItem('mh-obtidas')) || [];
        filtrados = filtrados.filter(b => {
            const nomeArquivo = b.imagem.split('/').pop();
            return obtidas.includes(nomeArquivo);
        });
    } else if (statusSelecionado === "wishlist") {
        const favoritos = JSON.parse(localStorage.getItem('mh-favoritos')) || [];
        filtrados = filtrados.filter(b => {
            const nomeArquivo = b.imagem.split('/').pop();
            return favoritos.includes(nomeArquivo);
        });
    }

    // 6. Filtros de Ordenação Alfabética
    if (categoria === "a-z") {
        filtrados.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (categoria === "z-a") {
        filtrados.sort((a, b) => b.nome.localeCompare(a.nome));
    }

    renderizar(filtrados);
    atualizarContador(filtrados.length);
}

function filtrarPorCategoria(valor) { aplicarFiltrosCombinados(); }
function filtrarPorColecao(valor) { aplicarFiltrosCombinados(); }
function filtrarPorNome(valor) { aplicarFiltrosCombinados(); }

function gerarFiltrosDeColecoes() {
    if (!selectColecoes) return;
    const colecoesFiltro = bonecas.map(b => b.colecao).filter(Boolean);
    const colecoesUnicas = [...new Set(colecoesFiltro)].sort(); 

    colecoesUnicas.forEach(col => {
        selectColecoes.innerHTML += `<option value="${col}">${col}</option>`;
    });
}

function gerarFiltrosDeNomes() {
    if (!selectNomes) return;
    const rolesFiltro = bonecas.map(b => b.nome.trim().split(" ")[0]);
    const nomesUnicos = [...new Set(rolesFiltro)].sort();

    nomesUnicos.forEach(nome => {
        selectNomes.innerHTML += `<option value="${nome}">${nome}</option>`;
    });
}

// ==========================================
// MONITORAMENTO DOS EVENTOS DE INTERAÇÃO (Botoes e Inputs)
// ==========================================

if (busca) {
    busca.addEventListener('input', () => {
        aplicarFiltrosCombinados();
        atualizarUrlFiltros();
    });
}

if (selectCategoria) {
    selectCategoria.addEventListener('change', () => {
        aplicarFiltrosCombinados();
        atualizarUrlFiltros();
    });
}

if (selectNomes) {
    selectNomes.addEventListener('change', () => {
        aplicarFiltrosCombinados();
        atualizarUrlFiltros();
    });
}

if (selectColecoes) {
    selectColecoes.addEventListener('change', () => {
        aplicarFiltrosCombinados();
        atualizarUrlFiltros();
    });
}

if (selectStatus) {
    selectStatus.addEventListener('change', () => {
        aplicarFiltrosCombinados();
        atualizarUrlFiltros();
    });
}

const btnAbrir = document.querySelector('.btn-menu-unico');
const btnFechar = document.querySelector('.btn-fechar');
const overlay = document.querySelector('.menu-overlay');

if (btnAbrir && btnFechar && overlay) {
    btnAbrir.addEventListener('click', () => {
        overlay.classList.add('aberto');
        document.body.style.overflow = 'hidden'; 
    });

    btnFechar.addEventListener('click', () => {
        overlay.classList.remove('aberto');
        document.body.style.overflow = 'auto'; 
    });
}

if (container) {
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('link-filtro-nome')) {
            const primeiroNome = e.target.getAttribute('data-nome');
            if (selectNomes) {
                selectNomes.value = primeiroNome;
                aplicarFiltrosCombinados();
                atualizarUrlFiltros();
                document.querySelector('.perso-secao').scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }
        
        if (e.target.classList.contains('link-filtro-colecao')) {
            const colecaoClicada = e.target.getAttribute('data-colecao');
            if (selectColecoes) {
                selectColecoes.value = colecaoClicada;
                aplicarFiltrosCombinados();
                atualizarUrlFiltros();
                document.querySelector('.perso-secao').scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        const btn = e.target.closest('.btn-acao');
        if (!btn) return;

        e.preventDefault();
        const card = btn.closest('.perso-card');
        
        const caminhoImagem = card.getAttribute('data-foto') || '';
        const nomeArquivo = caminhoImagem.split('/').pop();

        if (btn.classList.contains('btn-check')) {
            let obtidas = JSON.parse(localStorage.getItem('mh-obtidas')) || [];
            if (obtidas.includes(nomeArquivo)) {
                obtidas = obtidas.filter(id => id !== nomeArquivo);
                btn.classList.remove('ativo');
            } else {
                obtidas.push(nomeArquivo);
                btn.classList.add('ativo');
            }
            localStorage.setItem('mh-obtidas', JSON.stringify(obtidas));
            
            if (selectStatus && selectStatus.value === "checklist") {
                aplicarFiltrosCombinados();
            }
        }

        if (btn.classList.contains('btn-favorito')) {
            let favoritos = JSON.parse(localStorage.getItem('mh-favoritos')) || [];
            if (favoritos.includes(nomeArquivo)) {
                favoritos = favoritos.filter(id => id !== nomeArquivo);
                btn.classList.remove('ativo');
            } else {
                favoritos.push(nomeArquivo);
                btn.classList.add('ativo');
            }
            localStorage.setItem('mh-favoritos', JSON.stringify(favoritos));
            
            if (selectStatus && selectStatus.value === "wishlist") {
                aplicarFiltrosCombinados();
            }
        }
    });
}

function atualizarEstadoVisualBotoes() {
    const obtidas = JSON.parse(localStorage.getItem('mh-obtidas')) || [];
    const favoritos = JSON.parse(localStorage.getItem('mh-favoritos')) || [];

    document.querySelectorAll('.perso-card').forEach(card => {
        const caminhoImagem = card.getAttribute('data-foto') || '';
        const nomeArquivo = caminhoImagem.split('/').pop();
        
        const btnCheck = card.querySelector('.btn-check');
        const btnFav = card.querySelector('.btn-favorito');

        if (btnCheck) {
            if (obtidas.includes(nomeArquivo)) {
                btnCheck.classList.add('ativo');
            } else {
                btnCheck.classList.remove('ativo');
            }
        }
        
        if (btnFav) {
            if (favoritos.includes(nomeArquivo)) {
                btnFav.classList.add('ativo');
            } else {
                btnFav.classList.remove('ativo');
            }
        }
    });
}

// ==========================================
// FUNÇÕES DE GERENCIAMENTO DE HISTÓRICO E URL
// ==========================================

function atualizarUrlFiltros() {
    const parametros = new URLSearchParams();

    if (busca && busca.value.trim() !== "") {
        parametros.set('busca', busca.value.trim());
    }
    if (selectCategoria && selectCategoria.value !== "todos") {
        parametros.set('categoria', selectCategoria.value);
    }
    if (selectColecoes && selectColecoes.value !== "todos") {
        parametros.set('colecao', selectColecoes.value);
    }
    if (selectNomes && selectNomes.value !== "todos") {
        parametros.set('personagem', selectNomes.value);
    }
    if (selectStatus && selectStatus.value !== "todos") {
        parametros.set('status', selectStatus.value);
    }

    const queryStr = parametros.toString();
    const novaUrl = `${window.location.pathname}${queryStr ? '?' + queryStr : ''}`;

    window.history.pushState({ estadoFiltros: true }, '', novaUrl);
}

function configurarFiltrosIniciaisPorUrl() {
    const parametros = new URLSearchParams(window.location.search);
    
    if (busca) busca.value = parametros.get('busca') || '';
    if (selectCategoria) selectCategoria.value = parametros.get('categoria') || 'todos';
    if (selectColecoes) selectColecoes.value = parametros.get('colecao') || 'todos';
    if (selectNomes) selectNomes.value = parametros.get('personagem') || 'todos';
    if (selectStatus) selectStatus.value = parametros.get('status') || 'todos';
}

window.addEventListener('popstate', () => {
    configurarFiltrosIniciaisPorUrl();
    aplicarFiltrosCombinados();
});

// Execuções ao ler o Script
gerarFiltrosDeNomes();
gerarFiltrosDeColecoes(); 
aplicarFiltrosCombinados();