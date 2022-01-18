export async function loadStatistic() {
  const response = await fetch("https://api.covid19api.com/summary");

  const data = await response.json();
  return data;
}
