"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkEALMXU6Sjs = require('./chunk-EALMXU6S.js');
require('./chunk-BRDPNGQ7.js');
require('./chunk-P57PW2II.js');

// src/public/rest/data-credentials.ts
var deleteDataCredential = async (qID, query, options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "data-credentials", {
  method: "delete",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  options
});
var getDataCredential = async (qID, query, options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "data-credentials", {
  method: "get",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  options
});
var patchDataCredential = async (qID, query, body, options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "data-credentials", {
  method: "patch",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  body,
  contentType: "application/json",
  options
});
var updateDataCredential = async (qID, query, body, options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "data-credentials", {
  method: "put",
  pathTemplate: "/api/v1/data-credentials/{qID}",
  pathVariables: { qID },
  query,
  body,
  contentType: "application/json",
  options
});
function clearCache() {
  return _chunkEALMXU6Sjs.clearApiCache.call(void 0, "data-credentials");
}
var dataCredentialsExport = {
  deleteDataCredential,
  getDataCredential,
  patchDataCredential,
  updateDataCredential,
  clearCache
};
var data_credentials_default = dataCredentialsExport;







exports.clearCache = clearCache; exports.default = data_credentials_default; exports.deleteDataCredential = deleteDataCredential; exports.getDataCredential = getDataCredential; exports.patchDataCredential = patchDataCredential; exports.updateDataCredential = updateDataCredential;
