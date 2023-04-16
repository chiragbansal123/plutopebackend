## In this api,we are fetching customer data by sending the id of the customer and updating customer data
   We have used Joi for validation of data 
## APIS

### get-https://localhost:8000/customers/:id             - used for fetching the customer details through customer id
### patch-https://localhost:8000/customers/:id           - used for updating the customer detail through customer id
# How to run the project

## Clone the project
## Run node index.js

## Technology Used
### nodejs,express,mongoose,joi

## Here is the customer data

### {"_id":{"$oid":"643aff616bcce83ef111601c"},"name":"Chirag","age":{"$numberInt":"22"},"address":"Bholanath nagar","updatedAt":{"$date":{"$numberLong":"1681621150058"}}}
### {"_id":{"$oid":"643b94582bf03072a05392bb"},"name":"Saurabh","age":{"$numberInt":"32"},"address":"Pitampura,Rohini"}

### {"_id":{"$oid":"643b94a42bf03072a05392bc"},"name":"Ujjwal","age":{"$numberInt":"27"},"address":"Mohan nagar,Ghaziabad"}


**###{"_id":{"$oid":"643b94d92bf03072a05392bd"},"name":"Sunny","age":{"$numberInt":"33"},"address":"Vivek Vihar"}**

**###{"_id":{"$oid":"643b95112bf03072a05392be"},"name":"Dev","age":{"$numberInt":"40"},"address":"Surajmal Vihar Delhi"}**
