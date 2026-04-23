#!/bin/sh
set -eu

: "${YANCHANG_MODEL_API_URL:=}"
: "${YANCHANG_PATIENT_API_URL:=}"

envsubst '${YANCHANG_MODEL_API_URL} ${YANCHANG_PATIENT_API_URL}' \
  < /usr/share/nginx/html/config.template.js \
  > /usr/share/nginx/html/config.js
