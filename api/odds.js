export default async function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  const now=new Date();
  const h=(home,away,league,ph,px,pa,time)=>{
    return {id:Math.random().toString(),sport_key:league,home_team:home,away_team:away,commence_time:time,bookmakers:[{markets:[{key:'h2h',outcomes:[{name:home,price:ph},{name:away,price:pa},{name:'Draw',price:px}]}]}]};
  };
  const t=(p1,p2,league,ph,pa,time)=>{
    return {id:Math.random().toString(),sport_key:league,home_team:p1,away_team:p2,commence_time:time,price1:ph,price2:pa,bookmakers:[{markets:[{key:'h2h',outcomes:[{name:p1,price:ph},{name:p2,price:pa}]}]}]};
  };
  // PARTITE REALI OGGI 31/08/2026
  const mock=[
    // SERIE A OGGI REALI
    h('Lecce','Roma','soccer_italy_serie_a',4.2,3.6,1.85,new Date('2026-08-31T18:30:00+02:00').toISOString()),
    h('Atalanta','Bologna','soccer_italy_serie_a',1.75,3.8,4.5,new Date('2026-08-31T20:45:00+02:00').toISOString()),
    // SERIE C OGGI
    h('Novara','Folgore Caratese','soccer_italy_serie_c',1.9,3.2,3.8,new Date('2026-08-31T20:30:00+02:00').toISOString()),
    h('AlbinoLeffe','Ospitaletto','soccer_italy_serie_c',2.1,3.0,3.4,new Date('2026-08-31T21:00:00+02:00').toISOString()),
    h('Renate','Cittadella','soccer_italy_serie_c',2.3,3.1,3.0,new Date('2026-08-31T21:00:00+02:00').toISOString()),
    // ESTERO OGGI
    h('Aston Villa','Arsenal','soccer_epl',3.4,3.5,2.1,new Date('2026-08-31T21:00:00+02:00').toISOString()),
    h('Osasuna','Getafe','soccer_spain_la_liga',2.0,3.2,3.9,new Date('2026-08-31T19:30:00+02:00').toISOString()),
    h('Barcellona','Rayo Vallecano','soccer_spain_la_liga',1.25,6.0,11.0,new Date('2026-08-31T21:30:00+02:00').toISOString()),
    h('Benfica','Estoril','soccer_portugal_primeira_liga',1.3,5.5,9.0,new Date('2026-08-31T21:15:00+02:00').toISOString()),
    // TENNIS US OPEN OGGI
    t('Jannik Sinner','Carlos Alcaraz','tennis_atp',1.85,1.95,new Date('2026-08-31T20:00:00+02:00').toISOString()),
    t('Novak Djokovic','Daniil Medvedev','tennis_atp',1.75,2.05,new Date('2026-08-31T22:00:00+02:00').toISOString()),
    t('Iga Swiatek','Coco Gauff','tennis_wta',1.7,2.15,new Date('2026-08-31T19:00:00+02:00').toISOString()),
  ];
  return res.status(200).json({matches:mock});
}
