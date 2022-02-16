export async function getRepoNames() {
  const data = await fetch('https://api.github.com/users/prncn/repos');
  let names = [];
  for (const item of await data.json()) {
    names.push(item.name);
  }

  return names;
}

export async function getRepoLangs() {
  const names = await getRepoNames();
  let langs = {};
  for (const name of names) {
    const data = await fetch(
      `https://api.github.com/repos/prncn/${name}/languages`
    );
    const items = await data.json();
    for (const key in items) {
      if (key in langs) {
        langs[key] += items[key];
      } else {
        langs[key] = items[key];
      }
    }
  }
  return langs;
}

export async function getRepoLangPercentages() {
  const langs = await getRepoLangs();
  let sum = 0;
  for (const key in langs) {
    if (['CSS', 'HTML'].indexOf(key) === -1) {
      sum += langs[key];
    }
  }
  return Object.fromEntries(
    Object.entries(langs)
      .filter(([key, value]) => ['CSS', 'HTML'].indexOf(key) === -1)
      .map(([key, value]) => [key, ((value / sum) * 100).toFixed(2)])
  );
}
