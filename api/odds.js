export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin','*');
  try{
    const key=process.env.ODDS_KEY;
    const r=await fetch(`https://api.the-odds-api.com/v4/sports/soccer_italy_serie_a/odds/?apiKey=${key}&regions=eu&markets=h2h&oddsFormat=decimal`);
    const data=await r.json();
    return res.status(200).json({matches:data});
  }catch(e){return res.status(200).json({matches:[]})}
}
