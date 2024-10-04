const awards=[

    { name: "James Peebles", category: "javelin", team: "Mumbai Indians", year: 2019 }, { name: "Michel Mayor", category: "javelin", team: "Gujarat Titans", year: 2019 }, { name: "Didier Queloz", category: "javelin", team: "Gujarat Titans", year: 2019 },
    { name: "John B. Goodenough", category: "Shooting", team: "Chennai Super Kings", year: 2019 },
    { name: "M. Stanley Whittingham", category: "Shooting", team: "Chennai Super Kings", year: 2019 },
    { name: "Akira Yoshino", category: "Shooting", team: "Chennai Super Kings", year: 2019 },
    { name: "Arthur Ashkin", category: "javelin", team: "Pune Warriors", year: 2018 },
    { name: "Gerard Mourou", category: "javelin", team: "Deccan Chargers", year: 2018 },
    { name: "Donna Strickland", category: "javelin", team: "Deccan Chargers", year: 2018 },
    { name: "Frances H. Arnold", category: "Shooting", team: "Kolkata Riders", year: 2018 },
    { name: "George P. Smith", category: "Shooting", team: "Sunrisers Hyderabad", year: 2018 },
    { name: "Sir Gregory P. Winter", category: "Shooting", team: "Sunrisers Hyderabad", year: 2018 },];
    
    
    function calculatePrizes(awards){
    
      const Prize={}
      awards.forEach(({name,year,category,team}) => {
        const key =`${category}_${year}`
        console.log(key,"key");
        if(!Prize[key])
        {
          Prize[key]={category,year,teams:[],totalWinners:0}
        }
        if(!Prize[key].teams[team])
          {
            Prize[key].teams[team]={members:[],count:0}
          }
        
    Prize[key].teams[team].members.push({name})
    Prize[key].teams[team].count = Prize[key].teams[team].count +1
    Prize[key].totalWinners=Prize[key].totalWinners+1
    console.log(Prize);
    
      });
      const result=[]
      for (const key in Prize)
      {
        const {category,name,teams,year}=Prize[key];
        const total=Object.keys(teams).length
        console.log(total,"Total");
        const sharePerTeam=1/total;
        const winners=[]
        for(const team in teams)
        {
         const teamData=teams[team]
         const lengthForTeamData=teamData.count
         const PerPersonShare=sharePerTeam/lengthForTeamData;
         teamData.members.forEach((member)=>{
            winners.push(
              {
                name:member.name,
                share:Number(PerPersonShare.toFixed(4))
    
              }
            )
            
         })
    
        }
        result.push(
          {
            category,
       year,
            winners
          }
        )
        console.log(result,"results");
        
      }
      return result
      
    }


    module.exports=calculatePrizes;