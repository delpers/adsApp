module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', $PORT),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ce1fe15b630e1b34e9dd7ad147cb65e5'),
    },
  },
});
