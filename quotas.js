import {
  clearApiCache,
  invokeFetch
} from "./chunks/QOUQIYWW.js";
import "./chunks/TDKU6D4Z.js";
import "./chunks/4HB3TAEO.js";

// src/public/rest/quotas.ts
var getQuotas = async (query, options) => invokeFetch("quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas",
  query,
  options
});
var getQuota = async (id, query, options) => invokeFetch("quotas", {
  method: "get",
  pathTemplate: "/api/v1/quotas/{id}",
  pathVariables: { id },
  query,
  options
});
function clearCache() {
  return clearApiCache("quotas");
}
var quotasExport = { getQuotas, getQuota, clearCache };
var quotas_default = quotasExport;
export {
  clearCache,
  quotas_default as default,
  getQuota,
  getQuotas
};
