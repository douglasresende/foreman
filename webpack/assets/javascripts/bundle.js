require('expose-loader?$!expose-loader?jQuery!jquery');
require('jquery-ujs');
require('expose-loader?_!lodash');
require('expose-loader?jstz!jstz');
require('expose-loader?ipaddr!ipaddr.js');
require('jquery.cookie');
require('expose-loader?JsDiff!diff');
require('./bundle_flot');
require('./bundle_multiselect');
require('./bundle_select2');
require('./bundle_datatables');

window.tfm = Object.assign(
  window.tfm || {},
  {
    tools: require('./foreman_tools'),
    users: require('./foreman_users'),
    sshKeys: require('./foreman_ssh_keys'),
    trends: require('./foreman_trends'),
    hostgroups: require('./foreman_hostgroups'),
    hosts: require('./foreman_hosts'),
    toastNotifications: require('./foreman_toast_notifications'),
    numFields: require('./jquery.ui.custom_spinners'),
    reactMounter: require('./react_app/common/MountingService'),
    editor: require('./foreman_editor')
  }
);
