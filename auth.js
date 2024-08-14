const Person = require('./models/Person')

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(async(USERNAME, PASSWORD,done)=>{
  try{
    const user = await Person.findOne({username:USERNAME});
    if (!user)
      return done(null, false, { message: 'Incorrect username.' });
    const isPasswordMatch = await user.comparePassword(PASSWORD);
    if (isPasswordMatch)      
      return done(null, user);
    else
      return done(null, false, { message: 'Incorrect password.' }) } 
    catch (error) { 
      return done(error);
    }
  }
))

module.exports = passport;