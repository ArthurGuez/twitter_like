exports.getPage = (req, res) => {
    res.render('home');
};

exports.error = (req, res) => {
    res.status(404).send('error');
};