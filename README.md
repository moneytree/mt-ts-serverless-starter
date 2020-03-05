# Typescript, Serverless Starter

Repo template for an AWS Lambda function with support for Jest, Prettier, ESLint, Commitizen and Serverless framework.

## Known Issues

**Arbitrary File Write:** https://npmjs.com/advisories/1217

This package is in the dependency tree for the Serverless framework and is not a security risk unless extracting untrusted tarballs with framework commands. This starter is not vulnerable.
