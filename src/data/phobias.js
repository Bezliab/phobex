// src/data/phobias.js
// Complete phobia dataset — 300+ entries covering all clinically recognised,
// named, and documented phobias worldwide.

const phobias = [
  // ─── A ────────────────────────────────────────────────────────────────────

  {
    id: "ablutophobia",
    name: "Ablutophobia",
    fear: "washing or bathing",
    keywords: [
      "washing",
      "bathing",
      "bath",
      "shower",
      "clean",
      "water",
      "hygiene",
    ],
    description:
      "Ablutophobia is a persistent, irrational fear of washing, bathing, or cleaning oneself. More prevalent in children but also seen in adults, it often stems from traumatic experiences involving water or force. Sufferers may avoid showers for weeks and experience intense anxiety at the mere suggestion of bathing, leading to social consequences and hygiene-related health issues.",
    prevalence: "Rare; more common in children",
    category: "Situational",
    accentColor: "#38bdf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1552688468-d87e6f7a58f2?w=1920&q=80",
  },
  {
    id: "acarophobia",
    name: "Acarophobia",
    fear: "mites or small insects causing itching",
    keywords: [
      "mites",
      "itch",
      "insects",
      "skin",
      "crawling",
      "scabies",
      "parasites",
    ],
    description:
      "Acarophobia is an irrational fear of tiny insects such as mites, ticks, or lice — particularly the sensation that they are crawling on or under the skin. Sufferers may obsessively inspect their skin, shower repeatedly, or avoid environments perceived as infested. In severe cases it overlaps with Ekbom syndrome (delusional parasitosis).",
    prevalence: "Rare",
    category: "Animal",
    accentColor: "#a3e635",
    backgroundImage:
      "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=1920&q=80",
  },
  {
    id: "achluophobia",
    name: "Achluophobia",
    fear: "darkness",
    keywords: ["dark", "darkness", "night", "shadow", "black", "nighttime"],
    description:
      "Achluophobia is a specific phobia of darkness, closely related to nyctophobia. The individual fears not just the absence of light but all the unknown threats it conceals. It is particularly common in children but can persist into adulthood, causing disrupted sleep, inability to enter darkened rooms, and significant daytime anxiety about nightfall.",
    prevalence: "Common; especially in children",
    category: "Environmental",
    accentColor: "#818cf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "acousticophobia",
    name: "Acousticophobia",
    fear: "noise",
    keywords: ["noise", "sound", "loud", "bang", "crash", "hearing", "audio"],
    description:
      "Acousticophobia is an abnormal fear of noise, particularly sudden or loud sounds. Sufferers may wear ear protection even in quiet environments, avoid concerts or social gatherings, and experience hypervigilance to the acoustic environment. It differs from misophonia (selective sound sensitivity) in that the fear is more generalised.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80",
  },
  {
    id: "acrophobia",
    name: "Acrophobia",
    fear: "heights",
    keywords: [
      "height",
      "heights",
      "high",
      "tall",
      "falling",
      "cliff",
      "mountain",
      "skyscraper",
      "altitude",
    ],
    description:
      "Acrophobia is an extreme fear of heights that extends far beyond normal caution near dangerous drops. People with acrophobia may panic on balconies, bridges, or even ladders. The condition triggers vertigo, dizziness, and a desperate urge to crouch or cling to nearby surfaces — even in completely safe environments far above the ground.",
    prevalence: "5% of people",
    category: "Environmental",
    accentColor: "#38bdf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    id: "aerophobia",
    name: "Aerophobia",
    fear: "flying",
    keywords: [
      "flying",
      "fly",
      "airplane",
      "plane",
      "flight",
      "aviation",
      "air travel",
      "turbulence",
      "airport",
    ],
    description:
      "Aerophobia — fear of flying — affects millions globally and is often a combination of claustrophobia, fear of heights, and fear of losing control. Sufferers may avoid flying entirely, limiting career opportunities and travel. The condition triggers fight-or-flight responses despite flying being statistically one of the safest forms of transportation ever devised.",
    prevalence: "25% of people",
    category: "Situational",
    accentColor: "#60a5fa",
    backgroundImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
  },
  {
    id: "agliophobia",
    name: "Agliophobia",
    fear: "pain",
    keywords: ["pain", "hurt", "injury", "ache", "suffering", "physical pain"],
    description:
      "Agliophobia is an intense, disproportionate fear of experiencing pain. Sufferers may refuse medical treatment, avoid physical activity, and interpret minor bodily sensations as catastrophic threats. The phobia can lead to health deterioration through avoidance of necessary medical procedures and creates a cycle of heightened pain sensitivity.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "agoraphobia",
    name: "Agoraphobia",
    fear: "open or crowded spaces",
    keywords: [
      "crowd",
      "open space",
      "public",
      "outside",
      "market",
      "mall",
      "alone",
      "escape",
    ],
    description:
      "Agoraphobia is the fear of situations where escape might be difficult or help unavailable during a panic attack. Contrary to popular belief, it encompasses crowded places, public transport, and being outside alone — not just open spaces. In severe cases, individuals become entirely housebound, their world shrinking to the confines of a single room.",
    prevalence: "1.7% of adults",
    category: "Situational",
    accentColor: "#e879f9",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "agraphobia",
    name: "Agraphobia",
    fear: "sexual abuse",
    keywords: [
      "sexual abuse",
      "assault",
      "rape",
      "violation",
      "sexual violence",
    ],
    description:
      "Agraphobia is the fear of sexual abuse or being sexually attacked. Often triggered by prior trauma, survivors may develop this phobia manifesting as hypervigilance in social situations, avoidance of intimate relationships, and severe anxiety responses to touch or close physical proximity. It frequently co-occurs with PTSD.",
    prevalence: "Uncommon; trauma-linked",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "agrizoophobia",
    name: "Agrizoophobia",
    fear: "wild animals",
    keywords: [
      "wild animals",
      "wildlife",
      "predators",
      "lion",
      "bear",
      "tiger",
      "wilderness",
    ],
    description:
      "Agrizoophobia is a fear of wild animals, especially large or predatory species. Unlike a reasonable wariness of dangerous wildlife, agrizoophobia involves disproportionate panic, inability to visit zoos or natural parks, and intrusive thoughts about wild animal attacks in everyday settings far from any wildlife.",
    prevalence: "Rare",
    category: "Animal",
    accentColor: "#84cc16",
    backgroundImage:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
  },
  {
    id: "agyrophobia",
    name: "Agyrophobia",
    fear: "crossing streets",
    keywords: [
      "street",
      "crossing",
      "road",
      "traffic",
      "cars",
      "pedestrian",
      "vehicles",
    ],
    description:
      "Agyrophobia is an intense fear of crossing streets or navigating traffic. Sufferers may be unable to cross roads even at designated crossings, leading to extreme detours and avoidance of urban environments. The fear often relates to perceived loss of control over speeding vehicles, or past traumatic experiences near traffic.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "aichmophobia",
    name: "Aichmophobia",
    fear: "needles or pointed objects",
    keywords: [
      "needle",
      "sharp",
      "pointed",
      "knife",
      "pin",
      "injection",
      "blade",
      "syringe",
    ],
    description:
      "Aichmophobia is a fear of sharp or pointed objects — needles, knives, pins, or even pencils. Often overlapping with trypanophobia (fear of injections), sufferers may refuse blood tests or vaccinations. The fear can stem from a past injury or the perceived vulnerability of being pierced, and can significantly hinder medical care.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "ailurophobia",
    name: "Ailurophobia",
    fear: "cats",
    keywords: ["cat", "cats", "feline", "kitten", "scratch", "meow", "pet"],
    description:
      "Ailurophobia is an irrational and persistent fear of cats. Sufferers may experience panic at the sight of a cat, even a small kitten. The fear can prevent visiting homes with cats, walking in neighbourhoods with free-roaming felines, or even viewing images of cats. It was notably documented in historical figures including Napoleon Bonaparte.",
    prevalence: "Uncommon",
    category: "Animal",
    accentColor: "#fb923c",
    backgroundImage:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1920&q=80",
  },
  {
    id: "algophobia",
    name: "Algophobia",
    fear: "pain",
    keywords: ["pain", "suffering", "ache", "hurt", "injury", "physical pain"],
    description:
      "Algophobia is an extreme fear of pain that goes well beyond normal pain aversion. Commonly seen in patients with chronic pain conditions, it creates a self-reinforcing cycle: the fear of pain heightens sensitivity, which increases pain, which amplifies the fear. It is a major barrier to rehabilitation and post-surgical recovery.",
    prevalence: "Common in chronic pain patients",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "alliumphobia",
    name: "Alliumphobia",
    fear: "garlic",
    keywords: ["garlic", "onion", "allium", "smell", "food", "cooking"],
    description:
      "Alliumphobia is a specific food-related phobia centred on garlic and other alliums such as onions and leeks. Sufferers may refuse to enter kitchens where these foods are being cooked, avoid restaurants, and experience intense revulsion or panic at the smell. It can significantly restrict diet and social dining experiences.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#f0abfc",
    backgroundImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1920&q=80",
  },
  {
    id: "allodoxaphobia",
    name: "Allodoxaphobia",
    fear: "opinions of others",
    keywords: [
      "opinions",
      "judgment",
      "criticism",
      "views",
      "others",
      "disapproval",
    ],
    description:
      "Allodoxaphobia is a fear of hearing the opinions of other people, particularly when those opinions may be critical or contrary. Sufferers may avoid debates, refuse to read reviews of their work, and experience anxiety in conversations where others might express a viewpoint. It is closely related to social anxiety and approval-seeking behaviours.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#a78bfa",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "amaxophobia",
    name: "Amaxophobia",
    fear: "driving or riding in vehicles",
    keywords: [
      "driving",
      "car",
      "vehicle",
      "road",
      "travel",
      "accident",
      "traffic",
      "passenger",
    ],
    description:
      "Amaxophobia is a fear of driving or riding in motor vehicles. It is one of the most debilitating transport phobias, potentially preventing sufferers from commuting to work, travelling to see family, or responding to emergencies. It may stem from a past accident or generalised anxiety about loss of control at high speed.",
    prevalence: "Uncommon but significantly debilitating",
    category: "Situational",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "amnesiphobia",
    name: "Amnesiphobia",
    fear: "amnesia or memory loss",
    keywords: [
      "amnesia",
      "memory loss",
      "forgetting",
      "dementia",
      "alzheimer",
      "memory",
      "forget",
    ],
    description:
      "Amnesiphobia is a fear of losing one's memories or developing amnesia. The thought of forgetting loved ones, skills, or personal identity triggers intense anxiety. It is often heightened in those with family histories of dementia, and can lead to obsessive note-taking, memory testing rituals, and reluctance to take anaesthesia or sleep medication.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80",
  },
  {
    id: "androphobia",
    name: "Androphobia",
    fear: "men",
    keywords: ["men", "males", "masculine", "strangers", "male figures"],
    description:
      "Androphobia is a fear of men, often rooted in traumatic experiences of abuse, assault, or severe gender-based violence. Sufferers — predominantly women — may experience panic in the presence of men, avoid male-dominated environments, and struggle with professional and social functioning. It requires careful, trauma-informed therapeutic approaches.",
    prevalence: "Uncommon; trauma-linked",
    category: "Social",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "anglophobia",
    name: "Anglophobia",
    fear: "England or English culture",
    keywords: [
      "England",
      "English",
      "Britain",
      "British",
      "culture",
      "country",
    ],
    description:
      "Anglophobia, in its psychological rather than political sense, is an irrational anxiety or aversion toward England, English people, or English cultural norms. Though more commonly a cultural or political stance, as a phobia it manifests as panic or avoidance responses triggered by anything perceived as distinctly English.",
    prevalence: "Rare as a clinical phobia",
    category: "Cultural",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80",
  },
  {
    id: "angrophobia",
    name: "Angrophobia",
    fear: "anger or becoming angry",
    keywords: [
      "anger",
      "rage",
      "fury",
      "conflict",
      "temper",
      "aggression",
      "confrontation",
    ],
    description:
      "Angrophobia is the fear of anger — either one's own or others'. Sufferers go to extreme lengths to avoid conflict and may suppress all anger, leading to passive-aggressive behaviours, depression, and an inability to advocate for themselves. Witnessing anger in others can trigger a full panic response.",
    prevalence: "Uncommon",
    category: "Emotional",
    accentColor: "#f97316",
    backgroundImage:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1920&q=80",
  },
  {
    id: "ankylophobia",
    name: "Ankylophobia",
    fear: "joint immobility",
    keywords: [
      "joints",
      "stiffness",
      "immobility",
      "arthritis",
      "bones",
      "locking",
      "paralysis",
    ],
    description:
      "Ankylophobia is an irrational fear of having one's joints become stiff or immobile. Sufferers may exercise obsessively to maintain joint flexibility, avoid situations where they might sit still for long periods, and experience significant anxiety when contemplating any condition that might limit their physical movement.",
    prevalence: "Very rare",
    category: "Health-Based",
    accentColor: "#78716c",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "anthophobia",
    name: "Anthophobia",
    fear: "flowers",
    keywords: [
      "flowers",
      "petals",
      "blooms",
      "plants",
      "bouquet",
      "pollen",
      "garden",
    ],
    description:
      "Anthophobia is a fear of flowers. While flowers are widely associated with beauty and celebration, sufferers experience disgust, panic, or intense discomfort in their presence. The fear may relate to their association with funerals, allergic reactions to pollen, or a prior traumatic experience. Even photographs of flowers can be triggering.",
    prevalence: "Rare",
    category: "Natural",
    accentColor: "#f472b6",
    backgroundImage:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc43?w=1920&q=80",
  },
  {
    id: "anthropophobia",
    name: "Anthropophobia",
    fear: "people or human company",
    keywords: [
      "people",
      "humans",
      "society",
      "crowd",
      "social",
      "interaction",
      "company",
    ],
    description:
      "Anthropophobia is a profound fear of people or human company that goes beyond ordinary shyness or social anxiety. Sufferers may withdraw entirely from society, unable to interact even with family. In Japanese culture, a related condition called Taijin kyofusho describes extreme fear of offending others through one's own behaviour.",
    prevalence: "Uncommon; culturally variable",
    category: "Social",
    accentColor: "#a78bfa",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "antlophobia",
    name: "Antlophobia",
    fear: "floods",
    keywords: [
      "flood",
      "flooding",
      "water",
      "deluge",
      "rain",
      "inundation",
      "drowning",
    ],
    description:
      "Antlophobia is a fear of floods or flooding. Often precipitated by direct experience of a flood or media coverage of flood disasters, it leads to extreme weather-monitoring behaviours, refusal to live in low-lying areas, and anxiety responses triggered by heavy rainfall or news of flooding anywhere in the world.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1920&q=80",
  },
  {
    id: "anuptaphobia",
    name: "Anuptaphobia",
    fear: "staying single",
    keywords: [
      "single",
      "alone",
      "unmarried",
      "loneliness",
      "partner",
      "relationship",
      "solitude",
    ],
    description:
      "Anuptaphobia is the fear of remaining single or never finding a romantic partner. Sufferers may rush into unsuitable relationships simply to avoid solitude, tolerate abusive situations, or experience intense distress around social milestones like weddings. It can severely impair judgement in romantic decision-making.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "apeirophobia",
    name: "Apeirophobia",
    fear: "infinity or eternity",
    keywords: [
      "infinity",
      "forever",
      "eternity",
      "endless",
      "infinite",
      "perpetual",
      "cosmic",
    ],
    description:
      "Apeirophobia is a fear of infinity or eternity — the concept of something without end. Contemplating the endless nature of time, space, or existence can trigger profound existential panic. Sufferers may be unable to think about death (as eternal non-existence), space, or mathematical infinity without experiencing severe anxiety and depersonalisation.",
    prevalence: "Rare; philosophically triggered",
    category: "Existential",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
  },
  {
    id: "aphenphosmphobia",
    name: "Aphenphosmphobia",
    fear: "being touched",
    keywords: [
      "touch",
      "touching",
      "contact",
      "physical",
      "hug",
      "handshake",
      "skin",
    ],
    description:
      "Aphenphosmphobia (also called haphephobia or chiraptophobia) is an intense fear of being touched by other people. Unlike tactile defensiveness seen in sensory processing conditions, this phobia involves overwhelming anxiety and panic triggered specifically by the prospect or reality of physical contact, even from known loved ones.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#c084fc",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "apiphobia",
    name: "Apiphobia",
    fear: "bees",
    keywords: [
      "bee",
      "bees",
      "wasp",
      "sting",
      "honey",
      "buzz",
      "insect",
      "yellow jacket",
    ],
    description:
      "Apiphobia is a specific phobia of bees and related stinging insects such as wasps and hornets. Even for those without severe allergies, the fear can be debilitating — preventing outdoor activity, garden visits, and summer social events. The buzzing sound alone can trigger a panic response in severe cases.",
    prevalence: "Common",
    category: "Animal",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "aquaphobia",
    name: "Aquaphobia",
    fear: "water",
    keywords: [
      "water",
      "swimming",
      "pool",
      "drowning",
      "ocean",
      "lake",
      "river",
      "bath",
    ],
    description:
      "Aquaphobia is a broad fear of water that encompasses everything from bath water to the open ocean. It is distinct from thalassophobia (fear of deep water specifically) in that even shallow water triggers panic. It often prevents sufferers from learning to swim and significantly limits recreational and travel options.",
    prevalence: "Relatively common",
    category: "Environmental",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  },
  {
    id: "arachnophobia",
    name: "Arachnophobia",
    fear: "spiders",
    keywords: [
      "spider",
      "spiders",
      "arachnid",
      "arachnids",
      "tarantula",
      "web",
    ],
    description:
      "One of the most prevalent phobias in the world, arachnophobia is an intense, irrational fear of spiders and other arachnids. Sufferers may experience panic attacks, rapid heartbeat, and extreme avoidance behavior even at the sight of a small, harmless spider. The fear is believed to have deep evolutionary roots as a survival mechanism against venomous creatures.",
    prevalence: "30% of people",
    category: "Animal",
    accentColor: "#a78bfa",
    backgroundImage:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1920&q=80",
  },
  {
    id: "arithmophobia",
    name: "Arithmophobia",
    fear: "numbers",
    keywords: [
      "numbers",
      "maths",
      "mathematics",
      "arithmetic",
      "counting",
      "numerals",
      "digits",
    ],
    description:
      "Arithmophobia is a fear of numbers or arithmetic. Beyond math anxiety, it involves panic responses to numerical information of any kind. Sufferers may struggle to handle money, read timetables, or complete tax returns. Some develop specific fears of particular numbers (triskaidekaphobia for 13, for example) within the broader arithmophobia.",
    prevalence: "Uncommon",
    category: "Specific",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1920&q=80",
  },
  {
    id: "arrhenphobia",
    name: "Arrhenphobia",
    fear: "men",
    keywords: ["men", "males", "masculine", "male", "gender"],
    description:
      "Arrhenphobia is another term for androphobia — a fear of men. It can range from a mild unease in male company to a total inability to be in the presence of any male. Deeply linked to past trauma, it requires sensitive therapeutic intervention and can isolate sufferers from large parts of society.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "arsonphobia",
    name: "Arsonphobia",
    fear: "fire or arson",
    keywords: [
      "fire",
      "arson",
      "burn",
      "flames",
      "smoke",
      "wildfire",
      "arsonist",
    ],
    description:
      "Arsonphobia is a fear of fire or the deliberate setting of fires (arson). Sufferers may be hypervigilant about fire hazards in their homes, carry excessive amounts of smoke detectors, and experience panic at the smell of smoke or the sight of any open flame. Reported arson events in the news can trigger significant anxiety.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#f97316",
    backgroundImage:
      "https://images.unsplash.com/photo-1487553410026-84cd69b0ad9f?w=1920&q=80",
  },
  {
    id: "astraphobia",
    name: "Astraphobia",
    fear: "thunder and lightning",
    keywords: [
      "thunder",
      "lightning",
      "storm",
      "thunderstorm",
      "rain",
      "tempest",
      "weather",
    ],
    description:
      "Astraphobia is an abnormal fear of thunder and lightning. During storms, sufferers may hide under beds, refuse to leave their homes, or experience severe panic attacks. The unpredictable nature of storms and the sudden crashes of thunder are key triggers. It is one of the most common phobias shared between humans and animals alike.",
    prevalence: "2–3% of adults",
    category: "Environmental",
    accentColor: "#c084fc",
    backgroundImage:
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1920&q=80",
  },
  {
    id: "astrophobia",
    name: "Astrophobia",
    fear: "stars or outer space",
    keywords: [
      "stars",
      "space",
      "cosmos",
      "universe",
      "galaxy",
      "outer space",
      "night sky",
      "astronomy",
    ],
    description:
      "Astrophobia is a fear of stars, celestial objects, or the vastness of outer space. The incomprehensible scale of the universe and the cold emptiness of space trigger existential dread. Sufferers may be unable to look at a clear night sky or read astronomy content without experiencing profound anxiety or dissociation.",
    prevalence: "Rare",
    category: "Existential",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
  },
  {
    id: "ataxiophobia",
    name: "Ataxiophobia",
    fear: "disorder or untidiness",
    keywords: [
      "mess",
      "disorder",
      "untidy",
      "chaos",
      "clutter",
      "dirty",
      "disorganised",
    ],
    description:
      "Ataxiophobia is a fear of disorder, untidiness, or disorganisation. Sufferers may engage in extreme cleaning and organising rituals, become paralysed when environments are not arranged to their standards, and experience significant distress in naturally chaotic settings such as children's spaces or cluttered offices.",
    prevalence: "Rare as standalone phobia",
    category: "Situational",
    accentColor: "#a3e635",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "ataxophobia",
    name: "Ataxophobia",
    fear: "untidiness or disorder",
    keywords: [
      "mess",
      "untidy",
      "clutter",
      "chaos",
      "disorganised",
      "disorder",
    ],
    description:
      "Ataxophobia (also ataxiophobia) is the irrational dread of untidy or disorderly surroundings. While neat preferences are normal, ataxophobia renders sufferers unable to function in anything but perfectly ordered spaces. It overlaps with OCD-like compulsions and perfectionism, and can create severe interpersonal tensions at home and work.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#a3e635",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "atelophobia",
    name: "Atelophobia",
    fear: "imperfection",
    keywords: [
      "imperfection",
      "mistakes",
      "failure",
      "flaws",
      "imperfect",
      "errors",
      "inadequacy",
    ],
    description:
      "Atelophobia is a fear of being or becoming imperfect. Sufferers are tormented by their own perceived flaws and failures, setting impossibly high standards and experiencing distress when they inevitably fall short. It fuels extreme perfectionism, procrastination (to avoid attempting and failing), and chronic self-criticism, often co-occurring with depression.",
    prevalence: "Uncommon",
    category: "Emotional",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "athazagoraphobia",
    name: "Athazagoraphobia",
    fear: "being forgotten or ignored",
    keywords: [
      "forgotten",
      "ignored",
      "invisible",
      "overlooked",
      "neglected",
      "abandoned",
      "irrelevant",
    ],
    description:
      "Athazagoraphobia is a fear of being forgotten, ignored, or deemed unimportant by others. Sufferers engage in attention-seeking behaviours, become distressed when not acknowledged, and may obsessively seek validation on social media. The deep terror of leaving no trace in others' memories drives significant relationship dysfunction.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#a78bfa",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "atomosophobia",
    name: "Atomosophobia",
    fear: "atomic explosions",
    keywords: [
      "nuclear",
      "atomic",
      "bomb",
      "explosion",
      "radiation",
      "nuclear war",
      "fallout",
    ],
    description:
      'Atomosophobia is an intense fear of atomic explosions or nuclear warfare. While concern about nuclear weapons is rational, atomosophobia involves disproportionate panic triggered by news about nuclear power, geopolitical tensions, or even the word "nuclear." Sufferers may build bunkers, stockpile supplies, and experience debilitating anxiety during any international crisis.',
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#84cc16",
    backgroundImage:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1920&q=80",
  },
  {
    id: "atychiphobia",
    name: "Atychiphobia",
    fear: "failure",
    keywords: [
      "failure",
      "fail",
      "losing",
      "defeat",
      "mistake",
      "underperform",
      "rejection",
    ],
    description:
      "Atychiphobia is an intense, irrational fear of failure that paralyses action. Sufferers avoid any task where failure is possible — new jobs, relationships, creative projects — choosing safe inaction over potential failure. The phobia is closely linked to perfectionism, low self-worth, and a harsh inner critic, and often co-occurs with anxiety and depression.",
    prevalence: "Relatively common",
    category: "Emotional",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "autophobia",
    name: "Autophobia",
    fear: "being alone",
    keywords: [
      "alone",
      "solitude",
      "isolation",
      "lonely",
      "abandoned",
      "by myself",
      "solitary",
      "loneliness",
    ],
    description:
      "Autophobia is an intense fear of being alone or isolated. Unlike simple loneliness, autophobia involves persistent panic at the thought or reality of solitude — a deep belief that being alone means danger or abandonment. Sufferers fill every moment with social contact, struggle to be by themselves even briefly, and experience severe anxiety as evening draws near.",
    prevalence: "Affects those with attachment disorders",
    category: "Social",
    accentColor: "#a5b4fc",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "automatonophobia",
    name: "Automatonophobia",
    fear: "humanoid figures or robots",
    keywords: [
      "robot",
      "mannequin",
      "dummy",
      "puppet",
      "doll",
      "humanoid",
      "android",
      "wax figure",
    ],
    description:
      'Automatonophobia is a fear of humanoid figures that appear lifelike but are not alive — mannequins, wax figures, ventriloquist dummies, animatronic characters, or robots. The "uncanny valley" effect plays a central role: the closer something looks to human without being human, the more disturbing it becomes. Wax museums and theme parks are common triggers.',
    prevalence: "Uncommon",
    category: "Specific",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "autophagophobia",
    name: "Autophagophobia",
    fear: "being eaten alive",
    keywords: [
      "eaten",
      "predator",
      "devoured",
      "alive",
      "animal attack",
      "cannibalism",
    ],
    description:
      "Autophagophobia is a fear of being eaten alive by animals or people. This visceral phobia may manifest as a terror of shark or bear attacks, or in extreme cases, cannibalism. It can prevent sufferers from swimming in the ocean, visiting wildlife areas, or even eating at certain restaurants where large animal imagery is displayed.",
    prevalence: "Very rare",
    category: "Animal",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=80",
  },

  // ─── B ────────────────────────────────────────────────────────────────────

  {
    id: "bacteriophobia",
    name: "Bacteriophobia",
    fear: "bacteria",
    keywords: [
      "bacteria",
      "germs",
      "microbes",
      "infection",
      "contamination",
      "disease",
    ],
    description:
      "Bacteriophobia is an excessive fear of bacteria and microbial contamination. Sufferers may avoid touching surfaces, refuse to eat food prepared by others, and wash hands until skin is raw. It strongly overlaps with mysophobia and OCD, and can lead to social isolation as sufferers avoid communal spaces entirely.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "barophobia",
    name: "Barophobia",
    fear: "gravity",
    keywords: [
      "gravity",
      "weight",
      "heaviness",
      "falling",
      "crush",
      "pressure",
    ],
    description:
      "Barophobia is a rare phobia characterised by fear of gravity — either that gravity will become too strong and crush the person, or that it will disappear and they will float away. This existential physical fear affects a sufferer's relationship with their own body weight and the physical world, triggering panic in elevators or on escalators.",
    prevalence: "Very rare",
    category: "Existential",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
  },
  {
    id: "bathmophobia",
    name: "Bathmophobia",
    fear: "stairs or steep slopes",
    keywords: [
      "stairs",
      "steps",
      "slope",
      "staircase",
      "escalator",
      "gradient",
      "falling",
    ],
    description:
      "Bathmophobia is a fear of stairs, steps, or steep inclines. Sufferers may refuse to use multi-storey buildings, avoid escalators and hillside paths, and experience intense anxiety even viewing stairs from a distance. The fear often relates to a dread of falling, but can also be triggered by the visual distortion of depth perception on slopes.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    id: "batophobia",
    name: "Batophobia",
    fear: "being near tall buildings",
    keywords: [
      "tall buildings",
      "skyscrapers",
      "heights",
      "towering",
      "urban",
      "architecture",
    ],
    description:
      "Batophobia is a fear of being in proximity to tall structures such as skyscrapers, towers, or large buildings. The sense of being dwarfed or overshadowed by vast vertical structures creates overwhelming anxiety. It differs from acrophobia (fear of being high up) in that the fear is triggered at ground level simply by the presence of towering structures.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "batrachophobia",
    name: "Batrachophobia",
    fear: "amphibians",
    keywords: [
      "frog",
      "toad",
      "salamander",
      "newt",
      "amphibian",
      "slippery",
      "wet",
    ],
    description:
      "Batrachophobia is a fear of amphibians — primarily frogs, toads, and salamanders. The slippery skin, erratic movement, and moist texture of these animals trigger intense disgust and panic in sufferers. Even cartoon or toy representations of frogs can provoke an anxiety response in severe cases.",
    prevalence: "Uncommon",
    category: "Animal",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=1920&q=80",
  },
  {
    id: "belonephobia",
    name: "Belonephobia",
    fear: "pins and needles",
    keywords: [
      "pins",
      "needles",
      "sharp",
      "pointed",
      "sewing",
      "acupuncture",
      "syringe",
    ],
    description:
      "Belonephobia is a fear of sharp pointed objects, specifically pins and needles. Closely related to aichmophobia, it prevents sufferers from engaging in sewing, craft activities, and crucially, medical procedures involving injections. The phobia often triggers a fainting response (vasovagal syncope) upon sight of the triggering object.",
    prevalence: "Uncommon",
    category: "Specific",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "bibliophobia",
    name: "Bibliophobia",
    fear: "books",
    keywords: [
      "books",
      "reading",
      "library",
      "literature",
      "text",
      "written word",
    ],
    description:
      "Bibliophobia is a fear or hatred of books and reading. Beyond simple reading difficulties, sufferers experience genuine anxiety and panic when confronted with books, libraries, or the prospect of reading. It may stem from traumatic educational experiences, learning difficulties, or associations between books and oppressive authority.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80",
  },
  {
    id: "bogyphobia",
    name: "Bogyphobia",
    fear: "bogeymen or supernatural monsters",
    keywords: [
      "bogeyman",
      "monster",
      "supernatural",
      "ghost",
      "demon",
      "creature",
      "paranormal",
    ],
    description:
      "Bogyphobia is a fear of bogeymen or imagined supernatural monsters, often persisting from childhood into adulthood. Sufferers may be unable to be alone at night, avoid horror media entirely, and experience real panic from fictional or imagined threats. The fear is deeply rooted in imagination and the biological threat-detection system misfiring.",
    prevalence: "Common in children; uncommon in adults",
    category: "Supernatural",
    accentColor: "#7c3aed",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "bromidrophobia",
    name: "Bromidrophobia",
    fear: "body odour",
    keywords: [
      "smell",
      "odour",
      "body odor",
      "sweat",
      "stink",
      "hygiene",
      "scent",
    ],
    description:
      "Bromidrophobia is an intense fear of body odour, either one's own or others'. Sufferers may shower multiple times daily, refuse to exercise, avoid crowded spaces, and become obsessively preoccupied with whether they smell. In severe cases they avoid social situations entirely, convinced their odour will disgust or offend others.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#84cc16",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "brontophobia",
    name: "Brontophobia",
    fear: "thunder",
    keywords: [
      "thunder",
      "storm",
      "lightning",
      "noise",
      "loud",
      "crash",
      "weather",
    ],
    description:
      "Brontophobia is a specific fear of thunder, often occurring as part of or alongside astraphobia. The sudden, unpredictable explosive sound of a thunderclap triggers a primal startle response that becomes conditioned into a phobia. Sufferers monitor weather reports obsessively and may refuse to leave home during storm season.",
    prevalence: "Common",
    category: "Environmental",
    accentColor: "#c084fc",
    backgroundImage:
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1920&q=80",
  },

  // ─── C ────────────────────────────────────────────────────────────────────

  {
    id: "cacophobia",
    name: "Cacophobia",
    fear: "ugliness",
    keywords: [
      "ugly",
      "ugliness",
      "deformity",
      "aesthetics",
      "appearance",
      "disfigurement",
    ],
    description:
      "Cacophobia is a fear of ugliness or aesthetically unpleasant things. This can extend to people, objects, or environments perceived as physically ugly or deformed. Sufferers may avoid mirrors if they perceive themselves as ugly (overlapping with body dysmorphia) or become unable to enter certain buildings or view certain artworks.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#78716c",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "cainophobia",
    name: "Cainophobia",
    fear: "novelty or new things",
    keywords: [
      "new",
      "novelty",
      "change",
      "unfamiliar",
      "innovation",
      "different",
    ],
    description:
      "Cainophobia (also neophobia) is a fear of anything new or novel. This includes new foods, new places, new technologies, or any change from established routines. It creates extreme rigidity in lifestyle and prevents sufferers from adapting to life changes, making them especially vulnerable during periods of rapid social or technological change.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#06b6d4",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "caligynephobia",
    name: "Caligynephobia",
    fear: "beautiful women",
    keywords: [
      "beautiful women",
      "women",
      "attractive",
      "female beauty",
      "appearance",
    ],
    description:
      "Caligynephobia (also venustraphobia) is a fear of beautiful women, primarily experienced by men. Sufferers become intensely anxious, tongue-tied, or avoidant in the presence of women they perceive as attractive. It can severely hinder romantic relationships and professional interactions with female colleagues. Low self-esteem is often at the core.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "cancerophobia",
    name: "Cancerophobia",
    fear: "cancer",
    keywords: [
      "cancer",
      "tumour",
      "illness",
      "terminal",
      "malignant",
      "disease",
      "chemotherapy",
    ],
    description:
      "Cancerophobia (also carcinophobia) is an irrational, persistent fear of developing cancer. Sufferers repeatedly seek medical reassurance, avoid doctors out of fear of diagnosis, or both. Every unexplained physical symptom becomes potential cancer evidence. The phobia can prevent actual cancer screening, making it a genuine health risk.",
    prevalence: "Relatively common in health anxiety",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "carcinophobia",
    name: "Carcinophobia",
    fear: "cancer",
    keywords: [
      "cancer",
      "carcinoma",
      "tumour",
      "malignant",
      "illness",
      "disease",
    ],
    description:
      "Carcinophobia is the clinical fear of cancer. An obsessive preoccupation with the possibility of developing cancer leads to constant self-examination, repeated medical consultations, and avoidance of known carcinogens to a debilitating degree. It represents one of the most common health-related phobias in developed nations.",
    prevalence: "Common in health anxiety populations",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "carnophobia",
    name: "Carnophobia",
    fear: "meat",
    keywords: [
      "meat",
      "flesh",
      "raw meat",
      "animal flesh",
      "beef",
      "blood",
      "food",
    ],
    description:
      "Carnophobia is a fear of meat or raw flesh. Sufferers may be unable to handle or view meat, experiencing nausea, panic, or gagging. It can stem from slaughterhouse imagery, disgust sensitivity, or traumatic encounters. While many carnophobes are vegetarian or vegan by preference, the phobia represents a pathological response.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#dc2626",
    backgroundImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1920&q=80",
  },
  {
    id: "catoptrophobia",
    name: "Catoptrophobia",
    fear: "mirrors",
    keywords: [
      "mirror",
      "reflection",
      "glass",
      "looking glass",
      "self",
      "image",
    ],
    description:
      "Catoptrophobia is an intense fear of mirrors or one's own reflection. The phobia may relate to fear of the supernatural (mirrors as portals), distorted self-image (body dysmorphia), or a fear of confronting one's own identity. In severe cases, all mirrors in the sufferer's home are covered or removed.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "cenophobia",
    name: "Cenophobia",
    fear: "empty rooms",
    keywords: [
      "empty room",
      "bare",
      "void",
      "vacant",
      "hollow",
      "emptiness",
      "space",
    ],
    description:
      "Cenophobia (also kenophobia) is a fear of empty or bare spaces — unfurnished rooms, vast empty halls, or any space devoid of objects or people. The absence of familiar environmental cues creates profound unease. Sufferers may fill every room compulsively and feel unable to enter newly vacant properties.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "ceraunophobia",
    name: "Ceraunophobia",
    fear: "thunder and lightning",
    keywords: [
      "thunder",
      "lightning",
      "storm",
      "bolt",
      "electrocution",
      "weather",
      "sky",
    ],
    description:
      "Ceraunophobia is an intense fear of thunder and lightning, closely related to astraphobia and brontophobia. The specific terror of being struck by lightning or witnessing lightning can prevent sufferers from going outdoors during any overcast weather, and cause extreme distress during electrical storms indoors.",
    prevalence: "Common",
    category: "Environmental",
    accentColor: "#c084fc",
    backgroundImage:
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1920&q=80",
  },
  {
    id: "chaetophobia",
    name: "Chaetophobia",
    fear: "hair",
    keywords: [
      "hair",
      "body hair",
      "fur",
      "strands",
      "hair loss",
      "loose hair",
    ],
    description:
      "Chaetophobia is a fear of hair, particularly loose hair detached from the body — found on drains, hairbrushes, or surfaces. The sight of hair in unexpected places triggers intense revulsion or panic. In some cases, the phobia extends to body hair or hair on other people, severely limiting physical intimacy.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "cherophobia",
    name: "Cherophobia",
    fear: "happiness or cheerfulness",
    keywords: [
      "happiness",
      "joy",
      "cheer",
      "celebration",
      "smile",
      "positive",
      "euphoria",
    ],
    description:
      "Cherophobia is an irrational aversion to happiness or cheerfulness — not the inability to feel joy, but the active fear of it. Sufferers believe joy will be followed by catastrophe, so they avoid all situations that might cause happiness. It is deeply linked to depression, trauma, and cultural guilt around positive emotion.",
    prevalence: "Uncommon",
    category: "Emotional",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "chionophobia",
    name: "Chionophobia",
    fear: "snow",
    keywords: [
      "snow",
      "blizzard",
      "ice",
      "winter",
      "cold",
      "snowfall",
      "frost",
    ],
    description:
      "Chionophobia is an extreme fear of snow or snowy conditions. Beyond sensible cold-weather caution, sufferers may refuse to leave home during any snowfall, experience panic at weather forecasts of snow, or relocate to warmer climates entirely. It can relate to fears of being buried, cold, car accidents, or childhood trauma in snowy environments.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#bfdbfe",
    backgroundImage:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&q=80",
  },
  {
    id: "chiroptophobia",
    name: "Chiroptophobia",
    fear: "bats",
    keywords: [
      "bat",
      "bats",
      "vampire",
      "nocturnal",
      "wings",
      "caves",
      "flying",
    ],
    description:
      "Chiroptophobia is a fear of bats, combining elements of animal phobia with associations of disease (rabies), vampirism, and the eerie nature of their nocturnal movement. The erratic, silent flight of bats and their association with darkness and caves make them one of the more culturally loaded phobic triggers.",
    prevalence: "Uncommon",
    category: "Animal",
    accentColor: "#7c3aed",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "chorophobia",
    name: "Chorophobia",
    fear: "dancing",
    keywords: [
      "dancing",
      "dance",
      "music",
      "movement",
      "rhythm",
      "choreography",
      "performance",
    ],
    description:
      "Chorophobia is a fear of dancing — either watching it or participating in it. Beyond simple embarrassment at having two left feet, sufferers experience genuine panic at the prospect of dancing or viewing others dance. It may relate to performance anxiety, body image concerns, or religious and cultural taboos around bodily expression.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=1920&q=80",
  },
  {
    id: "chromophobia",
    name: "Chromophobia",
    fear: "colours",
    keywords: [
      "colour",
      "color",
      "bright",
      "vivid",
      "hue",
      "shade",
      "spectrum",
    ],
    description:
      "Chromophobia is an irrational fear of colours or certain colours. Sufferers may be overwhelmed by brightly coloured environments, refuse to wear certain colours, or experience anxiety in art galleries. Specific colour fears (red, yellow, etc.) may carry symbolic weight from traumatic associations, cultural meaning, or sensory sensitivities.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "chronomentrophobia",
    name: "Chronomentrophobia",
    fear: "clocks or time",
    keywords: [
      "clock",
      "time",
      "ticking",
      "deadline",
      "watch",
      "countdown",
      "alarm",
    ],
    description:
      "Chronomentrophobia is a fear of clocks and the passage of time. The ticking of clocks, countdowns, and any reminder that time is moving forward triggers intense anxiety. Linked to mortality fears, deadline pressure trauma, and existential dread about time running out, it can lead to removing all clocks from one's living space.",
    prevalence: "Rare",
    category: "Existential",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1920&q=80",
  },
  {
    id: "claustrophobia",
    name: "Claustrophobia",
    fear: "confined spaces",
    keywords: [
      "confined",
      "small space",
      "enclosed",
      "tight",
      "trapped",
      "elevator",
      "tunnel",
      "closet",
      "box",
    ],
    description:
      "Claustrophobia manifests as severe anxiety when in or anticipating being in enclosed or confined spaces. From elevators and MRI machines to crowded rooms and tunnels, sufferers experience a suffocating sense of entrapment. The fear is strongly linked to loss of control and the anticipation of being unable to escape.",
    prevalence: "12.5% of people",
    category: "Situational",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?w=1920&q=80",
  },
  {
    id: "cleithrophobia",
    name: "Cleithrophobia",
    fear: "being locked in",
    keywords: [
      "locked",
      "trapped",
      "confined",
      "unable to escape",
      "locked in",
      "prison",
      "cage",
    ],
    description:
      "Cleithrophobia is a specific phobia of being locked in or unable to escape an enclosed space. Unlike claustrophobia (fear of small spaces), cleithrophobia is specifically triggered by the idea of being unable to exit — the panic response is about the inability to escape rather than the space itself.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?w=1920&q=80",
  },
  {
    id: "climacophobia",
    name: "Climacophobia",
    fear: "climbing stairs",
    keywords: ["stairs", "climbing", "steps", "ladders", "ascent", "falling"],
    description:
      "Climacophobia is a fear of climbing stairs, ladders, or inclines. It differs from bathmophobia (fear of stairs/slopes) by focusing on the act of climbing rather than the object itself. The physical vulnerability of ascending — one stumble could cause a fall — combined with height triggers panic in sufferers.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    id: "clinophobia",
    name: "Clinophobia",
    fear: "going to bed",
    keywords: [
      "bed",
      "sleep",
      "bedtime",
      "lying down",
      "night",
      "rest",
      "insomnia",
    ],
    description:
      "Clinophobia is a fear of going to bed, often linked to fear of death during sleep, recurring nightmares, trauma associated with bedtime, or sleep paralysis. Sufferers delay sleep for as long as possible, leading to severe sleep deprivation with knock-on effects on mental and physical health.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#818cf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "coimetrophobia",
    name: "Coimetrophobia",
    fear: "cemeteries",
    keywords: [
      "cemetery",
      "graveyard",
      "graves",
      "tombstone",
      "burial",
      "death",
      "coffin",
    ],
    description:
      "Coimetrophobia is an intense fear of cemeteries or graveyards. Beyond typical unease in the presence of death, sufferers cannot approach cemeteries, experience panic on funeral routes, and may refuse to attend burial services of loved ones. The symbolism of death and the supernatural associations of graveyards are key triggers.",
    prevalence: "Uncommon",
    category: "Existential",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?w=1920&q=80",
  },
  {
    id: "coitophobia",
    name: "Coitophobia",
    fear: "sexual intercourse",
    keywords: [
      "sex",
      "intercourse",
      "intimacy",
      "sexual activity",
      "penetration",
      "coitus",
    ],
    description:
      "Coitophobia (also erotophobia or genophobia) is a fear of sexual intercourse. Rooted in trauma, religious guilt, performance anxiety, or disgust responses, it can prevent intimate relationships entirely. Sufferers may deeply desire partnership while experiencing overwhelming panic at physical intimacy, causing significant emotional suffering.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "contreltophobia",
    name: "Contreltophobia",
    fear: "sexual abuse",
    keywords: [
      "sexual abuse",
      "molestation",
      "assault",
      "harassment",
      "violation",
    ],
    description:
      "Contreltophobia is a fear of sexual abuse or molestation. Common in survivors of sexual trauma, it creates hypervigilance in social situations, significant trust difficulties, and avoidance of physical closeness. Professional trauma therapy is typically required to address its roots.",
    prevalence: "Uncommon; trauma-linked",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "coprastasophobia",
    name: "Coprastasophobia",
    fear: "constipation",
    keywords: [
      "constipation",
      "bowels",
      "digestion",
      "stomach",
      "intestines",
      "health",
      "defecation",
    ],
    description:
      "Coprastasophobia is a fear of constipation or bowel obstruction. Sufferers may take excessive laxatives, obsessively monitor digestive function, follow extreme dietary restrictions, and experience anxiety at any sensation of digestive sluggishness. It overlaps significantly with health anxiety and obsessive-compulsive traits.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "coulrophobia",
    name: "Coulrophobia",
    fear: "clowns",
    keywords: [
      "clown",
      "clowns",
      "circus",
      "makeup",
      "costume",
      "performer",
      "joker",
      "face paint",
    ],
    description:
      "Coulrophobia is an abnormal and persistent fear of clowns. The exaggerated facial features, concealed identity, and unpredictable behavior of clowns are deeply unsettling to sufferers. Pop culture portrayals of sinister clowns have significantly amplified this phobia, though it often has roots in early childhood encounters with a figure that couldn't be read.",
    prevalence: "12% of adults",
    category: "Social",
    accentColor: "#ec4899",
    backgroundImage:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80",
  },
  {
    id: "cyberphobia",
    name: "Cyberphobia",
    fear: "computers or technology",
    keywords: [
      "computers",
      "technology",
      "internet",
      "digital",
      "screens",
      "software",
      "tech",
    ],
    description:
      "Cyberphobia is a fear of computers, technology, or working with digital devices. As technology becomes ever more integral to daily life and work, this phobia becomes increasingly debilitating. Sufferers may avoid smartphones, refuse to use email, and experience workplace exclusion as a result of their inability to engage with modern digital infrastructure.",
    prevalence: "Increasingly rare but significant",
    category: "Situational",
    accentColor: "#3b82f6",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "cynophobia",
    name: "Cynophobia",
    fear: "dogs",
    keywords: [
      "dog",
      "dogs",
      "canine",
      "puppy",
      "bark",
      "bite",
      "hound",
      "pet",
    ],
    description:
      "Cynophobia is an intense, persistent fear of dogs that extends far beyond simple nervousness. Often stemming from a traumatic childhood encounter, sufferers may cross streets to avoid dogs, refuse to visit friends with pets, or experience panic attacks when hearing barking. It significantly impacts daily life given how commonly dogs appear as companions.",
    prevalence: "7–9% of people",
    category: "Animal",
    accentColor: "#fb923c",
    backgroundImage:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80",
  },

  // ─── D ────────────────────────────────────────────────────────────────────

  {
    id: "decidophobia",
    name: "Decidophobia",
    fear: "making decisions",
    keywords: [
      "decisions",
      "choices",
      "deciding",
      "options",
      "commitment",
      "choosing",
      "uncertainty",
    ],
    description:
      "Decidophobia is a fear of making decisions. The responsibility of choice triggers intense anxiety, leading to chronic indecision, dependence on others to decide, and avoidance of any situation requiring a commitment. Rooted in fear of making mistakes or taking responsibility for outcomes, it can paralyse professional and personal life.",
    prevalence: "Uncommon",
    category: "Emotional",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "deipnophobia",
    name: "Deipnophobia",
    fear: "dining or dinner conversations",
    keywords: [
      "dining",
      "dinner",
      "eating",
      "restaurant",
      "table",
      "conversation",
      "meal",
      "social eating",
    ],
    description:
      "Deipnophobia is a fear of dining with others or of dinner-table conversations. The social performance demanded at communal meals — eating correctly, making conversation, being observed — creates overwhelming anxiety. Sufferers may skip meals at social events, avoid restaurants entirely, and excuse themselves from family dinners.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#f97316",
    backgroundImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1920&q=80",
  },
  {
    id: "dementophobia",
    name: "Dementophobia",
    fear: "insanity or losing one's mind",
    keywords: [
      "madness",
      "insanity",
      "mental illness",
      "dementia",
      "losing mind",
      "psychosis",
      "crazy",
    ],
    description:
      "Dementophobia is a fear of going insane or losing one's mental faculties. The terror of losing grip on reality, acting in uncontrollable ways, or being institutionalised can itself cause significant psychological distress. It often manifests in those with anxiety disorders, who fear their own panic responses are signs of imminent mental breakdown.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#7c3aed",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80",
  },
  {
    id: "demonophobia",
    name: "Demonophobia",
    fear: "demons or evil spirits",
    keywords: [
      "demon",
      "devil",
      "evil spirit",
      "possession",
      "satanic",
      "supernatural",
      "hell",
    ],
    description:
      "Demonophobia is an intense fear of demons, evil spirits, or supernatural malevolent entities. Closely associated with religious upbringings where such entities are presented as real threats, it can cause sufferers to fear they are being watched, followed, or targeted by malign supernatural forces, leading to extreme religious rituals or avoidance behaviours.",
    prevalence: "Uncommon; culturally variable",
    category: "Supernatural",
    accentColor: "#7c3aed",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "dendrophobia",
    name: "Dendrophobia",
    fear: "trees",
    keywords: [
      "trees",
      "forest",
      "wood",
      "woods",
      "branches",
      "nature",
      "tree",
    ],
    description:
      "Dendrophobia is an irrational fear of trees or forests. The enclosed canopy, creaking branches, unknown inhabitants, and sense of being dwarfed by ancient living organisms triggers intense anxiety. Sufferers may be unable to walk through wooded areas, forests, or even tree-lined streets during windy conditions.",
    prevalence: "Rare",
    category: "Natural",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
  },
  {
    id: "dentophobia",
    name: "Dentophobia",
    fear: "dentists or dental procedures",
    keywords: [
      "dentist",
      "teeth",
      "dental",
      "tooth",
      "drill",
      "extraction",
      "oral health",
      "braces",
    ],
    description:
      "Dentophobia is one of the most common specific phobias globally, involving intense fear of visiting dentists or undergoing dental procedures. The combination of pain, loss of control, invasive tools in the mouth, and the particular sounds of dental equipment makes it a particularly multi-sensory trigger. It leads to years of avoided dental care and serious oral health consequences.",
    prevalence: "36% experience some degree of dental fear",
    category: "Health-Based",
    accentColor: "#e0f2fe",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "didaskaleinophobia",
    name: "Didaskaleinophobia",
    fear: "going to school",
    keywords: [
      "school",
      "education",
      "classroom",
      "teacher",
      "learning",
      "pupils",
      "exams",
    ],
    description:
      "Didaskaleinophobia (also scolionophobia) is a fear of school. Distinct from truancy, it involves genuine physical panic — stomach aches, crying, clinging — in children and adolescents at the prospect of attending school. Causes include bullying, academic pressure, social anxiety, and difficult teachers. In adulthood it can evolve into anxiety about learning institutions generally.",
    prevalence: "Relatively common in children",
    category: "Social",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "dikephobia",
    name: "Dikephobia",
    fear: "justice or courtrooms",
    keywords: [
      "justice",
      "court",
      "law",
      "legal",
      "judge",
      "trial",
      "verdict",
      "police",
    ],
    description:
      "Dikephobia is a fear of justice, legal proceedings, or courtroom settings. Even innocent people experience extreme anxiety around legal confrontation. Sufferers may be unable to pursue legitimate legal remedies for wrongs done to them, avoid all contact with law enforcement, or experience panic attacks when summoned for jury duty.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "dinophobia",
    name: "Dinophobia",
    fear: "dizziness or whirlpools",
    keywords: [
      "dizzy",
      "dizziness",
      "whirlpool",
      "spinning",
      "vertigo",
      "rotation",
      "vortex",
    ],
    description:
      "Dinophobia is a fear of dizziness or being pulled into a whirlpool or vortex. The sensation of spinning or disorientation — whether from an inner ear condition, a carnival ride, or even abstract images — triggers panic. The fear of losing bodily control through dizziness can prevent sufferers from many recreational activities.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=80",
  },
  {
    id: "diplophobia",
    name: "Diplophobia",
    fear: "double vision",
    keywords: [
      "double vision",
      "vision",
      "eyesight",
      "blur",
      "eyes",
      "sight",
      "visual",
    ],
    description:
      "Diplophobia is a fear of experiencing double vision. Sufferers may compulsively test their eyesight, avoid activities associated with visual strain, and experience significant anxiety at any blurring or visual disturbance. The fear often relates to wider health anxiety about neurological conditions that can cause diplopia.",
    prevalence: "Very rare",
    category: "Health-Based",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "dipsophobia",
    name: "Dipsophobia",
    fear: "drinking alcohol",
    keywords: [
      "alcohol",
      "drinking",
      "drunk",
      "wine",
      "spirits",
      "intoxication",
      "loss of control",
    ],
    description:
      "Dipsophobia is a fear of drinking alcoholic beverages, primarily from terror of losing control, behaving shamefully, or becoming addicted. It can result from witnessing alcoholism in a parent, personal past experiences with intoxication, or religious prohibition. Paradoxically, some sufferers oscillate between this fear and dependent drinking.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#dc2626",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "domatophobia",
    name: "Domatophobia",
    fear: "houses or being in a house",
    keywords: [
      "house",
      "home",
      "building",
      "indoors",
      "confined",
      "walls",
      "shelter",
    ],
    description:
      "Domatophobia (also oikophobia) is a fear of being inside houses or buildings. The sense of confinement, inability to see outside threats, or association of domestic spaces with traumatic events drives sufferers to prefer outdoor environments. Severe cases involve an inability to sleep indoors.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "doraphobia",
    name: "Doraphobia",
    fear: "animal fur or skin",
    keywords: ["fur", "skin", "animal", "coat", "pelt", "texture", "touch"],
    description:
      "Doraphobia is a fear of animal fur, skins, or pelts. The texture, smell, and appearance of animal fur — whether on a living animal or as a coat — triggers intense revulsion. Sufferers may be unable to wear or touch fur or leather products and experience panic at petting animals.",
    prevalence: "Rare",
    category: "Animal",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
  },
  {
    id: "dysmorphophobia",
    name: "Dysmorphophobia",
    fear: "bodily defects or deformity",
    keywords: [
      "body image",
      "appearance",
      "deformity",
      "disfigurement",
      "looks",
      "ugly",
      "flaws",
    ],
    description:
      "Dysmorphophobia (Body Dysmorphic Disorder) is a preoccupation with perceived defects or flaws in physical appearance that are not observable or appear minor to others. Sufferers spend hours daily checking mirrors, seeking reassurance, and comparing themselves to others. It causes significant impairment and carries high rates of suicidal ideation.",
    prevalence: "1.7–2.9% of the general population",
    category: "Health-Based",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },

  // ─── E ────────────────────────────────────────────────────────────────────

  {
    id: "ecophobia",
    name: "Ecophobia",
    fear: "home or one's environment",
    keywords: [
      "home",
      "environment",
      "house",
      "surroundings",
      "domestic",
      "space",
    ],
    description:
      "Ecophobia broadly describes an intense anxiety related to one's home environment or domestic surroundings. It can manifest as a fear of the home being contaminated, unsafe, or oppressive. Distinguished from oikophobia primarily by the environmental safety angle rather than the physical confinement aspect.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "eisoptrophobia",
    name: "Eisoptrophobia",
    fear: "mirrors or seeing oneself in a mirror",
    keywords: [
      "mirror",
      "reflection",
      "self-image",
      "glass",
      "looking glass",
      "appearance",
    ],
    description:
      "Eisoptrophobia is a fear of mirrors or one's own reflected image. Beyond catoptrophobia's supernatural angle, eisoptrophobia centres specifically on seeing oneself — the confrontation with self-image, identity, or feared changes in appearance. Sufferers avoid reflective surfaces and may cover mirrors at home.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "electrophobia",
    name: "Electrophobia",
    fear: "electricity",
    keywords: [
      "electricity",
      "electric shock",
      "lightning",
      "power",
      "wires",
      "voltage",
      "electrocution",
    ],
    description:
      "Electrophobia is a fear of electricity, electrical appliances, or the risk of electrocution. Sufferers may avoid using electrical outlets, refuse to charge devices near their body during sleep, and experience significant anxiety during storms. It can lead to refusal of necessary medical treatments such as ECG or defibrillation.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1920&q=80",
  },
  {
    id: "eleutherophobia",
    name: "Eleutherophobia",
    fear: "freedom",
    keywords: [
      "freedom",
      "liberty",
      "choice",
      "independence",
      "autonomy",
      "free will",
    ],
    description:
      "Eleutherophobia is an uncommon fear of freedom or of making free choices. The vast, unstructured nature of personal freedom triggers anxiety rather than excitement. Often seen in those accustomed to highly controlled environments (institutional, religious, or familial), the prospect of self-determination feels overwhelming and threatening.",
    prevalence: "Rare",
    category: "Existential",
    accentColor: "#a78bfa",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "emetophobia",
    name: "Emetophobia",
    fear: "vomiting",
    keywords: [
      "vomit",
      "sick",
      "nausea",
      "throwing up",
      "nauseous",
      "motion sickness",
      "stomach",
    ],
    description:
      'Emetophobia is an intense, pervasive fear of vomiting — either oneself or others being sick. One of the more common specific phobias, it leads to extreme dietary restrictions (only "safe" foods), avoidance of illness-prone environments, and refusal of medication that might cause nausea. It has significant impact on eating behaviour and can resemble or coexist with eating disorders.',
    prevalence: "0.1–8.8% of the population",
    category: "Health-Based",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "entomophobia",
    name: "Entomophobia",
    fear: "insects",
    keywords: [
      "insects",
      "bugs",
      "beetle",
      "ant",
      "cockroach",
      "bee",
      "wasp",
      "fly",
      "creepy crawly",
      "bug",
    ],
    description:
      "Entomophobia is a broad phobia encompassing fear of all or certain types of insects. From cockroaches to bees, the disgust and threat response triggered by insects is amplified to pathological levels. Sufferers may struggle to go outdoors, become hyper-vigilant in their homes, and experience full panic attacks upon encountering even the most harmless of insects.",
    prevalence: "Affects millions",
    category: "Animal",
    accentColor: "#84cc16",
    backgroundImage:
      "https://images.unsplash.com/photo-1526060399062-7efbda485e53?w=1920&q=80",
  },
  {
    id: "eosophobia",
    name: "Eosophobia",
    fear: "dawn or daylight",
    keywords: ["dawn", "daylight", "sunrise", "morning", "light", "daytime"],
    description:
      "Eosophobia is a fear of dawn or daylight. Unlike those who prefer night, sufferers experience genuine anxiety as daylight approaches. It may be linked to obligations and social exposure that daylight brings, sensitivity to light, or nocturnal lifestyle trauma. The approach of morning creates intense dread rather than welcome.",
    prevalence: "Very rare",
    category: "Environmental",
    accentColor: "#fb923c",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "epistaxiophobia",
    name: "Epistaxiophobia",
    fear: "nosebleeds",
    keywords: [
      "nosebleed",
      "bleeding",
      "nose",
      "blood",
      "haemorrhage",
      "nose bleed",
    ],
    description:
      "Epistaxiophobia is an irrational fear of nosebleeds. The sudden appearance of blood from the face triggers intense panic, potentially rooted in vasovagal responses to blood or fear of uncontrollable haemorrhage. Sufferers may avoid anything that could cause a nosebleed, including blowing their nose firmly or flying in aircraft.",
    prevalence: "Very rare",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "epistemophobia",
    name: "Epistemophobia",
    fear: "knowledge",
    keywords: [
      "knowledge",
      "learning",
      "information",
      "facts",
      "truth",
      "discovery",
    ],
    description:
      "Epistemophobia is a fear of knowledge or of acquiring new information. The idea that learning something new might be disturbing, destabilising to one's worldview, or implicate one in decisions triggers intense avoidance. It may arise in those whose past encounters with difficult knowledge (traumatic truths, upsetting facts) have been associated with distress.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80",
  },
  {
    id: "equinophobia",
    name: "Equinophobia",
    fear: "horses",
    keywords: [
      "horse",
      "horses",
      "equine",
      "riding",
      "hooves",
      "stable",
      "stallion",
    ],
    description:
      "Equinophobia (also hippophobia) is a fear of horses. Despite horses being widely regarded as noble and gentle, their size, speed, and unpredictability triggers intense fear in sufferers. Often stemming from childhood riding accidents or being kicked or startled by a horse, the phobia prevents equestrian activities and visits to rural areas.",
    prevalence: "Uncommon",
    category: "Animal",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
  },
  {
    id: "erotophobia",
    name: "Erotophobia",
    fear: "sexuality or sexual love",
    keywords: [
      "sex",
      "sexuality",
      "love",
      "intimacy",
      "desire",
      "romantic",
      "erotic",
    ],
    description:
      "Erotophobia is a broad fear of sexuality, encompassing fear of sexual intercourse, sexual desire, sexual imagery, or romantic intimacy. It ranges from mild discomfort with sexual topics to complete avoidance of romantic relationships. Rooted in trauma, religious prohibition, abuse history, or shame, it requires sensitive therapeutic support.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "erythrophobia",
    name: "Erythrophobia",
    fear: "blushing",
    keywords: [
      "blushing",
      "red face",
      "flush",
      "embarrassment",
      "redness",
      "cheeks",
      "visible emotion",
    ],
    description:
      "Erythrophobia is an intense fear of blushing, particularly in social situations. The self-conscious awareness that one might blush — and the humiliation this implies — actually triggers blushing, creating a vicious cycle. It is closely related to social anxiety disorder and can lead to extreme avoidance of social contact to prevent the feared blush.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },

  // ─── F ────────────────────────────────────────────────────────────────────

  {
    id: "febriphobia",
    name: "Febriphobia",
    fear: "fever",
    keywords: [
      "fever",
      "temperature",
      "heat",
      "illness",
      "infection",
      "hot",
      "body temperature",
    ],
    description:
      "Febriphobia is an irrational fear of developing a fever. Sufferers may take their temperature multiple times daily, avoid people who appear unwell, and experience intense anxiety at the slightest feeling of warmth or fatigue. It is rooted in health anxiety and the belief that fever signals dangerous or fatal illness.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "frigophobia",
    name: "Frigophobia",
    fear: "cold or cold things",
    keywords: [
      "cold",
      "freezing",
      "ice",
      "cold weather",
      "chill",
      "hypothermia",
      "frost",
    ],
    description:
      "Frigophobia is a persistent fear of cold temperatures, cold objects, or cold weather. While it may overlap with health concerns about hypothermia, clinically it involves irrational avoidance of anything cold — cold food, cold air conditioning, or outdoor winter environments — causing significant lifestyle restriction.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#bfdbfe",
    backgroundImage:
      "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&q=80",
  },

  // ─── G ────────────────────────────────────────────────────────────────────

  {
    id: "galeophobia",
    name: "Galeophobia",
    fear: "sharks",
    keywords: [
      "shark",
      "sharks",
      "ocean",
      "sea",
      "great white",
      "bite",
      "jaws",
      "attack",
    ],
    description:
      "Galeophobia is an intense fear of sharks, significantly amplified by film portrayals such as Jaws. Sufferers may refuse to swim in any body of water — including pools — due to irrational fears of shark presence. Even shower drains and bathtubs can be feared as possible shark entry points in severe cases.",
    prevalence: "Relatively common",
    category: "Animal",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=80",
  },
  {
    id: "gamophobia",
    name: "Gamophobia",
    fear: "marriage or commitment",
    keywords: [
      "marriage",
      "commitment",
      "wedding",
      "relationship",
      "engagement",
      "partner",
      "vow",
    ],
    description:
      "Gamophobia is a fear of marriage or long-term romantic commitment. Beyond cold feet, sufferers experience intense panic at the prospect of any committed relationship, the legal binding of marriage, or the loss of independence it represents. It can sabotage otherwise healthy relationships and prevent meaningful long-term bonds.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "gelotophobia",
    name: "Gelotophobia",
    fear: "being laughed at",
    keywords: [
      "laughter",
      "mockery",
      "ridicule",
      "embarrassment",
      "humiliation",
      "joke",
      "laughed at",
    ],
    description:
      "Gelotophobia is a fear of being laughed at or ridiculed. Unlike normal sensitivity to mockery, sufferers interpret all laughter in their vicinity as being directed at them and experience significant social anxiety as a result. It severely limits participation in social environments and can prevent attendance at comedy events entirely.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "geniophobia",
    name: "Geniophobia",
    fear: "chins",
    keywords: ["chin", "jaw", "face", "facial feature", "appearance"],
    description:
      "Geniophobia is an unusual specific phobia centred on chins. Either one's own chin or those of others may trigger intense discomfort or panic. The fear may be related to body dysmorphic concerns or an association between chin prominence and perceived aggression or dominance.",
    prevalence: "Very rare",
    category: "Specific",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "genophobia",
    name: "Genophobia",
    fear: "sexual intercourse",
    keywords: [
      "sex",
      "intercourse",
      "intimacy",
      "sexual",
      "penetration",
      "physical love",
    ],
    description:
      "Genophobia is a fear of sexual intercourse, related to erotophobia and coitophobia. Physical, psychological, or religious factors may contribute to a deep aversion to the act of sex. It is among the more treatable specific phobias when approached through graduated exposure therapy and trauma-informed care.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "genuphobia",
    name: "Genuphobia",
    fear: "knees",
    keywords: ["knee", "knees", "joint", "leg", "body", "physical", "kneeling"],
    description:
      "Genuphobia is a fear of knees — either one's own or other people's. The sight of exposed knees, kneeling, or touching one's knees triggers panic. Like many specific body-part phobias, it can create significant social difficulty during warmer seasons when knees are more frequently visible.",
    prevalence: "Very rare",
    category: "Specific",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "gerontophobia",
    name: "Gerontophobia",
    fear: "ageing or elderly people",
    keywords: [
      "ageing",
      "elderly",
      "old age",
      "wrinkles",
      "death",
      "growing old",
      "pensioner",
    ],
    description:
      "Gerontophobia is a fear of ageing, elderly people, or the process of growing old. It may manifest as intense discomfort around older people, obsessive anti-ageing behaviours, or existential dread about one's own future. In youth-obsessed cultures it is reinforced by media that equates ageing with loss and irrelevance.",
    prevalence: "Uncommon",
    category: "Existential",
    accentColor: "#78716c",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "glossophobia",
    name: "Glossophobia",
    fear: "public speaking",
    keywords: [
      "public speaking",
      "speech",
      "speaking",
      "presentation",
      "audience",
      "stage",
      "talk",
      "microphone",
      "podium",
    ],
    description:
      "Glossophobia — fear of public speaking — is the most common phobia in the world, affecting up to 75% of people to varying degrees. In its clinical form, the anticipation of speaking before an audience triggers overwhelming anxiety and physical symptoms. It often coexists with social anxiety disorder and can severely limit career advancement and personal expression.",
    prevalence: "73% experience some degree",
    category: "Social",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=80",
  },
  {
    id: "gynophobia",
    name: "Gynophobia",
    fear: "women",
    keywords: ["women", "females", "feminine", "ladies", "gender"],
    description:
      "Gynophobia is a fear of women. It can manifest in men or women and ranges from unease around female authority figures to intense panic in any female company. Often linked to difficult mother relationships, sexual trauma, or deeply held misogynistic beliefs that have been internalised as fear rather than expressed as aggression.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },

  // ─── H ────────────────────────────────────────────────────────────────────

  {
    id: "hadephobia",
    name: "Hadephobia",
    fear: "hell",
    keywords: [
      "hell",
      "damnation",
      "devil",
      "afterlife",
      "punishment",
      "eternal fire",
      "underworld",
    ],
    description:
      "Hadephobia is a fear of hell or of going to hell. Predominantly triggered by strict religious upbringings that emphasise divine punishment, sufferers experience persistent anxiety about their spiritual fate. It can lead to compulsive religious rituals, inability to enjoy life for fear of sin, and severe guilt responses to ordinary human impulses.",
    prevalence: "Uncommon; religiously linked",
    category: "Supernatural",
    accentColor: "#dc2626",
    backgroundImage:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?w=1920&q=80",
  },
  {
    id: "haematophobia",
    name: "Haematophobia",
    fear: "blood",
    keywords: [
      "blood",
      "bleeding",
      "injury",
      "wound",
      "gore",
      "haemorrhage",
      "cut",
    ],
    description:
      "Haematophobia (blood phobia) is the fear of blood — one's own or others'. Uniquely among phobias, it often triggers a vasovagal syncope (fainting) response rather than a pure fight-or-flight reaction. This distinct physiological response is evolutionary in origin — animals that play dead upon injury survive predators. It causes significant difficulties with medical care.",
    prevalence: "3–4% of the population",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80",
  },
  {
    id: "hamartophobia",
    name: "Hamartophobia",
    fear: "sinning",
    keywords: [
      "sin",
      "moral failure",
      "guilt",
      "wrong",
      "transgression",
      "religion",
      "damnation",
    ],
    description:
      "Hamartophobia is a fear of committing sin or moral transgressions. Common in those with strong religious backgrounds, it creates extreme guilt, compulsive confessional behaviours, and inability to forgive oneself for perceived moral failings. In severe form it prevents normal pleasurable activity for fear of any action being sinful.",
    prevalence: "Uncommon; religiously linked",
    category: "Supernatural",
    accentColor: "#7c3aed",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "haphephobia",
    name: "Haphephobia",
    fear: "being touched",
    keywords: [
      "touch",
      "contact",
      "physical touch",
      "handshake",
      "hug",
      "embrace",
      "skin contact",
    ],
    description:
      "Haphephobia (also chiraptophobia, aphephobia) is an intense, irrational fear of being touched by others. Even casual contact — a handshake, a pat on the back — triggers extreme anxiety and panic. It severely limits social interaction, romantic relationships, and even medical examinations, requiring significant adaptation in daily life.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#c084fc",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "harpaxophobia",
    name: "Harpaxophobia",
    fear: "being robbed",
    keywords: [
      "robbery",
      "theft",
      "burglar",
      "crime",
      "stolen",
      "robber",
      "mugger",
    ],
    description:
      "Harpaxophobia is an intense fear of being robbed or having property stolen. Beyond reasonable security precautions, sufferers install excessive locks, avoid carrying valuables, refuse to sleep without extreme security measures, and experience significant anxiety in urban environments or situations where robbery seems remotely possible.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "heliophobia",
    name: "Heliophobia",
    fear: "sunlight",
    keywords: [
      "sun",
      "sunlight",
      "UV",
      "sunshine",
      "daylight",
      "heat",
      "sunburn",
      "cancer",
    ],
    description:
      "Heliophobia is a fear of sunlight or direct sun exposure. While partially rational in the context of skin cancer risk, clinical heliophobia involves extreme avoidance of any sunlight — going out only at night, covering all skin regardless of temperature, and refusing to be near windows. It leads to severe Vitamin D deficiency and social isolation.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "hemophobia",
    name: "Hemophobia",
    fear: "blood",
    keywords: [
      "blood",
      "bleeding",
      "injury",
      "wound",
      "needle",
      "injection",
      "gore",
      "cut",
    ],
    description:
      "Hemophobia is a specific phobia characterized by an intense fear of blood, injury, or medical procedures involving these elements. Uniquely, it often triggers a vasovagal response — causing sufferers to actually faint rather than simply panic. This distinct biological reaction sets it apart from most other phobias and makes medical care particularly challenging.",
    prevalence: "3–4% of people",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80",
  },
  {
    id: "herpetophobia",
    name: "Herpetophobia",
    fear: "reptiles or creepy crawlies",
    keywords: [
      "reptile",
      "lizard",
      "snake",
      "gecko",
      "iguana",
      "crocodile",
      "alligator",
      "creeping",
    ],
    description:
      "Herpetophobia is a broad fear of reptiles and other creeping creatures — snakes, lizards, crocodilians, and sometimes insects. The cold skin, unpredictable movement, and evolutionary associations with venomous or constricting predators drive this phobia. It is among the most evolutionarily ancient of animal phobias.",
    prevalence: "Uncommon",
    category: "Animal",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=1920&q=80",
  },
  {
    id: "hippophobia",
    name: "Hippophobia",
    fear: "horses",
    keywords: [
      "horse",
      "horses",
      "riding",
      "equine",
      "gallop",
      "stable",
      "hoof",
    ],
    description:
      "Hippophobia is the fear of horses. A large and powerful animal capable of kicking, biting, or throwing a rider, horses can represent genuine danger. However, clinical hippophobia involves disproportionate fear even of docile horses in controlled environments. It is particularly common following riding accidents.",
    prevalence: "Uncommon",
    category: "Animal",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
  },
  {
    id: "hobophobia",
    name: "Hobophobia",
    fear: "tramps or beggars",
    keywords: [
      "homeless",
      "tramp",
      "beggar",
      "vagabond",
      "poverty",
      "street person",
    ],
    description:
      "Hobophobia is a fear of homeless people, tramps, or beggars. Beyond simple class anxiety, it involves genuine panic responses when encountering people sleeping rough or begging. It may stem from unpredictability fears, disgust responses, or concerns about disease and personal safety.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#78716c",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "hodophobia",
    name: "Hodophobia",
    fear: "travel",
    keywords: [
      "travel",
      "journey",
      "trip",
      "abroad",
      "foreign",
      "distance",
      "adventure",
    ],
    description:
      "Hodophobia is an irrational fear of travel. The unfamiliar environments, loss of familiar safety, potential for accidents, and challenges of navigation all contribute. Sufferers may be unable to travel even locally and experience significant anxiety when others in their household travel. It severely limits both personal and professional horizons.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
  },
  {
    id: "homichlophobia",
    name: "Homichlophobia",
    fear: "fog",
    keywords: [
      "fog",
      "mist",
      "haze",
      "visibility",
      "obscured",
      "weather",
      "cloud",
    ],
    description:
      "Homichlophobia is a fear of fog or mist. The obscuring of familiar environments, reduction of visibility, and associated danger of navigation in fog triggers intense anxiety. Sufferers may refuse to drive or go outdoors in foggy conditions and experience significant distress at weather forecasts predicting fog.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1920&q=80",
  },
  {
    id: "homophobia",
    name: "Homophobia",
    fear: "homosexuality",
    keywords: [
      "homosexuality",
      "gay",
      "lgbt",
      "same sex",
      "sexual orientation",
      "queer",
    ],
    description:
      "Homophobia in the clinical sense describes an irrational, anxiety-based fear response to homosexuality or LGBTQ+ individuals. Distinct from social prejudice (which is ideological), clinical homophobia may involve panic responses to LGBTQ+ settings, individuals, or one's own same-sex attractions. Internalised homophobia in LGBTQ+ individuals is a significant mental health concern.",
    prevalence: "Variable; culturally dependent",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "hoplophobia",
    name: "Hoplophobia",
    fear: "firearms or weapons",
    keywords: [
      "guns",
      "firearms",
      "weapons",
      "shooting",
      "rifle",
      "pistol",
      "ammunition",
      "violence",
    ],
    description:
      "Hoplophobia is an irrational fear of firearms or weapons. Going beyond reasonable caution around lethal objects, sufferers experience panic at the sight of any firearm — including in museums, police holsters, or on-screen. It can prevent engagement with large areas of history, culture, sport, and media.",
    prevalence: "Uncommon",
    category: "Specific",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "hydrophobia",
    name: "Hydrophobia",
    fear: "water",
    keywords: [
      "water",
      "wet",
      "swim",
      "drinking",
      "ocean",
      "lake",
      "flood",
      "liquid",
    ],
    description:
      "Hydrophobia (fear of water) is the broader term encompassing all water-related phobias. It also famously describes a late-stage symptom of rabies infection where the victim develops extreme aversion to swallowing. In phobic contexts, it can include aquaphobia (open water), ablutophobia (bathing), or fear of drinking water.",
    prevalence: "Common",
    category: "Environmental",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  },
  {
    id: "hyelophobia",
    name: "Hyelophobia",
    fear: "glass",
    keywords: [
      "glass",
      "windows",
      "breaking",
      "shards",
      "crystal",
      "transparent",
      "glazing",
    ],
    description:
      "Hyelophobia (also hyalophobia) is a fear of glass — particularly glass breaking, walking on glass floors, or being near large glass surfaces. The brittle fragility of glass and the danger of cuts from broken fragments drives this phobia. Sufferers avoid glass balconies, glass-floored bridges, and high-rise building windows.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#e0f2fe",
    backgroundImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    id: "hylophobia",
    name: "Hylophobia",
    fear: "forests or woods",
    keywords: [
      "forest",
      "woods",
      "trees",
      "wilderness",
      "nature",
      "dark forest",
      "woodland",
    ],
    description:
      "Hylophobia is a specific fear of forests, dense woods, or wild woodland areas. Beyond dendrophobia (individual trees), hylophobia involves the collective dread of the forest environment — its density, darkness, unknown inhabitants, and the sense of being lost. It may be rooted in childhood fairy tales or real experiences of disorientation in forests.",
    prevalence: "Uncommon",
    category: "Natural",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
  },
  {
    id: "hypnophobia",
    name: "Hypnophobia",
    fear: "sleep or being hypnotised",
    keywords: [
      "sleep",
      "hypnosis",
      "unconscious",
      "trance",
      "vulnerable",
      "rest",
      "insomnia",
    ],
    description:
      "Hypnophobia is a fear of sleep itself, or of being hypnotised. The vulnerability of unconsciousness — combined with fear of nightmares, sleep paralysis, or death during sleep — drives some to extreme sleep avoidance. The resulting sleep deprivation creates a paradoxical worsening of anxiety and hallucination.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#818cf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "hypsiphobia",
    name: "Hypsiphobia",
    fear: "heights",
    keywords: [
      "heights",
      "high places",
      "altitude",
      "vertigo",
      "falling",
      "elevated",
    ],
    description:
      "Hypsiphobia is another term for acrophobia — the fear of heights. The clinical manifestation includes vertigo, tachycardia, and an overwhelming urge to crouch low when at heights. It is one of the most common specific phobias and can be effectively treated through graduated exposure therapy.",
    prevalence: "5% of people",
    category: "Environmental",
    accentColor: "#38bdf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },

  // ─── I ────────────────────────────────────────────────────────────────────

  {
    id: "iatrophobia",
    name: "Iatrophobia",
    fear: "doctors or medical settings",
    keywords: [
      "doctor",
      "hospital",
      "medical",
      "physician",
      "clinic",
      "healthcare",
      "nurse",
      "surgery",
    ],
    description:
      "Iatrophobia is a fear of doctors, hospitals, or medical settings. One of the most health-consequential phobias, it leads people to avoid medical care until conditions become critical, resulting in preventable deaths. The fear of receiving bad news, loss of control in medical settings, and past negative healthcare experiences are common triggers.",
    prevalence: "3% of the population",
    category: "Health-Based",
    accentColor: "#e0f2fe",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "ichthyophobia",
    name: "Ichthyophobia",
    fear: "fish",
    keywords: [
      "fish",
      "seafood",
      "aquarium",
      "underwater",
      "fins",
      "scales",
      "marine",
    ],
    description:
      "Ichthyophobia is a fear of fish — live or dead. The slippery scales, unpredictable darting movement, and alien appearance of fish (particularly those that approach or follow humans in water) triggers intense revulsion. It may prevent sufferers from eating seafood, visiting aquariums, or swimming in natural water where fish are present.",
    prevalence: "Uncommon",
    category: "Animal",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=80",
  },
  {
    id: "ideophobia",
    name: "Ideophobia",
    fear: "ideas",
    keywords: [
      "ideas",
      "thinking",
      "concepts",
      "philosophy",
      "abstract",
      "thought",
    ],
    description:
      "Ideophobia is a fear of ideas or of being confronted with new or challenging concepts. The prospect of having one's belief system challenged, engaging with unfamiliar philosophies, or processing complex abstract concepts triggers anxiety. It creates significant intellectual rigidity and discomfort in educational or philosophical environments.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "illyngophobia",
    name: "Illyngophobia",
    fear: "vertigo or looking down from high places",
    keywords: [
      "vertigo",
      "dizziness",
      "heights",
      "looking down",
      "spinning",
      "falling",
    ],
    description:
      "Illyngophobia is a specific fear of vertigo and the sensation of looking downward from a height. Different from acrophobia, it focuses specifically on the dizzying, disorienting sensation of depth rather than the height itself. The impulsive urge to jump (l'appel du vide) that many people experience at height can intensify this phobia.",
    prevalence: "Uncommon",
    category: "Environmental",
    accentColor: "#38bdf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  },
  {
    id: "insectophobia",
    name: "Insectophobia",
    fear: "insects",
    keywords: [
      "insects",
      "bugs",
      "crawling",
      "fly",
      "ant",
      "beetle",
      "cockroach",
      "bug",
    ],
    description:
      "Insectophobia is a general fear of all insects. Strongly overlapping with entomophobia, it encompasses all six-legged arthropods. The evolutionary disgust response that insects trigger — linked to disease, contamination, and physical violation — is one of the most universal of all human phobic responses.",
    prevalence: "Common",
    category: "Animal",
    accentColor: "#84cc16",
    backgroundImage:
      "https://images.unsplash.com/photo-1526060399062-7efbda485e53?w=1920&q=80",
  },
  {
    id: "isolophobia",
    name: "Isolophobia",
    fear: "isolation or solitude",
    keywords: [
      "isolation",
      "alone",
      "solitude",
      "lonely",
      "separated",
      "quarantine",
      "withdrawn",
    ],
    description:
      "Isolophobia is a fear of being isolated or separated from others, closely related to autophobia. The prospect of being cut off from human contact — either physically or socially — triggers intense anxiety. It became particularly relevant during periods of pandemic-related social isolation, which created genuine hardship for those with this phobia.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#a5b4fc",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "isopterophobia",
    name: "Isopterophobia",
    fear: "termites or wood-boring insects",
    keywords: [
      "termites",
      "wood worm",
      "boring insects",
      "infestation",
      "wood",
      "destruction",
    ],
    description:
      "Isopterophobia is a fear of termites or wood-boring insects, typically tied to the terror of silent, invisible destruction of one's home. The idea of thousands of insects secretly eating through the structure of a building creates intense anxiety. Sufferers may compulsively inspect their homes for signs of infestation.",
    prevalence: "Rare",
    category: "Animal",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "ithyphallophobia",
    name: "Ithyphallophobia",
    fear: "erect penises",
    keywords: [
      "erection",
      "penis",
      "male anatomy",
      "sexual organ",
      "sexuality",
    ],
    description:
      "Ithyphallophobia is a fear of erect penises. While clinically recognised, it is rare and typically linked to sexual trauma, shame around sexuality, or disgust responses. It presents significant barriers to sexual intimacy and may co-occur with coitophobia and other sexual anxiety disorders.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },

  // ─── K ────────────────────────────────────────────────────────────────────

  {
    id: "kainotophobia",
    name: "Kainotophobia",
    fear: "change or novelty",
    keywords: [
      "change",
      "new",
      "novelty",
      "different",
      "innovation",
      "transition",
      "transformation",
    ],
    description:
      "Kainotophobia is a fear of change or new experiences. The uncertainty and unpredictability introduced by any kind of change — in routine, relationships, environment, or technology — triggers intense anxiety. Sufferers cling to established patterns and may become severely distressed even by minor disruptions to their normal daily structures.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#06b6d4",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "kakorrhaphiophobia",
    name: "Kakorrhaphiophobia",
    fear: "failure or defeat",
    keywords: [
      "failure",
      "defeat",
      "losing",
      "error",
      "inadequate",
      "mistake",
      "incompetent",
    ],
    description:
      "Kakorrhaphiophobia is an abnormal, persistent fear of failure or defeat. It differs from atychiphobia in the specific emphasis on defeat in competitive contexts. Sufferers may avoid any competitive situations, refuse promotions, and sabotage their own success to avoid the risk of later failure.",
    prevalence: "Uncommon",
    category: "Emotional",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "katagelophobia",
    name: "Katagelophobia",
    fear: "ridicule",
    keywords: [
      "ridicule",
      "mockery",
      "laughed at",
      "embarrassment",
      "humiliation",
      "teased",
    ],
    description:
      "Katagelophobia is a fear of ridicule and humiliation. The terror of being publicly mocked or made to appear foolish dominates the sufferer's social consciousness. Every social interaction is evaluated for its ridicule potential, and avoidance of any situation where ridicule is possible drastically limits social participation.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "kenophobia",
    name: "Kenophobia",
    fear: "empty spaces",
    keywords: ["empty", "void", "blank", "space", "hollow", "vacant", "bare"],
    description:
      "Kenophobia is an intense discomfort or fear of empty or open spaces. While related to agoraphobia, kenophobia specifically addresses spaces that are empty rather than crowded. The absence of objects or people in a space feels threatening and overwhelming, triggering anxiety about one's own vulnerability in unoccupied environments.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "keraunophobia",
    name: "Keraunophobia",
    fear: "thunder and lightning",
    keywords: [
      "thunder",
      "lightning",
      "storm",
      "electricity",
      "bolt",
      "thunder and lightning",
    ],
    description:
      "Keraunophobia is an intense fear of thunder and lightning, synonymous with astraphobia. The sudden, explosive power of lightning combined with its unpredictability and life-threatening potential makes it a potent phobic trigger. Severe sufferers monitor weather forecasts hourly and construct safety protocols around storm activity.",
    prevalence: "Common",
    category: "Environmental",
    accentColor: "#c084fc",
    backgroundImage:
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1920&q=80",
  },
  {
    id: "kinetophobia",
    name: "Kinetophobia",
    fear: "movement or motion",
    keywords: [
      "movement",
      "motion",
      "moving",
      "kinetic",
      "speed",
      "travel",
      "displacement",
    ],
    description:
      "Kinetophobia is a fear of movement or motion — either one's own movement or that of surrounding objects. Sufferers may be unable to exercise, travel, or even walk quickly. The vestibular disruption and loss of controlled bodily fixedness triggers profound anxiety. It can severely limit physical mobility and independence.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
  },
  {
    id: "kleptophobia",
    name: "Kleptophobia",
    fear: "stealing or being stolen from",
    keywords: [
      "stealing",
      "theft",
      "robbery",
      "stolen",
      "pickpocket",
      "burglary",
      "criminal",
    ],
    description:
      "Kleptophobia is a fear of stealing — either of becoming a thief oneself (a compulsive urge experienced as terrifying) or of being a victim of theft. In the former sense it overlaps with OCD intrusive thoughts; in the latter it manifests as extreme protectiveness of possessions and refusal to leave valuables unguarded.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "kosmikophobia",
    name: "Kosmikophobia",
    fear: "cosmic events",
    keywords: [
      "cosmic",
      "meteor",
      "asteroid",
      "universe",
      "space",
      "solar flare",
      "end of world",
    ],
    description:
      "Kosmikophobia is a fear of cosmic phenomena — meteor strikes, solar flares, supernovae, or the eventual death of the sun. While astronomically informed concern is reasonable, sufferers experience disproportionate daily anxiety about cosmic catastrophe, inability to enjoy stargazing, and obsessive tracking of near-Earth objects.",
    prevalence: "Rare",
    category: "Existential",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
  },
  {
    id: "kymophobia",
    name: "Kymophobia",
    fear: "waves",
    keywords: ["waves", "ocean", "sea", "surf", "tidal", "water", "tsunami"],
    description:
      "Kymophobia is a fear of waves, typically sea waves but also other wave-like motions. The sense of being overwhelmed, knocked down, or dragged under by powerful waves triggers intense anxiety. Sufferers may be unable to swim in the ocean or stand near breaking surf, limiting coastal recreation entirely.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  },

  // ─── L ────────────────────────────────────────────────────────────────────

  {
    id: "lachanophobia",
    name: "Lachanophobia",
    fear: "vegetables",
    keywords: [
      "vegetables",
      "greens",
      "plant food",
      "salad",
      "carrots",
      "broccoli",
      "food",
    ],
    description:
      "Lachanophobia is a specific food phobia centred on vegetables. Beyond childhood vegetable aversion, clinical lachanophobia involves genuine panic responses to vegetables — their smell, texture, or appearance. Sufferers face significant nutritional challenges and social difficulties in shared dining settings.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1920&q=80",
  },
  {
    id: "laliophobia",
    name: "Laliophobia",
    fear: "speaking or stuttering",
    keywords: [
      "speaking",
      "stutter",
      "speech",
      "talking",
      "verbal",
      "communication",
      "voice",
    ],
    description:
      "Laliophobia is a fear of speaking or of developing a stutter in speech. Often experienced by those who have had speech impediments or are in environments where verbal performance is judged, it creates a paralysing self-consciousness around speaking. The fear of being perceived as incoherent triggers avoidance of verbal communication entirely.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=80",
  },
  {
    id: "leprophobia",
    name: "Leprophobia",
    fear: "leprosy",
    keywords: [
      "leprosy",
      "disease",
      "disfigurement",
      "contagion",
      "infection",
      "skin disease",
    ],
    description:
      "Leprophobia is a fear of leprosy (Hansen's disease) or of contracting it. Historically one of the most stigmatised diseases in human history, its association with disfigurement, social rejection, and impurity has created a cultural fear that persists as a clinical phobia even in people who have minimal realistic risk of exposure.",
    prevalence: "Rare in developed countries",
    category: "Health-Based",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "leukophobia",
    name: "Leukophobia",
    fear: "the colour white",
    keywords: ["white", "colour", "blank", "pallor", "pale", "snow", "albino"],
    description:
      "Leukophobia is a fear of the colour white. It may be triggered by associations with death (white coffins, hospital wards, ghosts), sterility, emptiness, or blinding light. Sufferers may find hospitals particularly difficult to enter and experience discomfort in minimalist white interior environments.",
    prevalence: "Very rare",
    category: "Specific",
    accentColor: "#e2e8f0",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "ligyrophobia",
    name: "Ligyrophobia",
    fear: "loud noises",
    keywords: [
      "loud",
      "noise",
      "bang",
      "explosion",
      "sudden sound",
      "hearing",
      "startle",
    ],
    description:
      "Ligyrophobia is an intense fear of loud noises — fireworks, gunshots, car backfires, or any sudden, explosive sound. The startle response triggered by loud noise becomes conditioned into a phobia. Sufferers wear ear protection in everyday settings, avoid public celebrations, and experience significant anxiety on New Year's Eve and bonfire nights.",
    prevalence: "Uncommon",
    category: "Environmental",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80",
  },
  {
    id: "lilapsophobia",
    name: "Lilapsophobia",
    fear: "tornadoes or hurricanes",
    keywords: [
      "tornado",
      "hurricane",
      "cyclone",
      "storm",
      "wind",
      "twister",
      "weather",
    ],
    description:
      "Lilapsophobia is a fear of tornadoes, hurricanes, or severe storm events. Sufferers in tornado-prone or hurricane-affected regions may experience chronic anxiety about weather, make extreme preparations for storms, or relocate away from high-risk areas. Media coverage of extreme weather events can trigger severe anxiety reactions.",
    prevalence: "Uncommon; geographically linked",
    category: "Environmental",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1920&q=80",
  },
  {
    id: "limnophobia",
    name: "Limnophobia",
    fear: "lakes",
    keywords: [
      "lake",
      "pond",
      "still water",
      "freshwater",
      "depth",
      "underwater",
      "calm water",
    ],
    description:
      "Limnophobia is a fear of lakes or bodies of still water. The depth beneath calm surfaces, the unknown creatures within, and the sensation of entering water where the bottom cannot be seen all contribute. Unlike thalassophobia (ocean), sufferers may be particularly unnerved by the deceptive stillness of apparently calm lakes.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  },
  {
    id: "lockiophobia",
    name: "Lockiophobia",
    fear: "childbirth",
    keywords: [
      "childbirth",
      "labour",
      "delivery",
      "pregnancy",
      "birth",
      "contractions",
      "baby",
    ],
    description:
      "Lockiophobia (also tocophobia) is a fear of childbirth — either of giving birth oneself or of witnessing it. It may cause women to avoid pregnancy entirely, request elective caesareans, or experience severe anxiety throughout pregnancy. It can be primary (never having given birth) or secondary (following a traumatic previous birth experience).",
    prevalence: "Affects 6–10% of women",
    category: "Health-Based",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "logizomechanophobia",
    name: "Logizomechanophobia",
    fear: "computers",
    keywords: [
      "computers",
      "technology",
      "machines",
      "digital",
      "software",
      "hardware",
      "tech",
    ],
    description:
      "Logizomechanophobia is a specific fear of computers. The complexity, potential for error, exposure to surveillance, and the impersonal nature of computer interactions can trigger significant anxiety. As digital literacy becomes essential for daily life, sufferers face increasing exclusion from basic services, employment, and social connection.",
    prevalence: "Becoming rarer as digital literacy increases",
    category: "Situational",
    accentColor: "#3b82f6",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "lygophobia",
    name: "Lygophobia",
    fear: "darkness",
    keywords: [
      "darkness",
      "dark",
      "dim",
      "twilight",
      "shadow",
      "night",
      "absence of light",
    ],
    description:
      "Lygophobia is a fear of darkness or twilight, closely synonymous with nyctophobia and achluophobia. The transitional period between light and dark — dusk — can be particularly triggering as familiar environments become distorted and visual cues disappear, leaving the sufferer vulnerable to imagined or real threats.",
    prevalence: "Common",
    category: "Environmental",
    accentColor: "#818cf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "lyssophobia",
    name: "Lyssophobia",
    fear: "rabies or going insane",
    keywords: [
      "rabies",
      "madness",
      "insanity",
      "infection",
      "animal bite",
      "disease",
      "virus",
    ],
    description:
      "Lyssophobia is a fear of contracting rabies or of going insane. As rabies causes severe neurological symptoms before death, the fear of this disease overlaps with fear of mental deterioration. Sufferers may compulsively seek post-exposure prophylaxis after any animal contact, even non-biting encounters.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#dc2626",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },

  // ─── M ────────────────────────────────────────────────────────────────────

  {
    id: "mageirocophobia",
    name: "Mageirocophobia",
    fear: "cooking",
    keywords: [
      "cooking",
      "kitchen",
      "food preparation",
      "chef",
      "meal",
      "stove",
      "recipes",
    ],
    description:
      "Mageirocophobia is a fear of cooking. The complex set of anxieties it encompasses includes fear of fire, fear of knives, fear of food poisoning, and fear of social judgment of one's culinary abilities. It prevents sufferers from preparing their own food and may lead to reliance on processed food or eating disorders.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#f97316",
    backgroundImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1920&q=80",
  },
  {
    id: "mastigophobia",
    name: "Mastigophobia",
    fear: "punishment",
    keywords: [
      "punishment",
      "discipline",
      "beating",
      "consequences",
      "authority",
      "retribution",
    ],
    description:
      "Mastigophobia is a fear of punishment — either physical or social. Sufferers may be unable to confront authority, admit mistakes, or accept responsibility for errors for fear of the punishment that will follow. It creates significant difficulties in professional environments and impairs honest communication in all relationships.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "mechanophobia",
    name: "Mechanophobia",
    fear: "machines or robots",
    keywords: [
      "machines",
      "robots",
      "mechanical",
      "automation",
      "technology",
      "device",
      "engine",
    ],
    description:
      "Mechanophobia is a fear of machines, particularly large mechanical devices or robots. The noise, scale, and perceived uncontrollability of industrial machinery can trigger intense anxiety. As automation and AI become more prevalent, mechanophobia has cultural dimensions that make it increasingly relevant in technological societies.",
    prevalence: "Uncommon",
    category: "Specific",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "megalophobia",
    name: "Megalophobia",
    fear: "large things",
    keywords: [
      "large",
      "big",
      "enormous",
      "massive",
      "giant",
      "huge",
      "colossal",
    ],
    description:
      "Megalophobia is a fear of large objects — enormous statues, massive ships, skyscrapers, huge animals, or any object that overwhelms by sheer scale. The sense of being dwarfed and helpless before something vast triggers intense anxiety. Viral social media content featuring large objects has brought this uncommon phobia broader recognition.",
    prevalence: "Uncommon",
    category: "Specific",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=80",
  },
  {
    id: "melissophobia",
    name: "Melissophobia",
    fear: "bees",
    keywords: ["bee", "bees", "sting", "honey", "hive", "swarm", "buzz"],
    description:
      "Melissophobia is a fear of bees, synonymous with apiphobia. The combination of the sting threat, the buzzing sound, their swarming behaviour, and their ability to appear suddenly in pleasant outdoor environments makes bees a particularly common phobic trigger. It frequently develops after a painful stinging experience.",
    prevalence: "Common",
    category: "Animal",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "meningitophobia",
    name: "Meningitophobia",
    fear: "brain disease",
    keywords: [
      "meningitis",
      "brain disease",
      "neurological",
      "headache",
      "infection",
      "health",
    ],
    description:
      "Meningitophobia is a fear of brain disease, particularly meningitis. The rapid onset, severity, and potentially fatal or permanently disabling consequences of bacterial meningitis make it a particularly frightening condition. Sufferers may compulsively check for symptoms (headache, neck stiffness, rash) and seek medical attention for routine headaches.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "merinthophobia",
    name: "Merinthophobia",
    fear: "being bound or tied up",
    keywords: [
      "bound",
      "tied",
      "restrained",
      "rope",
      "confined",
      "immobilised",
      "helpless",
    ],
    description:
      "Merinthophobia is a fear of being bound, tied up, or physically restrained. The complete loss of bodily autonomy represents the ultimate vulnerability for sufferers. Beyond obvious PTSD from kidnapping or abuse, this phobia can prevent engagement with certain medical procedures (restraints, cast immobilisation) and can be triggered by traffic or crowds.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "metallophobia",
    name: "Metallophobia",
    fear: "metal",
    keywords: [
      "metal",
      "iron",
      "steel",
      "aluminium",
      "tinfoil",
      "coins",
      "metallic",
    ],
    description:
      "Metallophobia is a fear of metals or metallic objects. The cold, hard texture of metal, its association with sharp edges and industrial danger, or simply an extreme sensory sensitivity to metallic surfaces can drive this phobia. Sufferers may be unable to use cutlery, coins, or metal door handles without significant anxiety.",
    prevalence: "Very rare",
    category: "Specific",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "meteorophobia",
    name: "Meteorophobia",
    fear: "meteors or meteorites",
    keywords: [
      "meteor",
      "meteorite",
      "asteroid",
      "space rock",
      "cosmic",
      "impact",
      "falling",
    ],
    description:
      "Meteorophobia is a fear of meteors, meteorites, or the possibility of a space object striking the Earth. While rare, meteorite impacts are real events. Clinical meteorophobia involves disproportionate daily preoccupation with this threat, inability to enjoy stargazing, and obsessive monitoring of NASA near-Earth object tracking sites.",
    prevalence: "Very rare",
    category: "Existential",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
  },
  {
    id: "methyphobia",
    name: "Methyphobia",
    fear: "alcohol",
    keywords: [
      "alcohol",
      "drinking",
      "drunk",
      "wine",
      "spirits",
      "beer",
      "intoxication",
    ],
    description:
      "Methyphobia is a fear of alcohol and intoxication. Often rooted in witnessing parental alcoholism or experiencing loss of control while drunk, sufferers avoid all alcohol consumption and may extend their anxiety to people who drink, bars and pubs, or any environment where alcohol is present.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#dc2626",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "microphobia",
    name: "Microphobia",
    fear: "small things",
    keywords: [
      "small",
      "tiny",
      "miniature",
      "microscopic",
      "insects",
      "bacteria",
      "germs",
    ],
    description:
      "Microphobia is a fear of small objects or creatures. The invisible world of bacteria, the tiny movements of insects, or simply objects of very small scale can trigger disproportionate anxiety. It often overlaps with mysophobia (fear of germs) and insectophobia (fear of insects), sharing the theme of small, hard-to-control entities.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "misophobia",
    name: "Misophobia",
    fear: "germs or contamination",
    keywords: [
      "germs",
      "contamination",
      "bacteria",
      "hygiene",
      "dirt",
      "disease",
      "unclean",
    ],
    description:
      "Misophobia is an intense fear of contamination by germs. Closely related to mysophobia, it drives compulsive cleaning, avoidance of public spaces, and refusal to touch shared surfaces. The Covid-19 pandemic significantly amplified germ anxiety across the general population, raising the prevalence of contamination-related phobias globally.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "mnemophobia",
    name: "Mnemophobia",
    fear: "memories",
    keywords: [
      "memories",
      "past",
      "remembering",
      "flashback",
      "trauma",
      "recollection",
      "history",
    ],
    description:
      "Mnemophobia is a fear of memories — specifically traumatic or painful recollections. Sufferers may develop elaborate cognitive strategies to avoid remembering distressing events, become hypervigilant about triggers, and avoid people, places, or media that might prompt unwanted memories. It is closely associated with PTSD.",
    prevalence: "Rare as standalone phobia",
    category: "Emotional",
    accentColor: "#818cf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "monophobia",
    name: "Monophobia",
    fear: "being alone",
    keywords: [
      "alone",
      "solitude",
      "single",
      "isolated",
      "lonely",
      "abandoned",
      "by oneself",
    ],
    description:
      "Monophobia is the fear of being alone or of solitude. Sufferers are unable to spend time alone, filling every moment with social contact, and experiencing intense panic when social support is unavailable. Related to abandonment fears, it frequently coexists with dependent personality patterns and attachment anxiety.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#a5b4fc",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "musophobia",
    name: "Musophobia",
    fear: "mice or rats",
    keywords: [
      "mouse",
      "rat",
      "rodent",
      "mice",
      "pest",
      "gnaw",
      "squeak",
      "infestation",
    ],
    description:
      "Musophobia is an intense fear of mice or rats. The swift, erratic movement, disease associations, and unpredictable nature of rodents make them effective phobic triggers. Sufferers may be unable to eat in any space where rodents might have access, and sight of a mouse can trigger complete panic responses and prolonged anxiety.",
    prevalence: "Relatively common",
    category: "Animal",
    accentColor: "#78716c",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "mycophobia",
    name: "Mycophobia",
    fear: "fungi or mushrooms",
    keywords: [
      "mushroom",
      "fungi",
      "mould",
      "spores",
      "toadstool",
      "mold",
      "fungal",
    ],
    description:
      "Mycophobia is a fear of fungi, including mushrooms, moulds, and mildew. The association of fungi with decay, death, poison, and the invisible spread of spores drives this phobia. Sufferers may be unable to eat mushrooms, be near compost, or enter buildings with any visible mould without extreme anxiety.",
    prevalence: "Uncommon",
    category: "Natural",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "myrmecophobia",
    name: "Myrmecophobia",
    fear: "ants",
    keywords: [
      "ants",
      "ant",
      "insect",
      "colony",
      "swarm",
      "infestation",
      "biting",
    ],
    description:
      "Myrmecophobia is a fear of ants. The organised, relentless nature of ant colonies, the sensation of their crawling on skin, and the potential for bites all contribute to this specific insect phobia. Sufferers may be unable to eat outdoors in summer or visit parks and gardens where ant activity is visible.",
    prevalence: "Uncommon",
    category: "Animal",
    accentColor: "#dc2626",
    backgroundImage:
      "https://images.unsplash.com/photo-1526060399062-7efbda485e53?w=1920&q=80",
  },
  {
    id: "mysophobia",
    name: "Mysophobia",
    fear: "germs or contamination",
    keywords: [
      "germs",
      "dirt",
      "bacteria",
      "contamination",
      "dirty",
      "clean",
      "virus",
      "hygiene",
      "infection",
      "disease",
    ],
    description:
      "Mysophobia — also known as germophobia — is a pathological fear of contamination and germs. Sufferers engage in compulsive cleaning, excessive handwashing, and avoid touching surfaces in public. Closely linked to OCD, it can be severely debilitating. The COVID-19 pandemic significantly heightened germ anxiety across the broader general population.",
    prevalence: "Linked to OCD (2–3%)",
    category: "Health-Based",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },

  // ─── N ────────────────────────────────────────────────────────────────────

  {
    id: "necrophobia",
    name: "Necrophobia",
    fear: "death or dead things",
    keywords: [
      "death",
      "dead",
      "corpse",
      "body",
      "funeral",
      "grave",
      "skeleton",
      "dead things",
    ],
    description:
      "Necrophobia is a fear of death or dead things — corpses, bones, decay, coffins, or funerals. Beyond normal discomfort with mortality, sufferers cannot view dead bodies, attend funerals, visit cemeteries, or engage with death-related media without severe panic. It profoundly affects their ability to grieve or support grieving loved ones.",
    prevalence: "Relatively common",
    category: "Existential",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?w=1920&q=80",
  },
  {
    id: "neophobia",
    name: "Neophobia",
    fear: "new things",
    keywords: [
      "new",
      "change",
      "novelty",
      "innovation",
      "different",
      "unfamiliar",
      "strange",
    ],
    description:
      "Neophobia is a fear of anything new or unfamiliar. From new foods to new technologies to life changes, all novelty threatens the sufferer's sense of safety. It is one of the most evolutionarily ancient phobias, as organisms that avoided unfamiliar foods and situations survived longer. In modern life it creates profound inflexibility.",
    prevalence: "Common in varying degrees",
    category: "Situational",
    accentColor: "#06b6d4",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "noctiphobia",
    name: "Noctiphobia",
    fear: "night",
    keywords: [
      "night",
      "dark",
      "nocturnal",
      "evening",
      "midnight",
      "nighttime",
      "darkness",
    ],
    description:
      "Noctiphobia is a fear of the night itself — not just darkness but the complete transformation of the world that night brings. The social vulnerability, the unknown that darkness conceals, and the altered state of consciousness required to sleep through it all contribute to this multifaceted phobia.",
    prevalence: "Uncommon",
    category: "Environmental",
    accentColor: "#818cf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "nosocomephobia",
    name: "Nosocomephobia",
    fear: "hospitals",
    keywords: [
      "hospital",
      "medical",
      "clinic",
      "ward",
      "surgery",
      "doctor",
      "illness",
      "sterile",
    ],
    description:
      "Nosocomephobia is a fear of hospitals and medical institutions. The association with illness, death, loss of control, and traumatic medical procedures makes hospitals one of the most feared environments. Sufferers may refuse emergency treatment, avoid visiting sick relatives, and in extreme cases allow treatable conditions to become life-threatening through avoidance.",
    prevalence: "Relatively common",
    category: "Health-Based",
    accentColor: "#e0f2fe",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "nosophobia",
    name: "Nosophobia",
    fear: "contracting a disease",
    keywords: [
      "disease",
      "illness",
      "sickness",
      "infection",
      "contagion",
      "health",
      "medical condition",
    ],
    description:
      "Nosophobia is an irrational fear of developing a specific disease or illness. It differs from hypochondria in its focus — nosophobia often centres on a single feared condition rather than general illness anxiety. Internet symptom-checking (cyberchondria) has significantly amplified this phobia in the digital age.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "nucleomituphobia",
    name: "Nucleomituphobia",
    fear: "nuclear weapons",
    keywords: [
      "nuclear",
      "bomb",
      "atomic",
      "explosion",
      "radiation",
      "fallout",
      "nuclear war",
    ],
    description:
      "Nucleomituphobia is a specific fear of nuclear weapons and nuclear war. During Cold War periods this phobia was widespread, and it persists today as geopolitical tensions fluctuate. Sufferers obsessively monitor international news, stockpile survival supplies, and may experience significant anxiety during any nuclear-related political crisis.",
    prevalence: "Uncommon; geopolitically sensitive",
    category: "Situational",
    accentColor: "#84cc16",
    backgroundImage:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1920&q=80",
  },
  {
    id: "nyctophobia",
    name: "Nyctophobia",
    fear: "darkness",
    keywords: [
      "dark",
      "darkness",
      "night",
      "black",
      "shadow",
      "nighttime",
      "lights out",
      "pitch black",
    ],
    description:
      "Nyctophobia is an extreme fear of the dark or nightime that could persist well into adulthood. It's not the darkness itself but what the mind projects into it — threats, loss of control, and the unknown. Sufferers often sleep with lights on, avoid going outdoors at night, and experience racing thoughts and elevated anxiety as evening approaches and the world goes dim.",
    prevalence: "11% of adults",
    category: "Environmental",
    accentColor: "#818cf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },

  // ─── O ────────────────────────────────────────────────────────────────────

  {
    id: "obesophobia",
    name: "Obesophobia",
    fear: "gaining weight",
    keywords: [
      "weight gain",
      "fat",
      "obesity",
      "calories",
      "diet",
      "body",
      "overweight",
    ],
    description:
      "Obesophobia is an intense fear of gaining weight or becoming overweight. A core component of eating disorders, particularly anorexia nervosa, it drives extreme dietary restriction, compulsive exercise, and body-checking behaviours. Its overlap with societal fat-phobia makes it both a clinical condition and a culturally reinforced attitude.",
    prevalence: "Common in eating disorder populations",
    category: "Health-Based",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "ochlophobia",
    name: "Ochlophobia",
    fear: "crowds or mobs",
    keywords: [
      "crowd",
      "mob",
      "people",
      "mass",
      "overcrowding",
      "stampede",
      "rush",
    ],
    description:
      "Ochlophobia is a fear of crowds or mobs. The loss of personal space, the unpredictability of mob behaviour, the risk of crushing in dense crowds, and the sensory overload of many people create a multi-layered threat response. Sufferers avoid concerts, shopping centres, and public events, significantly limiting their social life.",
    prevalence: "Relatively common",
    category: "Social",
    accentColor: "#e879f9",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "ochophobia",
    name: "Ochophobia",
    fear: "vehicles or riding in vehicles",
    keywords: [
      "vehicle",
      "car",
      "bus",
      "transport",
      "riding",
      "passenger",
      "moving vehicle",
    ],
    description:
      "Ochophobia is a fear of being in or near moving vehicles — cars, buses, trains, or any mode of motorised transport. Beyond amaxophobia (driving fear), ochophobia includes passenger fear as well. Sufferers may be unable to use public transport and require significant courage to travel even short distances by road.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "odontophobia",
    name: "Odontophobia",
    fear: "teeth or dental work",
    keywords: [
      "teeth",
      "dentist",
      "dental",
      "tooth",
      "extraction",
      "drill",
      "injection",
      "fillings",
    ],
    description:
      "Odontophobia is a specific fear of teeth or dental treatment, closely related to dentophobia. The fear may centre on the teeth themselves — including others' teeth — or specifically on dental procedures. It prevents regular dental care and in some sufferers leads to severe, irreversible dental damage.",
    prevalence: "Very common",
    category: "Health-Based",
    accentColor: "#e0f2fe",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "oenophobia",
    name: "Oenophobia",
    fear: "wine",
    keywords: [
      "wine",
      "alcohol",
      "grapes",
      "fermented",
      "drinking",
      "winery",
      "vineyard",
    ],
    description:
      "Oenophobia is a specific aversion to wine, distinct from general alcohol phobia. It may relate to the specific smell, taste, or social rituals around wine, or to a traumatic experience involving wine. The cultural significance of wine in many societies makes this a particularly socially disruptive phobia.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#dc2626",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "oikophobia",
    name: "Oikophobia",
    fear: "home surroundings or household appliances",
    keywords: [
      "home",
      "house",
      "familiar",
      "household",
      "domestic",
      "appliances",
      "surroundings",
    ],
    description:
      "Oikophobia is a fear of one's home environment or household appliances. The domestic space, which most people find safe and comforting, becomes a source of threat to sufferers. It may relate to associations with past abuse in the home, fear of domestic appliances malfunctioning, or a general agoraphobic reversal.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "ombrophobia",
    name: "Ombrophobia",
    fear: "rain",
    keywords: [
      "rain",
      "wet",
      "storm",
      "shower",
      "precipitation",
      "weather",
      "waterfall",
    ],
    description:
      "Ombrophobia is a fear of rain or storms involving rain. Sufferers monitor weather forecasts obsessively, carry umbrellas regardless of conditions, and experience significant anxiety when clouds gather. The fear may relate to flood trauma, being caught in torrential rain, or sensory sensitivity to the sound and feel of rain.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1920&q=80",
  },
  {
    id: "ommetaphobia",
    name: "Ommetaphobia",
    fear: "eyes",
    keywords: [
      "eyes",
      "stare",
      "gaze",
      "eye contact",
      "vision",
      "looking",
      "pupil",
    ],
    description:
      "Ommetaphobia is a fear of eyes — both one's own and those of others. The sense of being watched, the vulnerability of the eye to injury, and the deeply personal nature of eye contact all contribute. Sufferers struggle to make eye contact, find staring deeply disturbing, and may fear any medical procedure involving the eyes.",
    prevalence: "Uncommon",
    category: "Specific",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "omphalophobia",
    name: "Omphalophobia",
    fear: "navels or belly buttons",
    keywords: ["navel", "belly button", "umbilical", "stomach", "body", "hole"],
    description:
      "Omphalophobia is a fear of navels or belly buttons. The navel as a remnant of the umbilical cord — a reminder of bodily origin and dependence — may create deep psychological unease. Sufferers may be unable to touch their own navel, dislike others exposing navels, and find related imagery intensely distressing.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "ophidiophobia",
    name: "Ophidiophobia",
    fear: "snakes",
    keywords: [
      "snake",
      "snakes",
      "serpent",
      "viper",
      "cobra",
      "python",
      "reptile",
      "boa",
    ],
    description:
      "Ophidiophobia is a profound fear of snakes, affecting a significant portion of the global population. Even images or representations of snakes can trigger intense anxiety. Many researchers believe this fear has deep evolutionary origins — ancestors who feared snakes were more likely to survive in environments where venomous species thrived alongside them.",
    prevalence: "33% of people",
    category: "Animal",
    accentColor: "#22c55e",
    backgroundImage:
      "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=1920&q=80",
  },
  {
    id: "ornithophobia",
    name: "Ornithophobia",
    fear: "birds",
    keywords: [
      "birds",
      "feathers",
      "wings",
      "flying",
      "beak",
      "pigeon",
      "seagull",
      "flock",
    ],
    description:
      "Ornithophobia is an intense fear of birds. The sudden unpredictable flight, the possibility of being pecked or dive-bombed, the sound of flapping wings, and the association of certain birds with death (crows, vultures) all contribute. Urban sufferers may find pigeons and seagulls particularly tormenting given their ubiquity.",
    prevalence: "Uncommon",
    category: "Animal",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1920&q=80",
  },
  {
    id: "osmophobia",
    name: "Osmophobia",
    fear: "smells or odours",
    keywords: [
      "smell",
      "odour",
      "scent",
      "fragrance",
      "aroma",
      "nose",
      "olfactory",
    ],
    description:
      "Osmophobia is a fear of smells or odours. This may involve specific smells associated with traumatic events, or a generalised hypervigilance about any strong smell. Commonly experienced by migraine sufferers (who associate strong smells with attack onset), it creates significant social limitations given the pervasiveness of odour in daily environments.",
    prevalence: "Uncommon",
    category: "Specific",
    accentColor: "#84cc16",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "ostraconophobia",
    name: "Ostraconophobia",
    fear: "shellfish",
    keywords: [
      "shellfish",
      "crab",
      "lobster",
      "oyster",
      "shrimp",
      "prawn",
      "seafood",
      "shell",
    ],
    description:
      "Ostraconophobia is a fear of shellfish or crustaceans. The armoured appearance, sideways movement, and pincer threats of crabs and lobsters — combined with the living-to-boiling aspect of cooking shellfish — can create strong disgust and fear responses. Severe food allergies to shellfish often coincide with and amplify this phobia.",
    prevalence: "Rare",
    category: "Animal",
    accentColor: "#f97316",
    backgroundImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1920&q=80",
  },

  // ─── P ────────────────────────────────────────────────────────────────────

  {
    id: "panthophobia",
    name: "Panthophobia",
    fear: "suffering or disease",
    keywords: [
      "suffering",
      "disease",
      "pain",
      "illness",
      "misery",
      "affliction",
      "condition",
    ],
    description:
      "Panthophobia is a fear of suffering or disease in its broadest sense — an overwhelming dread of all forms of suffering, whether physical illness, emotional pain, loss, or hardship. Sufferers may be unable to watch news, engage with anything reminding them of suffering, and live in constant anxiety about future pain.",
    prevalence: "Rare",
    category: "Existential",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "papaphobia",
    name: "Papaphobia",
    fear: "the Pope",
    keywords: [
      "Pope",
      "Vatican",
      "Catholic",
      "religion",
      "authority",
      "religious leader",
    ],
    description:
      "Papaphobia is a fear of the Pope or of papal authority. Documented as a specific phobia, it typically arises from extreme religious conflict, traumatic associations with Catholicism, or exaggerated fears about papal power. Exposure to imagery of the Pope triggers an anxiety response in sufferers.",
    prevalence: "Very rare",
    category: "Cultural",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "parasitophobia",
    name: "Parasitophobia",
    fear: "parasites",
    keywords: [
      "parasites",
      "worms",
      "mites",
      "lice",
      "infection",
      "infestation",
      "body",
      "skin",
    ],
    description:
      "Parasitophobia is a fear of parasites — worms, lice, mites, or other organisms that live on or in the body. The invisible, intimate nature of parasitic infection creates intense revulsion and anxiety. Sufferers may undergo repeated deworming treatments, refuse to eat food that might carry parasites, or avoid all contact with soil or animals.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "parturiphobia",
    name: "Parturiphobia",
    fear: "childbirth",
    keywords: [
      "childbirth",
      "giving birth",
      "labour",
      "delivery",
      "contractions",
      "pregnancy",
    ],
    description:
      "Parturiphobia (also tocophobia) is a deep fear of childbirth. The pain, potential for complications, loss of bodily control, and the existential weight of bringing a new life into the world can create overwhelming anxiety in pregnant women. It is one of the leading causes of elective Caesarean section requests.",
    prevalence: "6–10% of women",
    category: "Health-Based",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "pathophobia",
    name: "Pathophobia",
    fear: "disease",
    keywords: [
      "disease",
      "illness",
      "infection",
      "sickness",
      "contagion",
      "health",
      "medical",
    ],
    description:
      "Pathophobia is a generalised fear of disease. Unlike nosophobia (which targets a specific disease) or hypochondria (health anxiety focused on having illness already), pathophobia centres on the fear of contracting or developing disease. It drives excessive hygiene, avoidance of sick people, and refusal to engage with the healthcare system.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "peccatophobia",
    name: "Peccatophobia",
    fear: "sinning or wrongdoing",
    keywords: [
      "sin",
      "wrongdoing",
      "guilt",
      "morality",
      "transgression",
      "evil",
      "religion",
    ],
    description:
      "Peccatophobia is a fear of sinning or committing moral wrongdoing. Distinct from typical religious guilt, it involves disproportionate panic at the thought of minor moral infractions. Sufferers may engage in elaborate rituals to avoid even the possibility of sin and be unable to enjoy normal pleasures for fear they are inherently sinful.",
    prevalence: "Rare",
    category: "Emotional",
    accentColor: "#7c3aed",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "pedophobia",
    name: "Pedophobia",
    fear: "children",
    keywords: [
      "children",
      "kids",
      "toddler",
      "baby",
      "young",
      "infant",
      "childlike",
    ],
    description:
      "Pedophobia is a fear of children or infants. Their unpredictability, potential for mess, the social pressure to interact positively with children, and the responsibility they represent can all trigger anxiety. Sufferers may experience intense discomfort in child-friendly environments and avoid family occasions involving children.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "pediophobia",
    name: "Pediophobia",
    fear: "dolls",
    keywords: [
      "dolls",
      "puppets",
      "toys",
      "mannequin",
      "figurine",
      "doll house",
      "creepy",
    ],
    description:
      "Pediophobia is a fear of dolls, figurines, or doll-like objects. The eerie uncanny valley quality of human-like objects with painted features, glassy eyes, and rigid smiles triggers the same discomfort mechanism as automatonophobia. Sufferers may be unable to enter toy shops, antique stores, or homes with doll collections.",
    prevalence: "Uncommon",
    category: "Specific",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "pentheraphobia",
    name: "Pentheraphobia",
    fear: "mother-in-law",
    keywords: [
      "mother in law",
      "in laws",
      "family",
      "relationship",
      "marriage",
      "authority",
    ],
    description:
      "Pentheraphobia is a fear of one's mother-in-law. While the subject of much cultural humour, clinical pentheraphobia involves genuine anxiety responses to the presence or potential visit of a mother-in-law. It reflects deeper anxieties about approval, family dynamics, and the triangular relationships of extended family.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#ec4899",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "phagophobia",
    name: "Phagophobia",
    fear: "swallowing",
    keywords: [
      "swallowing",
      "choking",
      "food",
      "eating",
      "throat",
      "choke",
      "deglutition",
    ],
    description:
      "Phagophobia is a fear of swallowing or choking. The terror of food or liquid going down the wrong way creates significant eating difficulties — sufferers may restrict diet to soft foods only, eat very slowly, or develop severe food avoidance. It can be triggered by a choking incident or post-operatively following throat surgery.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#f97316",
    backgroundImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1920&q=80",
  },
  {
    id: "pharmacophobia",
    name: "Pharmacophobia",
    fear: "medication",
    keywords: [
      "medication",
      "drugs",
      "medicine",
      "pills",
      "tablets",
      "prescription",
      "side effects",
    ],
    description:
      "Pharmacophobia is a fear of medication or pharmaceutical drugs. Concerns about side effects, addiction, toxicity, or loss of control over bodily functioning prevent sufferers from taking prescribed medicines. It has serious health consequences and is particularly challenging given the frequency with which medication is prescribed for anxiety disorders themselves.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "phengophobia",
    name: "Phengophobia",
    fear: "daylight or sunshine",
    keywords: [
      "daylight",
      "sunshine",
      "sun",
      "light",
      "bright",
      "UV",
      "outdoors",
    ],
    description:
      "Phengophobia is a fear of daylight or bright sunshine. Related to heliophobia, it involves extreme avoidance of daylight exposure — going outdoors only at night or wearing maximum covering during daylight hours. Beyond skin cancer concerns, the bright light itself triggers anxiety and panic in sufferers.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "philemaphobia",
    name: "Philemaphobia",
    fear: "kissing",
    keywords: [
      "kiss",
      "kissing",
      "intimacy",
      "lips",
      "affection",
      "contact",
      "romance",
    ],
    description:
      "Philemaphobia is a fear of kissing. The intimate physical contact, breath-to-breath closeness, and potential vulnerability of kissing can trigger intense anxiety. It may relate to germophobia (bacteria in saliva), sexual anxiety, or simply the deep personal exposure that kissing represents. It significantly limits romantic relationships.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "philophobia",
    name: "Philophobia",
    fear: "falling in love",
    keywords: [
      "love",
      "falling in love",
      "romance",
      "emotional attachment",
      "relationship",
      "vulnerability",
    ],
    description:
      "Philophobia is a fear of falling in love or forming emotional attachments. The vulnerability, potential for heartbreak, loss of independence, and possible rejection all make romantic love terrifying rather than desirable. Sufferers sabotage relationships before they deepen, creating a painful cycle of longing and avoidance.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1920&q=80",
  },
  {
    id: "phobophobia",
    name: "Phobophobia",
    fear: "having a phobia or developing fear",
    keywords: [
      "fear",
      "phobia",
      "anxiety",
      "panic",
      "terror",
      "own fear",
      "afraid of being afraid",
    ],
    description:
      "Phobophobia is the fear of fear itself — specifically, the terror of experiencing a panic attack or developing a phobia. The metacognitive loop of fearing one's own anxiety responses creates a constantly active anxiety state. It significantly amplifies any underlying phobia and can be the primary driver of agoraphobia.",
    prevalence: "Uncommon",
    category: "Emotional",
    accentColor: "#a78bfa",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "placophobia",
    name: "Placophobia",
    fear: "tombstones",
    keywords: [
      "tombstone",
      "gravestone",
      "cemetery",
      "memorial",
      "grave",
      "inscription",
      "death",
    ],
    description:
      "Placophobia is a specific fear of tombstones or grave markers. More focused than necrophobia (fear of death generally) or coimetrophobia (fear of cemeteries), placophobia centres on the physical monuments to the dead — their inscriptions, their permanence, and their direct confrontation with human mortality.",
    prevalence: "Very rare",
    category: "Existential",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?w=1920&q=80",
  },
  {
    id: "plutophobia",
    name: "Plutophobia",
    fear: "wealth or wealthy people",
    keywords: [
      "wealth",
      "rich",
      "money",
      "luxury",
      "wealthy",
      "affluence",
      "millionaire",
    ],
    description:
      "Plutophobia is a fear of wealth or wealthy people. This may manifest as an aversion to receiving money, discomfort in affluent environments, or panic around very wealthy individuals. It can involve guilt about wealth, fear of corruption that wealth brings, or cultural/religious beliefs equating wealth with moral danger.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "pneumatiphobia",
    name: "Pneumatiphobia",
    fear: "spirits or ghosts",
    keywords: [
      "ghost",
      "spirit",
      "supernatural",
      "paranormal",
      "haunting",
      "apparition",
      "spectre",
    ],
    description:
      "Pneumatiphobia is a fear of spirits or ghosts. Despite the lack of scientific evidence for their existence, the culturally embedded concept of spirits haunting spaces creates genuine terror in many people. Sufferers cannot stay in old buildings, watch horror films involving ghosts, or be in spaces associated with death.",
    prevalence: "Common",
    category: "Supernatural",
    accentColor: "#7c3aed",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "pnigophobia",
    name: "Pnigophobia",
    fear: "choking or smothering",
    keywords: [
      "choking",
      "smothering",
      "suffocation",
      "throat",
      "airway",
      "asphyxiation",
      "breathing",
    ],
    description:
      "Pnigophobia is a fear of choking or being smothered. The terror of losing the ability to breathe — whether from food obstruction, a hand over the mouth, or a gas environment — triggers extreme avoidance of situations that might threaten airflow. It can lead to significant dietary restriction and panic in crowded, stuffy environments.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "pogonophobia",
    name: "Pogonophobia",
    fear: "beards",
    keywords: [
      "beard",
      "facial hair",
      "moustache",
      "stubble",
      "hairy face",
      "whiskers",
    ],
    description:
      "Pogonophobia is a fear of beards or men with facial hair. The unusual, somewhat primal appearance of a full beard can trigger disgust or anxiety. It may relate to associations with unkemptness, aggression, or religious extremism depending on the sufferer's personal or cultural history. Interestingly, it appears to be growing rarer as beards become fashionable.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "poinephobia",
    name: "Poinephobia",
    fear: "punishment",
    keywords: [
      "punishment",
      "penalty",
      "consequence",
      "discipline",
      "retribution",
      "justice",
    ],
    description:
      "Poinephobia is a fear of punishment or penalties. Like mastigophobia, it creates extreme risk aversion and unwillingness to take actions that could result in negative consequences. The fear may be so great that sufferers avoid all rules-based environments and are unable to function in structured institutions.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "politicophobia",
    name: "Politicophobia",
    fear: "politics or politicians",
    keywords: [
      "politics",
      "politicians",
      "government",
      "election",
      "power",
      "debate",
      "voting",
    ],
    description:
      "Politicophobia is a fear or severe dislike of politics and politicians. In clinical form, exposure to political content — news, debates, campaigns — triggers genuine anxiety responses. In an era of polarised and 24-hour news media, political anxiety affects increasing numbers of people, with some experiencing panic attacks at election time.",
    prevalence: "Uncommon as clinical phobia; common as anxiety",
    category: "Social",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "ponophobia",
    name: "Ponophobia",
    fear: "overworking or pain",
    keywords: [
      "work",
      "overwork",
      "pain",
      "effort",
      "exertion",
      "fatigue",
      "strain",
    ],
    description:
      "Ponophobia is a fear of overworking or of the pain associated with work and effort. Sufferers may be unable to commit to demanding tasks, refuse physically demanding jobs, and experience anxiety when facing any kind of strenuous effort. It significantly limits professional achievement and physical health.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#78716c",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "porphyrophobia",
    name: "Porphyrophobia",
    fear: "the colour purple",
    keywords: ["purple", "violet", "colour", "lavender", "indigo", "shade"],
    description:
      "Porphyrophobia is a fear of the colour purple. It may relate to cultural associations (mourning in some traditions), religious symbolism, or simply a conditioned disgust response from a traumatic event associated with the colour. Sufferers may rearrange their environment to eliminate purple from their visual field.",
    prevalence: "Very rare",
    category: "Specific",
    accentColor: "#7c3aed",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "potamophobia",
    name: "Potamophobia",
    fear: "rivers or running water",
    keywords: [
      "river",
      "stream",
      "current",
      "flow",
      "running water",
      "waterfall",
      "tide",
    ],
    description:
      "Potamophobia is a fear of rivers or running water. The unpredictable currents, unknown depths, and possibility of being swept away all create anxiety. Unlike aquaphobia (all water) or thalassophobia (deep/ocean), potamophobia is specifically triggered by moving freshwater, including fast-flowing streams and powerful rivers.",
    prevalence: "Rare",
    category: "Environmental",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  },
  {
    id: "pteronophobia",
    name: "Pteronophobia",
    fear: "feathers",
    keywords: [
      "feathers",
      "birds",
      "quill",
      "plume",
      "tickling",
      "soft",
      "avian",
    ],
    description:
      "Pteronophobia is a fear of feathers or of being tickled by feathers. The soft, floating, potentially tickling nature of feathers can trigger strong aversion. It often coexists with ornithophobia (bird fear) but is distinct — some sufferers fear feathers while being comfortable around birds, and vice versa.",
    prevalence: "Rare",
    category: "Specific",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1920&q=80",
  },
  {
    id: "pyrophobia",
    name: "Pyrophobia",
    fear: "fire",
    keywords: [
      "fire",
      "flames",
      "burning",
      "heat",
      "wildfire",
      "candle",
      "smoke",
      "inferno",
      "blaze",
    ],
    description:
      "Pyrophobia is an irrational, persistent fear of fire that extends far beyond a healthy respect for flames. Even a lit candle or fireplace can trigger intense panic. Often rooted in a traumatic fire-related experience, pyrophobia can prevent sufferers from using stoves, attending social gatherings with fireplaces, or living near areas prone to wildfires.",
    prevalence: "Uncommon but significant",
    category: "Environmental",
    accentColor: "#ff6b35",
    backgroundImage:
      "https://images.unsplash.com/photo-1487553410026-84cd69b0ad9f?w=1920&q=80",
  },

  // ─── R ────────────────────────────────────────────────────────────────────

  {
    id: "radiophobia",
    name: "Radiophobia",
    fear: "radiation or X-rays",
    keywords: [
      "radiation",
      "x-ray",
      "nuclear",
      "radioactive",
      "EMF",
      "exposure",
      "rays",
    ],
    description:
      "Radiophobia is an irrational fear of radiation, including X-rays, radio waves, or nuclear radiation. Post-Chernobyl and Fukushima, public radiophobia significantly increased in affected regions. Clinical radiophobia causes sufferers to refuse diagnostic X-rays, avoid mobile phones, remove WiFi equipment, and experience health anxiety about invisible radiation exposure.",
    prevalence: "Uncommon; contextually elevated in nuclear-affected areas",
    category: "Health-Based",
    accentColor: "#84cc16",
    backgroundImage:
      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1920&q=80",
  },
  {
    id: "ranidaphobia",
    name: "Ranidaphobia",
    fear: "frogs",
    keywords: [
      "frog",
      "toad",
      "amphibian",
      "jump",
      "wet",
      "sticky",
      "croaking",
    ],
    description:
      "Ranidaphobia is a specific fear of frogs. The leaping, sticky-skinned, erratically moving frog is a highly effective phobic stimulus. Sufferers avoid any body of water where frogs might live, cannot enter pet shops with frogs, and experience intense disgust and panic when frogs appear unexpectedly in gardens.",
    prevalence: "Uncommon",
    category: "Animal",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=1920&q=80",
  },
  {
    id: "rectophobia",
    name: "Rectophobia",
    fear: "rectal procedures or the rectum",
    keywords: [
      "rectum",
      "colonoscopy",
      "proctology",
      "medical procedure",
      "examination",
      "bowel",
    ],
    description:
      "Rectophobia is a fear of rectal diseases, examinations, or procedures. The intense vulnerability and embarrassment associated with rectal medical examination prevents sufferers from undergoing essential colorectal cancer screening and other investigations, leading to significantly worse health outcomes.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#dc2626",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "rhabdophobia",
    name: "Rhabdophobia",
    fear: "being beaten or punished",
    keywords: [
      "beating",
      "punishment",
      "violence",
      "discipline",
      "stick",
      "whip",
      "corporal",
    ],
    description:
      "Rhabdophobia is a fear of being beaten, struck, or subjected to corporal punishment. Deeply rooted in experiences of physical abuse, it manifests as extreme avoidance of any situation where physical harm might be inflicted, profound submission to authority figures, and inability to watch violent content of any kind.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "rhypophobia",
    name: "Rhypophobia",
    fear: "defecation",
    keywords: [
      "defecation",
      "toilet",
      "bowel movement",
      "faeces",
      "bodily waste",
      "embarrassment",
    ],
    description:
      "Rhypophobia is a fear of defecation or of the act of going to the toilet. Embarrassment about bodily functions, fear of losing control, or a traumatic experience of public toileting accident can drive extreme avoidance. Sufferers may hold bowel movements to dangerous levels, leading to serious gastrointestinal consequences.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "rupophobia",
    name: "Rupophobia",
    fear: "dirt",
    keywords: [
      "dirt",
      "grime",
      "filth",
      "contamination",
      "soil",
      "mud",
      "unclean",
    ],
    description:
      "Rupophobia is a fear of dirt, grime, or filth. Going well beyond a preference for cleanliness, sufferers experience genuine panic when encountering dirt, mud, or soiled surfaces. It is closely related to mysophobia and can prevent participation in gardening, outdoor activities, craft activities, or any engagement with messy environments.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#92400e",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },

  // ─── S ────────────────────────────────────────────────────────────────────

  {
    id: "scabiophobia",
    name: "Scabiophobia",
    fear: "scabies",
    keywords: [
      "scabies",
      "mites",
      "skin",
      "itch",
      "parasite",
      "contagious",
      "infestation",
    ],
    description:
      "Scabiophobia is a fear of scabies — a highly contagious parasitic skin infestation. The combination of the invisible mite, the unbearable itching, and the social stigma of infestation make scabies a potent phobic trigger. Sufferers may avoid all physical contact and spend excessive time checking their skin for signs of infestation.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#a3e635",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "scelerophobia",
    name: "Scelerophobia",
    fear: "criminals",
    keywords: [
      "criminals",
      "crime",
      "burglary",
      "attack",
      "violence",
      "mugger",
      "safety",
    ],
    description:
      "Scelerophobia is a fear of criminals or crime. While reasonable vigilance is healthy, scelerophobia involves disproportionate dread of criminal attack that prevents normal daily activity. Sufferers may refuse to go outside, live in fortified homes, and interpret every stranger as a potential criminal threat.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  },
  {
    id: "scopophobia",
    name: "Scopophobia",
    fear: "being stared at",
    keywords: [
      "staring",
      "being watched",
      "eyes",
      "attention",
      "observation",
      "scrutiny",
      "gaze",
    ],
    description:
      "Scopophobia is an intense fear of being stared at or being the focus of others' gaze. The felt sense of being under observation triggers severe self-consciousness and panic. It is among the most debilitating social phobias, preventing any public activity where one might attract attention, including shopping, walking in streets, or using public transport.",
    prevalence: "Relatively common",
    category: "Social",
    accentColor: "#a78bfa",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "scotomaphobia",
    name: "Scotomaphobia",
    fear: "blindness",
    keywords: [
      "blindness",
      "vision loss",
      "sight",
      "eyes",
      "visual",
      "darkness",
      "disability",
    ],
    description:
      "Scotomaphobia is a fear of going blind or of developing scotoma (blind spots). The prospect of losing sight — one of the most valued human senses — creates intense anxiety. Sufferers may compulsively test their vision, refuse any activity that might risk eye injury, and experience panic at any visual disturbance.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "scotophobia",
    name: "Scotophobia",
    fear: "darkness",
    keywords: [
      "darkness",
      "dark",
      "night",
      "shadow",
      "blackness",
      "dim",
      "absence of light",
    ],
    description:
      "Scotophobia is a fear of darkness, synonymous with nyctophobia. The complete absence of visual input removes all environmental cues and leaves the imagination to fill the void with threats. It is one of the most fundamental human fears, with clear evolutionary roots in the dangers of the night.",
    prevalence: "11% of adults",
    category: "Environmental",
    accentColor: "#818cf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "selachophobia",
    name: "Selachophobia",
    fear: "sharks",
    keywords: [
      "shark",
      "ocean",
      "sea",
      "fin",
      "bite",
      "great white",
      "predator",
    ],
    description:
      "Selachophobia is a fear of sharks, synonymous with galeophobia. The apex predator status, the cinematic history of shark-attack films, and the genuine (if statistically rare) danger they represent make sharks one of the most culturally powerful phobic triggers. Ocean swimming can become impossible for sufferers.",
    prevalence: "Relatively common",
    category: "Animal",
    accentColor: "#0ea5e9",
    backgroundImage:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=80",
  },
  {
    id: "selenophobia",
    name: "Selenophobia",
    fear: "the moon",
    keywords: [
      "moon",
      "lunar",
      "moonlight",
      "full moon",
      "night sky",
      "celestial",
    ],
    description:
      "Selenophobia is a fear of the moon. The moon's association with lycanthropy (werewolves), lunacy, and the supernatural creates a potent cultural fear substrate. Clinical selenophobia involves genuine anxiety triggered by looking at the moon, moonlit environments, or even images of the moon in media.",
    prevalence: "Rare",
    category: "Supernatural",
    accentColor: "#e0f2fe",
    backgroundImage:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
  },
  {
    id: "siderophobia",
    name: "Siderophobia",
    fear: "stars",
    keywords: [
      "stars",
      "night sky",
      "cosmos",
      "starlight",
      "constellations",
      "celestial",
    ],
    description:
      "Siderophobia is a fear of stars or the starry night sky. The overwhelming vastness of the cosmos, confronting insignificance, or the cold alienness of distant suns can trigger existential dread. Sufferers avoid clear nights, cannot watch astronomy programmes, and may close curtains at all times to avoid the night sky.",
    prevalence: "Rare",
    category: "Existential",
    accentColor: "#6366f1",
    backgroundImage:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
  },
  {
    id: "siderodromophobia",
    name: "Siderodromophobia",
    fear: "trains",
    keywords: [
      "train",
      "railway",
      "rail",
      "locomotive",
      "tracks",
      "underground",
      "tube",
    ],
    description:
      "Siderodromophobia is a fear of trains or railway travel. The confinement within the carriage, the speed, tunnels, the sound of brakes, and the inability to leave the vehicle mid-journey all contribute. Sufferers in cities dependent on train networks face significant daily challenges navigating their commute.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
  },
  {
    id: "sitophobia",
    name: "Sitophobia",
    fear: "food",
    keywords: [
      "food",
      "eating",
      "nutrition",
      "meal",
      "swallowing",
      "poisoning",
      "anorexia",
    ],
    description:
      "Sitophobia is a fear of eating or of food itself. A key feature of anorexia nervosa and ARFID (Avoidant Restrictive Food Intake Disorder), it can also stand alone as a specific phobia. Fear of choking, poisoning, contamination, or simply the social performance of eating in front of others all play roles in this phobia.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#f97316",
    backgroundImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1920&q=80",
  },
  {
    id: "snakephobia",
    name: "Snakephobia",
    fear: "snakes",
    keywords: [
      "snake",
      "serpent",
      "reptile",
      "viper",
      "cobra",
      "python",
      "slithering",
    ],
    description:
      "Snakephobia is the colloquial term for ophidiophobia — the evolutionary deep-seated fear of snakes. Archaeological evidence suggests humans have been alert to snake threats for millions of years. Even images of snakes displayed at a subliminal level have been shown to trigger threat responses in primates, reflecting this ancient fear.",
    prevalence: "33% of people",
    category: "Animal",
    accentColor: "#22c55e",
    backgroundImage:
      "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=1920&q=80",
  },
  {
    id: "soceraphobia",
    name: "Soceraphobia",
    fear: "parents-in-law",
    keywords: [
      "in-laws",
      "parents in law",
      "family",
      "marriage",
      "relatives",
      "approval",
    ],
    description:
      "Soceraphobia is a fear of one's parents-in-law. The judgement, approval-seeking, and family dynamics involved in in-law relationships can create significant anxiety. In cultures where parental approval is central to marriage, soceraphobia can prevent marriages entirely.",
    prevalence: "Uncommon",
    category: "Social",
    accentColor: "#f97316",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "sociophobia",
    name: "Sociophobia",
    fear: "social evaluation or company",
    keywords: [
      "social",
      "society",
      "people",
      "interaction",
      "evaluation",
      "judgment",
      "company",
    ],
    description:
      "Sociophobia (social anxiety disorder) is the most prevalent anxiety disorder globally, involving intense fear of social situations where one might be negatively evaluated. Unlike simple shyness, it involves a clinical level of distress that significantly impairs functioning in educational, professional, and personal domains.",
    prevalence: "7% of the population",
    category: "Social",
    accentColor: "#a78bfa",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "somniphobia",
    name: "Somniphobia",
    fear: "sleep",
    keywords: [
      "sleep",
      "unconscious",
      "vulnerable",
      "dreams",
      "nightmares",
      "death during sleep",
      "rest",
    ],
    description:
      "Somniphobia is a fear of sleep. The vulnerability of unconsciousness, fear of nightmares, sleep paralysis, or dying in sleep drives sufferers to resist sleep as long as possible. The resulting sleep deprivation worsens anxiety and can produce hallucinations, creating a terrifying feedback loop.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#818cf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "spectrophobia",
    name: "Spectrophobia",
    fear: "mirrors or spectres",
    keywords: [
      "mirror",
      "reflection",
      "ghost",
      "spectre",
      "glass",
      "image",
      "spirit",
    ],
    description:
      "Spectrophobia is a fear of mirrors, ghosts, or spectres. The combination of seeing oneself reflected (and the uncanny perception that the reflection acts independently) and the supernatural associations of mirrors as portals for spirits makes this a doubly loaded phobia. Media featuring haunted mirrors has significantly amplified it.",
    prevalence: "Uncommon",
    category: "Supernatural",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "stasibasiphobia",
    name: "Stasibasiphobia",
    fear: "standing or walking",
    keywords: [
      "standing",
      "walking",
      "balance",
      "falling",
      "movement",
      "gait",
      "upright",
    ],
    description:
      "Stasibasiphobia is a fear of standing or walking. The terror of falling, losing balance, or being unable to control bodily movement when upright prevents sufferers from maintaining normal mobility. It can be a symptom of underlying neurological conditions but also appears as an isolated psychogenic phobia.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "stenophobia",
    name: "Stenophobia",
    fear: "narrow spaces",
    keywords: [
      "narrow",
      "tight",
      "confined",
      "squeeze",
      "corridor",
      "alley",
      "passage",
    ],
    description:
      "Stenophobia is a fear of narrow places or constricted passages. Related to claustrophobia but specifically triggered by the narrowness of a space rather than its overall smallness, sufferers struggle with narrow corridors, tight alleyways, or any passage where their body barely fits.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?w=1920&q=80",
  },
  {
    id: "stygiophobia",
    name: "Stygiophobia",
    fear: "hell or damnation",
    keywords: [
      "hell",
      "damnation",
      "afterlife",
      "punishment",
      "sin",
      "devil",
      "infernal",
    ],
    description:
      "Stygiophobia is a fear of hell or of being condemned to eternal damnation. Related to hadephobia, it is typically rooted in religious upbringing emphasising divine punishment. The constant anxiety about one's spiritual fate interferes with enjoyment of present life and creates obsessive guilt about perceived transgressions.",
    prevalence: "Uncommon; religiously linked",
    category: "Supernatural",
    accentColor: "#dc2626",
    backgroundImage:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?w=1920&q=80",
  },
  {
    id: "suriphobia",
    name: "Suriphobia",
    fear: "mice",
    keywords: [
      "mouse",
      "mice",
      "rodent",
      "vermin",
      "squeak",
      "whiskers",
      "tail",
    ],
    description:
      "Suriphobia is a specific fear of mice. The swift, darting movement of mice, their ability to appear suddenly from hiding, and their historical association with plague and disease all trigger the phobia. Sufferers may be unable to live or work in older buildings where mice might be present.",
    prevalence: "Relatively common",
    category: "Animal",
    accentColor: "#78716c",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "symbolophobia",
    name: "Symbolophobia",
    fear: "symbols",
    keywords: [
      "symbols",
      "signs",
      "logos",
      "icons",
      "religious symbols",
      "imagery",
      "occult",
    ],
    description:
      "Symbolophobia is a fear of symbols or symbolic meaning. Particularly triggered by symbols associated with danger, evil, or occult practices, sufferers experience intense anxiety upon encountering certain logos, religious or political symbols, or cultural icons. In severe cases, even benign symbols can become threatening.",
    prevalence: "Very rare",
    category: "Specific",
    accentColor: "#7c3aed",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "syngenesophobia",
    name: "Syngenesophobia",
    fear: "relatives",
    keywords: [
      "relatives",
      "family",
      "relations",
      "kin",
      "family members",
      "extended family",
    ],
    description:
      "Syngenesophobia is a fear of relatives or family members. The complex, often charged emotional dynamics of family relationships, combined with obligations and expectations unique to family, create anxiety in some people that extends beyond the normal difficulty of family politics into genuine phobic avoidance.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#f97316",
    backgroundImage:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1920&q=80",
  },
  {
    id: "syphilophobia",
    name: "Syphilophobia",
    fear: "syphilis",
    keywords: [
      "syphilis",
      "STI",
      "STD",
      "venereal disease",
      "sexual health",
      "infection",
      "contamination",
    ],
    description:
      "Syphilophobia is an intense, irrational fear of syphilis or of contracting sexually transmitted infections. Before the antibiotic era, syphilis was a horrific progressive disease and genuine terror was rational. The residual cultural memory persists as a phobia, preventing sexual intimacy even in safe, committed relationships.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },

  // ─── T ────────────────────────────────────────────────────────────────────

  {
    id: "tachophobia",
    name: "Tachophobia",
    fear: "speed",
    keywords: [
      "speed",
      "fast",
      "velocity",
      "rapid",
      "acceleration",
      "driving",
      "movement",
    ],
    description:
      "Tachophobia is a fear of speed. The sensation of rapid movement — in vehicles, on rides, or even running — triggers intense anxiety. The loss of control implied by high velocity, and the association of speed with danger and accidents, prevents sufferers from using motorways, amusement parks, and high-speed transport.",
    prevalence: "Uncommon",
    category: "Situational",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
  },
  {
    id: "taeniophobia",
    name: "Taeniophobia",
    fear: "tapeworms",
    keywords: [
      "tapeworm",
      "parasite",
      "worm",
      "intestinal",
      "infestation",
      "infection",
      "food",
    ],
    description:
      "Taeniophobia is a fear of tapeworms or intestinal parasites. The idea of a living organism inhabiting one's body invisibly, feeding on nutrition and potentially growing to great length, creates profound visceral horror. Sufferers may undergo repeated stool tests, cook all meat to high temperatures, and avoid certain foods entirely.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "taphephobia",
    name: "Taphephobia",
    fear: "being buried alive",
    keywords: [
      "buried alive",
      "coffin",
      "premature burial",
      "underground",
      "trapped",
      "death",
    ],
    description:
      "Taphephobia is a fear of being buried alive — one of the most historically documented phobias. Before reliable death certification, premature burial was a genuine risk, and Edgar Allan Poe wrote extensively about it. The combination of claustrophobia, live burial terror, and death anxiety makes this a particularly potent phobia.",
    prevalence: "Uncommon",
    category: "Existential",
    accentColor: "#64748b",
    backgroundImage:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?w=1920&q=80",
  },
  {
    id: "technophobia",
    name: "Technophobia",
    fear: "technology",
    keywords: [
      "technology",
      "computers",
      "digital",
      "internet",
      "machines",
      "robots",
      "AI",
    ],
    description:
      "Technophobia is a fear of advanced technology. As AI, automation, and digital surveillance advance rapidly, technophobia encompasses fear of computers, robots, AI systems, and technological surveillance. In moderate form it affects workplace performance; in severe form it prevents engagement with modern society entirely.",
    prevalence: "Uncommon but increasing",
    category: "Situational",
    accentColor: "#3b82f6",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "teleophobia",
    name: "Teleophobia",
    fear: "definite plans or finalised outcomes",
    keywords: [
      "plans",
      "commitment",
      "definite",
      "final",
      "outcome",
      "goals",
      "determination",
    ],
    description:
      "Teleophobia is a fear of having definite plans or of finalised outcomes. The permanence of committed plans and the closure of possibilities triggers anxiety. Sufferers resist making firm arrangements, avoid contracts, and prefer open-ended situations — at significant personal and professional cost.",
    prevalence: "Rare",
    category: "Emotional",
    accentColor: "#f59e0b",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "thalassophobia",
    name: "Thalassophobia",
    fear: "deep water or the ocean",
    keywords: [
      "ocean",
      "sea",
      "deep water",
      "deep sea",
      "underwater",
      "abyss",
      "waves",
      "drowning",
      "water",
      "marine",
    ],
    description:
      "Thalassophobia is an intense fear of large, deep bodies of water — particularly the ocean. The vast, unknowable depths trigger existential dread in sufferers. It's not just drowning they fear, but the crushing darkness below, the creatures within, and the sheer scale of the water. Often described as one of the most viscerally unsettling of all phobias.",
    prevalence: "Estimated millions",
    category: "Environmental",
    accentColor: "#06b6d4",
    backgroundImage:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=80",
  },
  {
    id: "thanatophobia",
    name: "Thanatophobia",
    fear: "death or dying",
    keywords: [
      "death",
      "dying",
      "dead",
      "mortality",
      "afterlife",
      "end",
      "funeral",
      "grave",
      "die",
    ],
    description:
      "Thanatophobia is an intense, overwhelming fear of death or the process of dying. While most people have some anxiety around mortality, thanatophobia paralyzes daily life. Sufferers may obsessively monitor their health, avoid hospitals, and struggle to sleep. It often underlies many other anxieties and can be triggered by the loss of someone close.",
    prevalence: "Affects millions",
    category: "Existential",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?w=1920&q=80",
  },
  {
    id: "theatrophobia",
    name: "Theatrophobia",
    fear: "theatres",
    keywords: [
      "theatre",
      "stage",
      "performance",
      "play",
      "audience",
      "actors",
      "drama",
    ],
    description:
      "Theatrophobia is a fear of theatres or theatrical performances. The darkened auditorium, the captive audience situation, the possibility of being called on stage, or simply the intensity of live performance can all trigger anxiety. Sufferers miss out on significant cultural experiences and face social difficulty when others attend theatre.",
    prevalence: "Rare",
    category: "Situational",
    accentColor: "#e879f9",
    backgroundImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=80",
  },
  {
    id: "theophobia",
    name: "Theophobia",
    fear: "God or religion",
    keywords: [
      "God",
      "religion",
      "divine",
      "deity",
      "faith",
      "worship",
      "church",
      "supernatural",
    ],
    description:
      "Theophobia is a fear of God, divine punishment, or religion. It may manifest as inability to enter religious buildings, extreme discomfort with religious imagery, or panic triggered by religious discourse. Rooted in traumatic religious experiences, shaming, or threats of divine punishment in childhood, it creates significant difficulty in religiously saturated cultures.",
    prevalence: "Uncommon",
    category: "Supernatural",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "tonitrophobia",
    name: "Tonitrophobia",
    fear: "thunder",
    keywords: [
      "thunder",
      "boom",
      "storm",
      "lightning",
      "crash",
      "weather",
      "rumble",
    ],
    description:
      "Tonitrophobia is a specific fear of thunder. The sudden, violent acoustic impact of a thunderclap activates the startle reflex and triggers panic. Sufferers may wear noise-cancelling headphones during storm season, avoid the outdoors at any sign of clouds, and experience anticipatory anxiety whenever storm forecasts are issued.",
    prevalence: "Common",
    category: "Environmental",
    accentColor: "#c084fc",
    backgroundImage:
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1920&q=80",
  },
  {
    id: "toxiphobia",
    name: "Toxiphobia",
    fear: "poisons or being poisoned",
    keywords: [
      "poison",
      "toxic",
      "contaminated",
      "venom",
      "chemicals",
      "food safety",
      "lethal",
    ],
    description:
      "Toxiphobia is an intense fear of poison or of being accidentally poisoned. Sufferers may refuse to eat food prepared by others, refuse medication for fear of toxic doses, and experience panic when near household chemicals. The invisible, subtle nature of poison — undetectable by taste or smell — makes it an especially feared threat.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "traumatophobia",
    name: "Traumatophobia",
    fear: "injury or trauma",
    keywords: [
      "injury",
      "trauma",
      "accident",
      "wound",
      "damage",
      "hurt",
      "physical harm",
    ],
    description:
      "Traumatophobia is a fear of injury, wounds, or physical trauma. It can prevent participation in sports, outdoor activities, and medical procedures, and may lead to extreme safety-seeking behaviour. The fear often generalises to a broader anxiety about physical vulnerability and can severely restrict an active lifestyle.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "tremophobia",
    name: "Tremophobia",
    fear: "trembling or shaking",
    keywords: [
      "trembling",
      "shaking",
      "tremor",
      "vibration",
      "earthquake",
      "unstable",
      "quiver",
    ],
    description:
      "Tremophobia is a fear of trembling, shaking, or experiencing bodily tremors. The loss of physical control implied by trembling, or the association of tremors with serious neurological conditions (Parkinson's disease), creates intense anxiety in those who notice any shaking in themselves.",
    prevalence: "Rare",
    category: "Health-Based",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },
  {
    id: "triskaidekaphobia",
    name: "Triskaidekaphobia",
    fear: "the number 13",
    keywords: [
      "thirteen",
      "13",
      "unlucky",
      "number",
      "superstition",
      "bad luck",
      "Friday 13th",
    ],
    description:
      "Triskaidekaphobia is a fear of the number 13. One of the most culturally embedded superstitions in Western societies, it has given rise to buildings without a 13th floor, airlines without a row 13, and widespread avoidance of any event on the 13th, especially Friday the 13th. It represents the intersection of superstition and clinical phobia.",
    prevalence: "Relatively common superstition; rarer as clinical phobia",
    category: "Specific",
    accentColor: "#7c3aed",
    backgroundImage:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975de51?w=1920&q=80",
  },
  {
    id: "trypanophobia",
    name: "Trypanophobia",
    fear: "needles or injections",
    keywords: [
      "needle",
      "injection",
      "syringe",
      "blood test",
      "vaccine",
      "iv",
      "cannula",
      "shot",
    ],
    description:
      "Trypanophobia is an intense fear of needles and injections. Affecting a significant portion of the population, it prevents many people from receiving vaccines, blood tests, IV treatments, and other essential medical interventions. The phobia has measurable impacts on public health vaccination uptake rates and can be life-threatening in chronic disease management.",
    prevalence: "10% of people",
    category: "Health-Based",
    accentColor: "#94a3b8",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "trypophobia",
    name: "Trypophobia",
    fear: "holes or clustered patterns",
    keywords: [
      "holes",
      "clusters",
      "pattern",
      "bumps",
      "dots",
      "honeycomb",
      "sponge",
      "pores",
      "repetitive",
    ],
    description:
      "Trypophobia is an aversion to clustered patterns of small holes, bumps, or irregular shapes. While not officially classified in the DSM, millions report experiencing disgust, goosebumps, or itching upon seeing honeycombs, lotus pods, or similar textures. Scientists suggest it may be linked to pattern recognition that historically indicated disease or danger.",
    prevalence: "16% of people",
    category: "Pattern-Based",
    accentColor: "#d97706",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
  {
    id: "tuberculophobia",
    name: "Tuberculophobia",
    fear: "tuberculosis",
    keywords: [
      "tuberculosis",
      "TB",
      "lung",
      "infection",
      "contagious",
      "disease",
      "respiratory",
    ],
    description:
      "Tuberculophobia is a fear of tuberculosis — historically one of the most feared infectious diseases. The chronic, contagious, wasting nature of TB created widespread cultural fear, especially in the 19th century. In modern context, fears of drug-resistant TB strains have created a new wave of tuberculophobia.",
    prevalence: "Rare in developed countries",
    category: "Health-Based",
    accentColor: "#ef4444",
    backgroundImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80",
  },

  // ─── U ────────────────────────────────────────────────────────────────────

  {
    id: "uranophobia",
    name: "Uranophobia",
    fear: "heaven or the sky",
    keywords: [
      "heaven",
      "sky",
      "celestial",
      "afterlife",
      "paradise",
      "above",
      "clouds",
    ],
    description:
      "Uranophobia is a fear of heaven or the sky. It may manifest as agoraphobia-like discomfort under a vast open sky, existential terror about celestial spaces and what they might contain, or religious anxiety about the afterlife and divine judgement associated with heavenly realms.",
    prevalence: "Very rare",
    category: "Existential",
    accentColor: "#38bdf8",
    backgroundImage:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
  },
  {
    id: "urophobia",
    name: "Urophobia",
    fear: "urine or urination",
    keywords: [
      "urine",
      "urination",
      "bathroom",
      "toilet",
      "pee",
      "bladder",
      "wet",
    ],
    description:
      "Urophobia is a fear of urine or the act of urinating. Anxiety about urinating in public or semi-public spaces (paruresis, also called shy bladder syndrome) is the most common manifestation. In severe cases, sufferers cannot urinate unless completely alone, restricting travel, work, and social activities significantly.",
    prevalence: "Uncommon",
    category: "Health-Based",
    accentColor: "#fbbf24",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },

  // ─── V ────────────────────────────────────────────────────────────────────

  {
    id: "vaccinophobia",
    name: "Vaccinophobia",
    fear: "vaccinations",
    keywords: [
      "vaccine",
      "vaccination",
      "injection",
      "needle",
      "immunisation",
      "shot",
      "jab",
    ],
    description:
      "Vaccinophobia is a fear of vaccines or the vaccination process. Distinct from vaccine hesitancy (which is ideologically motivated), clinical vaccinophobia involves genuine panic responses to needles, medical settings, or the idea of having a substance injected. It has significant public health implications given its impact on immunisation rates.",
    prevalence: "Uncommon as clinical phobia; common as hesitancy",
    category: "Health-Based",
    accentColor: "#4ade80",
    backgroundImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80",
  },
  {
    id: "venustraphobia",
    name: "Venustraphobia",
    fear: "beautiful women",
    keywords: [
      "beautiful women",
      "attractive women",
      "female beauty",
      "women",
      "femininity",
    ],
    description:
      "Venustraphobia (also caligynephobia) is a fear of beautiful women. Typically affecting men, it involves extreme anxiety, speechlessness, and avoidance behaviour in the presence of attractive women. Low self-esteem, past rejection, or deeply internalised beliefs about unworthiness underlie the phobia.",
    prevalence: "Rare",
    category: "Social",
    accentColor: "#f43f5e",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  },
  {
    id: "verminophobia",
    name: "Verminophobia",
    fear: "vermin or germs",
    keywords: [
      "vermin",
      "pests",
      "germs",
      "rodent",
      "cockroach",
      "infestation",
      "contamination",
    ],
    description:
      "Verminophobia is a fear of vermin — rats, mice, cockroaches, and other pest species — often combined with fear of the germs and disease they carry. The combination of disgust, disease association, and the sudden, unpredictable appearances of vermin in domestic spaces makes this one of the more prevalent urban phobias.",
    prevalence: "Relatively common",
    category: "Animal",
    accentColor: "#78716c",
    backgroundImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  },
];

export default phobias;

// { about to make change
//   id: 'vestiphobia',
//   name: 'Vestiphobia',
//   fear: 'clothing',
//   keywords: ['clothing', 'clothes',  'clothing', 'fabric', 'wearing', 'textiles', 'fabric texture', 'dress'],
//   description: The description
//     'Vestiphobia is a fear of clothing or of wearing certain garments. It may relate to sensory sensitivity to fabric textures, associations of clothing with restriction, or trauma linked to specific garments. Sufferers may wear only minimal or specific types of clothing and experience distress when required to
// adding more details soon probably tomorrow
