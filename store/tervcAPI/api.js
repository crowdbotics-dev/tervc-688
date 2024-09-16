import axios from "axios"
const tervcAPI = axios.create({
  baseURL: "https://tervc-688.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tervcAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_bvfi_list(payload) {
  return tervcAPI.get(`/api/v1/bvfi/`)
}
function api_v1_bvfi_create(payload) {
  return tervcAPI.post(`/api/v1/bvfi/`, payload)
}
function api_v1_bvfi_retrieve(payload) {
  return tervcAPI.get(`/api/v1/bvfi/${payload.id}/`)
}
function api_v1_bvfi_update(payload) {
  return tervcAPI.put(`/api/v1/bvfi/${payload.id}/`, payload)
}
function api_v1_bvfi_partial_update(payload) {
  return tervcAPI.patch(`/api/v1/bvfi/${payload.id}/`, payload)
}
function api_v1_bvfi_destroy(payload) {
  return tervcAPI.delete(`/api/v1/bvfi/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return tervcAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tervcAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tervcAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return tervcAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tervcAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tervcAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tervcAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tervcAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return tervcAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tervcAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tervcAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tervcAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tervcAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_bvfi_list,
  api_v1_bvfi_create,
  api_v1_bvfi_retrieve,
  api_v1_bvfi_update,
  api_v1_bvfi_partial_update,
  api_v1_bvfi_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
