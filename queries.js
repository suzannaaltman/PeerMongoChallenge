// Find bios that have awards//
db.bios.find({"awards": {$exists:true , $ne: {$size: 0} }}).pretty();

// Find bios that don't have awards//
db.bios.find({"awards": {$exists:false }}).pretty();

// Find bios that have contributed to OOP or UNIX//
db.bios.find({$or: [ { "contribs": "OOP"}, { "contribs": "UNIX"} ]}).pretty();

// Find bios with "Turing Award" awards//
db.bios.find( {"awards.award": { $in: ["Turing Award"] } } ).pretty();

//find IDs between 3 and 7 //
db.bios.find({$and: [{"_id" : { $gt: 3}}, {"_id" : {$lt: 7} }] }).pretty();

//find awards that were awarded before the year 2000//
db.bios.find({"awards.year": {$lt: 2000}}).pretty();

//find birth dates with no death dates (aka. those that are alive)//
db.bios.find({$and: [{"birth": {$exists: true}}, {"death": {$exists: false}}]}).pretty();
