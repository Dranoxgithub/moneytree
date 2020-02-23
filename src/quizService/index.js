const qBank = [
  {
    question:
      "What is a budget?   ",
    answers: ["A plan to save money over a year",  "A plan to invest money each month", "A plan for managing income and expenses over a specific period of time", "A plan that shows what to spend money on over a specific period of time"],
    correct: "A plan for managing income and expenses over a specific period of time",
    questionId: "099099"
  },
  {
    question:
      "Which factors make up your total expenses per month? ",
    answers: ["Fixed expenses (i.e. rent) + food cost", "Fixed expenses (i.e. utilities) + flexible expenses (i.e. car payments)", "Disposable income (i.e. car payments)+ elastic costs (i.e. food cost)", "Fixed expenses (i.e. rent) + flexible expenses (i.e. utilities)"],
    correct: "Fixed expenses (i.e. rent) + flexible expenses (i.e. utilities)",
    questionId: "183452"
  },
  {
    question:
      "What portion of your money is disposable income?",
    answers: ["Total income - total expenses", "Total income - income tax", "Total income - fixed expenses", "Total income - flexible expenses"],
    correct: "Total income - total expenses",
    questionId: "267908"
  },
  {
    question: "Who is qualified to create budgets?",
    answers: [
      "Financial planners",
      "Accountants",
      "Anyone who properly educates themselves",
      "Only wealthy individuals"
    ],
    correct: "Anyone who properly educates themselves",
    questionId: "333247"
  },
  {
    question: "What is an interest rate?",
    answers: ["A fixed rate an individual pays on a loan with consistent frequency", "A malleable rate earned on savings accounts", "An amount either paid or earned on a sum of money consistently over a set period of time", "The initial fee an individual pays to invest in a business"],
    correct: "An amount either paid or earned on a sum of money consistently over a set period of time",
    questionId: "496293"
  },
  {
    question:
      "Which factors affect national interest rates?",
    answers: [
      "Rates are affected by the central bank through monetary policy",
      "Rates are affected by supply and demand",
      "Rates are affected by reserve requirements",
      "Rates are affected by all of these factors"
    ],
    correct: "Rates are affected by all of these factors",
    questionId: "588909"
  },
  {
    question:
      'What is an Annual Percentage Rate (APR)?',
    answers: ["The cost of borrowing on consumer loans per year", "The yearly interest rate of a bond", "The prime rate offered by banks", "The interest rate subtracted from the discount rate"],
    correct: "The cost of borrowing on consumer loans per year",
    questionId: "648452"
  },
  {
    question: "In which situation will the most interest be accrued?",
    answers: ["A fixed interest rate of 1.5%", "A compounding interest rate of 1.5%", "A discount rate of 1.5%", "A fixed interest rate of 1.55%"],
    correct: "A compounding interest rate of 1.5%",
    questionId: "786649"
  },
  {
    question:
      "What is the definition of a savings account?",
    answers: ["A portion of a checking account that an individual doesn’t spend", "A separate account from the checking account held in a bank or credit union", "An account held in in a bank or credit union that accrues interest on the balance", "A 401K"],
    correct: "An account held in in a bank or credit union that accrues interest on the balance",
    questionId: "839754"
  },
  {
    question:
      "What is a 401K?",
    answers: [
      "A savings account dedicated to retirement",
      "A savings account dedicated to emergencies",
      "A savings account used by nonprofits",
      "A savings account that holds $401,000"
    ],
    correct: "A savings account dedicated to retirement",
    questionId: "98390"
  },
  {
    question: "How can employers affect 401Ks?",
    answers: ["Matching contributions", "Contribution limits", "Determination of completion", "Employers don’t affect 401ks"],
    correct: "Matching contributions",
    questionId: "1071006"
  },
  {
    question: "Many Americans do not have an emergency savings account. What are the risks associated with this?",
    answers: ["A surprise medical complication could cause an individual to acquire debt", "A car accident may drain an individual’s checking account", "A natural disaster may cause residential damage that an individual is unable to afford the repairs for", "These are all risky situations that should convince me to try my hardest to keep a savings account if it is currently within my financial capabilities"],
    correct: "These are all risky situations that should convince me to try my hardest to keep a savings account if it is currently within my financial capabilities",
    questionId: "1174154"
  },
  {
    question: "How do credit cards work?",
    answers: ["Credit cards all allow an individual to spend an inexhaustible sum of money on the caveat that they eventually pay it back", "Credit cards allow an individual to spend money directly from their checking account", "Credit cards allow individuals to spend an amount of money determined by the associated bank and pay it back in a specified amount of time", "Credit cards allow individuals to spend unlimited sums of money"],
    correct: "Credit cards allow individuals to spend an amount of money determined by the associated bank and pay it back in a specified amount of time",
    questionId: "1226535"
  },
  {
    question: "Which factor affects an individual's credit score?",
    answers: ["Making payments consistently before a specified deadline", "The amount of time an individual has had a credit card", "Quantity of debt", "All of these factors and more"],
    correct: "All of these factors and more",
    questionId: "1310938"
  },
  {
    question: "How can an individual realistically avoid falling into the credit-debt cycle?",
    answers: ["Consistently and punctuallypay off credit cards in full", "Use credit cards frequently", "Keep an emergency savings account", "Never use a credit card"],
    correct: "Consistently and punctuallypay off credit cards in full",
    questionId: "1436873"
  },
  {
    question: "Why would an individual purposefully go into debt?",
    answers: ["Nobody purposefully goes into debt", "Debt isn't under the control of the individual", "Productive debt can turn a profit, but it can also be risky", "All of these answers are correct"],
    correct: "Productive debt can turn a profit, but it can also be risky",
    questionId: "1515110"
  },
  {
    question: "What is identity theft?",
    answers: ["19", "20", "12", "15"],
    correct: "19",
    questionId: "1642728"
  },
  {
    question:
      "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
    answers: ["Subscriber", "Single", "Secure", "Solid"],
    correct: "Subscriber",
    questionId: "1747256"
  },
  {
    question:
      "What word represents the letter 'T' in the NATO phonetic alphabet?",
    answers: ["Tango", "Target", "Taxi", "Turkey"],
    correct: "Tango",
    questionId: "1822532"
  },
  {
    question: "Which American president appears on a one dollar bill?",
    answers: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin"
    ],
    correct: "George Washington",
    questionId: "195075"
  },
  {
    question: 'What is "dabbing"?',
    answers: ["A dance", "A medical procedure", "A sport", "A language"],
    correct: "A dance",
    questionId: "2019778"
  },
  {
    question: "What is the name of the Jewish New Year?",
    answers: ["Rosh Hashanah", "Elul", "New Year", "Succoss"],
    correct: "Rosh Hashanah",
    questionId: "2134343"
  },
  {
    question: "Which one of the following rhythm games was made by Harmonix?",
    answers: [
      "Rock Band",
      "Meat Beat Mania",
      "Guitar Hero Live",
      "Dance Dance Revolution"
    ],
    correct: "Rock Band",
    questionId: "2210799"
  },
  {
    question:
      "What type of animal was Harambe, who was shot after a child fell into it's enclosure at the Cincinnati Zoo?",
    answers: ["Gorilla", "Tiger", "Panda", "Crocodile"],
    correct: "Gorilla",
    questionId: "2379831"
  },
  {
    question: "Red Vines is a brand of what type of candy?",
    answers: ["Licorice", "Lollipop", "Chocolate", "Bubblegum"],
    correct: "Licorice",
    questionId: "2426418"
  },
  {
    question: "What is the nickname of the US state of California?",
    answers: ["Golden State", "Sunshine State", "Bay State", "Treasure State"],
    correct: "Golden State",
    questionId: "2510086"
  },
  {
    question: "What is on display in the Madame Tussaud's museum in London?",
    answers: [
      "Wax sculptures",
      "Designer clothing",
      "Unreleased film reels",
      "Vintage cars"
    ],
    correct: "Wax sculptures",
    questionId: "2685745"
  },
  {
    question:
      "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    answers: ["Spruce Goose", "Noah's Ark", "Fat Man", "Trojan Horse"],
    correct: "Spruce Goose",
    questionId: "2796884"
  },
  {
    question: "Which of these colours is NOT featured in the logo for Google?",
    answers: ["Pink", "Yellow", "Blue", "Green"],
    correct: "Pink",
    questionId: "2838900"
  },
  {
    question: 'What is the French word for "hat"?',
    answers: ["Chapeau", "Bonnet", " Écharpe", " Casque"],
    correct: "Chapeau",
    questionId: "298060"
  },
  {
    question: "Five dollars is worth how many nickles?",
    answers: ["100", "50", "25", "69"],
    correct: "100",
    questionId: "3096579"
  },
  {
    question: "Who is depicted on the US hundred dollar bill?",
    answers: [
      "Benjamin Franklin",
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correct: "Benjamin Franklin",
    questionId: "3182461"
  },
  {
    question: "What do the letters in the GMT time zone stand for?",
    answers: [
      "Greenwich Mean Time",
      "Global Meridian Time",
      "General Median Time",
      "Glasgow Man Time"
    ],
    correct: "Greenwich Mean Time",
    questionId: "3239112"
  },
  {
    question: "Which one of these is not a typical European sword design?",
    answers: ["Scimitar", "Falchion", "Ulfberht", "Flamberge"],
    correct: "Scimitar",
    questionId: "3318503"
  },
  {
    question:
      'According to Sherlock Holmes, "If you eliminate the impossible, whatever remains, however improbable, must be the..."',
    answers: ["Truth", "Answer", "Cause", "Source"],
    correct: "Truth",
    questionId: "3410327"
  },
  {
    question: "What is the name of Poland in Polish?",
    answers: ["Polska", "Pupcia", "Polszka", "Póland"],
    correct: "Polska",
    questionId: "3542596"
  },
  {
    question: "The New York Times slogan is, “All the News That’s Fit to…”",
    answers: ["Print", "Digest", "Look", "Read"],
    correct: "Print",
    questionId: "3667517"
  },
  {
    question: "What do the letters of the fast food chain KFC stand for?",
    answers: [
      "Kentucky Fried Chicken",
      "Kentucky Fresh Cheese",
      "Kibbled Freaky Cow",
      "Kiwi Food Cut"
    ],
    correct: "Kentucky Fried Chicken",
    questionId: "3791672"
  },
  {
    question: "Which restaurant's mascot is a clown?",
    answers: ["McDonald's", "Whataburger", "Burger King", "Sonic"],
    correct: "McDonald's",
    questionId: "3893585"
  },
  {
    question: 'What color is the "Ex" in FedEx Ground?',
    answers: ["Green", "Red", "Light Blue", "Orange"],
    correct: "Green",
    questionId: "3913430"
  },
  {
    question: "How tall is the Burj Khalifa?",
    answers: ["2,722 ft", "2,717 ft", "2,546 ft", "3,024 ft"],
    correct: "2,722 ft",
    questionId: "4049121"
  },
  {
    question:
      "Which of the following card games revolves around numbers and basic math?",
    answers: ["Uno", "Go Fish", "Twister", "Munchkin"],
    correct: "Uno",
    questionId: "4150746"
  },
  {
    question:
      "What machine element is located in the center of fidget spinners?",
    answers: ["Bearings", "Axles", "Gears", "Belts"],
    correct: "Bearings",
    questionId: "4235063"
  },
  {
    question: "Which sign of the zodiac comes between Virgo and Scorpio?",
    answers: ["Libra", "Gemini", "Taurus", "Capricorn"],
    correct: "Libra",
    questionId: "4321002"
  },
  {
    question: "Which of the following presidents is not on Mount Rushmore?",
    answers: [
      "John F. Kennedy",
      "Theodore Roosevelt",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    correct: "John F. Kennedy",
    questionId: "4442286"
  },
  {
    question: "What is Tasmania?",
    answers: [
      "An Australian State",
      "A flavor of Ben and Jerry's ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character"
    ],
    correct: "An Australian State",
    questionId: "4564430"
  },
  {
    question: "What company developed the vocaloid Hatsune Miku?",
    answers: ["Crypton Future Media", "Sega", "Sony", "Yamaha Corporation"],
    correct: "Crypton Future Media",
    questionId: "4630606"
  },
  {
    question:
      "Which country, not including Japan, has the most people of japanese decent?",
    answers: ["Brazil", "China", "South Korea", "United States of America"],
    correct: "Brazil",
    questionId: "4795960"
  },
  {
    question: "Which candy is NOT made by Mars?",
    answers: ["Almond Joy", "M&M's", "Twix", "Snickers"],
    correct: "Almond Joy",
    questionId: "4811162"
  },
  {
    question: "In which fast food chain can you order a Jamocha Shake?",
    answers: ["Arby's", "McDonald's", "Burger King", "Wendy's"],
    correct: "Arby's",
    questionId: "4982981"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
