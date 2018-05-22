import * as passport from 'passport';
import * as passportJWT from 'passport-jwt';
import * as config from 'config';


const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: <string>config.get("TOKEN_KEY"),
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')
};

class Auth {
  constructor () {
    let strategy = new Strategy(params, function (payload, done) {
    
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
    return passport.authenticate('jwt', config.get("JWT_SESSION"));
  }
}

export const jwt: Auth = new Auth();