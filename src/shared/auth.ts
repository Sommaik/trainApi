import * as passport from 'passport';
import * as passportJWT from 'passport-jwt';
import * as config from 'config';


const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: config.get("TOKEN_KEY"),
  jwtFromRequest: ExtractJwt.fromAuthHeader()
};

// var jwt = function () {
class Auth {
  constructor () {
    let strategy = new Strategy(params, function (payload, done) {
      // console.log(payload);
      // var user = { id: '888' } //users[payload.id] || null;
      const user = payload;
      if (user) {
        return done(null, user);
      } else {
        return done(new Error('User not found'), null);
      }
    });
    passport.use(strategy);
  }

  initialize (): any {
    return passport.initialize();
  }

  authenticate (): any {
    return passport.authenticate('jwt', config.auth.jwtSession);
  }
}
const jwt = new Auth();
export = jwt;
