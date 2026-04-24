//using server.js api
expr=require("express")
app=expr()
i=require("./server.js")
app.use("/p",i)
app.listen(5006)