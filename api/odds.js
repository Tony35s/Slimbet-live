export default async function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  const now=new Date();
  const h=(home,away,league,ph,px,pa)=>{
    return {id:Math.random().toString(),sport_key:league,home_team:home,away_team:away,commence_time:new Date(now.getTime()+Math.random()*24*3600000).toISOString(),bookmakers:[{markets:[{key:'h2h',outcomes:[{name:home,price:ph},{name:away,price:pa},{name:'Draw',price:px}]}]}]};
  };
  const t=(p1,p2,league,ph,pa)=>{
    return {id:Math.random().toString(),sport_key:league,home_team:p1,away_team:p2,commence_time:new Date(now.getTime()+Math.random()*24*3600000).toISOString(),price1:ph,price2:pa,bookmakers:[{markets:[{key:'h2h',outcomes:[{name:p1,price:ph},{name:p2,price:pa}]}]}]};
  };
  const mock=[
    h('Napoli','Inter','soccer_italy_serie_a',2.2,3.3,3.1),
    h('Milan','Roma','soccer_italy_serie_a',2.0,3.4,3.6),
    h('Juventus','Lazio','soccer_italy_serie_a',1.85,3.5,4.2),
    h('Palermo','Sampdoria','soccer_italy_serie_b',2.15,3.1,3.3),
    h('Parma','Como','soccer_italy_serie_b',2.0,3.3,3.7),
    h('Benevento','Catania','soccer_italy_serie_c',2.1,3.0,3.4),
    h('Avellino','Crotone','soccer_italy_serie_c',1.95,3.2,3.8),
    h('Foggia','Taranto','soccer_italy_serie_c',2.2,3.1,3.3),
    h('Arsenal','Man City','soccer_epl',2.5,3.2,2.7),
    h('Liverpool','Chelsea','soccer_epl',2.1,3.5,3.2),
    h('Real Madrid','Barcelona','soccer_spain_la_liga',2.3,3.5,2.9),
    h('Bayern Munich','Dortmund','soccer_germany_bundesliga',1.8,3.8,4.2),
    h('PSG','Marseille','soccer_france_ligue_one',1.7,4.0,4.5),
    h('Real Madrid','Man City','soccer_uefa_champs_league',2.6,3.6,2.5),
    t('Sinner','Alcaraz','tennis_atp',1.85,1.95),
    t('Djokovic','Nadal','tennis_atp',1.9,1.9),
    t('Berrettini','Musetti','tennis_atp',2.1,1.75),
    t('Swiatek','Sabalenka','tennis_wta',1.7,2.1),
    t('Paolini','Cocciaretto','tennis_wta',1.8,2.0),
    h('Lakers','Warriors','basketball_nba',1.9,0,1.9),
    h('Milano','Fenerbahce','basketball_euroleague',1.85,0,1.95),
  ];
  return res.status(200).json({matches:mock});
}
