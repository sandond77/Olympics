// ===============================================================================
// DATA
// Below data will hold 2018 standings.
// ===============================================================================

var standings = [
{
  "place":1,
  "country":"Norway",
  "gold":[
    ["Cross-country skiing", "Men's 30 km skiathlon"],
    ["Cross-country skiing", "Men's sprint"],
    ["Cross-country skiing", "Women's 10 km freestyle"],
    ["Biathlon", "Men's individual"],
    ["Ski jumping", "Women's normal hill individual"],
    ["Alpine skiing","Men's downhill"],
    ["Cross-country skiing","Wome's 4 x 5 km relay"],
    ["Freestyle skiing","Men's slopestyle"],
    ["Cross-country skiing","Men's 4 x 10 km relay"],
    ["Speed skating","Men's 500 m"],
    ["Ski jumping","Men's large hill team"],
    ["Cross-country skiing","Men's team sprint"],
    ["Speed skating","Men's team sprint"],
    ["Cross-country skiing","Women's 30 km classical"]
  ],
  "silver":[
    ["Alpine skiing","Men's downhill"],
    ["Alpine skiing","Women's giant slalom"],
    ["Alpine skiing","Women's downhill"],
    ["Cross-country skiing","Women's 15 km skiathlon"],
    ["Biathlon","Women's sprint"],
    ["Ski jumping","Men's normal hill individual"],
    ["Cross-country skiing","Men's 30 km skiathlon"],
    ["Cross-country skiing","Men's 15 kilometre freestyle"],
    ["Cross-country","Women's sprint"],
    ["Alpine skiing","Men's giant slalom"],
    ["Biathlon","Mixed relay"],
    ["Nordic Combined","Team large hill/4x5km"],
    ["Speed skating","Men's 100m"],
    ["Biathlon","Men's relay"]    
  ],
  "bronze":[
    ["Ski jumping","Men's normal hill individual"],
    ["Speed skating","Men's 5000 m"],
    ["Cross-country skiing","Men's 30 km skiathlon"],
    ["Cross-country skiing","Women's 10 kilometre freestyle"],
    ["Alpine skiing","Men's super-G"],
    ["Biathlon","Women's mass start"],
    ["Ski jumping","Men's large hill individual"],
    ["Biathlon","Men's mass start"],
    ["Cross-country skiing","Women's team sprint"],
    ["Curling","Mixed doubles"],
    ["Apline skiing","Team event"] 
  ],
  "total":39
},
{
  "place":2,
  "country":"Germany",
  "gold":[
    ["Biathlon","Women's sprint"],
    ["Ski jumping","Men's normal hill individual"],
    ["Biathlon","Men's sprint"],
    ["Biathlon","Women's pursuit"],
    ["Luge","Wome's singles"],
    ["Nordic combined","Individual normal hill/10km"],
    ["Luge","Doubles"],
    ["Figure skating","Pairs"],
    ["Luge","Team relay"],
    ["Bobsleigh","Two-man"],
    ["Nordic combined","Individual large hill/10km"],
    ["Bobsleigh","Two-woman"],
    ["Nordic combined","Team large hill/4 x 5 km"],
    ["Bobsleigh","Four-man"]
  ],
  "silver":[
    ["Ski jumping","Women's normal hill individual"],
    ["Luge","Women's singles"],
    ["Skeleton","Women's"],
    ["Ski jumpinig","Men's large hill individual"],
    ["Biathlon","Men's mass start"],
    ["Ski jumping","Men's large hill team"],
    ["Nordic combined","Individual large hill/10 km"],
    ["Snowboarding","Women's parallel giant slalom"],
    ["Bobsleigh","Four-man"],
    ["Ice hockey","Men's tournament"]
  ],
  "bronze":[
    ["Luge","Men's singles"],
    ["Biathlon","Men's pursuit"],
    ["Luge","Doubles"],
    ["Biathlon","Women's individual"],
    ["Nordic combined","Individual large hill/10 km"],
    ["Biathlon","Men's relay"],
    ["Snowboarding","Women's parallel giant slalom"]
  ],
  "total":31
},
{
  "place":3,
  "country":"Canada",
  "gold":[
    ["Figure skating","Team event"],
    ["Freestyle skiing","Men's moguls"],
    ["Curling","Mixed doubles"],
    ["Speed skating","Men's 10,000 metres"],
    ["Short track speed skating","Men's 1000 metres"],
    ["Bobsleigh","Two-man"],
    ["Freestyle skiing","Women's halfpipe"],
    ["Figure skating","Ice dancing"],
    ["Freestyle skiing","Men's ski cross"],
    ["Freestyle skiing","Women's ski cross"],
    ["Snowboarding","Men's big air"]
  ],
  "silver":[
    ["Snowboarding","Men's slopestyle"],
    ["Speed skating","Men's 5000 metres"],
    ["Freestyle skiing","Women's moguls"],
    ["Snowboarding","Women's slopestyle"],
    ["Luge","Team relay"],
    ["Ice hockey","Women's tournament"],
    ["Short track speed skating","Women's 1000 metres"],
    ["Freestyle skiing","Women's ski cross"]
  ],
  "bronze":[
    ["Snowboarding","Men's slopestyle"],
    ["Short track speed skating","Women's 500 metres"],
    ["Luge","Women's singles"],
    ["Figure skating","Pairs"],
    ["Short track speed skating","Women's 1500 metres"],
    ["Freestyle skiing", "Men's slopestyle"],
    ["Bobsleigh","Two-woman"],
    ["Short track speed skating","Men's 5000 metre relay"],
    ["Figure skating","Ladies singles"],
    ["Ice hockey","Men's tournament"]
  ],
  "total":29
},
{
  "place":4,
  "country":"United States",
  "gold":[
    ["Snowboarding","Men's slopestyle"],
    ["Snowboarding","Women's slopestyle"],
    ["Snowboarding","Women's halfpipe"],
    ["Snowboarding","Men's halfpipe"],
    ["Alpine skiing","Women's giant slalom"],
    ["Cross-country","skiing"],
    ["Ice hockey","Women's tournament"],
    ["Freestyle skiing","Men's halfpipe"],
    ["Curling","Men's tournament"]
  ],
  "silver":[
    ["Luge","Men's singles"],
    ["Short track speed skating","Men's 1000 m"],
    ["Freestyle skiing","Men's slopestyle"],
    ["Bobsleigh","Two-woman"],
    ["Alpine skiing","Women's combined"],
    ["Freestyle skiing","Men's halfpipe"],
    ["Snowboarding","Women's big air"],
    ["Snowboarding","Men's big air"]
  ],
  "bronze":[
    ["Figure skating","Team event"],
    ["Snowboarding","Women's halfpipe"],
    ["Figure skating","Ice dancing"],
    ["Freestyle skiing","Women's halfpipe"],
    ["Alpine skiing","Women's downhill"],
    ["Speed skating","Women's team pursuit"]
  ],
  "total":23
},
{
  "place":5,
  "country":"Netherlands",
  "gold":[
    ["Speed Skating","Women's 3000 metres"],
    ["Speed Skating","Men's 5000 metres"],
    ["Speed Skating","Women's 1500 metres"],
    ["Speed Skating","Men's 150 metres"],
    ["Speed Skating","Women's 1000 metres"],
    ["Speed Skating","Women's 5000 metres"],
    ["Speed Skating","Men's 1000 metres"],
    ["Short track speed skating","Women's 1000 metres"]
  ],
  "silver":[
    ["Speed skating","Women's 3000 metres"],
    ["Speed skating","Men's 1500 metres"],
    ["Speed skating","Men's 10000 metres"],
    ["Speed skating","Women's team pursuit"],
    ["Short track speed skating","Men's 1500 metres"],
    ["Short track speed skating","Women's 500 metres"]
  ],
  "bronze":[
    ["Speed skating","Women's 3000 metres"],
    ["Speed skating","Women's 1500 metres"],
    ["Speed skating","Men's team pursuit"],
    ["Speed skating","Women's mass start"],
    ["Speed skating","Men's mass start"],
    ["Short track speed skating","Women's 3000 metre relay"]
  ],
  "total":20
},
{
  "place":6,
  "country":"South Korea",
  "gold":[
    ["Short track speed skating","Men's 1500 metres"],
    ["Skeleton","Men's"],
    ["Short track speed skating","Women's 1500 metre relay"],
    ["Short track speed skating","Women's 3000 metre relay"],
    ["Speed skating","Men's mass start"]
  ],
  "silver":[
    ["Speed skating","Women's 500 metres"],
    ["Speed skating","Men's 500 metres"],
    ["Speed skating","Men's team pursuit"],
    ["Short track speed skating","Men's 500 metres"],
    ["Snowboarding","Men's parallel giant slalom"],
    ["Speed skating","Women's mass start"],
    ["Curling","Women's tournament"],
    ["Bobleigh","Four-man"]
  ],
  "bronze":[
    ["Speed skating","Men's 1500 metres"],
    ["Short track speed skating","Men's 1000 metres"],
    ["Short track speed skating","Men's 500 metres"],
    ["Speed skating","Men's 1000 metres"]
  ],
  "total":17
},
{
  "place":7,
  "country":"Olympic Athlete from Russia",
  "gold":[
    ["Figure skating","Ladies' singles"],
    ["Ice hockey","Men's tournament"]
  ],
  "silver":[
    ["Figure skating","Team event"],
    ["Skeleton","Men's"],
    ["Cross-country skiing","Men's 4 x 10 km relay"],
    ["Cross-country skiing","Men's team sprint"],
    ["Figure Skating","Ladies' singles"],
    ["Cross-country skiing","Men's 1500 metres"]
  ],
  "bronze":[
    ["Short track speed skating","Men's 1500 metres"],
    ["Cross-country skiing","Women's sprint"],
    ["Cross-country skiing","Men's sprint"],
    ["Cross-country skiing","Men's 15 km freestyle"],
    ["Speed skating","Women's 5000 m"],
    ["Cross-country skiing","Women's 4 x 5 km relay"],
    ["Freestyle skiing","Men's aerials"],
    ["Freestyle skiing","Men's ski cross"],
    ["Cross-country skiing","Men's 50 km classical"]
  ],
  "total":17
},
{
  "place":8,
  "country":"Switzerland",
  "gold":5,
  "silver":6,
  "bronze":4,
  "total":15
},
{
  "place":9,
  "country":"France",
  "gold":5,
  "silver":4,
  "bronze":6,
  "total":15
},
{
  "place":10,
  "country":"Sweden",
  "gold":7,
  "silver":6,
  "bronze":1,
  "total":14
},
{
  "place":11,
  "country":"Austria",
  "gold":5,
  "silver":3,
  "bronze":6,
  "total":14
},
{
  "place":12,
  "country":"Japan",
  "gold":4,
  "silver":5,
  "bronze":4,
  "total":13
},
{
  "place":13,
  "country":"Italy",
  "gold":3,
  "silver":2,
  "bronze":5,
  "total":10
},
{
  "place":14,
  "country":"China",
  "gold":1,
  "silver":6,
  "bronze":2,
  "total":9
},
{
  "place":15,
  "country":"Czech Republic",
  "gold":2,
  "silver":2,
  "bronze":3,
  "total":7
},
{
  "place":16,
  "country":"Finland",
  "gold":1,
  "silver":1,
  "bronze":4,
  "total":6
},
{
  "place":17,
  "country":"Great Britain",
  "gold":1,
  "silver":0,
  "bronze":4,
  "total":5
},
{
  "place":18,
  "country":"Belarus",
  "gold":2,
  "silver":1,
  "bronze":0,
  "total":3
},
{
  "place":19,
  "country":"Slovakia",
  "gold":1,
  "silver":2,
  "bronze":0,
  "total":3
},
{
  "place":20,
  "country":"Australia",
  "gold":0,
  "silver":2,
  "bronze":1,
  "total":3
},
{
  "place":21,
  "country":"Poland",
  "gold":1,
  "silver":0,
  "bronze":1,
  "total":2
},
{
  "place":22,
  "country":"Slovenia",
  "gold":0,
  "silver":1,
  "bronze":1,
  "total":2
},
{
  "place":23,
  "country":"Spain",
  "gold":0,
  "silver":0,
  "bronze":2,
  "total":2
},
{
  "place":24,
  "country":"New Zealand",
  "gold":0,
  "silver":0,
  "bronze":2,
  "total":2
},
{
  "place":25,
  "country":"Hungary",
  "gold":1,
  "silver":0,
  "bronze":0,
  "total":1
},
{
  "place":26,
  "country":"Ukraine",
  "gold":1,
  "silver":0,
  "bronze":0,
  "total":1
},
{
  "place":27,
  "country":"Belgium",
  "gold":0,
  "silver":1,
  "bronze":0,
  "total":1
},
{
  "place":28,
  "country":"Kazakhstan",
  "gold":0,
  "silver":0,
  "bronze":1,
  "total":1
},
{
  "place":29,
  "country":"Latvia",
  "gold":0,
  "silver":0,
  "bronze":1,
  "total":0
},
{
  "place":30,
  "country":"Liechtenstein",
  "gold":0,
  "silver":0,
  "bronze":1,
  "total":1
},
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = standings;