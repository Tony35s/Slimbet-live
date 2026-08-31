export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const key = process.env.ODDS_KEY;
    if (!key) {
      return res.status(200).json({ matches: [], note: 'ODDS_KEY mancante' });
    }
    // prendiamo solo Serie A + EPL per non far crashare
    const url = `https://api.the-odds-api.com/v4/sports/soccer_italy_serie_a/odds/?apiKey=${key}&regions=eu&markets=h2h&oddsFormat=decimal`;
    const r = await fetch(url);
    const data = await r.json();
    if (!Array.isArray(data)) {
      return res.status(200).json({ matches: [], error: data });
    }
    const mapped = data.map(m => ({ ...m, sport_key: 'soccer_italy_serie_a' }));
    return res.status(200).json({ matches: mapped });
  } catch (e) {
    return res.status(200).json({ matches: [], error: e.message });
  }
}
