const icontroller=require("../controllers/idea.controllers")

module.exports=(app)=>{
    app.get("/ideaApp/api/v1/ideas",icontroller.getallideas)
    app.get("/ideaApp/api/v1/ideas/:id",icontroller.getideabyid)
    app.post("/ideaApp/api/v1/ideas",icontroller.createidea)
    app.put("/ideaApp/api/v1/ideas/:id",icontroller.updateidea)
    app.delete("/ideaApp/api/v1/ideas/:id",icontroller.deleteid)
}
