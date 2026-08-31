export default async function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Cache-Control','s-maxage=3600');
  const key=process.env.ODDS_KEY;
  const leagues=['soccer_italy_serie_a','soccer_epl','soccer_spain_la_liga','soccer_germany_bundesliga','soccer_france_ligue_one','soccer_netherlands_eredivisie','soccer_portugal_primeira_liga','soccer_brazil_campeonato','soccer_usa_mls','soccer_uefa_champs_league','basketball_euroleague','basketball_nba'];
  let all=[];
  for(let s of leagues){
    try{
      let r=await fetch(`https://api.the-odds-api.com/v4/sports/${s}/odds/?apiKey=${key}&regions=eu&markets=h2h&oddsFormat=decimal`);
      if(!r.ok) continue;
      let d=await r.json();
      if(Array.isArray(d)){ d.forEach(m=>m.sport_key=s); all=all.concat(d.slice(0,15)); }
    }catch(e){}
  }
  res.status(200).json({matches:all});
}
