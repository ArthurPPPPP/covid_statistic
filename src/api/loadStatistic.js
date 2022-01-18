const url = "https://api.covid19api.com/summary";
export async function loadStatistic() {
  const response = await fetch(url);

  const data = await response.json();
  return data;
}
