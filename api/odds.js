export default async function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Cache-Control','s-maxage=3600');
  const key=process.env.ODDS_KEY;
  const leagues=[
    'soccer_italy_serie_a','soccer_italy_serie_b','soccer_epl','soccer_epl','soccer_spain_la_liga','soccer_spain_segunda_division',
    'soccer_germany_bundesliga','soccer_germany_bundesliga2','soccer_france_ligue_one','soccer_france_ligue_two',
    'soccer_netherlands_eredivisie','soccer_portugal_primeira_liga','soccer_belgium_first_div','soccer_turkey_super_league',
    'soccer_brazil_campeonato','soccer_argentina_primera_division','soccer_usa_mls','soccer_mexico_ligamx',
    'soccer_japan_j_league','soccer_australia_aleague','soccer_uefa_champs_league','soccer_uefa_europa_league',
    'soccer_uefa_europa_conference_league','soccer_conmebol_copa_libertadores','soccer_england_championship',
    'basketball_euroleague','basketball_nba','tennis_atp_french_open','tennis_wta_french_open'
  ];
  let all=[];
  try{
    for(let sport of leagues){
      try{
        let r=await fetch(`https://api.the-odds-api.com/v4/sports/${sport}/odds/?apiKey=${key}&regions=eu&markets=h2h&oddsFormat=decimal`);
        if(!r.ok) continue;
        let d=await r.json();
        if(Array.isArray(d) && d.length){ d.forEach(m=>m.sport_key=sport); all=all.concat(d.slice(0,8)); }
      }catch(e){}
      if(all.length>150) break;
    }
    return res.status(200).json({matches:all});
  }catch(e){ return res.status(200).json({matches:[]}) }
}
