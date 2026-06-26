const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models/User');
const argon2 = require("argon2");

module.exports = (passport) => {
  passport.use(
    // This is where the PassportJS Strategy has been set up.
    // It tells where to extract the token from and the secret key
    // to verify the token's signature.
    new LocalStrategy({ usernameField: 'user_id' }, async (user_id, password, done) => {
      console.log("In passport local strategy");
      try {
        const query = { user_id: user_id };
        const user = await User.findOne(query).lean();
        
        if (!user) {
          return done(null, false);
        }

        const isMatch = await argon2.verify(user.password, password);
        if (!isMatch) {
          return done(null, false);
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );
};
