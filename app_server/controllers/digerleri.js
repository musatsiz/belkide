var footer = 'Mustafa GÜLCAN 2021'
const hakkinda = function(req, res, next) {
  res.render('hakkinda', 
    { 
      title: 'Hakkında',
      footer : 'Mustafa GÜLCAN 2021'
    }
  );
}

module.exports = {
  hakkinda
}