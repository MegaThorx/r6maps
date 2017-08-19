'use strict';

var R6MLangTerms = (function(undefined) {
  var terms = {},
    name = 'en',
    translations = {},
    englishTerms = {
      general: {
        pageTitle: 'R6Maps.com - {mapName}',
        pageTitleSelectMap: 'R6Maps.com - Select a map',
        pageTitleStart: 'R6Maps.com',
        cameraViewCaption: '{floorName} Camera View',
        shortcutTip: 'Shortcut: {shortcut}',
        menu: 'Menu',
        about: 'About',
        languageHeader: 'Language',
        optionsHeader: 'Options',
        labelLosOpacity: 'Camera line-of-sight opacity',
        linkAbout: 'about/about.html',
        labelPercent: '{int}%', // according to: (0.12).toLocaleString('en', { style: 'percent' });
        labelLosDefault: '(Default)',
        labelLos105: '(Huh?)',
        labelLos110: '(Ludicrous!)',
        labelRoomLabelStyle: 'Room label style',
        labelNumberFloorsToDisplay: 'Number of floors to display',
        lockPanning: 'Lock panning',
        lockZooming: 'Lock zooming',
        fullScreen: 'Full screen',
        enableScreenshots: 'Enable screenshots',
        contributions: 'Contributions',
        supportSiteNote: 'Please consider showing your support with a small donation. :)',
        donateImg: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
        latestUpdate: 'Feb 2017 updates',
        linkLatestUpdate: 'about/updates/2017-Feb/index.html'
      },
      sessions: {
        button: 'Sessions (BETA)'
      },
      roomLabelStyles: {
        Dark: 'Dark',
        Light: 'Light (Default)',
        DarkAndLarge: 'Large and Dark',
        LightAndLarge: 'Large and Light',
        DarkAndSmall: 'Small and Dark',
        LightAndSmall: 'Small and Light',
        DisplayNone: 'Turn Off'
      },
      floorDisplayOptions: {
        one: '1 - Full',
        two: '2 - Split',
        four: '4 - Grid'
      },
      selectMaps: {
        selectAMap: 'Select a map',
        homeLink: 'Select a map'
      },
      compass: {
        letterN: 'N',
        letterE: 'E',
        letterS: 'S',
        letterW: 'W'
      },
      languages: {
        en: 'English',
        de: 'Deutsch',
        fr: 'Français',
        ja: '日本語',
        kr: '한국어',
        mn: 'Монгол',
        pt: 'Português',
        ru: 'Русский',
        zh_cn: '简体中文',
        es: 'Español',
        pl: 'Polski'
      },
      floorNames: {
        basement: { full: 'Basement', short: 'B' },
        firstFloor: { full: '1st Floor', short: '1' },
        secondFloor: { full: '2nd Floor', short: '2' },
        thirdFloor: { full: '3rd Floor', short: '3' },
        fourthFloor: { full: '4th Floor', short: '4' },
        roof: { full: 'Roof', short: 'R' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: 'Bomb',
        hostageShort: 'H',
        hostage: 'Hostage',
        secureShort: 'S',
        secure: 'Secure',
        showAll: 'Show All'
      },
      legend: {
        breakableWalls: 'Breakable walls',
        breakableFloorTraps: 'Breakable floor traps',
        ceilingHatches: 'Ceiling hatches',
        lineOfSightWalls: 'Line of sight walls',
        lineOfSightFloors: 'Line of sight floors',
        droneTunnels: 'Drone tunnels',
        objectives: 'Objectives',
        insertionPoints: 'Insertion points',
        securityCameras: 'Security cameras',
        skylights: 'Skylights',
        onFloorAboveOrBelow: 'On floor above or below',
        cameraLineOfSight: 'Camera line of sight',
        ladders: 'Ladders'
      },
      spawnPoints: {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        e: 'E'
      },
      stats: {
        title: 'R6Maps.com - Stats',
        titleBeta: 'R6Maps.com - Stats BETA',
        headerMain: 'Stats',
        headerMainBeta: 'Stats BETA',
        headerFilters: 'Filters',
        headerMap: 'Map Stats',
        headerOperators: 'Operators',
        headerAboutAndOptions: 'About/Options',
        labelSeason: 'Season',
        labelPlatform: 'Platform',
        labelMap: 'Map',
        labelGameMode: 'Game Mode',
        labelObjectiveLocation: 'Location',
        labelSkillRanks: 'Rank filters',
        allOption: 'All',
        seasonWithNumber: 'Season {0}',
        objectiveRoomDivider: ' / ',
        ellipsis: '...',
        loadButtonText: 'Load Stats',
        averageRoundLength: 'Average round length',
        totalRoundsPlayed: 'Total rounds played',
        tableHeaderAttackers: 'Attackers',
        tableHeaderDefenders: 'Defenders',
        tableHeaderName: 'Name',
        tableHeaderPickRate: 'Pick Rate *',
        tableHeaderWinRate: 'Win Rate',
        tableHeaderSurvivalRate: 'Survival Rate',
        tableHeaderKillsPerDeath: 'Kills:Death',
        tableHeaderKillsPerRound: 'Kills:Round',
        tableHeaderTotalRounds: 'Total Rounds',
        tableHeaderAllRanks: 'All Ranks',
        averagesAndTotals: 'Averages/Totals',
        percentageFormat: '{num}%',
        instructions: 'Select filter options and click \'Load Stats\' to continue.',
        noResults: 'No results found.',
        error: 'There was an error trying to load stats.  Please try again later.'
      },
      statsRoundWinReasons: {
        allTeamsDead: 'All teams dead',
        attackersEliminated: 'Enemy team killed',
        attackersKilledHostage: 'Hostage killed',
        attackersSurrendered: 'Surrender',
        bombDeactivated_OneBomb: 'Bomb deactivated',
        bombExploded: 'Bomb exploded',
        defendersEliminated: 'Enemy team killed',
        defendersKilledHostage: 'Hostage killed',
        defendersSurrendered: 'Surrender',
        defuserDeactivated: 'Defused deactivated',
        hostageExtracted: 'Hostage extracted',
        noEnemies: 'No enemies',
        objectiveCaptured: 'Objective secured',
        objectiveProtected: 'Objective protected',
        timeExpired: 'Time expired'
      },
      ranks: {
        unranked: 'Unranked',
        copper: 'Copper',
        bronze: 'Bronze',
        silver: 'Silver',
        gold: 'Gold',
        platinum: 'Platinum',
        diamond: 'Diamond'
      },
      platforms: {
        pc: 'PC',
        xboxone: 'Xbox One',
        ps4: 'PS4'
      },
      seasons: {
        1: 'Black Ice',
        2: 'Dust Line',
        3: 'Skull Rain',
        4: 'Red Crow',
        5: 'Velvet Shell',
        6: 'Operation Health'
      },
      operators: {
        ash: 'Ash',
        bandit: 'Bandit',
        blackbeard: 'Blackbeard',
        blitz: 'Blitz',
        buck: 'Buck',
        capitao: 'Capitao',
        castle: 'Castle',
        caveira: 'Caveira',
        doc: 'Doc',
        echo: 'Echo',
        frost: 'Frost',
        fuze: 'Fuze',
        gignRecruit: 'GIGN Recruit',
        glaz: 'Glaz',
        gsg9Recruit: 'GSG9 Recruit',
        hibana: 'Hibana',
        iq: 'IQ',
        jackal: 'Jackal',
        jager: 'Jager',
        kapkan: 'Kapkan',
        mira: 'Mira',
        montagne: 'Montagne',
        mute: 'Mute',
        pulse: 'Pulse',
        rook: 'Rook',
        sasRecruit: 'SAS Recruit',
        sledge: 'Sledge',
        smoke: 'Smoke',
        spetsnazRecruit: 'Spetsnaz Recruit',
        swatRecruit: 'SWAT Recruit',
        tachanka: 'Lord Tachanka',
        thatcher: 'Tatcher',
        thermite: 'Thermite',
        twitch: 'Twitch',
        valkyrie: 'Valkyrie'
      },
      mapNames: {
        bank: 'Bank',
        bartlett: 'Bartlett U.',
        border: 'Border',
        chalet: 'Chalet',
        club: 'Club House',
        consulate: 'Consulate',
        coastline: 'Coastline',
        favela: 'Favela',
        hereford: 'Hereford',
        house: 'House',
        kanal: 'Kanal',
        kafe: 'Kafe Dostoyevsky',
        oregon: 'Oregon',
        plane: 'Plane',
        skyscraper: 'Skyscraper',
        themepark: 'Theme Park',
        yacht: 'Yacht'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: 'Boulevard',
          spawnBackAlley: 'Back Alley',
          printerRoom: 'Printer Room',
          parkingLot: 'Parking Lot',
          boulevard: 'Boulevard',
          jewelryFront: 'Jewelry Front',
          plaza: 'Plaza',
          mainEntrance: 'Main Entrance',
          garageRamp: 'Garage<br/>Ramp',
          exteriorParking: 'Exterior Parking',
          garageRoof: 'Garage<br/>Roof',
          alleyAccess: 'Alley Access',
          backAlleyRooftop: 'Back Alley<br/>Rooftop',
          backAlley: 'Back Alley',
          highRoof: 'High Roof',
          lowRoof: 'Low Roof',
          vault: 'Vault',
          goldVault: 'Gold<br/>Vault',
          serverRoomStairs: 'Server Room Stairs',
          serverRoom: 'Server Room',
          CCTVRoom: 'CCTV<br/>Room',
          loadingDock: 'Loading Dock',
          secureHallway: 'Secure<br/>Hallway',
          sewer: 'Sewer',
          lockers: 'Lockers',
          vaultLobby: 'Vault Lobby',
          vaultEntrance: 'Vault<br/>Entrance',
          mainStairway: 'Main<br/>Stairway',
          bankGarage: 'Bank Garage',
          elevators: 'Elevators',
          tellersOffice: 'Tellers\'<br/>Office',
          archives: 'Archives',
          tellers: 'Tellers',
          loanOffice: 'Loan Office',
          officeHallway: 'Office Hallway',
          skylightStairwell: 'Skylight<br/>Stairwell',
          lobby: 'Lobby',
          openArea: 'Open Area',
          staffRoom: 'Staff Room',
          electricalRoom: 'Electrical<br/>Room',
          adminOffice: 'Admin Office',
          ATMs: 'ATMs',
          executiveHallway: 'Executive<br/>Hallway',
          frontDesk: 'Front<br/>Desk',
          executiveLounge: 'Executive<br/>Lounge',
          CEOOffice: 'CEO<br/>Office',
          janitorCloset: 'Janitor Closet',
          hallway: 'Hallway',
          terrace: 'Terrace',
          stockTradingRoom: 'Stock<br/>Trading<br/>Room',
          conferenceRoom: 'Conference<br/>Room'
        },
        bartlett: {
          archwayHall: 'Archway Hall',
          archwaylHallway: 'Archway Hallway',
          backAlley: 'Back Alley',
          bathroom: 'Bath-<br/>room',
          campusField: 'Campus<br/>Field',
          classroom: 'Classroom',
          coatRoom: 'Coat<br/>Room',
          compassHallway: 'Compass Hallway',
          courtyard: 'Courtyard',
          centralHallway: 'Central<br/>Hallway',
          diningRoom: 'Dining Room',
          eastBalcony: 'East Balcony<br/>(not shown)',
          eastCorridor: 'East<br/>Corridor',
          eastStairs: 'East<br/>Stairs',
          festival: 'Festival',
          frontEntrance: 'Front Entrance',
          frontOffice: 'Front<br/>Office',
          frontPatio: 'Front Patio',
          gardenPass: 'Garden<br/>Pass',
          kitchen: 'Kitchen',
          lobby: 'Lobby',
          lounge: 'Lounge',
          lowerLibrary: 'Lower<br/>Library',
          mainGate: 'Main<br/>Gate',
          mainOffice: 'Main Office',
          modelHall: 'Model Hall',
          pantry: 'Pantry',
          parking: 'Parking',
          pianoRoom: 'Piano Room',
          readingRoom: 'Reading Room',
          roof: 'Roof',
          rowingMuseum: 'Rowing<br/>Museum',
          serviceRoom: 'Service<br/>Room',
          terrace: 'Terrace',
          trophyRoom: 'Trophy<br/>Room',
          upperLibrary: 'Upper<br/>Library',
          vistaHallway: 'Vista<br/>Hallway',
          westBalcony: 'West Balcony<br/>(not shown)',
          westCorridor: 'West<br/>Corridor'
        },
        border: {
          armoryLockers: 'Armory<br/>Lockers',
          tellers: 'Tellers',
          ventilationRoom: 'Venti-<br/>lation<br/>Room',
          exitHallway: 'Exit<br/>Hallway',
          supplyCorridor: 'Supply<br/>Corridor',
          detention: 'Detention',
          customsInspection: 'Customs Inspection',
          customsDesk: 'Customs<br/>Desk',
          centralStairs: 'Central Stairs',
          serverRoom: 'Server Room',
          supplyRoom: 'Supply Room',
          workshop: 'Work-<br/>shop',
          mainLobby: 'Main<br/>Lobby',
          bathroom: 'Bath-<br/>room',
          waitingRoom: 'Waiting<br/>Room',
          eastStairs: 'East<br/>Stairs',
          passportCheck: 'Passport<br/>Check',
          archives: 'Archives',
          offices: 'Offices',
          officesHallway: 'Offices Hallway',
          fountain: 'Fountain',
          mainHallway: 'Main<br/>Hallway',
          armoryDesk: 'Armory<br/>Desk',
          securityRoom: 'Security<br/>Room',
          breakRoom: 'Break Room',
          spawnEastVehicleEntrance: 'East Vehicle Entrance',
          spawnValley: 'Valley',
          spawnWestVehicleExit: 'West Vehicle Exit',
          westTower: 'West<br/>Tower',
          pedestrianExit: 'Pedestrian Exit',
          valley: 'Valley',
          parkingLotEntrance: 'Parking Lot<br/>Entrance',
          parkingLot: 'Parking Lot',
          westRoad: 'West Road',
          vehicleCustoms: 'Vehicle Customs',
          crashScene: 'Crash Scene',
          eastRoad: 'East Road',
          pedestrianEntrance: 'Pedestrian<br/>Entrance',
          pedestrianCustoms: 'Pedestrian<br/>Customs',
          watchTower: 'Watch<br/>Tower',
          eastAlley: 'East Alley',
          parkingLotAlley: 'Parking<br/>Lot<br/>Alley',
          northBalcony: 'North Balcony',
          eastBalcony: 'East<br/>Balcony',
          westBalcony: 'West<br/>Balcony',
          southBalcony: 'South Balcony',
          roof: 'Roof'
        },
        chalet: {
          spawnFrontYard: 'Front Yard',
          spawnCampfire: 'Campfire',
          spawnCliffside: 'Cliffside',
          spawnLakeside: 'Lakeside',
          libraryStairs: 'Library<br/>Stairs',
          snowmobileGarageCorridor: 'Snowmobile Garage Corridor',
          snowmobileGarage: 'Snowmobile<br/>Garage',
          greatRoomStairs: 'Great<br/>Room<br/>Stairs',
          storageRoom: 'Storage<br/>Room',
          wineCellar: 'Wine<br/>Cellar',
          wineStock: 'Wine<br/>Stock',
          basementHallway: 'Basement<br/>Hallway',
          backyardStairs: 'Backyard<br/>Stairs',
          mainStairs: 'Main<br/>Stairs',
          mainGarage: 'Main Garage',
          garageEntrance: 'Garage<br/>Entrance',
          westEntrance: 'West<br/>Entrance',
          gamingRoomHallway: 'Gaming Room<br/>Hallway',
          gamingRoom: 'Gaming<br/>Room',
          bar: 'Bar',
          greatRoom: 'Great Room',
          diningRoom: 'Dining Room',
          mainEntrance: 'Main<br/>Entrance',
          trophyRoom: 'Trophy Room',
          kitchenHallway: 'Kitchen<br/>Hallway',
          kitchen: 'Kitchen',
          libraryHallway: 'Library Hallway',
          libraryEntrance: 'Library<br/>Entrance',
          library: 'Library',
          bedroomTerrace: 'Bedroom<br/>Terrace',
          fireplaceHallway: 'Fireplace<br/>Hallway',
          bedroomHallway: 'Bedroom<br/>Hallway',
          masterBathroom: 'Master<br/>Bathroom',
          masterBedroom: 'Master Bedroom',
          office: 'Office',
          woodenTrail: 'Wooden<br/>Trail',
          campfireWood: 'Campfire Wood',
          backyard: 'Backyard',
          gazeebo: 'Gazeebo',
          cliffsideStairs: 'Cliffside<br/>Stairs',
          cliffsideWoods: 'Cliffside Woods',
          backyardPatio: 'Backyard Patio',
          officeBalcony: 'Office<br/>Balcony',
          helipadTrail: 'Helipad<br/>Trail',
          helipad: 'Helipad',
          frontYardPatio: 'Front Yard<br/>Patio',
          frontYard: 'Front Yard',
          bathroomBalcony: 'Bathroom<br/>Balcony',
          libraryBalcony: 'Library<br/>Balcony',
          bedroomBalcony: 'Bedroom<br/>Balcony',
          snowmobiles: 'Snowmobiles'
        },
        club: {
          spawnMainEntrance: 'Main Entrance',
          spawnShippingDocks: 'Shipping Docks',
          spawnWarehouse: 'Warehouse',
          spawnConstructionSite: 'Construction Site',
          easternSubroof: 'Eastern<br/>Sub-roof',
          constructionSite: 'Construction<br/>Site',
          container: 'Container',
          graffitiArea: 'Graffiti Area',
          recreationArea: 'Recreation<br/>Area',
          junkyard: 'Junkyard',
          VIPParking: 'VIP Parking',
          mainGate: 'Main Gate',
          parking: 'Parking',
          kennels: 'Kennels',
          trash: 'Trash',
          centralSubroof: 'Central<br/>Sub-roof',
          easternRoof: 'Eastern Roof',
          centralRoof: 'Central<br/>Roof',
          westernRoof: 'Western Roof',
          balcony: 'Balcony',
          escapeTunnel: 'Escape<br/>Tunnel',
          arsenalRoom: 'Arsenal<br/>Room',
          basementHallway: 'Basement Hallway',
          memorialRoom: 'Memorial Room',
          utilityRoom: 'Utility<br/>Room',
          oilPit: 'Oil Pit',
          centralStairs: 'Central<br/>Stairs',
          church: 'Church',
          frontPorch: 'Front Porch',
          garage: 'Garage',
          lobby: 'Lobby',
          stockRoom: 'Stock Room',
          garageStorage: 'Garage<br/>Storage',
          lounge: 'Lounge',
          bar: 'Bar',
          centralHallway: 'Central Hallway',
          kitchen: 'Kitchen',
          kitchenEntrance: 'Kitchen<br/>Entrance',
          westernHallway: 'Western<br/>Hallway',
          stripClub: 'Strip Club',
          junkyardEntrance: 'Junkyard<br/>Entrance',
          sideEntrance: 'Side Entrance',
          changingRoom: 'Changing<br/>Room',
          bedroom: 'Bedroom',
          bathroom: 'Bathroom',
          bedroomHallway: 'Bedroom Hallway',
          logisticOffice: 'Logistic<br/>Office',
          gym: 'Gym',
          secretStash: 'Secret<br/>Stash',
          CCTVRoom: 'CCTV Room',
          cashRoom: 'Cash<br/>Room',
          easternStairs: 'Eastern<br/>Stairs'
        },
        consulate: {
          spawnRiotBarricade: 'Riot Barricade',
          spawnPoliceLine: 'Police Line',
          spawnGasStation: 'Gas Station',
          spawnSideEntrance: 'Side Entrance',
          exitStairs: 'Exit<br/>Stairs',
          garage: 'Garage',
          basementCorridor: 'Basement Corridor',
          securityRoom: 'Security Room',
          cafeteria: 'Cafeteria',
          mainStairs: 'Main Stairs',
          lockerHallway: 'Locker<br/>Hallway',
          serviceStairs: 'Service<br/>Stairs',
          electricRoom: 'Electric<br/>Room',
          storageRoom: 'Storage<br/>Room',
          archives: 'Archives',
          archivesCorridor: 'Archives<br/>Corridor',
          pressRoom: 'Press Room',
          westCorridor: 'West Corridor',
          publicBathroom: 'Public<br/>Bathroom',
          antechamber: 'Antechamber',
          lobby: 'Lobby',
          eastCorridor: 'East<br/>Corridor',
          tellers: 'Tellers',
          visaOffice: 'Visa Office',
          visaEntrance: 'Visa<br/>Entrance',
          frontDoor: 'Front<br/>Door',
          balcony: 'Balcony',
          copyRoom: 'Copy Room',
          cabinet: 'Cabinet',
          administrationOffice: 'Administration<br/>Office',
          breakRoom: 'Break<br/>Room',
          frontOffice: 'Front Office',
          meetingRoom: 'Meeting<br/>Room',
          hallway: 'Hallway',
          consulFrontDesk: 'Consul<br/>Front<br/>Desk',
          privateBathroom: 'Private<br/>Bathroom',
          waitingRoom: 'Waiting<br/>Room',
          consulateOffice: 'Consulate<br/>Office',
          garageWay: 'Garage Way',
          courtyard: 'Courtyard',
          backCourtyard: 'Back Courtyard',
          sideEntrance: 'Side Entrance',
          dumpster: 'Dumpster',
          parking: 'Parking',
          gardens: 'Gardens',
          fountain: 'Fountain',
          emergencyExit: 'Emergency<br/>Exit',
          garageRoof: 'Garage<br/>Roof',
          memorialGarden: 'Memorial Garden',
          policeLine: 'Police Line',
          riotBarracade: 'Riot Barracade',
          eastFrontYard: 'East Front Yard',
          westFrontYard: 'West Front Yard',
          frontAlley: 'Front Alley',
          buildingRoof: 'Building Roof'
        },
        coastline: {
          aquarium: 'Aquarium',
          backAlley: 'Back<br/>Alley',
          balcony: 'Balcony (not shown)',
          bathroom: 'Bathroom',
          billiardsRoom: 'Billiards Room',
          blueBar: 'Blue Bar',
          cantina: 'Cantina',
          courtyard: 'Courtyard',
          djBooth: 'DJ Booth (not shown)',
          garageRoof: 'Garage Roof',
          hallOfFame: 'Hall of Fame',
          hallway: 'Hallway',
          hookahDeck: 'Hookah<br/>Deck<br/>(not shown)',
          hookahLounge: 'Hookah Lounge',
          kitchen: 'Kitchen',
          mainEntrance: 'Main<br/>Entrance',
          mainLobby: 'Main<br/>Lobby',
          northStairs: 'North<br/>Stairs',
          office: 'Office',
          penthouse: 'Penthouse',
          pool: 'Pool',
          poolEntrance: 'Pool Entrance',
          poolSide: 'Pool Side',
          rooftop: 'Rooftop',
          ruins: 'Ruins',
          securityRoom: 'Security<br/>Room',
          serviceEntrance: 'Service<br/>Entrance',
          southHallway: 'South Hallway',
          southPromenade: 'South Promenade',
          southStairs: 'South<br/>Stairs',
          sunriseBar: 'Sunrise Bar',
          sunRoom: 'Sun Room',
          theater: 'Theater',
          terrace: 'Terrace',
          toilets: 'Toilets',
          vipLounge: 'VIP Lounge',
          walkway: 'Walkway'
        },
        favela: {
          packagingRoom: 'Packaging<br/>Room',
          footballApartment: 'Football<br/>Apartment',
          armoryRoom: 'Armory<br/>Room',
          auntsApartment: 'Aunt\'s<br/>Apartment',
          auntsBedroom: 'Aunt\'s<br/>Bedroom',
          growRoom: 'Grow<br/>Room',
          bikersApartment: 'Biker\'s<br/>Apartment',
          methLab: 'Meth Lab',
          footballBedroom: 'Football<br/>Bedroom',
          footballOffice: 'Football<br/>Office',
          bikersBedroom: 'Biker\'s<br/>Bedroom',
          backStairs: 'Back<br/>Stairs',
          auntsHall: 'Aunt\'s Hall',
          kidsRoom: 'Kids Room',
          mainStairs: 'Main<br/>Stairs',
          stairHall: 'Stair<br/>Hall',
          roof: 'Roof',
          laundryRoom: 'Laundry<br/>Room',
          vaultRoom: 'Vault<br/>Room',
          bikersGarage: 'Biker\'s<br/>Garage',
          backAlley: 'Back Alley',
          schoolAlley: 'School Alley',
          footballPitch: 'Football Pitch',
          market: 'Market',
          marketAlley: 'Market<br/>Alley',
          schoolRooftops: 'School<br/>Rooftops',
          street: 'Street',
          rooftops: 'Rooftops',
          courtyard: 'Courtyard',
          accessAlley: 'Access Alley',
          shop: 'Shop<br/>(not shown)',
          marketRooftops: 'Market Rooftops'
        },
        hereford: {
          spawnTrainingCourse: 'Training Course',
          spawnParking: 'Parking',
          spawnShootingRange: 'Shooting Range',
          armory: 'Armory',
          lockers: 'Lockers',
          corridor: 'Corridor',
          mainStairs: 'Main<br/>Stairs',
          maintenanceArea: 'Maintenance<br/>Area',
          briefingRoom: 'Briefing<br/>Room',
          basementEntrance: 'Basement<br/>Entrance',
          garage: 'Garage',
          TVRoom: 'TV Room',
          garageCorridor: 'Garage Corridor',
          kitchen: 'Kitchen',
          corridor1: 'Corridor<br/>1',
          diningRoom: 'Dining<br/>Room',
          pianoLounge: 'Piano Lounge',
          office: 'Office',
          masterBedroom: 'Master Bedroom',
          backAccess: 'Back<br/>Access',
          laundryRoom: 'Laundry<br/>Room',
          bathroom: 'Bathroom',
          kidsBedroom: 'Kids<br/>Bedroom',
          ballisticMatDepot: 'Ballistic Mat<br/>Depot',
          storage: 'Storage',
          storageCorridor: 'Storage<br/>Corridor',
          dummyDepot: 'Dummy Depot',
          workshop: 'Workshop',
          shootingRangeEastEntrance: 'Shooting Range<br/>East Entrance',
          shootingRangeWestEntrance: 'Shooting Range<br/>West Entrance',
          tireSetting: 'Tire Setting',
          observationRamp: 'Observation Ramp',
          barracks: 'Barracks',
          busBackAlley: 'Bus Back<br/>Alley',
          rappelTower: 'Rappel<br/>Tower',
          terrace: 'Terrace',
          frontAccess: 'Front Access',
          chapelGate: 'Chapel Gate',
          forkliftArea: 'Forklift<br/>Area',
          sideStairsAlley: 'Side Stairs<br/>Alley',
          sideStairs: 'Side<br/>Stairs',
          garageTop: 'Garage Top',
          rooftop: 'Rooftop',
          parkingEntrance: 'Parking Entrance'
        },
        house: {
          spawnConstructionSite: 'Construction Site',
          spawnRiverDocks: 'River Docks',
          spawnAPCArea: 'APC Area',
          spawnSideStreet: 'Side Street',
          depot: 'Depot',
          trainingRoom: 'Training Room',
          kitchenStairs: 'Kitchen<br/>Stairs',
          sideStairs: 'Side<br/>Stairs',
          laundryRoom: 'Laundry<br/>Room',
          garage: 'Garage',
          livingRoom: 'Living<br/>Room',
          backEntrance: 'Back Entrance',
          lobby: 'Lobby',
          kitchen: 'Kitchen',
          office: 'Office',
          diningRoom: 'Dining<br/>Room',
          workshop: 'Workshop',
          kidsBedroom: 'Kid\'s<br/>Bedroom',
          upperHallway: 'Upper<br/>Hallway',
          lobbyStairs: 'Lobby<br/>Stairs',
          walkIn: 'Walk-in',
          masterBedroom: 'Master Bedroom',
          bathroom: 'Bathroom',
          sideStreet: 'Side<br/>Street',
          garageEntrance: 'Garage<br/>Entrance',
          garden: 'Garden',
          backAlley: 'Back Alley',
          patio: 'Patio',
          jacuzzi: 'Jacuzzi',
          basementStairs: 'Basement<br/>Stairs',
          treehouseAlley: 'Treehouse<br/>Alley',
          frontYard: 'Front Yard',
          frontStreet: 'Front Street',
          frontPorch: 'Front Porch',
          backPorch: 'Back Porch',
          backPorchTop: 'Back Porch Top',
          frontPorchTop: 'Front Porch Top',
          rooftop: 'Rooftop'
        },
        kanal: {
          spawnFloatingDock: 'Floating Dock',
          spawnSailboats: 'Sailboats',
          spawnConstructionSite: 'Construction Site',
          boatGarage: 'Boat Garage',
          boatSupplies: 'Boat Supplies',
          pipes: 'Pipes',
          boatSuppliesHallway: 'Boat<br/>Supplies<br/>Hallway',
          lockerRoom: 'Locker Room',
          coastGuardStairs: 'Coast Guard<br/>Stairs',
          showers: 'Showers',
          showersCorridor: 'Showers<br/>Corridor',
          loadingDock: 'Loading Dock',
          machineHallway: 'Machine<br/>Hallway',
          controlCenterStairs: 'Control<br/>Center<br/>Stairs',
          holdingRoom: 'Holding<br/>Room',
          holdingRoomHallway: 'Holding<br/>Room<br/>Hallway',
          radio: 'Radio',
          coastGuardOffice: 'Coast Guard<br/>Office',
          archives: 'Archives',
          coastGuardHall: 'Coast<br/>Guard<br/>Hall',
          mainEntrance: 'Main<br/>Entrance',
          lounge: 'Lounge',
          bridge: 'Bridge',
          modelRoom: 'Model Room',
          securityRoom: 'Security<br/>Room',
          projectorRoom: 'Projector<br/>Room',
          mapsOffice: 'Maps<br/>Office',
          mapsOfficeHallway: 'Maps Office<br/>Hallway',
          kitchen: 'Kitchen',
          cafeteria: 'Cafeteria',
          plantsHallway: 'Plants Hallway',
          thirdFloorExit: 'Third<br/>Floor<br/>Exit',
          controlRoom: 'Control<br/>Room',
          electricRoom: 'Electric<br/>Room',
          controlRoomHallway: 'Control Room Hallway',
          serverRoom: 'Server<br/>Room',
          lockgate: 'Lockgate',
          quayContainers: 'Quay Containers',
          lockgateTunnel: 'Lockgate<br/>Tunnel',
          waterWalkway: 'Water Walkway',
          quayConstruction: 'Quay Construction',
          constructionSite: 'Construction<br/>Site',
          constructionEntrance: 'Construction<br/>Entrance',
          parkingAlley: 'Parking Alley',
          parkingEntrance: 'Parking<br/>Entrance',
          middleRoad: 'Middle<br/>Road',
          forkliftAlley: 'Forklift<br/>Alley',
          frontLawn: 'Front Lawn',
          basementStairs: 'Basement Stairs',
          coastGuardRoof: 'Coast<br/>Guard<br/>Roof',
          bridgeRoof: 'Bridge<br/>Roof',
          roofBrickPile: 'Roof<br/>Brick<br/>Pile',
          balcony: 'Balcony',
          controlCenterRoof: 'Control<br/>Center<br/>Roof',
          dockStairs: 'Dock Stairs',
          parking: 'Parking',
          boatCrane: 'Boat Crane',
          mapArchives: 'Map<br/>Archives'
        },
        kafe: {
          spawnRiverDocks: 'River Docks',
          spawnChristmasMarket: 'Christmas Market',
          spawnPark: 'Park',
          laundryRoom: 'Laundry<br/>Room',
          frontStairs: 'Front<br/>Stairs',
          bakery: 'Bakery',
          bakeryKitchen: 'Bakery<br/>Kitchen',
          kitchenPrep: 'Kitchen<br/>Prep',
          kitchenGrill: 'Kitchen Grill',
          kitchenPickUp: 'Kitchen<br/>Pick Up',
          coldRoom: 'Cold Room',
          diningRoom: 'Dining Room',
          backStairs: 'Back<br/>Stairs',
          coldRoomCorridor: 'Cold<br/>Room<br/>Corridor',
          VIPSection: 'VIP<br/>Section',
          barStairs: 'Bar<br/>Stairs',
          storage: 'Storage',
          museumEntrance: 'Museum<br/>Entrance',
          miningRoom: 'Mining Room',
          trainMuseum: 'Train Museum',
          pillarDiningRoom: 'Pillar Dining Room',
          mainCorridor: 'Main<br/>Corridor',
          readingRoomCorridor: 'Reading Room Corridor',
          readingRoom: 'Reading Room',
          fireplaceHall: 'Fireplace<br/>Hall',
          cigarShop: 'Cigar Shop',
          cigarLounge: 'Cigar Lounge',
          bar: 'Bar',
          barBackstore: 'Bar<br/>Backstore',
          washrooms: 'Wash-<br/>rooms',
          washroomCorridor: 'Washroom Corridor',
          cocktailLounge: 'Cocktail<br/>Lounge',
          cocktailLoungeEntrance: 'Cocktail<br/>Lounge<br/>Entrance',
          westMainStreet: 'West Main Street',
          mainStreet: 'Main Street',
          eastMainStreet: 'East Main Street',
          bakeryParking: 'Bakery<br/>Parking',
          bakeryRoof: 'Bakery Roof',
          cafeRoofTop: 'Cafe Roof Top',
          terrace: 'Terrace',
          backAlley: 'Back Alley',
          garrage: 'Garrage',
          parkAlley: 'Park<br/>Alley'
        },
        oregon: {
          spawnJunkyard: 'Junkyard',
          spawnStreet: 'Street',
          spawnConstructionSite: 'Construction Site',
          towerStairs: 'Tower Stairs',
          boilerRoom: 'Boiler<br/>Room',
          electricRoom: 'Electric<br/>Room',
          bunkerEntrance: 'Bunker<br/>Entrance',
          bunker: 'Bunker',
          basementCorridor: 'Basement<br/>Corridor',
          supplyRoom: 'Supply<br/>Room',
          laundryRoom: 'Laundry Room',
          laundryStorage: 'Laundry<br/>Storage',
          laundryStairs: 'Laundry<br/>Stairs',
          office: 'Office',
          diningHall: 'Dining<br/>Hall',
          diningHallCorridor: 'Dining Hall Corridor',
          showers: 'Showers',
          kitchen: 'Kitchen',
          bathroom: 'Bathroom',
          dormStairs: 'Dorm Stairs',
          pantry: 'Pantry',
          bathroomCorridor: 'Bathroom Corridor',
          classroom: 'Classroom',
          lobby: 'Lobby',
          mainStairs: 'Main<br/>Stairs',
          meetingHall: 'Meeting Hall',
          rearStage: 'Rear Stage',
          garage: 'Garage',
          officeStorage: 'Office<br/>Storage',
          kidsDorm: 'Kids\'<br/>Dorm',
          dormMainHall: 'Dorm<br/>Main Hall',
          smallDorms: 'Small Dorms',
          armoryCorridor: 'Armory<br/>Corridor',
          masterBedroom: 'Master<br/>Bedroom',
          armory: 'Armory',
          walkIn: 'Walk In',
          attic: 'Attic',
          watchTower: 'Watch Tower',
          busYard: 'Bus Yard',
          junkyard: 'Junkyard',
          farmlands: 'Farmlands',
          shootingRange: 'Shooting<br/>Range',
          constructionSite: 'Construction Site',
          parking: 'Parking',
          mainEntrance: 'Main Entrance',
          street: 'Street',
          balcony: 'Balcony',
          diningHallRoof: 'Dining<br/>Hall Roof',
          officeRoof: 'Office Roof',
          meetingHallEntrance: 'Meeting Hall<br/>Entrance',
          garageRoof: 'Garage Roof',
          dormsRoof: 'Dorms<br/>Roof',
          meetingHallRoof: 'Meeting<br/>Hall<br/>Roof',
          supplyCloset: 'Supply<br/>Closet'
        },
        plane: {
          spawnOfficialEntrance: 'Official Entrance',
          spawnReporterEntrance: 'Reporter Entrance',
          spawnServiceEntrance: 'Service Entrance',
          pressBathroom: 'Pr.BR',
          meetingRoom: 'Meeting Room',
          frontHallway: 'Front<br/>Hallway',
          executiveOffice: 'Executive<br/>Office',
          mainEntrance: 'Main Entrance',
          frontStairs: 'Front Stairs',
          pantry: 'Pantry',
          kitchen: 'Kitchen',
          executiveHallway: 'Executive Hallway',
          executiveBedroom: 'Executive<br/>Bedroom',
          changeRoom: 'Change<br/>Room',
          laund: 'Laund.',
          frontServiceEntrance: 'Front Service<br/>Entrance',
          rightWing: 'Right Wing',
          backServiceEntrance: 'Back Service<br/>Entrance',
          reporterEntrance: 'Reporter Entrance',
          leftWing: 'Left Wing',
          staffSection: 'Staff Section',
          securityRoom: 'Security<br/>Room',
          pressSectionA: 'Press<br/>Section A',
          pressSectionB: 'Press<br/>Section B',
          backStairs: 'Back Stairs',
          cargoHold: 'Cargo Hold',
          serviceCorridor: 'Service Corridor',
          storage: 'Storage',
          luggageHold: 'Luggage<br/>Hold',
          firstAidStation: 'First Aid Station',
          cargoFrontEntrance: 'Cargo Front<br/>Entrance',
          cockpitStairs: 'Cockpit Stairs',
          cabinStaff: 'Cabin<br/>Staff',
          radioCabin: 'Radio Cabin',
          cabin: 'Cabin',
          caterer: 'Caterer',
          serverRoomA: 'Server Room A',
          serverRoomB: 'Server Room B',
          technicalSeating: 'Technical Seating',
          ladderRoom: 'Ladder<br/>Room'
        },
        skyscraper: {
          helipad: 'Helipad',
          tower: 'Tower',
          ventilationUnits: 'Ventilation Units',
          kitchen: 'Kitchen',
          pantry: 'Pantry',
          deliveryRoom: 'Delivery<br/>Room',
          houseLobby: 'House Lobby',
          houseEntrance: 'House<br/>Entrance',
          mainEntrance: 'Main<br/>Entrance',
          reception: 'Reception',
          bedroom: 'Bedroom',
          closet: 'Closet',
          bathroom: 'Bathroom',
          houseStairs: 'House<br/>Stairs',
          restaurant: 'Restaurant',
          toilet: 'Toilet',
          bbq: 'BBQ',
          backHallway: 'Back Hallway',
          mainStairs: 'Main<br/>Stairs',
          geishaRoom: 'Geisha<br/>Room',
          hallway: 'Hallway',
          karaoke: 'Karaoke',
          teaRoom: 'Tea Room',
          taiko: 'Taiko',
          terrace: 'Terrace',
          backStairs: 'Back<br/>Stairs',
          houseBalcony: 'House<br/>Balcony',
          exhibition: 'Exhibition',
          lounge: 'Lounge',
          workOffice: 'Work<br/>Office',
          clearance: 'Clearance',
          peacefullTree: 'Peacefull<br/>Tree',
          contemplationGarden: 'Contemplation<br/>Garden',
          westGarden: 'West<br/>Garden',
          bridge: 'Bridge',
          gazeebo: 'Gazeebo',
          restBalcony: 'Rest.<br/>Balcony',
          northGarden: 'North<br/>Garden',
          eastGarden: 'East<br/>Garden',
          sandGarden: 'Sand<br/>Garden',
          sidePath: 'Side<br/>Path',
          sideStairs: 'Side<br/>Stairs',
          dragonStatue: 'Dragon<br/>Statue',
          coveredWalkway: 'Covered<br/>Walkway'
        },
        themepark: {
          workInProgress: 'This is a very early preview<br/>of the new Year 2 Season 3 Map<br/>WORK IN PROGRESS'
        },
        yacht: {
          spawnSubmarine: 'Submarine',
          spawnZodiak: 'Zodiak',
          spawnSnowMobile: 'Snow Mobile',
          mapsRoom: 'Maps Room',
          cockpit: 'Cockpit',
          cockpitHallway: 'Cockpit Hallway',
          captainsOffice: 'Captain\'s<br/>Office',
          cockpitBalcony: 'Cockpit<br/>Balcony',
          topDeckStairs: 'Top<br/>Deck<br/>Stairs',
          helipadEntrance: 'Helipad<br/>Entrance',
          helipad: 'Helipad',
          spaDeck: 'Spa<br/>Deck',
          eastDeck: 'East Deck',
          westDeck: 'West Deck',
          frontDeck: 'Front<br/>Deck',
          masterBedroom: 'Master<br/>Bedroom',
          casino: 'Casino',
          pokerRoom: 'Poker<br/>Room',
          bathroom: 'Bath-<br/>room',
          bedroomHallway: 'Bedroom Hallway',
          casinoHallway: 'Casino Hallway',
          globeHallway: 'Globe<br/>Hallway',
          lounge: 'Lounge',
          cafeteria: 'Cafeteria',
          engine: 'Engine',
          backEntrance: 'Back<br/>Entrance',
          rearDeck: 'Rear<br/>Deck',
          serverRoom: 'Server<br/>Room',
          engineStorage: 'Engine<br/>Storage',
          engineControl: 'Engine<br/>Control',
          backStairs: 'Back<br/>Stairs',
          emergencyExit: 'Emergency Exit',
          engineHallway: 'Engine Hallway',
          frontStairs: 'Front<br/>Stairs',
          kitchen: 'Kitchen',
          staffDormitory: 'Staff<br/>Dormitory',
          westBalcony: 'West Balcony',
          eastBalcony: 'East Balcony',
          kitchenHallway: 'Kitchen Hallway',
          kitchenStairs: 'Kitchen Stairs',
          kitchenPantry: 'Kitchen<br/>Pantry',
          infirmary: 'Infirmary',
          borealSubRoom: 'Boreal Sub<br/>Room',
          cafeteriaHallway: 'Cafeteria Hallway',
          engineUtility: 'Engine<br/>Utility',
          submarine: 'Submarine',
          westGlacier: 'West Glacier',
          eastHullBreach: 'East Hull<br/>Breach',
          eastGlacier: 'East Glacier',
          frozenRiver: 'Frozen River',
          zodiac: 'Zodiac',
          westHullBreach: 'West Hull Breach',
          kingOfTheWorld: 'King of<br/>the World',
          roof: 'Roof',
          anchorName: 'Anchor',
          aklarkSubEntrance: 'Aklark Sub<br/>Entrance'
        }
      }
    };

  var registerLanguage = function registerLanguage(language, terms) {
    translations[language] = terms;
  };

  var tryLoadLanguage = function tryLoadLanguage(language) {
    if (translations[language]) {
      loadTerms(translations[language]);
    }
  };

  var loadTerms = function loadTerms(newTerms) {
    loadDefaultTerms();
    $.extend(true, terms, newTerms);
  };

  var loadDefaultTerms = function loadDefaultTerms() {
    $.extend(true, terms, englishTerms);
  };

  registerLanguage(name, englishTerms);
  loadDefaultTerms();

  return  {
    name: name,
    terms: terms,
    registerLanguage: registerLanguage,
    tryLoadLanguage: tryLoadLanguage,
    loadedLanguages: translations
  };
})();
