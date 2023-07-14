#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use cedar_policy::frontend::{
  is_authorized, utils, validate
};

use cedar_policy::{PolicySet, Entities, Authorizer, EntityUid, Context, Request, Decision, Response};


#[napi]
struct CedarEngine {
  policies: PolicySet
}

#[napi]
impl CedarEngine {
  #[napi]
  pub fn is_authorized(check: String) -> String {
    return check;
  }
}



#[napi]
pub fn json_validate(payload: String) -> String {
  let result = validate::json_validate(payload.as_str());
  return serde_json::to_string(&result).unwrap();

}

#[napi]
pub fn json_is_authorized(payload: String) -> String {
  let result = is_authorized::json_is_authorized(payload.as_str());
  return serde_json::to_string(&result).unwrap();
}
