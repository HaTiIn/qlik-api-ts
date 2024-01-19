"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _EL2GSPZZjs = require('./chunks/EL2GSPZZ.js');
require('./chunks/W2I5OQA5.js');
require('./chunks/4HB3TAEO.js');

// src/public/rest/licenses.ts
var getLicenseAssignments = async (query, options) => _EL2GSPZZjs.invokeFetch.call(void 0, "licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/assignments",
  query,
  options
});
var addLicenseAssignments = async (body, options) => _EL2GSPZZjs.invokeFetch.call(void 0, "licenses", {
  method: "post",
  pathTemplate: "/api/v1/licenses/assignments/actions/add",
  body,
  contentType: "application/json",
  options
});
var deleteLicenseAssignments = async (body, options) => _EL2GSPZZjs.invokeFetch.call(void 0, "licenses", {
  method: "post",
  pathTemplate: "/api/v1/licenses/assignments/actions/delete",
  body,
  contentType: "application/json",
  options
});
var updateLicenseAssignments = async (body, options) => _EL2GSPZZjs.invokeFetch.call(void 0, "licenses", {
  method: "post",
  pathTemplate: "/api/v1/licenses/assignments/actions/update",
  body,
  contentType: "application/json",
  options
});
var getLicenseConsumption = async (query, options) => _EL2GSPZZjs.invokeFetch.call(void 0, "licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/consumption",
  query,
  options
});
var getLicenseOverview = async (options) => _EL2GSPZZjs.invokeFetch.call(void 0, "licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/overview",
  options
});
var getLicenseSettings = async (options) => _EL2GSPZZjs.invokeFetch.call(void 0, "licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/settings",
  options
});
var updateLicenseSettings = async (body, options) => _EL2GSPZZjs.invokeFetch.call(void 0, "licenses", {
  method: "put",
  pathTemplate: "/api/v1/licenses/settings",
  body,
  contentType: "application/json",
  options
});
var getLicenseStatus = async (options) => _EL2GSPZZjs.invokeFetch.call(void 0, "licenses", {
  method: "get",
  pathTemplate: "/api/v1/licenses/status",
  options
});
function clearCache() {
  return _EL2GSPZZjs.clearApiCache.call(void 0, "licenses");
}
var licensesExport = {
  getLicenseAssignments,
  addLicenseAssignments,
  deleteLicenseAssignments,
  updateLicenseAssignments,
  getLicenseConsumption,
  getLicenseOverview,
  getLicenseSettings,
  updateLicenseSettings,
  getLicenseStatus,
  clearCache
};
var licenses_default = licensesExport;












exports.addLicenseAssignments = addLicenseAssignments; exports.clearCache = clearCache; exports.default = licenses_default; exports.deleteLicenseAssignments = deleteLicenseAssignments; exports.getLicenseAssignments = getLicenseAssignments; exports.getLicenseConsumption = getLicenseConsumption; exports.getLicenseOverview = getLicenseOverview; exports.getLicenseSettings = getLicenseSettings; exports.getLicenseStatus = getLicenseStatus; exports.updateLicenseAssignments = updateLicenseAssignments; exports.updateLicenseSettings = updateLicenseSettings;
