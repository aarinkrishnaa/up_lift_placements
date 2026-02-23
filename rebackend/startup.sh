#!/bin/sh
dotnet ef database update --no-build
dotnet rebackend.dll
