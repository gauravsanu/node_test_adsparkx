const redis = require("redis"); 
const redisclient = redis.createClient(); // I Asume redis is running on the local machine on 6379 port
  
(async () => { 
    await redisclient.connect();
})(); 
  
console.log("Connecting to the Redis"); 
  
redisclient.on("ready", () => { 
    redisclient.select(0);
    redisclient.set("CRICKET","GAME:1");
	
	redisclient.get("CRICKET").then((data) => { // Beacuse of async responce of Redis. Promise is retuen type
		console.log(data); 
	});

console.log( "Connected" ); 
    
}); 
  
redisclient.on("error", (err) => { 
    console.log("Error in the Connection"); 
});
