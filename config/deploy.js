/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  ENV['gh-pages'] = {
      force: process.env.gitForcePush,
      slack: {
        webhookURL: process.env.webhookURL,
        options: {
          channel: process.env.slackChannel
        },
        success (deploy) {
          return `
            Successfully deployed to ${deploy.branch}\n
            Visit at ${process.env.demoURL}
          `;
        },
        failure (error) {
           return error;
        }
      }
    };

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
