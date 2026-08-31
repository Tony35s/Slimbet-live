export default async function handler(req, res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Cache-Control','s-maxage=600');
  const key = process.env.ODDS_KEY;
  const leagues = [
    'soccer_italy_serie_a','soccer_italy_serie_b','soccer_epl','soccer_spain_la_liga',
    'soccer_germany_bundesliga','soccer_france_ligue_one','soccer_netherlands_eredivisie',
    'soccer_portugal_primeira_liga','soccer_uefa_champs_league','soccer_uefa_europa_league',
    'basketball_euroleague','basketball_nba','tennis_atp_french_open'
  ];
  try{
    let all=[];
    for(let sport of leagues){
      try{
        let r=await fetch(`https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${key}&regions=eu&markets=h2h&oddsFormat=decimal`);
        let d=await r.json();
        if(Array.isArray(d)){ d.forEach(m=>m.sport_key=sport); all=all.concat(d.slice(0,15)); }
        if(all.length>100) break; // limite per non finire crediti
      }catch(e){}
    }
    return res.status(200).json({matches: all});
  }catch(e){ return res.status(200).json({matches:[]}) }
}
