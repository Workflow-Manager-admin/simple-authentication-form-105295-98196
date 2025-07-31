#!/bin/bash
cd /home/kavia/workspace/code-generation/simple-authentication-form-105295-98196/login_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

