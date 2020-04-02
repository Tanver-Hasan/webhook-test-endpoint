
# Simple HTTP endpoint to test webhook

### Install serverless cli 

```
npm install -g serverless 
```

### Install and configure AWS CLI 


### Depooy to AWS  

```
serverless deploy 
```

### View logs in terminal 

```
serverless logs -f functionname
```

### Exposed Endpoints

```
POST - https://{aws_url}.amazonaws.com/hook
GET - https://{aws_url}.amazonaws.com/hook/{timer}   // timer in seconds - 10 seconds
```

### Configure AWS  HTTP API Authorizer 

```

    authorizers:
      Auth0:
        identitySource: $request.header.Authorization
        issuerUrl: {Issuer URL}
        audience:
          - {API Identifer}

```