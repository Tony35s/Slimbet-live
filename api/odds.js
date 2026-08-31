export default async function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  const now=new Date();
  const h=(home,away,league,ph,px,pa)=>{
    return {id:Math.random().toString(),sport_key:league,home_team:home,away_team:away,commence_time:new Date(now.getTime()+Math.random()*24*3600000).toISOString(),bookmakers:[{markets:[{key:'h2h',outcomes:[{name:home,price:ph},{name:away,price:pa},{name:'Draw',price:px}]}]}]};
  };
  const mock=[
    // SERIE A
    h('Napoli','Inter','soccer_italy_serie_a',2.2,3.3,3.1),
    h('Milan','Roma','soccer_italy_serie_a',2.0,3.4,3.6),
    h('Juventus','Lazio','soccer_italy_serie_a',1.85,3.5,4.2),
    h('Atalanta','Fiorentina','soccer_italy_serie_a',1.95,3.6,3.8),
    h('Bologna','Torino','soccer_italy_serie_a',2.1,3.2,3.4),
    // SERIE B
    h('Palermo','Sampdoria','soccer_italy_serie_b',2.15,3.1,3.3),
    h('Parma','Como','soccer_italy_serie_b',2.0,3.3,3.7),
    // PREMIER
    h('Arsenal','Man City','soccer_epl',2.5,3.2,2.7),
    h('Liverpool','Chelsea','soccer_epl',2.1,3.5,3.2),
    h('Man Utd','Tottenham','soccer_epl',2.3,3.4,2.9),
    h('Newcastle','Aston Villa','soccer_epl',2.2,3.3,3.1),
    // LA LIGA
    h('Real Madrid','Barcelona','soccer_spain_la_liga',2.3,3.5,2.9),
    h('Atletico Madrid','Sevilla','soccer_spain_la_liga',1.9,3.4,4.0),
    h('Villarreal','Betis','soccer_spain_la_liga',2.2,3.3,3.2),
    // BUNDESLIGA
    h('Bayern Munich','Dortmund','soccer_germany_bundesliga',1.8,3.8,4.2),
    h('Leverkusen','Leipzig','soccer_germany_bundesliga',2.0,3.6,3.5),
    // LIGUE 1
    h('PSG','Marseille','soccer_france_ligue_one',1.7,4.0,4.5),
    h('Lyon','Monaco','soccer_france_ligue_one',2.4,3.3,2.8),
    // CHAMPIONS
    h('Real Madrid','Man City','soccer_uefa_champs_league',2.6,3.6,2.5),
    h('Inter','Arsenal','soccer_uefa_champs_league',2.8,3.4,2.4),
    h('Bayern','PSG','soccer_uefa_champs_league',2.2,3.5,3.0),
    // NBA + EUROLEGA
    h('Lakers','Warriors','basketball_nba',1.9,0,1.9),
    h('Milano','Fenerbahce','basketball_euroleague',1.85,0,1.95),
    h('Real Madrid Basket','Barcellona Basket','basketball_euroleague',1.9,0,1.9),
  ];
  return res.status(200).json({matches:mock});
}
