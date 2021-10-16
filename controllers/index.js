// can add database dependencies here 
// const User = require('../models/User'); database model, this is necessary for no-sql databases

module.exports = {
    getHome: async(req, res) => {
        try {
            let date = new Date();
            date = date.toLocaleDateString('en-GB', { timeZone: 'Asia/Yangon' });
            res.status(200).send(`<h1>Welcome</h1><br><p>Current Date in Myanmar: ${date}</p>`);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    postHome: async(req, res) => {
        try {
            let date = new Date();
            date = date.toLocaleDateString('en-GB', { timeZone: 'Asia/Yangon' });
            res.status(200).json({ message: 'success', data: { data: 'hello world', date: date } });
        } catch (error) {
            res.status(422).json(error);
        }
    }
}