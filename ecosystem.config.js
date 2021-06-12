module.exports = {
  apps: [
    {
      name: 'akun-keycloak-proxy',
      namespace: 'proyek3',
      script: 'npm run serve:development --prefix akun-keycloak-proxy'
    },
    {
      name: 'development-http-proxy',
      namespace: 'proyek3',
      script: 'npm run serve --prefix development-http-proxy '
    },
    {
      name: 'frontend',
      namespace: 'proyek3',
      script: 'npm run serve:development --prefix frontend '
    },
    {
      name: 'keycloak',
      namespace: 'proyek3',
      script: 'npm run serve:development --prefix keycloak '
    }
  ]
}