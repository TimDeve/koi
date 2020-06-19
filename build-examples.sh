#!/usr/bin/env bash
set -Eeuo pipefail

for f in ./examples/**/main.carp; do
    echo Building $f
    carp -b $f
done
