#!/bin/bash

if [ -n "$CODESPACE_NAME" ]; then
    port=$1
    visibility=$2
    gh codespace ports visibility $port:$visibility -c $CODESPACE_NAME
fi
