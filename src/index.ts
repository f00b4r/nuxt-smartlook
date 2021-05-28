import path from "path";
import { Module } from "@nuxt/types";
import consola from "consola";

const logger = consola.withScope('nuxt:smartlook')

const nuxtModule: Module<ModuleOptions> = function (moduleOptions: Partial<ModuleOptions>) {
  const options: Partial<ModuleOptions> = {
    id: undefined,
    enabled: true,
    ...this.options['smartlook'],
    ...moduleOptions,
  };

  // Disable in debug mode
  if (!options.enabled) {
    logger.info('Smartlook tracking is not enabled (see nuxt.config)')
    return;
  }

  // Validation
  if (!options.id) {
    logger.warn('Missing Smartlook ID (see nuxt.config)')
    return;
  }

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, "../templates/plugin.js"),
    fileName: "smartlook.js",
    ssr: false,
    options: {
      id: options.id
    }
  });
}

export default nuxtModule;

module.exports.meta = require('../package.json');
