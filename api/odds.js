export default async function handler(req, res) {
  const API_KEY = process.env.ODDS_KEY;
  const sport = req.query.sport || 'soccer_italy_serie_a';
  try {
    const r = await fetch(`https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${API_KEY}&regions=eu&markets=h2h&oddsFormat=decimal`);
    const data = await r.json();
    res.setHeader('Cache-Control', 's-maxage=60');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({error: 'errore'});
  }
}
