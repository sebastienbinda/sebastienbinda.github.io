### Response

* **Code:** 201 Created

**Headers:**

`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json;charset=UTF-8`  
`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  

**Content:**

```json
    
{
  "content" : {
    "id" : 8,
    "owner" : "default_user@regards.fr",
    "label" : "myCommand",
    "creationDate" : "2020-09-07T14:46:26.953Z",
    "percentCompleted" : 0,
    "filesInErrorCount" : 0,
    "availableFilesCount" : 0,
    "status" : "PENDING",
    "statusDate" : "2020-09-07T14:46:26.954Z",
    "waitingForUser" : false,
    "datasetTasks" : [ ]
  },
  "links" : [ ]
}
```
