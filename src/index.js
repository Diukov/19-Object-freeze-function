const family = {
  description: "my family",
  me: {
    name: "Dmitriy",
    age: 22,
    nationality: "ukrainian"
  },
  parents: {
    mother: {
      name: "Tatyana",
      age: 50,
      nationality: "ukrainian"
    },
    father: {
      name: "Valentin",
      age: 52,
      nationality: "russian"
    }
  },
  pet: {
    name: "Barsik",
    age: 2,
    nationality: "cat"
  },
};

function deepFreeze(obj) {
  for (const key in obj) {
    if (obj[key] !== null && typeof obj[key] === "object") {
      console.log(obj[key])
      deepFreeze(obj[key])
    }
  }
  return Object.freeze(obj)
}

deepFreeze(family);