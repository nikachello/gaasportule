import prisma from "../lib/prisma";

async function main() {
  console.log("🌱 Seeding...");

  // Clean up in correct order (respect foreign keys)
  await prisma.contribution.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.collection.deleteMany();
  await prisma.city.deleteMany();
  await prisma.sportCategory.deleteMany();

  // Cities
  const tbilisi = await prisma.city.create({ data: { name: "თბილისი" } });
  const imereti = await prisma.city.create({ data: { name: "იმერეთი" } });
  const adjara = await prisma.city.create({ data: { name: "აჭარა" } });
  const qvemoQartli = await prisma.city.create({
    data: { name: "ქვემო ქართლი" },
  });
  const samegrelo = await prisma.city.create({
    data: { name: "სამეგრელო-ზემო სვანეთი" },
  });
  const kakheti = await prisma.city.create({ data: { name: "კახეთი" } });
  await prisma.city.create({
    data: { name: "შიდა ქართლი" },
  });
  await prisma.city.create({
    data: { name: "სამცხე-ჯავახეთი" },
  });
  await prisma.city.create({ data: { name: "გურია" } });
  await prisma.city.create({
    data: { name: "მცხეთა-მთიანეთი" },
  });

  // Sports
  const tennis = await prisma.sportCategory.create({
    data: { name: "ჩოგბურთი" },
  });
  const rugby = await prisma.sportCategory.create({ data: { name: "რაგბი" } });
  const football = await prisma.sportCategory.create({
    data: { name: "ფეხბურთი" },
  });
  const basketball = await prisma.sportCategory.create({
    data: { name: "კალათბურთი" },
  });
  const chess = await prisma.sportCategory.create({
    data: { name: "ჭადრაკი" },
  });
  const swimming = await prisma.sportCategory.create({
    data: { name: "ცურვა" },
  });
  const wrestling = await prisma.sportCategory.create({
    data: { name: "ჭიდაობა" },
  });

  // Collections
  await prisma.collection.create({
    data: {
      title: "ახალგაზრდა ჩოგბურთელების მხარდაჭერა",
      description:
        "ჩოგბურთის გუნდს სჭირდება შეკრებაზე წასვლა, აუცილებელია გარკვეული ეკიპირებისა და თანხის შეგროვება",
      howWillHelp:
        "გავეცნობით სიტუაციას ადგილზე, გამოვიკვლევთ საჭიროებებს, ვიპოვით სახლს და ვუქირავებთ. ასევე გამოვწერთ ეკიპირებას",
      goal: 3000,
      raised: 1200,
      imageUrl: "/images/landing/collectings/children-football-1.webp",
      cityId: tbilisi.id,
      sportId: tennis.id,
    },
  });

  await prisma.collection.create({
    data: {
      title: "რაგბის გუნდის ინვენტარი",
      description:
        "რაგბის გუნდს სჭირდება ახალი ინვენტარი და ფორმა მომავალი სეზონისთვის",
      howWillHelp:
        "გავეცნობით სიტუაციას ადგილზე, გამოვიკვლევთ საჭიროებებს, ვიპოვით სახლს და ვუქირავებთ.",
      goal: 2000,
      raised: 800,
      imageUrl: "/images/landing/collectings/children-football-1.webp",
      cityId: imereti.id,
      sportId: rugby.id,
    },
  });

  await prisma.collection.create({
    data: {
      title: "ფეხბურთის ბანაკი ბათუმში",
      description:
        "ახალგაზრდა ფეხბურთელების საზაფხულო ბანაკის ორგანიზება ბათუმში",
      howWillHelp:
        "გავეცნობით სიტუაციას ადგილზე, გამოვიკვლევთ საჭიროებებს, ვიპოვით სახლს და ვუქირავებთ.",
      goal: 5000,
      raised: 2500,
      imageUrl: "/images/landing/collectings/1.jpg",
      cityId: adjara.id,
      sportId: football.id,
    },
  });

  await prisma.collection.create({
    data: {
      title: "კალათბურთის მოედნის რეაბილიტაცია",
      description:
        "ქვემო ქართლის კალათბურთის მოედანს სჭირდება რეაბილიტაცია და ახალი სათამაშო ინვენტარი",
      howWillHelp: "გავეცნობით სიტუაციას ადგილზე, გამოვიკვლევთ საჭიროებებს.",
      goal: 1500,
      raised: 400,
      imageUrl: "/images/landing/collectings/children-football-1.webp",
      cityId: qvemoQartli.id,
      sportId: basketball.id,
    },
  });

  await prisma.collection.create({
    data: {
      title: "ჭადრაკის ტურნირი თბილისში",
      description: "სრულიად საქართველოს ჭადრაკის ტურნირის ორგანიზება თბილისში",
      howWillHelp:
        "ვიქირავებთ სივრცეს, ვიყიდით ინვენტარს და მოვაწყობთ ტურნირს.",
      goal: 600,
      raised: 300,
      imageUrl: "/images/landing/collectings/children-football-1.webp",
      cityId: tbilisi.id,
      sportId: chess.id,
    },
  });

  await prisma.collection.create({
    data: {
      title: "ცურვის სექცია სამეგრელოში",
      description: "სამეგრელოს ახალგაზრდებისთვის ცურვის სექციის გახსნა",
      howWillHelp: "ვიქირავებთ აუზს, ვიყიდით ეკიპირებას და ვიპოვით მწვრთნელს.",
      goal: 4000,
      raised: 900,
      imageUrl: "/images/landing/collectings/children-football-1.webp",
      cityId: samegrelo.id,
      sportId: swimming.id,
    },
  });

  await prisma.collection.create({
    data: {
      title: "ჭიდაობის კლუბი კახეთში",
      description: "კახეთის ახალგაზრდებისთვის ჭიდაობის კლუბის დაარსება",
      howWillHelp: "ვიქირავებთ სივრცეს, ვიყიდით მოდებს და ვიპოვით მწვრთნელს.",
      goal: 2500,
      raised: 100,
      imageUrl: "/images/landing/collectings/children-football-1.webp",
      cityId: kakheti.id,
      sportId: wrestling.id,
    },
  });

  console.log("✅ Done!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
