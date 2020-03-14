import app from '../app';

module.exports = app.listen(app.get("port"), () => {
    console.log(
        "App is running on %d port %s env", 
        app.get("port"), 
        app.get("env")
    ); 
});

