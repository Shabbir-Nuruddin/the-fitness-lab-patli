import "@fontsource/outfit/800.css";
import type { Site } from "./lib";

const SPLIT: [number, number][] = [[5, 9], [17, 21]];

export const SITE: Site = {
  name: "The Fitness Lab",
  sub: { en: "Strength & cardio · Station Colony, Patli", hi: "स्ट्रेंथ और कार्डियो · स्टेशन कॉलोनी, पटली" },
  banner: { en: "Morning and evening batches, Monday to Saturday: WhatsApp to plan your first visit", hi: "सोमवार से शनिवार सुबह और शाम के बैच: पहली विज़िट के लिए व्हाट्सऐप करें" },
  phone: "919518800575",
  phoneDisplay: "+91 95188 00575",
  lat: 28.401854,
  lon: 76.8561304,
  hours: [[], SPLIT, SPLIT, SPLIT, SPLIT, SPLIT, SPLIT],
  theme: {
    dark: true,
    bg: "#08100d",
    bg2: "#0d1814",
    panel: "#12201a",
    ink: "#ecf7f2",
    ink2: "#b6cbc1",
    ink3: "#789084",
    line: "#1a2e25",
    accent: "#2ee59d",
    onAccent: "#00261a",
    display: "Outfit",
    weight: 800,
    upper: false,
  },
  scene: "barbell",
  align: "right",
  hero: {
    title: [
      { en: "Every machine.", hi: "हर मशीन।" },
      { en: "Right here in Patli.", hi: "यहीं पटली में।" },
    ],
    proof: {
      en: "5.0 on Google from 40 reviews. Full equipment for fat loss and muscle gain, a morning high-intensity cardio batch, and staff members single out.",
      hi: "गूगल पर 40 रिव्यू से 5.0। फ़ैट लॉस और मसल गेन के लिए पूरी मशीनें, सुबह का हाई-इंटेंसिटी कार्डियो बैच, और स्टाफ़ जिसकी मेंबर्स तारीफ़ करते हैं।",
    },
    fallback: "/img/p1.jpg",
  },
  marquee: ["Fat loss", "Muscle gain", "HIIT cardio", "Battle ropes", "Strength", "Transformations", "Patli"],
  dishes: {
    title: { en: "What members come for", hi: "मेंबर किसलिए आते हैं" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "cards",
    items: [
      { name: { en: "Equipment", hi: "इक्विपमेंट" }, quote: "Excellent Equipment, you can pretty much find every machine.", img: "/img/p4.jpg" },
      { name: { en: "Fat loss & gain", hi: "फ़ैट लॉस और गेन" }, quote: "All equipment available for weight gain and fat loss.... Great experience here 👍", img: "/img/p8.jpg" },
      { name: { en: "Cardio", hi: "कार्डियो" }, quote: "Great experience here...good place for cardio", img: "/img/p2.jpg" },
      { name: { en: "Staff", hi: "स्टाफ़" }, quote: "One of the best thing which I liked the most is the nature of gym staff" },
      { name: { en: "Learning", hi: "सीखना" }, quote: "The knowledge I gained here is just unexplainable" },
      { name: { en: "Transformations", hi: "ट्रांसफ़ॉर्मेशन" }, quote: "Body transformation hub 💪💪" },
    ],
  },
  gallery: {
    title: { en: "Inside The Fitness Lab", hi: "द फ़िटनेस लैब के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p1.jpg", alt: "Main floor at The Fitness Lab", wide: true },
      { src: "/img/p4.jpg", alt: "Machines along the wall" },
      { src: "/img/p13.jpg", alt: "Trophies on display" },
      { src: "/img/p2.jpg", alt: "Battle ropes session", wide: true },
      { src: "/img/p12.jpg", alt: "Strength area" },
      { src: "/img/p14.jpg", alt: "Members together after a session" },
    ],
  },
  feature: {
    kind: "occasions",
    title: { en: "Pick your programme", hi: "अपना प्रोग्राम चुनें" },
    body: { en: "Fat loss, muscle gain, or the early cardio batch.", hi: "फ़ैट लॉस, मसल गेन, या सुबह का कार्डियो बैच।" },
    img: "/img/p2.jpg",
    items: [
      { label: { en: "Morning HIIT", hi: "सुबह HIIT" }, quote: "Also if you are aiming for fat loss there is an another batch in morning which does HIGH INTENSITY CARDIO ." },
      { label: { en: "Programmes", hi: "प्रोग्राम" }, quote: "Fat burning and muscle gaining programme available 😄😄" },
      { label: { en: "Community", hi: "कम्युनिटी" }, quote: "I've seen crazy transformations and the community vibe is lit!" },
    ],
  },
  reviews: {
    title: { en: "Forty reviews, a perfect 5.0", hi: "चालीस रिव्यू, पूरे 5.0" },
    rating: 5.0,
    dist: [39, 1, 0, 0, 0],
    quotes: [
      { quote: "Best decision ever! The gym's equipment is top-notch, staff is super supportive, and the energy's contagious.", stars: 5 },
      { quote: "Gym at nominal fee .... Great experience with trainer", stars: 5 },
      { quote: "This is the one of the best fitness club. I really love this fitness club.💖💖💖", stars: 5 },
      { quote: "All gym equipment...friendly environment", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Station Colony, Patli", hi: "स्टेशन कॉलोनी, पटली" },
    img: "/img/p12.jpg",
    alt: "Strength area at The Fitness Lab",
    address: { en: "Station Colony, Patli, Haryana", hi: "स्टेशन कॉलोनी, पटली, हरियाणा" },
    note: { en: "Monday to Saturday, 5 to 9 am and 5 to 9 pm. Closed Sunday.", hi: "सोमवार से शनिवार, सुबह 5 से 9 और शाम 5 से 9। रविवार बंद।" },
  },
  story: [
    { kicker: { en: "Kit", hi: "मशीनें" }, title: { en: "Every machine you need.", hi: "हर ज़रूरी मशीन।" }, quote: "Excellent Equipment, you can pretty much find every machine." },
    { kicker: { en: "Mornings", hi: "सुबह" }, title: { en: "A cardio batch for fat loss.", hi: "फ़ैट लॉस के लिए कार्डियो बैच।" }, quote: "if you are aiming for fat loss there is an another batch in morning which does HIGH INTENSITY CARDIO ." },
    { kicker: { en: "People", hi: "लोग" }, title: { en: "Staff people remember.", hi: "स्टाफ़ जो याद रहता है।" }, quote: "One of the best thing which I liked the most is the nature of gym staff" },
  ],
  build: {
    title: { en: "Plan your first visit", hi: "अपनी पहली विज़िट प्लान करें" },
    body: { en: "Pick a goal and a time. It goes to WhatsApp exactly as you see it.", hi: "लक्ष्य और समय चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Goal", hi: "लक्ष्य" }, options: [
      { name: { en: "Fat loss", hi: "फ़ैट लॉस" } },
      { name: { en: "Muscle gain", hi: "मसल गेन" } },
      { name: { en: "Morning cardio batch", hi: "सुबह का कार्डियो बैच" } },
      { name: { en: "Just starting out", hi: "अभी शुरुआत" } },
    ] },
    when: true,
    hello: { en: "Hi The Fitness Lab, I'd like to visit:", hi: "नमस्ते द फ़िटनेस लैब, मुझे विज़िट करनी है:" },
  },
  waHello: {
    en: "Hi The Fitness Lab, I'd like to know about joining. Goal: , batch (morning/evening): ",
    hi: "नमस्ते द फ़िटनेस लैब, मुझे जॉइन करने के बारे में जानना है। लक्ष्य: , बैच (सुबह/शाम): ",
  },
  order: ["dishes", "feature", "build", "reviews", "gallery", "visit"],
};
