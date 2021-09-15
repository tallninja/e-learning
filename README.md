# KisomoView Web App

E-learning web platform for Kenyan high school students

## Instructions

### Development

Creating a stack:

```bash
export AWS_PROFILE=file-upload-user && npm run cdk-create-stack-dev

```

Destroying a stack:

```bash
export AWS_PROFILE=file-upload-user && npm run cdk-destroy-stack-dev

```

### Production

Creating a stack:

```bash
export AWS_PROFILE=file-upload-user && export NODE_ENV=production && npm run cdk-create-stack-prod

```

Destroying a stack:

```bash
export AWS_PROFILE=file-upload-user && export NODE_ENV=production && npm run cdk-destroy-stack-prod

```
