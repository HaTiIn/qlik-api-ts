"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkEALMXU6Sjs = require('./chunk-EALMXU6S.js');
require('./chunk-BRDPNGQ7.js');
require('./chunk-P57PW2II.js');

// src/public/rest/themes.ts
var getThemes = async (options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes",
  options
});
var uploadTheme = async (body, options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "themes", {
  method: "post",
  pathTemplate: "/api/v1/themes",
  body,
  contentType: "multipart/form-data",
  options
});
var deleteTheme = async (id, options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "themes", {
  method: "delete",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  options
});
var getTheme = async (id, options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  options
});
var patchTheme = async (id, body, options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "themes", {
  method: "patch",
  pathTemplate: "/api/v1/themes/{id}",
  pathVariables: { id },
  body,
  contentType: "multipart/form-data",
  options
});
var downloadTheme = async (id, options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}/file",
  pathVariables: { id },
  options
});
var downloadFileFromTheme = async (id, filepath, options) => _chunkEALMXU6Sjs.invokeFetch.call(void 0, "themes", {
  method: "get",
  pathTemplate: "/api/v1/themes/{id}/file/{filepath}",
  pathVariables: { id, filepath },
  options
});
function clearCache() {
  return _chunkEALMXU6Sjs.clearApiCache.call(void 0, "themes");
}
var themesExport = {
  getThemes,
  uploadTheme,
  deleteTheme,
  getTheme,
  patchTheme,
  downloadTheme,
  downloadFileFromTheme,
  clearCache
};
var themes_default = themesExport;










exports.clearCache = clearCache; exports.default = themes_default; exports.deleteTheme = deleteTheme; exports.downloadFileFromTheme = downloadFileFromTheme; exports.downloadTheme = downloadTheme; exports.getTheme = getTheme; exports.getThemes = getThemes; exports.patchTheme = patchTheme; exports.uploadTheme = uploadTheme;
