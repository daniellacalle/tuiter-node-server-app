const HelloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    });
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
        res.send(process.env.DB_CONNECTION_STRING)
    });
}
export default HelloController;
