# MT Audit

MT Audit runs a scheduled AWS Lambda function which scrapes our third- and first-party services and produces a report of which users have access to which systems.

## Known Issues

**Arbitrary File Write:** https://npmjs.com/advisories/1217

This package is in the dependency tree for the serverless framework and is not a security risk unless extracting user-supplied tarballs. This application is not vulnerable.