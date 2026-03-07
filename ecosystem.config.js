/**
 * PM2 ecosystem config for medsupport-monorepo.
 *
 * Usage:
 *   npm install -g pm2
 *   pm2 start ecosystem.config.js --env production
 *   pm2 save          # persist across reboots
 *   pm2 startup       # generate and run the startup script
 */

module.exports = {
  apps: [
    {
      name: 'web',
      cwd: '.',
      // Delegates to the script already defined in apps/web/package.json so
      // the binary is resolved by yarn/Node rather than a relative path.
      script: 'yarn',
      args: 'workspace @medsupportkz/web web:start:prod',
      instances: 1,
      exec_mode: 'fork',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        // Limit heap to leave room for CMS and server on a 2 GB VPS.
        NODE_OPTIONS: '--max-old-space-size=512',
      },
      max_memory_restart: '600M',
      restart_delay: 3000,
      error_file: './logs/web-error.log',
      out_file: './logs/web-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
    {
      name: 'server',
      cwd: '.',
      script: 'yarn',
      args: 'workspace @medsupportkz/server server:start:prod',
      instances: 1,
      exec_mode: 'fork',
      env_production: {
        NODE_ENV: 'production',
        PORT: 8000,
        NODE_OPTIONS: '--max-old-space-size=256',
      },
      max_memory_restart: '300M',
      restart_delay: 3000,
      error_file: './logs/server-error.log',
      out_file: './logs/server-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
    {
      name: 'cms',
      cwd: '.',
      // 'strapi start' requires the CMS admin panel to have been built
      // beforehand (run `yarn build` inside apps/cms on a build machine, then
      // deploy the build/ directory to the VPS).
      script: 'yarn',
      args: 'workspace @medsupport/cms cms:start',
      instances: 1,
      exec_mode: 'fork',
      env_production: {
        NODE_ENV: 'production',
        PORT: 1337,
        NODE_OPTIONS: '--max-old-space-size=512',
      },
      max_memory_restart: '600M',
      restart_delay: 5000,
      error_file: './logs/cms-error.log',
      out_file: './logs/cms-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
