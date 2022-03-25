module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd7060ab0a0fae98bb7758a7446039858'),
  },
});
