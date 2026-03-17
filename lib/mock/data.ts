import { City, Collection, SportCategory } from "@/lib/types/collection";

export const MOCK_CITIES: City[] = [
  { id: "0", name: "თბილისი" },
  { id: "1", name: "იმერეთი" },
  { id: "2", name: "აჭარა" },
  { id: "3", name: "ქვემო ქართლი" },
  { id: "4", name: "სამეგრელო-ზემო სვანეთი" },
  { id: "5", name: "კახეთი" },
  { id: "6", name: "შიდა ქართლი" },
  { id: "7", name: "აფხაზეთი" },
  { id: "8", name: "სამცხე-ჯავახეთი" },
  { id: "9", name: "გურია" },
  { id: "10", name: "მცხეთა-მთიანეთი" },
  { id: "11", name: "რაჭა-ლეჩხუმი და ქვემო სვანეთი" },
];

export const MOCK_SPORTS: SportCategory[] = [
  { id: "0", name: "ჩოგბურთი" },
  { id: "1", name: "რაგბი" },
  { id: "2", name: "ფეხბურთი" },
  { id: "3", name: "კალათბურთი" },
  { id: "4", name: "ჭადრაკი" },
  { id: "5", name: "ცურვა" },
  { id: "6", name: "ჭიდაობა" },
];

export const MOCK_COLLECTIONS: Collection[] = [
  {
    id: "0",
    title: "ახალგაზრდა ჩოგბურთელების მხარდაჭერა",
    description:
      "ჩოგბურთის გუნდს სჭირდება შეკრებაზე წასვლა, აუცილებელია გარკვეული ეკიპირებისა და თანხის შეგროვება",
    cityId: "0",
    sportId: "0",
    howWillHelp:
      "გავეცნობით სიტუაციას ადგილზე, გამოვიკვლევთ საჭიროებებს, ვიპოვით სახლს და ვუქირავებთ. ასევე გამოვწერთ ეკიპირებას",
    raised: 1200,
    goal: 3000,
    imageUrl: "/images/landing/collectings/children-football-1.webp",
    contributors: [
      {
        id: "0",
        name: "გიორგი მახარაძე",
        avatarUrl: "/images/user/user-1.jpg",
        contributedAmount: 200,
      },
      {
        id: "1",
        name: "ნინო კვარაცხელია",
        avatarUrl: "/images/user/user-2.webp",
        contributedAmount: 150,
      },
      { id: "2", name: "დავით ჩიქოვანი", contributedAmount: 300 },
      {
        id: "3",
        name: "მარიამ გელაშვილი",
        avatarUrl: "/images/user/user-1.jpg",
        contributedAmount: 100,
      },
      { id: "4", name: "ლუკა ბერიძე", contributedAmount: 450 },
    ],
  },
  {
    id: "1",
    title: "რაგბის გუნდის ინვენტარი",
    description:
      "რაგბის გუნდს სჭირდება ახალი ინვენტარი და ფორმა მომავალი სეზონისთვის",
    howWillHelp:
      "გავეცნობით სიტუაციას ადგილზე, გამოვიკვლევთ საჭიროებებს, ვიპოვით სახლს და ვუქირავებთ. ასევე გამოვწერთ ეკიპირებას",
    cityId: "1",
    sportId: "1",
    raised: 800,
    goal: 2000,
    imageUrl: "/images/landing/collectings/children-football-1.webp",
    contributors: [
      { id: "0", name: "სანდრო კობახიძე", contributedAmount: 400 },
      {
        id: "1",
        name: "თამარ ლომიძე",
        avatarUrl: "/images/user/user-2.webp",
        contributedAmount: 400,
      },
    ],
  },
  {
    id: "2",
    title: "ფეხბურთის ბანაკი ბათუმში",
    description:
      "ახალგაზრდა ფეხბურთელების საზაფხულო ბანაკის ორგანიზება ბათუმში",
    howWillHelp:
      "გავეცნობით სიტუაციას ადგილზე, გამოვიკვლევთ საჭიროებებს, ვიპოვით სახლს და ვუქირავებთ. ასევე გამოვწერთ ეკიპირებას",
    cityId: "2",
    sportId: "2",
    raised: 2500,
    goal: 5000,
    imageUrl: "/images/landing/collectings/1.jpg",
    contributors: [
      {
        id: "0",
        name: "ნიკა წიკლაური",
        avatarUrl: "/images/user/user-1.jpg",
        contributedAmount: 500,
      },
      { id: "1", name: "ანა დევდარიანი", contributedAmount: 1000 },
      { id: "2", name: "მიხეილ სამხარაძე", contributedAmount: 700 },
      {
        id: "3",
        name: "სოფო ჯიქია",
        avatarUrl: "/images/user/user-2.webp",
        contributedAmount: 300,
      },
    ],
  },
  {
    id: "3",
    title: "კალათბურთის მოედნის რეაბილიტაცია",
    description:
      "ქვემო ქართლის კალათბურთის მოედანს სჭირდება რეაბილიტაცია და ახალი სათამაშო ინვენტარი",
    cityId: "3",
    sportId: "4",
    raised: 400,
    goal: 1500,
    imageUrl: "/images/landing/collectings/children-football-1.webp",
    contributors: [
      { id: "0", name: "გვანცა ხაჭაპურიძე", contributedAmount: 200 },
      {
        id: "1",
        name: "ვახო მელიქიძე",
        avatarUrl: "/images/user/user-1.jpg",
        contributedAmount: 200,
      },
    ],
  },
  {
    id: "4",
    title: "ჭადრაკის ტურნირი თბილისში",
    description: "სრულიად საქართველოს ჭადრაკის ტურნირის ორგანიზება თბილისში",
    cityId: "0",
    sportId: "4",
    raised: 300,
    goal: 600,
    imageUrl: "/images/landing/collectings/children-football-1.webp",
    contributors: [
      {
        id: "0",
        name: "ელენე ფანჯიკიძე",
        avatarUrl: "/images/user/user-2.webp",
        contributedAmount: 300,
      },
    ],
  },
];
