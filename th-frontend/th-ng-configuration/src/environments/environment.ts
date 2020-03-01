// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  name: 'dev',
  host: {
    backend: {
      th_lumen_configuration: 'http://localhost:8081/api/',
      th_lumen_login: 'http://localhost:8082/api/'
    },
    frontend: {
      th_ng_configuration: 'http://localhost:8001/',
      th_ng_login: 'http://localhost:8002/'
    }
  }
};
