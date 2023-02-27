console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id === "2";
});

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length === 3;
});

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked !== true;
});

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    card.isBookmarked &&
    (card.tags.includes("html") || card.tags.includes("js"))
  );
});

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
