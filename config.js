'use strict';

module.exports = {
  'discovery_servers': process.env.DISCOVERY_SERVERS
    ? process.env.DISCOVERY_SERVERS.split(',')
    : ['http://46.101.245.190:8500', 'http://46.101.132.55:8500', 'http://46.101.193.82:8500']
}
