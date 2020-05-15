#!/usr/bin/env bash
set -Eeuo pipefail

for f in ./test/*.carp; do
    echo $f
    carp -x --log-memory $f
    echo
done
